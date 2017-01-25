import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
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
export class PopoverScrollMaskComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  $onClick() {
    this.onClick.emit();
  }

}
