import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

  constructor() { }
}
