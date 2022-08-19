import {Component} from '@angular/core';
import {Hero} from "../interface/hero";
import {SAVE_HEROES_STORAGE} from "../../const/const";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  public heroes: Hero[] = []

  constructor() {
    let heroesSetStorage: string = localStorage.getItem(SAVE_HEROES_STORAGE) || '[]';
    this.heroes = JSON.parse(heroesSetStorage);
  }
}
