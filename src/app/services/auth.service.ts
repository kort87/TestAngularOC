import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  authSubject = new Subject<boolean>();

  emitAuthentication() {
    this.authSubject.next(this.isAuth);
  }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
        this.emitAuthentication();
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.emitAuthentication();
  }

  constructor() { }
}
