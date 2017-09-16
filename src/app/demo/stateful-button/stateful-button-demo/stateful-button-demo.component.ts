import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stateful-button-demo',
  templateUrl: './stateful-button-demo.component.html',
  styleUrls: ['./stateful-button-demo.component.scss']
})
export class StatefulButtonDemoComponent implements OnInit {

  myButtonState: IWUi.ButtonState = 'IDLE';

  constructor() { }

  ngOnInit() {
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
