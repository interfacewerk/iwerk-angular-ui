import { Component, Inject } from '@angular/core';
import { NavigationController, NavigationData } from 'src/public_api';
import { Example3Component } from './navigation-example1-nested3.component';

export interface Example2ComponentNavData {
  title: string;
}

export type Example2ReturnedData = number;


@Component({
  template: `<h5>{{data.title}}</h5>
  <button (click)="present()">Present one more view!</button>
  <button (click)="dismiss()">Dismiss with value 1234</button>`,
  styles: [
    `.nav-container {
      padding: 3px 10px;
      box-shadow: 1px 1px 1px 1px black;
      height: 300px;
      width: 300px;
    }`
  ]
})
export class Example2Component {
  constructor(
    @Inject(NavigationData) public data: Example2ComponentNavData,
    private navCtrl: NavigationController
  ) {

  }

  present() {
    this.navCtrl.present(Example3Component);
  }
  dismiss() {
    this.navCtrl.dismiss<Example2ReturnedData>(1234);
  }
}