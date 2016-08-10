import { Pipe, PipeTransform } from 'angular2/core';
import { Review } from './review.model';

@Pipe({
  name: "restaurantId",
  pure: false
})
export class RestaurantIdPipe implements PipeTransform {
  transform(input: Review[], args) {
    var desiredRestaurantId = args[0];
    return input.filter((review) => {
      return (review.restaurantId === desiredRestaurantId);
    });
  }
}
