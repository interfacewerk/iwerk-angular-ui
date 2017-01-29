import { Directive, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'app-custom-popover-header'
})
export class CustomPopoverHeader {}

@Directive({
  selector: 'app-custom-popover-content'
})
export class CustomPopoverContent {}

@Component({
  selector: 'app-custom-popover-demo',
  templateUrl: './custom-popover-demo.component.html',
  styleUrls: ['./custom-popover-demo.component.scss']
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
