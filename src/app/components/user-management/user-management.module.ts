import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

import { UserManagementRoutingModule } from './user-management-routing.module';

import { UserManagementComponent } from './user-management.component';
import { NewUserDialog } from './new-user.dialog';
import { EditUserDialog } from './edit-user.dialog';

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
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
