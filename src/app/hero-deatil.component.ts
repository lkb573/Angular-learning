import {Component} from "@angular/core";
import {Hero} from './hero';


@Component({
  selector: 'hero-detail',
  template: `
    <h1>Detail Hero</h1>
    <div *ngIf="hero">
      <h2>{{hero.name}} !!!</h2>
      <div><label>Code: </label>{{hero.id}}</div>
      <div>
        <label>Name: {{hero.name}}</label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})


export class HeroDetailComponent {
  hero: Hero;
}

