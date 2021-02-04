import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAutoCompleteResponse, IWeatherResponse } from './models/temp.model';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
 
  constructor(private http:HttpClient) {

  }
  
  public getAutoComplete(value: string): Observable<any[]> {
    debugger;
    return this.http.get<IAutoCompleteResponse[]>(  'https://dataservice.accuweather.com/locations/v1/cities/autocomplete', {
      params: {
        apikey: 'cDA7HdtEzA1vhdDTMfIcJ8AtWxjNdl97',
        q: value
      }
    })
  }
  public getCurrentWeather(locationKey: number): Observable<any[]> {
    debugger;
    return this.http.get<IWeatherResponse[]>('http://dataservice.accuweather.com/locations/v1/search' + locationKey, {
      params:{
        apikey: 'cDA7HdtEzA1vhdDTMfIcJ8AtWxjNdl97'
      }
    })
  }
 public async gettemp5days(){
   const url = '${http://dataservice.accuweather.com/locations/v1/cities/autocomplete}';
  return  this.http.get(url);


 }
 
}
