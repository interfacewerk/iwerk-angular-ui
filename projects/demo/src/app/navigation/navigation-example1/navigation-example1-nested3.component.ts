import { Component } from '@angular/core';
import { NavigationController } from 'src/public_api';

@Component({
  template: `<h5>One level deeper!</h5><button (click)="dismiss()">Dismiss</button>`,
  styles: [
    `.nav-container {
      padding: 3px 10px;
      box-shadow: 1px 1px 1px 1px black;
      height: 300px;
      width: 300px;
    }`
  ]
})
export class Example3Component {
  constructor(
    private navCtrl: NavigationController
  ) {

  }

  dismiss() {
    this.navCtrl.dismiss();
  }
}