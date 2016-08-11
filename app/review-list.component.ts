import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model';
import { ReviewComponent } from './review.component';
import { NewReviewComponent } from './create-new-review.component';
import { RestaurantIdPipe } from './restaurantId.pipe';

@Component ({
  selector: 'review-list',
  inputs: ['restaurant'],
  outputs: ['passUpReviewList'],
  pipes: [RestaurantIdPipe],
  directives: [ReviewComponent, NewReviewComponent],
  template: `
  <h1>Reviews of {{restaurant.name}}</h1>
  <div class="review-output">
  <h4>Average Rating: {{restaurant.calculateAverageRating(reviewList)}} </h4>
  <h4>Average Wait Time: {{restaurant.calculateAverageWaiting(reviewList)}} </h4>
  <review-display *ngFor="#currentReview of reviewList | restaurantId:restaurant.id"
  [review]="currentReview">
  </review-display>
  </div>
  <div class="new-review">
  <create-new-review (onSubmitNewReview)="createReview(restaurant.id, $event[0], $event[1], $event[2])">
  </create-new-review>
  </div>
  `
})

export class ReviewListComponent {
  public reviewList: Review[]=[];
  public passUpReviewList: EventEmitter<Review[]>;
  constructor() {
    this.passUpReviewList = new EventEmitter();
  }
  createReview(restaurantId: number, rating: string, waitTime: string, content: string) {
    this.reviewList.push(
      new Review(restaurantId, parseInt(rating), parseInt(waitTime), content, this.reviewList.length)
    )
    this.passUpReviewList.emit(this.reviewList)
  }
}
