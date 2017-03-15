import {
  Component,
  HostListener,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'iw-popover-scroll-mask',
  templateUrl: './popover-scroll-mask.component.html',
  styleUrls: ['./popover-scroll-mask.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverScrollMaskComponent {

  @Output() onClick = new EventEmitter();

  constructor() { }

  @HostListener('click', ['$event'])
  $onClick() {
    this.onClick.emit();
  }

}
