import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
  name: "inCart",
  pure: false
})
export class InCartPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desiredInCart = args[0];
    return input.filter((cd) => {
      return (cd.inCart === desiredInCart);
    });
  }
}
