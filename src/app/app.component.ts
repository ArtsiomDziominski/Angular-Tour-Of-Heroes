import {Component} from '@angular/core';
import {Hero} from "./components/interface/hero";
import {SAVE_HEROES_STORAGE} from "./const/const";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'Tour of Hero';
  public heroes: Hero[] = [
    {id: 1, name: 'Jim'},
    {id: 2, name: 'Dwayne'},
    {id: 3, name: 'Martin'},
    {id: 4, name: 'Edward'},
    {id: 5, name: 'Mads'},
    {id: 6, name: 'Will'},
  ]

  constructor() {
    localStorage.setItem(SAVE_HEROES_STORAGE, JSON.stringify(this.heroes));
  }
}
