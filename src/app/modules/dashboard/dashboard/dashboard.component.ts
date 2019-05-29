import { Component, OnInit } from '@angular/core';

import { Gameserver } from '../../../interfaces/gameserver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  GameServers: Gameserver[] = [
    {
      name: 'Arma 3 Sandbox',
      online: false,
      playersOnline: 1,
      playersLimit: 5
    },
    {
      name: 'Arma 3 Wasteland',
      online: false,
      playersOnline: 1,
      playersLimit: 5
    },
    {
      name: 'Minecraft',
      online: true,
      playersOnline: 0,
      playersLimit: 20
    },
    {
      name: 'Rust',
      online: true,
      playersOnline: 0,
      playersLimit: 16
    },
    {
      name: 'Factorio',
      online: true,
      playersOnline: 1,
      playersLimit: 5
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
