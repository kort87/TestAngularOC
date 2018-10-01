import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private STATUS_ETEINT = 'éteint';
  private STATUS_ALLUME = 'allumé';
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: this.STATUS_ETEINT
    },
    {
      id: 2,
      name: 'Four',
      status: this.STATUS_ALLUME
    },
    {
      id: 3,
      name: 'PC',
      status: this.STATUS_ETEINT
    }
  ];

  constructor() { }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => s.id === id
    );
    return appareil;
  }
  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = this.STATUS_ALLUME;
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = this.STATUS_ETEINT;
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = this.STATUS_ALLUME;
  }

  switchOffOne(i: number) {
    this.appareils[i].status = this.STATUS_ETEINT;
  }

  getStatusAllume() {
    return this.STATUS_ALLUME;
  }

  getStatusEteint() {
    return this.STATUS_ETEINT;
  }
}
