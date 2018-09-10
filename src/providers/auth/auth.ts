// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User {
  name: string;
  role: number;
}


@Injectable()
export class AuthProvider {

  currentUser: User;

  constructor() {
  }


  // login function
  login(name: string, pw: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if(name === 'admin' && pw === 'admin'){
        this.currentUser = {
          name: name,
            role: 0
        };
        resolve(true);
      } else if (name === 'user' && pw === 'user'){
        this.currentUser = {
          name: name,
            role: 1
        };
        resolve(true);
      } else {
        resolve(false);
      }
      });
  }

  // is logged in?
  isLoggedIn() {
    return this.currentUser != null;
  }

  // is admin ?
  isAdmin() {
    return this.currentUser.role === 0;
  }

  // log out
  logout() {
    this.currentUser = null;
  }
}
