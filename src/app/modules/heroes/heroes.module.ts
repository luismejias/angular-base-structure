import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { SharedUiModule } from '@bs-shared-ui';
import { HeroeService } from './services/heroe.service';



@NgModule({
  declarations: [
    HeroesTableComponent,
    HeroesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    SharedUiModule
  ],
  providers: [HeroeService]
})
export class HeroesModule { }
