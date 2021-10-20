import { Routes } from '@angular/router';
// import { AuthGuard } from './auth/auth.guard';
export const appRoutes: Routes = [
  {
    path: 'app',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./app.module`).then((module) => module.AppModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import(`./modules/login/login.module`).then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'heroes',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./modules/heroes/heroes.module`).then(
        (module) => module.HeroesModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
