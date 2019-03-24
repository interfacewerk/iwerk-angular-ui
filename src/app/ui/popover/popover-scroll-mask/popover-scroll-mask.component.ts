import {
  Component,
  HostListener,
  EventEmitter,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'iw-popover-scroll-mask',
  templateUrl: './popover-scroll-mask.component.html',
  styleUrls: ['./popover-scroll-mask.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverScrollMaskComponent {
  clickOutsideToClose: boolean;
  onClose = new EventEmitter(false);

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if (this.clickOutsideToClose && $event.target === this.elementRef.nativeElement) {
      $event.preventDefault();
      $event.stopPropagation();
      this.onClose.emit();
    }
  }

}
