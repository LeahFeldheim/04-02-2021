import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import {ActivatedRoute} from '@angular/router';
import { City } from 'src/app/modules/city';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentCity: City;
  celsius: boolean;
  toggleButtonText: string
   isFavorite: boolean;

  keyword = 'name';
  
  data = [
    {
      id: "213225",
      name: 'Jerusalem'
    }
  ];

  constructor(private citiesService: CitiesService, private route: ActivatedRoute) {
    this.currentCity = {
      cityId: "213225",
      cityName: "Jerusalem",
      today: {
        date:null,
        dayName: "",
        weatherText: "",
        degree: {
          celsius: '',
          fahrenheit: ''
        },
        logoUrl: ''
      },
      weekDays:[]
    }
    this.celsius = true;
    this.toggleButtonText = '\xB0F' + '/' + '\xB0C';

    this.isFavorite = false;
 

  }

  ngOnInit() {
   
    this.isFavorite = this.getIsFavorite();
    var id=this.route.snapshot.paramMap.get("id");
    if(id){
      var id_value=id.substring(id.indexOf(":")+1,id.length);
      
    this.currentCity.cityName = this.getCityNameById(id_value);
      this.fillCityData(id_value)
    }
    else{
      // this.currentCity=this.citiesService.getTelAviv();
      this.fillCityData(this.currentCity.cityId)
    }
  }
  getCityNameById(id: string): string { 
     var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
     var results = favorites.find(obj=>{
       return obj.id===id;
     });
     
     return results.name;
 
  }
  getIsFavorite(): boolean {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
 
    if(favorites.some(obj=>obj.id===this.currentCity.cityId)===false)
    {
      return false;
    
    }
    return true;
  }


  addToFavorites() {
    
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
 
    if(favorites.some(obj=>obj.id===this.currentCity.cityId)===false)
    {
      favorites.push({ id: this.currentCity.cityId, name: this.currentCity.cityName });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("added to favorites succesfully!");
      this.isFavorite=true;
    }
    else {
     
      alert("already in favorites");
    }


  }

  removeFromFavorites(){
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
 
    if(favorites.some(obj=>obj.id===this.currentCity.cityId)===true)
    
    {
      favorites.splice(favorites.findIndex(item=> item.id===this.currentCity.cityId),1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.isFavorite=false;
      alert("removed from favorites succesfully!");
    }
    else {
     
      alert("not in favorites");
    }

  }

  toggleDegree() {
    this.celsius = !this.celsius;
  }

  async getAutocompleteCity(cityName: string) {
    var searchResults = []
    this.citiesService.getAutocompleteCity(cityName)
      .then(results => {
        for (const index in results) {
          if (results.hasOwnProperty(index)) {
            const i = results.findIndex()
            const city = results[i];
            searchResults.push({ id: city.cityId, name: city.cityName });

          }
        }
      });
    return searchResults;
  }

  getforecasts(cityID: string) {
    this.citiesService.getforecasts(cityID)
      .then(d => {
        this.currentCity.weekDays = d;
      });
  }

  async fillCityData(id) {

    this.citiesService.getCurrentCityWeather(id)
      .then(weatherResults => {

        this.currentCity.today = weatherResults;
      });

    this.citiesService.getforecasts(id)
      .then(weekDays => {
        this.currentCity.weekDays = weekDays;
      });
  }


  selectEvent(item) {

    this.currentCity.cityName = item.name;
    this.currentCity.cityId = item.id;
    this.isFavorite = this.getIsFavorite();
    this.fillCityData(item.id);
    
  }
  async onChangeSearch(val: string) {

  
    var searchResults = [];
    searchResults = await this.getAutocompleteCity(val);
    this.data = searchResults;
      
  }
}
