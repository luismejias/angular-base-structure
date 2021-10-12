import { NgModule } from '@angular/core';
import { AngularMaterialComponent } from './angular-material.component';
import {MatSliderModule} from '@angular/material/slider';
const importExports = [
  MatSliderModule
];

@NgModule({
  declarations: [
    AngularMaterialComponent
  ],
  imports: [
    importExports,
  ],
  exports: [
    AngularMaterialComponent,
    importExports
  ]
})
export class AngularMaterialModule { }
