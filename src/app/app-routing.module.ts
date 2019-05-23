import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'user-management',
  component: UsermanagementComponent
},
{ path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{ path: '**',   redirectTo: '/dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
