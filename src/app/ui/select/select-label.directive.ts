import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[appSelectLabel]'
})
export class SelectLabelDirective {
  @Output() open = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    this.open.emit();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.open.emit();
    } else if (event.keyCode === 38) {
      event.preventDefault();
      event.stopPropagation();
      this.open.emit();
    } else if (event.keyCode === 40) {
      event.preventDefault();
      event.stopPropagation();
      this.open.emit();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  focus() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
  }

}
