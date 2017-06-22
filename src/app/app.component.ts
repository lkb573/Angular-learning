import { Component } from '@angular/core';
import {Hero} from "./hero";


const HEROES: Hero[] = [
  { id: 1, name: 'SPIDER MAN' },
  { id: 2, name: 'Iron MAN' },
  { id: 3, name: 'Black Widow' },
  { id: 4, name: 'THOR' },
  { id: 5, name: 'Captain America' },
  { id: 6, name: 'HULK' },
  { id: 7, name: 'Scarlett Witch' },
  { id: 8, name: 'Dr.Strange' },
  { id: 9, name: 'VISION' },
  { id: 10, name: 'ANTS MAN' }
];


@Component({
  selector: 'hero-list',
  template: `
    <h2>My Heroes</h2>
    
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero">        <!--property binding-->
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
        
    <hero-detail></hero-detail>
  `,

  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})


export class AppComponent {
  title = 'Hero is Comming';

  /*hero: Hero = {
    id: 1,
    name: 'Spider MAN'
  };*/

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
