import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedUiModule } from '@bs-shared-ui';
import { LoginPageComponent } from './modules/login/components/login-page/login-page/login-page.component';
import { DashboardPageComponent } from './modules/dashboard/components/dashboard-page/dashboard-page.component';
import { DashboardTableComponent } from './modules/dashboard/components/dashboard-table/dashboard-table.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    DashboardTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
