import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component ({
  selector: 'edit-restaurant',
  inputs: ['restaurant', 'specialtyList'],
  template: `
    <label> Edit Restaurant:</label>
    <input [(ngModel)]="restaurant.name" class="col-sm-8 input-lg restaurant-form"><br>
    <label> Edit Specialty:</label>
    <select class="input-lg" [(ngModel)]="restaurant.specialty">
      <option *ngFor="#currentSpecialty of specialtyList">{{currentSpecialty}}</option>
    </select><br>
    <label> Edit Address:</label>
    <input [(ngModel)]="restaurant.address" class="col-sm-8 input-lg restaurant-form"><br>
    <label> Edit Price:</label>
    <input [(ngModel)]="restaurant.cost" class="col-sm-8 input-lg restaurant-form"><br>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  public specialtyList: string[];
}
