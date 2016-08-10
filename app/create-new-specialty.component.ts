import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'create-new-specialty',
  outputs: ['onSubmitNewSpecialty'],
  template: `
    <div class="specialty-form">
      <h3>Create Specialty:</h3>
      <input placeholder="Specialty" class="col-sm-8 input-lg" #newSpecialty>
      <button (click)="addSpecialty(newSpecialty)" class="add-button btn-lg">Add</button>
  `
})
export class NewSpecialtyComponent {
  public onSubmitNewSpecialty: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewSpecialty = new EventEmitter();
  }
  addSpecialty(userSpecialty: HTMLInputElement){
    var emission = [];
    emission.push(userSpecialty.value);
    this.onSubmitNewSpecialty.emit(emission);
    userSpecialty.value = "";
  }
}
