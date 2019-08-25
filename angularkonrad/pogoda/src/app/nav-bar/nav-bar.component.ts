import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  goToLink( layer: string) {
    window.open('https://openweathermap.org/weathermap?basemap=map&cities=false&layer=' +
    layer + '&lat=' + this.weatherService.getLat() + '&lon=' + this.weatherService.getLon() + '&zoom=7');
  }

}
