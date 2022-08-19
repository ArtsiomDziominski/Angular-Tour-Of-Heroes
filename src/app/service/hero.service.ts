import {Injectable} from '@angular/core';
import {Hero} from "../components/interface/hero";
import {SAVE_HEROES_STORAGE} from "../const/const";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroes: Hero[] = [];

  constructor() {
    let heroesSetStorage: string = localStorage.getItem('heroes') || '[]';
    this.heroes = JSON.parse(heroesSetStorage);
  }

  public updateHero(heroId: number, name: string): void {
    this.heroes.forEach(hero => {
      if (hero.id === heroId) {
        hero.name = name;
      }
    })
    localStorage.setItem(SAVE_HEROES_STORAGE, JSON.stringify(this.heroes));
  }
}

