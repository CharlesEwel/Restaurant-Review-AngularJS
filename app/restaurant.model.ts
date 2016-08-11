export class Restaurant {

  constructor(public name: string, public specialty: string, public address: string, public cost: string, public id: number) {

  }

  calculateAverageRating(reviewList){
    var numberOfReviews: number = 0;
    var sum: number = 0;
    var restaurantId = this.id
    reviewList.forEach(function(review) {
      var rating: number = review.rating;
      if(review.restaurantId===restaurantId) {
        sum = sum + rating;
        numberOfReviews++;
      }
    });
    if(numberOfReviews>0){
      return (sum/numberOfReviews).toString()
    } else {
      return "N/A"
    }
  }

  calculateAverageWaiting(reviewList){
    var numberOfReviews: number = 0;
    var sum: number = 0;
    var restaurantId = this.id
    reviewList.forEach(function(review) {
      var waitTime: number = review.waitTime;
      if(review.restaurantId===restaurantId) {
        sum = sum + waitTime;
        numberOfReviews++;
      }
    });
    if(numberOfReviews>0){
      return (sum/numberOfReviews).toString()
    } else {
      return "N/A"
    }
  }
}
