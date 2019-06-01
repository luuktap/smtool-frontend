import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';

import { UserManagementComponent } from './user-management/user-management.component';
import { NewUserDialog } from './user-management/new-user.dialog';
import { EditUserDialog } from './user-management/edit-user.dialog';

@NgModule({
  declarations: [
    UserManagementComponent,
    NewUserDialog,
    EditUserDialog
  ],
  entryComponents: [
    UserManagementComponent,
    NewUserDialog,
    EditUserDialog
  ],
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
