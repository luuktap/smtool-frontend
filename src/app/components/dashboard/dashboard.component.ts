import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { GameserverStatus } from 'src/app/interfaces/gameserver-status';
import { ServiceStatus } from 'src/app/interfaces/service-status';

import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  GameServers: GameserverStatus[] = [
    {
      name: 'Arma 3 Sandbox',
      online: false,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      name: 'Arma 3 Wasteland',
      online: false,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      name: 'Minecraft',
      online: true,
      playersOnline: 0,
      playersLimit: 20,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      name: 'Rust',
      online: true,
      playersOnline: 0,
      playersLimit: 16,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      name: 'Factorio',
      online: true,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    }
  ];

  Services: ServiceStatus[] = [
    {
      name: 'Teamspeak 3',
      online: true,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00")),
      custom: {
        usersOnline: 3,
        usersLimit: 20
      }
    }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.GameServers.sort((a, b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
  }

  isHandset: boolean;
  isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
    map(({ matches }) => {
      if (matches) {
        this.isHandset = true;
        return true;
      } else {
        this.isHandset = false;
        return false;
      }
    })
  )
  
  ngOnInit() {
  }

  getUptimeString(uptime) {
    if(this.isHandset) {
      let days = `${uptime.days}${uptime.days == 1 ? 'd' : 'd'}`;
      let hours = `${uptime.hours}${uptime.hours == 1 ? 'h' : 'h'}`;
      let minutes = `${uptime.minutes}${uptime.minutes == 1 ? 'm' : 'm'}`;
      return `${days}, ${hours}, ${minutes}`;
    }
    let days = `${uptime.days} ${uptime.days == 1 ? 'Day' : 'Days'}`;
    let hours = `${uptime.hours} ${uptime.hours == 1 ? 'Hour' : 'Hours'}`;
    let minutes = `${uptime.minutes} ${uptime.minutes == 1 ? 'Minute' : 'Minutes'}`;
    return `${days}, ${hours}, ${minutes}`;

    // let seconds = `${uptime.seconds} ${uptime.seconds == 1 ? 'Second' : 'Seconds'}`;
  }

  calculateUptime(upSince: Date) {
      var diff = new Date().getTime() - upSince.getTime();
      var days = Math.floor(diff / (60 * 60 * 24 * 1000));
      var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
      var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
      var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
      return { days, hours, minutes, seconds };
  }
}
