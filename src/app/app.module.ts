import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TempnowComponent } from './components/tempnow/tempnow.component';
import { TempddaysComponent } from './components/tempddays/tempddays.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TempnowComponent,
    TempddaysComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    MatAutocompleteModule,
    StorageServiceModule 
   
  ],
  providers: [HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
