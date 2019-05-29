import { Component } from '@angular/core';

import { Gameserver } from '../interfaces/gameserver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  
  GameServers: Gameserver[] = [
    {
      name: 'Factorio',
      online: true,
      playersOnline: 1,
      playersLimit: 5
    }
  ];

  constructor() {}

}
