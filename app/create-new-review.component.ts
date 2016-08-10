import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model.ts';

@Component({
  selector: 'create-new-review',
  inputs: ['review'],
  outputs: ['onSubmitNewReview'],
  template:`
    <div class="new-review">
    <h3>Upload Review:</h3>
    <input type="number" placeholder="Rating" class="col-sm-8 input-lg" #newRating>
    <input type="number" placeholder="WaitTime" class="col-sm-8 input-lg" #newWaitTime>
    <input placeholder="Content" class="col-sm-8 input-lg" #newContent>
    <button (click)="addReview(newRating, newWaitTime, newContent)" class="add-button btn-lg">Add</button>
    </div>
  `
})

export class NewReviewComponent {
  public onSubmitNewReview: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewReview = new EventEmitter();
  }
  addReview(userRating: HTMLInputElement, userWaitTime: HTMLInputElement, userContent: HTMLInputElement){
    var emission = [];
    emission.push(userRating.value);
    emission.push(userWaitTime.value);
    emission.push(userContent.value);
    this.onSubmitNewReview.emit(emission);
    userRating.value = "";
    userWaitTime.value = "";
    userContent.value = "";
  }
}
