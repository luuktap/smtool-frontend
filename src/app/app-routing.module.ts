import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},

{
  path: '**',
  redirectTo: 'login'
}];

/*
{
  path: 'dashboard',
  loadChildren: './module',
},
{
  path: 'gameserver-management',
  component: GameservermanagementComponent
},
{
  path: 'user-management',
  component: UsermanagementComponent
},
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
