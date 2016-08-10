import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model.ts';

@Component({
  selector: 'create-new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template:`
    <div>
    <h3>Upload Restaurant:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Specialty" class="col-sm-8 input-lg" #newSpecialty>
    <input placeholder="Address" class="col-sm-8 input-lg" #newAddress>
    <input placeholder="Cost" class="col-sm-8 input-lg" #newCost>
    <button (click)="addRestaurant(newName, newSpecialty, newAddress, newCost)" class="add-button btn-lg">Add</button>
    </div>
  `
})

export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewRestaurant = new EventEmitter();
  }
  addRestaurant(userName: HTMLInputElement, userSpecialty: HTMLInputElement, userAddress: HTMLInputElement, userCost: HTMLInputElement){
    var emission = [];
    emission.push(userName.value);
    emission.push(userSpecialty.value);
    emission.push(userAddress.value);
    emission.push(userCost.value);
    this.onSubmitNewRestaurant.emit(emission);
    userName.value = "";
    userSpecialty.value = "";
    userAddress.value = "";
    userCost.value = "";
  }
}
