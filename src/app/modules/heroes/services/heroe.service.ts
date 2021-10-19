import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from '../models/heroe.model';
import  heroesMock from '../../../../assets/heroes.json';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  constructor() { }
  
  public getHeroes(): Observable<Heroe[]> {
   return of(heroesMock as Heroe[]).pipe(delay(1000));
  }
  
  public addHeroe(heroe: Heroe) {
    heroesMock.push(heroe);
    return of(heroesMock as Heroe[]).pipe(delay(1000));
  }

  public editHeroe(heroerNew: Heroe) {  
    let heroeResult = heroesMock.filter((heroe : Heroe) => {
      return heroe.id !== heroerNew.id;
    });
    heroesMock.length = 0;
    heroesMock.push(heroerNew, ...heroeResult);
    return of(heroesMock as Heroe[]).pipe(delay(1000));
  }

  public deleteHeroe(id: string) {
    let heroeResult = heroesMock.filter((heroe : Heroe) => {
      return heroe.id.toString() !== id;
    });
    heroesMock.length = 0;
    heroesMock.push( ...heroeResult);
    return of(heroesMock as Heroe[]).pipe(delay(1000));
  }
}
