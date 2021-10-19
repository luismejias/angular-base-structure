import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { SharedUiModule } from '@bs-shared-ui';
import { HeroeService } from './services/heroe.service';
import { SaveHeroeComponent } from './components/save-heroe/save-heroe.component';
import { EditHeroeComponent } from './components/edit-heroe/edit-heroe.component';
import { DeleteHeroeComponent } from './components/delete-heroe/delete-heroe.component';



@NgModule({
  declarations: [
    HeroesTableComponent,
    HeroesPageComponent,
    SaveHeroeComponent,
    EditHeroeComponent,
    DeleteHeroeComponent
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
