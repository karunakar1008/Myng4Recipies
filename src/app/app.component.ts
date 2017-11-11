import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// Controller
@Component({
  selector: 'app-root', // app-root is a partial section in a view which contains all html defined in the html page 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Viewodel and initializing model
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero;
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.hero = hero;
    this.selectedHero = hero;
  }
}

