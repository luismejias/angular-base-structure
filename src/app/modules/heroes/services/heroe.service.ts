import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from '../models/heroe.model';
import  heroesMock from 'src/heroes.json';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  constructor() { }
  
  public getHeroes(): Observable<Heroe[]> {
   return of(heroesMock as Heroe[]).pipe(delay(2000));
  }

 
  public addHeroe(heroe: Heroe) {
    heroesMock.push(heroe);
  }

  public editHeroe(heroerNew: Heroe) {
    let heroeResult = heroesMock.filter((heroe : Heroe) => {
      return heroe.id !== heroerNew.id;
    });
    heroesMock.length = 0;
    heroesMock.push(heroerNew, ...heroeResult);
  }

  public deleteHeroe(id: string) {
    let heroeResult = heroesMock.filter((heroe : Heroe) => {
      return heroe.id.toString() !== id;
    });
    heroesMock.length = 0;
    heroesMock.push( ...heroeResult);
  }
}
