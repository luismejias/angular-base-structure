import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs/dist/types';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private httpClient: HttpClient) { }
  
  public getHeroes(): Observable<Heroe[]> {
   return this.httpClient.get<Heroe[]>('assets/mocks/heroes.mock.json');
  }
}
