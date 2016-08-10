import { Component } from 'angular2/core';
import { Cd } from './cd.model';
import { CdListComponent } from './cd-list.component';
import { Cart } from './cart.component';

@Component({
  selector: 'my-app',
  directives: [CdListComponent, Cart],
  template: `
    <h1>Epicodus Music Emporium</h1>
    <h2>For Sale</h2>
    <cd-list [cdList]= "cds">
    </cd-list>
    <h2>My Cart</h2>
    <cart [cdList]= "cds">
    </cart>
  `
})

export class AppComponent {
  public cds: Cd[];
  constructor() {
    this.cds = [
      new Cd("Led Zeppelin", "IV", 15, "classic rock", 0),
      new Cd("David Bowie", "Aladdin Sane", 20, "classic rock", 1),
      new Cd("Ella Fitzgerald", "Greatest Hits", 15, "blues", 2),
      new Cd("Dr. Dre", "2001", 15, "hip-hop", 3)
    ]
  }
}
