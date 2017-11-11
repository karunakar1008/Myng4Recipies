import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; // npm install rxjs
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl = 'api/heroes';

  // getHeroes(): Hero[] {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return HEROES;
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
      // Todo: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
  //  return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
