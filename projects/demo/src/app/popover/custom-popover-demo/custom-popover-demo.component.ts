import { Directive, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCustomPopoverHeader]'
})
export class CustomPopoverHeaderDirective {}

@Directive({
  selector: '[appCustomPopoverContent]'
})
export class CustomPopoverContentDirective {}

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
