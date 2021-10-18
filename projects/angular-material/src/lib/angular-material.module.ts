import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularMaterialComponent } from './angular-material.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

const importExports = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AngularMaterialComponent
  ],
  imports: [
    CommonModule,
    importExports,
  ],
  exports: [
    AngularMaterialComponent,
    importExports
  ]
})
export class AngularMaterialModule { }
