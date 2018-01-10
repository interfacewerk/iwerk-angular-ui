import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[iwAutofocusInput]'
})
export class AutofocusInputDirective implements AfterViewInit {
  @Input() iwAutofocusInput: boolean;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    if (this.iwAutofocusInput) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }
}
