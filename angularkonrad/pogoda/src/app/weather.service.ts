import { CurrentWeather } from './weather.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  lat = 50.0854642;
  lon = 19.9285442;

  private appid = 'aca9a701c39cbae0d3c6b55ccf8eb33e';

  getApiKey() {
    return this.appid;
  }

  getCurrentWeather(city) {
    if (city === '') {
        return this.http.get<CurrentWeather>('http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' +
        this.lat + '&lon=' + this.lon + '&appid=' + this.appid);
    }
    return this.http.get<CurrentWeather>('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + '&appid=' + this.appid);
  }
}


export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
