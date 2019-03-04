import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-popover-demo',
  templateUrl: './custom-popover-demo.component.html',
  styleUrls: ['./custom-popover-demo.component.sass']
})
export class CustomPopoverDemoComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  _close() {
    this.close.emit();
  }

}
