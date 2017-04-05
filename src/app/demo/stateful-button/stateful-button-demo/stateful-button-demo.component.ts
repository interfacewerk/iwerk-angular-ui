import { Component, OnInit } from '@angular/core';
import { ButtonState } from '../../../ui/ui.module';

@Component({
  selector: 'app-stateful-button-demo',
  templateUrl: './stateful-button-demo.component.html',
  styleUrls: ['./stateful-button-demo.component.scss']
})
export class StatefulButtonDemoComponent implements OnInit {

  myButtonState: ButtonState = ButtonState.IDLE;

  constructor() { }

  ngOnInit() {
  }

  do() {
    this.myButtonState = ButtonState.DOING;

    setTimeout(() => {
      this.myButtonState = ButtonState.SUCCESS;
    }, 1000);
  }
}
