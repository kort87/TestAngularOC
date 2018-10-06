import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private STATUS_ETEINT = 'éteint';
  private STATUS_ALLUME = 'allumé';

  appareilSubject = new Subject<any[]>();
  private appareils = [];

  constructor(private httpClient: HttpClient) { }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => s.id === id
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = this.STATUS_ALLUME;
    }
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = this.STATUS_ETEINT;
    }
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = this.STATUS_ALLUME;
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = this.STATUS_ETEINT;
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
  }

  getStatusAllume() {
    return this.STATUS_ALLUME;
  }

  getStatusEteint() {
    return this.STATUS_ETEINT;
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareilObject);
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://rbetestoc.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => console.log('Enregistrement terminé!'),
        (error) => console.log('Une erreur est survenue : ' + error)
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://rbetestoc.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Une erreur est survenue sur le get() : ' + error);
        }
      );
  }
}
