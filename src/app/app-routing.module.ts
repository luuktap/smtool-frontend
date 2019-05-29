import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},

{
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
},
{
  path: 'user-management',
  loadChildren: () => import('./modules/user-management/user-management.module').then(mod => mod.UserManagementModule)
},

{
  path: '**',
  redirectTo: '/dashboard'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
