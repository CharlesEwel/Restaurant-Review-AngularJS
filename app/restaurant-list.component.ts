import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './create-new-restaurant.component';
import { NewSpecialtyComponent } from './create-new-specialty.component';


@Component ({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent, NewSpecialtyComponent],
  template: `
  <restaurant-display *ngFor="#currentRestaurant of restaurantList"
    (click)="restaurantClicked(currentRestaurant)"
    [selected]="currentRestaurant===selectedRestaurant"
    [restaurant]="currentRestaurant">
  </restaurant-display>
  <create-new-restaurant (onSubmitNewRestaurant)="createRestaurant($event[0],$event[1], $event[2], $event[3])">
  </create-new-restaurant>
  <create-new-specialty (onSubmitNewSpecialty)="createSpecialty($event[0])">
  </create-new-specialty>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public specialtyList: string[] = ["BBQ", "American", "Cajun", "Mexican"];
  public selectedRestaurant: Restaurant;
  createRestaurant(name: string, specialty: string, address: string, cost: string) {
    this.restaurantList.push(
      new Restaurant(name, specialty, address, cost, this.restaurantList.length)
    )
  }
  createSpecialty(specialty: string) {
    this.specialtyList.push(specialty)
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
  }
}
