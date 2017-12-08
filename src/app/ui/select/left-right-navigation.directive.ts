import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appLeftRightNavigation]'
})
export class LeftRightNavigationDirective implements AfterViewInit {
  @Output() delete = new EventEmitter();
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();

  private element: HTMLElement;

  @HostListener('keyup', ['$event'])
  onKeyup($event: KeyboardEvent) {
    console.log($event.keyCode);
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

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
  }

  focus() {
    this.element.focus();
  }
}
