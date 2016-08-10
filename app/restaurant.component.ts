import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant', 'selected'],
  template: `
  <div>
  <label>{{ restaurant.name }}</label>
  <label *ngIf="selected">| {{ restaurant.specialty}} | {{ restaurant.address }} | {{ restaurant.cost }}</label>
  </div>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;

}
