import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  isAuth = false;
  authSubscription: Subscription;

  secondes: number;
  counterSubscription: Subscription;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => this.secondes = value,
      (error) => console.log('An error occured! ' + error),
      () => console.log('Observable complete!')
    );
    this.authSubscription = this.authService.authSubject.subscribe(
      (isAuth: boolean) => this.isAuth = isAuth
    );
    this.authService.emitAuthentication();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
    // this.authSubscription.unsubscribe();
  }

}
