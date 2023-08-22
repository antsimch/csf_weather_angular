import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { Weather } from 'src/app/weather';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  sub$!: Subscription
  weather: Weather = {
    description: '',
    icon: '',
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    windDegree: 0
  }

  city!: string

  constructor(
    private route: ActivatedRoute,
    private weatherSvc: WeatherService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city']
    this.sub$ = this.weatherSvc
        .getWeather(this.city.replace(' ', ''))
        .subscribe(
          (result: any) => {
            this.weather.description = result.weather[0].main 
                + ', ' + result.weather[0].description
            this.weather.icon = result.weather[0].icon
            this.weather.temperature = result.main.temp
            this.weather.humidity = result.main.humidity
            this.weather.windSpeed = result.wind.speed
            this.weather.windDegree = result.wind.deg
          }
        )
  }

  goBack() {
    this.location.back();
  }
}
