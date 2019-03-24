import { Component, OnInit } from '@angular/core';
import { ButtonState } from '../../../ui/state-button/state-button.module';

@Component({
  selector: 'app-stateful-button-demo',
  templateUrl: './stateful-button-demo.component.html',
  styleUrls: ['./stateful-button-demo.component.sass']
})
export class StatefulButtonDemoComponent implements OnInit {

  myButtonState: ButtonState = 'IDLE';
  toggle = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.toggle = !this.toggle, 500);
  }

  do() {
    this.myButtonState = 'DOING';

    delay(1000)
      .then(() => this.myButtonState = 'SUCCESS')
      .then(() => delay(1000))
      .then(() => this.myButtonState = 'IDLE');
  }
}

function delay(ts: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ts);
  });
}
