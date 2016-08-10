import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
  name: "artist",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desiredArtist = args[0];
    if(desiredArtist === "all") {
      return input;
    } else {
      return input.filter((cd) => {
        return (cd.artist === desiredArtist);
      });
    }
  }
}
