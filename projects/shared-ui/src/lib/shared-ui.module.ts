import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@bs-angular-material';
import { SharedUiComponent } from './shared-ui.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ChangeToUppercaseDirective } from './directives/change-to-uppercase.directive';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';

const importsExports = [
  SharedUiComponent,
  HeaderComponent,
  MenuComponent,
  NoDataFoundComponent,
  ChangeToUppercaseDirective
  
];
@NgModule({
  declarations: [importsExports],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule    
  ],
  exports: [AngularMaterialModule, importsExports],
  providers: []
})
export class SharedUiModule { }
