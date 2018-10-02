import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User('Romain', 'Bénard', 'romainbenard@cerp-rouen.fr', 'White tea and Rooibos', ['Coding', 'Learning'])
  ];
  userSubject = new Subject<User[]>();

  constructor() { }

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  adduser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
