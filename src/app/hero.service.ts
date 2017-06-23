import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";



@Injectable()
export class HeroService{

  getHeroes(): Hero[]{
    return HEROES;
  }

  getHero(id: number): Hero {
    return this.getHeroes().find(function(hero) {
      return hero.id === id;
    })

    //equal code

    /*return this.getHeroes().find(function (hero) {
      return hero.id === id;
    });*/
  }
}

