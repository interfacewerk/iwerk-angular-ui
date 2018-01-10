import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[iwLeftRightNavigation]'
})
export class LeftRightNavigationDirective implements AfterViewInit {
  @Output() delete = new EventEmitter();
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();

  private element: HTMLElement;

  constructor(private elementRef: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: KeyboardEvent) {
    if ($event.target !== this.element) {
      return;
    }
    if ($event.keyCode === 8) {
      this.delete.emit();
      event.preventDefault();
    } else if ($event.keyCode === 37) {
      this.left.emit();
      event.preventDefault();
    } else if ($event.keyCode === 39) {
      this.right.emit();
      event.preventDefault();
    }
  }


  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
  }

  focus() {
    this.element.focus();
  }
}
