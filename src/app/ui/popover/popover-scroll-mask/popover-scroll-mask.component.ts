import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'iw-popover-scroll-mask',
  templateUrl: './popover-scroll-mask.component.html',
  styleUrls: ['./popover-scroll-mask.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverScrollMaskComponent implements OnInit, OnDestroy {
  clickOutsideToClose: boolean;
  onClose = new EventEmitter(false);

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'body-with-iw-popover');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'body-with-iw-popover');
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if (this.clickOutsideToClose && $event.target === this.elementRef.nativeElement) {
      $event.preventDefault();
      $event.stopPropagation();
      this.onClose.emit();
    }
  }

}
