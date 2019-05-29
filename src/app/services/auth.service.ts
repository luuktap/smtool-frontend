import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User = null;

  constructor(private http: HttpClient) {
    // this.requestUserData().subscribe(
    //   (data: User) => {
    //     this.user = {
    //       username: data.username
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // })
  }

  requestUser() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${env.backendURL}/user/authenticated`, {
          // observe: 'body',
          withCredentials: true,
          headers: new HttpHeaders().append('Content-Type', 'application/json')
        })
        .subscribe(
            (data: User) => {
              this.user = {
                username: data.username
              };
              resolve(true);
            },
            (error: HttpErrorResponse) => {
              console.log(error);
              resolve(true);
            }
          )
    })
    // return this.http.get('http://localhost:3000/user/authenticated', {
    //   withCredentials: true,
    //   headers: new HttpHeaders().append('Content-Type', 'application/json')
    // })
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    // return this.user ? true : false;
    return true;
  }

}
