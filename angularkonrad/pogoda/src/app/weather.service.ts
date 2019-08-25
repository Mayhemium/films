import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  private appid = 'aca9a701c39cbae0d3c6b55ccf8eb33e';
  private lat = 50;
  private lon = 20;

  getApiKey() {
    return this.appid;
  }
  getLon() {
    return this.lon;
  }
  getLat() {
    return this.lat;
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    }
  }
}
