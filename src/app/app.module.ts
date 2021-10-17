import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@bs-shared-ui';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
