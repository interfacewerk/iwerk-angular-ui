import { Component } from '@angular/core';
import { NavigationController } from 'src/public_api';

@Component({
  template: `<h5>One level deeper!</h5><button (click)="dismiss()">Dismiss</button>`
})
export class Example3Component {
  constructor(private navCtrl: NavigationController) {}

  dismiss() {
    this.navCtrl.dismiss();
  }
}
