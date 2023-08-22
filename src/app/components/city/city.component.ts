import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

  cities: string[] = [ 
    'Singapore', 
    'Penang', 
    'Tokyo', 
    'Bangkok', 
    'Hong Kong', 
    'Beijing'
  ]

  addToList(city: string) {
    this.cities.push(city)
  }
}
