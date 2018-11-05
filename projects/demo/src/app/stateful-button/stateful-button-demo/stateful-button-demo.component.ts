import { Component, OnInit } from '@angular/core';
import { ButtonState } from 'src/public_api';

@Component({
  selector: 'app-stateful-button-demo',
  templateUrl: './stateful-button-demo.component.html',
  styleUrls: ['./stateful-button-demo.component.scss']
})
export class StatefulButtonDemoComponent implements OnInit {

  myButtonState: ButtonState = 'IDLE';

  constructor() { }

  ngOnInit() {
  }

  do() {
    this.myButtonState = 'DOING';

    delay(2000).then(() => this.myButtonState = 'SUCCESS')
      .then(() => delay(2000))
      .then(() => this.myButtonState = 'IDLE');
  }
}

function delay(t: number): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), t);
  });
}
