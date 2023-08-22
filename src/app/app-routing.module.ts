import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: '', component: CityComponent },
  { path: 'weather/:city', component: WeatherComponent },
  { path: '**', component: CityComponent, pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
