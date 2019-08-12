import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { GameServer } from 'src/app/interfaces/gameserver';
import { Service } from 'src/app/interfaces/service';

import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  GameServers: GameServer[] = [
    {
      id: 1,
      name: 'Arma 3 Sandbox',
      status: 0,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      id: 2,
      name: 'Arma 3 Wasteland',
      status: 0,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      id: 3,
      name: 'Minecraft',
      status: 1,
      playersOnline: 0,
      playersLimit: 20,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      id: 4,
      name: 'Rust',
      status: 1,
      playersOnline: 0,
      playersLimit: 16,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    },
    {
      id: 5,
      name: 'Factorio',
      status: 1,
      playersOnline: 1,
      playersLimit: 5,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00"))
    }
  ];

  Services: Service[] = [
    {
      id: 1,
      name: 'Teamspeak 3',
      status: 1,
      uptime: this.calculateUptime(new Date("2019-05-28 12:00:00")),
      custom: {
        usersOnline: 3,
        usersLimit: 20
      }
    }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService,
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

  startGameServer(server: GameServer) {
    this.notificationService.openSnackBar(`Starting ${server.name}...`, `Ok`)
    server.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      server.status = 1;
    }, 5000);
  }

  stopGameServer(server: GameServer) {
    this.notificationService.openSnackBar(`Stopping ${server.name}...`, `Ok`)
    server.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      server.status = 0;
    }, 5000);
  }

  restartGameServer(server: GameServer) {
    this.notificationService.openSnackBar(`Restarting ${server.name}...`, `Ok`)
    server.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      server.status = 1;
    }, 5000);
  }

  updateGameServer(server: GameServer) {
    this.notificationService.openSnackBar(`Updating ${server.name}...`, `Ok`)
    server.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      server.status = 1;
    }, 5000);
  }

  startService(service: Service) {
    this.notificationService.openSnackBar(`Starting ${service.name}...`, `Ok`)
    service.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      service.status = 1;
    }, 5000);
  }

  stopService(service: Service) {
    this.notificationService.openSnackBar(`Stopping ${service.name}...`, `Ok`)
    service.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      service.status = 0;
    }, 5000);
  }

  restartService(service: Service) {
    this.notificationService.openSnackBar(`Restarting ${service.name}...`, `Ok`)
    service.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      service.status = 1;
    }, 5000);
  }

  updateService(service: Service) {
    this.notificationService.openSnackBar(`Updating ${service.name}...`, `Ok`)
    service.status = 2;
    setTimeout(() => {
      this.notificationService.openSnackBar(`Task completed!`, `Ok`);
      service.status = 1;
    }, 5000);
  }

}
