import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {Review} from './review.model';

// restaurant.calculateAverageRating(reviewList), restaurant.calculateAverageWaiting(reviewList),

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Restaurant[], args){
    var desiredSortVariable = parseInt(args[0]);
    var reviewList = args[1];
    var pricedRestaurants = [];
    input.forEach(function(restaurant){
      pricedRestaurants.push([restaurant.id, 0, 1 restaurant]);
    });
    pricedRestaurants.sort(function (a, b) {
    if (a[desiredSortVariable] > b[desiredSortVariable]) {
      return 1;
    }
    if (a[desiredSortVariable] < b[desiredSortVariable]) {
      return -1;
    }
    return 0;
    });
    var output = [];
    pricedRestaurants.forEach(function(priceRestaurantPair){
      output.push(priceRestaurantPair[3]);
    });
    return output;
  }
}
