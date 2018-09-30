import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isAuth = false;

  appareilOne = 'machine à laver';
  appareilTwo = 'four';
  appareilThree = 'PC';

  constructor() {
    setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
  );
  }

  onAllumer() {
    console.log('On allume tout!');
  }
}
