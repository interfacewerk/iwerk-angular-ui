import {
  Component,
  HostListener,
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
  clickOutsideToClose: boolean;
  onClose = new EventEmitter(false);

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if (this.clickOutsideToClose) {
      $event.preventDefault();
      $event.stopPropagation();
      this.onClose.emit();
    }
  }

}
