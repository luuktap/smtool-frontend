import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { MaterialModule } from 'src/app/material';

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [AuthLoginComponent]
})
export class AuthRoutingModule { }
