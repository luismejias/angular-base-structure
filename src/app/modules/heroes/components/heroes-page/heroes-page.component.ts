import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Heroe } from '../../models/heroe.model';
import { HeroeService } from '../../services/heroe.service';
@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit, OnDestroy {
  originalDataSource = new MatTableDataSource<any>([]);
  loadingData: boolean = true;
  dataSource = new MatTableDataSource<any>([]);
  subscription = new Subscription();
  searchForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private heroeService: HeroeService
  ) { 
    this.searchForm = this.fb.group({
      searchField: [''],
    });
  }

  ngOnInit(): void {
    this.searchFieldChanges();
    this.getHeroes();
  }

  searchFieldChanges() {
   
    
    this.searchForm.get('searchField').valueChanges.subscribe((value) => {
      this.filterHeroes(value);
      console.log('searchFieldChanges',value );
    });
  }

  getHeroes() {
    this.loadingData = true;
    this.subscription.add(
      this.heroeService.getHeroes()
        .subscribe((res: Heroe[]) => {
          this.dataSource.data = res;
          this.originalDataSource.data = res;
          setTimeout(() => {
            this.loadingData = false;
          }, 2000);
        })
    )
  }

  filterHeroes(searching: string = ''): void {
    this.dataSource.data = this.originalDataSource.data.filter((heroe) => {
       return (
         heroe.name
           .toLowerCase()
           .includes(searching.toLowerCase() || '')
       );
     });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
