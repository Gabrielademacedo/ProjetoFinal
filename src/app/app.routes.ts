import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { AuthGuard } from './guards/auth-guard';
import { IndexPage } from './pages/index-page/index-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome',
    component: Welcome,
    canActivate: [AuthGuard],
  },
];
