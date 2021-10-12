import { AngularMaterialModule } from '@bs-angular-material';
import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';

const importsExports = [
  AngularMaterialModule
];

@NgModule({
  declarations: [
    SharedUiComponent
  ],
  imports: [
    importsExports
  ],
  exports: [
    SharedUiComponent,
    importsExports
  ]
})
export class SharedUiModule { }
