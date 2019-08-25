
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'current/:cityname', component: CurrentWeatherComponent},
  {path: '', component: CurrentWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
