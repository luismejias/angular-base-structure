import { NgModule } from '@angular/core';
import { AngularMaterialComponent } from './angular-material.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const importExports = [
  FormsModule,
  ReactiveFormsModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AngularMaterialComponent
  ],
  imports: [
    importExports
  ],
  exports: [
    AngularMaterialComponent,
    importExports
  ]
})
export class AngularMaterialModule { }
