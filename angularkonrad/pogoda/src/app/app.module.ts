import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CitySearchComponent } from './city-search/city-search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitySearchComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
