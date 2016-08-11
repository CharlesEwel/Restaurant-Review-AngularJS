import { Component } from 'angular2/core';
import { Review } from './review.model';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './create-new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { NewSpecialtyComponent } from './create-new-specialty.component';
import { SpecialtyPipe } from './specialty.pipe';
import { SortPipe } from './sort.pipe';
import { ReviewListComponent} from './review-list.component';

@Component ({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent, EditRestaurantComponent, NewSpecialtyComponent, ReviewListComponent],
  pipes: [SpecialtyPipe, SortPipe],
  template: `
  <div class="select-rest">
  <select (change)="onSpecialtyChange($event.target.value)" class="filter input-lg show-all">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#currentSpecialty of specialtyList">{{currentSpecialty}}</option>
  </select>
  </div>
  <div class="rest-display">
  <restaurant-display *ngFor="#currentRestaurant of restaurantList | specialty:filterSpecialty"
    (click)="restaurantClicked(currentRestaurant)"
    [selected]="currentRestaurant===selectedRestaurant"
    [restaurant]="currentRestaurant">
  </restaurant-display>
  </div>
  <div class="new-rest">
  <create-new-restaurant (onSubmitNewRestaurant)="createRestaurant($event[0],$event[1], $event[2], $event[3])" [specialtyList]=specialtyList>
  </create-new-restaurant>
  </div>
  <div class="create-specialty">
  <create-new-specialty (onSubmitNewSpecialty)="createSpecialty($event[0])">
  </create-new-specialty>
  </div>
  <div class="review-rest">
  <review-list *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"
  (passUpReviewList)="refreshReviewList($event)">
  </review-list>
  </div>
  <div class="edit-rest">
  <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [specialtyList]=specialtyList>
  </edit-restaurant>
  </div>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public specialtyList: string[] = ["BBQ", "American", "Cajun", "Mexican"];
  public selectedRestaurant: Restaurant;
  public filterSpecialty: string = "all";
  public reviewList: Review[] =[];
  public filterSort = [0];
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
 refreshReviewList(newReviewList) {
   this.reviewList = newReviewList;
   this.filterSort=[0, newReviewList]
 }
}
