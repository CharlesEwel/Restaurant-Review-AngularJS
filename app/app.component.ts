import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';


@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <h1>Restaurant Review</h1>
    <restaurant-list [restaurantList]= "restaurants">
    </restaurant-list>

  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor() {
    this.restaurants = [
      new Restaurant("Reo's Ribs", "BBQ", "4211-4225 NE Sandy Blvd, Portland, OR 97213" , "moderate", 0),
      new Restaurant("RingSide", "American", "2165 W Burnside St, Portland, OR 97210", "expensive", 1),
      new Restaurant("Le Bistro Montage", "Cajun", "301 SE Morrison St, Portland, OR 97214", "moderate", 2),
      new Restaurant("Maya's Taqueria", "Mexican", "1000 SW Morrison St, Portland, OR 97205", "cheap", 3)
    ]
  }
}
