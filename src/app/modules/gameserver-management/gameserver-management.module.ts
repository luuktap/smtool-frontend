import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';

import { GameserverManagementComponent } from './gameserver-management/gameserver-management.component';

@NgModule({
  declarations: [GameserverManagementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: GameserverManagementComponent }
    ])
  ]
})
export class GameserverManagementModule { }
