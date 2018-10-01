import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  isAuth = false;

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => this.secondes = value,
      (error) => console.log('An error occured! ' + error),
      () => console.log('Observable complete!')
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
