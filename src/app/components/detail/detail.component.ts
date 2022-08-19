import {Component} from '@angular/core';
import {Hero} from "../interface/hero";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {HeroService} from "../../service/hero.service";
import {SAVE_HEROES_STORAGE} from "../../const/const";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public heroes: Hero[] = [];
  public hero?: Hero;
  public heroId: number;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private heroService: HeroService,) {
    let heroesSetStorage: string = localStorage.getItem(SAVE_HEROES_STORAGE) || '[]';
    this.heroes = JSON.parse(heroesSetStorage);
    this.heroId = Number(this.route.snapshot.params['id']);
    this.hero = this.heroes.find(hero => hero.id === this.heroId);
  }

  public goBack(): void {
    this.location.back();
  }

  public saveHero(name: string): void {
    this.heroService.updateHero(this.heroId, name);
    this.goBack();
  }
}
