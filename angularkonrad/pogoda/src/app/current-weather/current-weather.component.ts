import { WeatherService, CurrentWeather } from './../weather.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  city = '';
  data: CurrentWeather = {
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [{
      id: 0,
      main: '',
      description: '',
      icon: ''
    }],
    base: '',
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: '',
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0
  };

  constructor(private activatedRoute: ActivatedRoute, private weatherService: WeatherService) {
    activatedRoute.params.subscribe(params => {
      if (params.cityname) {
        this.city = params.cityname;
      }
      this.weatherService.getCurrentWeather(this.city).subscribe((currentWeather) => {
        weatherService.lat = currentWeather.coord.lat;
        weatherService.lon = currentWeather.coord.lon;
        this.data = currentWeather;
        console.log(this.data)
      }, err => {
        if (err.status === 404) {
          alert('City does not exist!!!');
        }
      });
    });
  }
}
