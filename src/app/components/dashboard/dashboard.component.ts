import {Component} from '@angular/core';
import {Hero} from "../interface/hero";
import {SAVE_HEROES_STORAGE} from "../../const/const";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public heroes: Hero[] = []

  constructor() {
    let heroesSetStorage: string = localStorage.getItem(SAVE_HEROES_STORAGE) || '[]';
    this.heroes = JSON.parse(heroesSetStorage);
  }
}
