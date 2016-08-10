import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'review-display',
  inputs: ['review'],
  template: `
  <div>
  <h2>Rating: {{ review.rating }} Wait Time: {{review.waitTime}}</h2>
  <p>{{review.content}}</p>
  </div>
  `
})

export class ReviewComponent {
  public review: Review;
}
