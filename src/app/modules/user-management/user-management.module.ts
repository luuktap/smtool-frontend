import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';

import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: UserManagementComponent }
    ])
  ]
})
export class UserManagementModule { }
