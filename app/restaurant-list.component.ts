import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './create-new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { NewSpecialtyComponent } from './create-new-specialty.component';
import { SpecialtyPipe } from './specialty.pipe';
import { ReviewListComponent} from './review-list.component';

@Component ({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent, EditRestaurantComponent, NewSpecialtyComponent, ReviewListComponent],
  pipes: [SpecialtyPipe],
  template: `
  <select (change)="onSpecialtyChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#currentSpecialty of specialtyList">{{currentSpecialty}}</option>
  </select>
  <restaurant-display *ngFor="#currentRestaurant of restaurantList | specialty:filterSpecialty"
    (click)="restaurantClicked(currentRestaurant)"
    [selected]="currentRestaurant===selectedRestaurant"
    [restaurant]="currentRestaurant">
  </restaurant-display>
  <create-new-specialty (onSubmitNewSpecialty)="createSpecialty($event[0])">
  </create-new-specialty>
  <create-new-restaurant (onSubmitNewRestaurant)="createRestaurant($event[0],$event[1], $event[2], $event[3])" [specialtyList]=specialtyList>
  </create-new-restaurant>
  <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [specialtyList]=specialtyList>
  </edit-restaurant>
  <review-list *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant">
  </review-list>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public specialtyList: string[] = ["BBQ", "American", "Cajun", "Mexican"];
  public selectedRestaurant: Restaurant;
  public filterSpecialty: string = "all";
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
  onSpecialtyChange(filterOption) {
   this.filterSpecialty = filterOption;
 }
}
