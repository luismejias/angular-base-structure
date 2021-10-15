import { AngularMaterialModule } from '@bs-angular-material';
import { NgModule } from '@angular/core';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

const COMPONENTS = [ SelectComponent, CheckboxComponent, InputComponent ]
@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    AngularMaterialModule,
    CommonModule
  ],
  exports: [
    AngularMaterialModule,
    COMPONENTS
  ]
})
export class SharedUiModule { }
