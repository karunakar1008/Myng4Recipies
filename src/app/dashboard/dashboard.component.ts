import { Component, OnInit } from '@angular/core';
import { Hero } from '../../app/hero';
import { HeroService } from '../../app/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }
heroes: Hero[];
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
   //  this.heroService.getHeroes().slice(1, 5);

   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
