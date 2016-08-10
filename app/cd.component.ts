import { Component } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs: ['cd'],
  template: `
  <div>
  <input *ngIf="cd.inCart" type="checkbox" checked (click)="toggleCart(false)"/>
  <input *ngIf="!cd.inCart" type="checkbox" (click)="toggleCart(true)"/>
  <label>{{ cd.artist }} | {{ cd.title}} | {{ cd.price }} | {{ cd.genre }}</label>
  </div>
  `
})

export class CdComponent {
  public cd: Cd;
  toggleCart(setState: boolean){
    this.cd.inCart=setState;
  }
}
