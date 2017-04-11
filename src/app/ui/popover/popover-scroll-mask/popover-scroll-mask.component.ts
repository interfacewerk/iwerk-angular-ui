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

  @Output() public onClick = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  public $onClick($event: any) {
    // $event is not used here but AOT complains that the signature is not right ...
    this.onClick.emit();
  }

}
