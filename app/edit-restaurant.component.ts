import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component ({
  selector: 'edit-restaurant',
  inputs: ['restaurant', 'specialtyList'],
  template: `
    <div class="container">
      <h3> Edit Restaurant:</h3>
      <input [(ngModel)]="restaurant.name" class="col-sm-8 input-lg restaurant-form">
      <h4> Edit Specialty:</h4>
      <select class="input-lg" [(ngModel)]="restaurant.specialty">
        <option *ngFor="#currentSpecialty of specialtyList">{{currentSpecialty}}</option>
      </select>
      <h4> Edit Address:</h4>
      <input [(ngModel)]="restaurant.address" class="col-sm-8 input-lg restaurant-form">
      <h4> Edit Price:</h4>
      <input [(ngModel)]="restaurant.cost" class="col-sm-8 input-lg restaurant-form">
    </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  public specialtyList: string[];
}
