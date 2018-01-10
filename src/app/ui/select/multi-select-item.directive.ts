import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[iwMultiSelectItem]'
})
export class MultiSelectItemDirective {

  constructor(private renderer: Renderer, private elementRef: ElementRef) { }

  focus() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
  }
}
