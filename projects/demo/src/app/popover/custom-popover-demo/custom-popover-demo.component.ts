import { Directive, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  styleUrls: ['./custom-popover-demo.component.sass']
})
export class CustomPopoverDemoComponent implements OnInit {
  @Output() close = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

  _close() {
    this.close.emit();
  }

}
