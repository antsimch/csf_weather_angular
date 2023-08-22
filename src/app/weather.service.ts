import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly url = 'http://localhost:8080/api/weather'

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const params = new HttpParams()
        .set("city", city)

    console.log(params)
    return this.http.get<Weather>(this.url, { params })
  }
}
