import { Component } from 'angular2/core';
import { Cd } from './cd.model';
import { CdComponent } from './cd.component';
import { ArtistPipe } from './artist.pipe';
import { GenrePipe } from './genre.pipe';
import { InCartPipe } from './in-cart.pipe'

@Component ({
  selector: 'cd-list',
  inputs: ['cdList'],
  directives: [CdComponent],
  pipes: [ArtistPipe, GenrePipe, InCartPipe],
  template: `
  <select (change)="onArtistChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option>Led Zeppelin</option>
    <option>David Bowie</option>
    <option>Ella Fitzgerald</option>
    <option>Dr. Dre</option>
  </select>
  <select (change)="onGenreChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option>classic rock</option>
    <option>blues</option>
    <option>hip-hop</option>
  </select>
  <cd-display *ngFor="#currentCd of cdList | artist:filterArtist | genre:filterGenre | inCart:filterCart"
    [cd]="currentCd">
  </cd-display>
  `
})

export class CdListComponent {
  public cdList: Cd[];
  public filterArtist: string ="all";
  public filterGenre: string ="all";
  public filterCart: boolean = false;

  onGenreChange(filterOption){
    this.filterGenre = filterOption;
  }

  onArtistChange(filterOption){
    this.filterArtist = filterOption;
  }
}
