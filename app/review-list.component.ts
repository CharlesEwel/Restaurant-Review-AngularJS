import { Component } from 'angular2/core';
import { Review } from './review.model';
import { ReviewComponent } from './review.component';
import { NewReviewComponent } from './create-new-review.component';
import { RestaurantIdPipe } from './restaurantId.pipe';

@Component ({
  selector: 'review-list',
  inputs: ['restaurant'],
  pipes: [RestaurantIdPipe],
  directives: [ReviewComponent, NewReviewComponent],
  template: `
  <h1>Reviews of {{restaurant.name}}</h1>
  <h4>Average Rating: {{calculateAverageRating(restaurant)}} </h4>
  <review-display *ngFor="#currentReview of reviewList | restaurantId:restaurant.id"
  [review]="currentReview">
  </review-display>
  <create-new-review (onSubmitNewReview)="createReview(restaurant.id, $event[0], $event[1], $event[2])">
  </create-new-review>
  `
})

export class ReviewListComponent {
  public reviewList: Review[]=[];
  createReview(restaurantId: number, rating: string, waitTime: string, content: string) {
    this.reviewList.push(
      new Review(restaurantId, parseInt(rating), parseInt(waitTime), content, this.reviewList.length)
    )
  }
  calculateAverageRating(restaurant){
    var numberOfReviews: number = 0;
    var sum: number = 0;
    this.reviewList.forEach(function(review) {
      var rating: number = review.rating;
      if(review.restaurantId===restaurant.id) {
        sum = sum + rating;
        numberOfReviews++;
      }
    });
    if(numberOfReviews>0){
      return sum/numberOfReviews
    } else {
      return 0
    }
  }
}
