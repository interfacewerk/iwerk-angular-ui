import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[appAutofocusInput]'
})
export class AutofocusInputDirective implements AfterViewInit {
  @Input() appAutofocusInput: boolean;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    if (this.appAutofocusInput) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }
}
