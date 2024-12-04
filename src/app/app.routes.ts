import { Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then(m => m.DataRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then(m => m.InputRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginRoutingModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupRoutingModule)
  },
];
