import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Renderer
} from '@angular/core';

@Directive({
  selector: 'input[type="text"][iwSelectSearchInput]'
})
export class SelectSearchInputDirective implements OnInit {
  @Output() back = new EventEmitter(true);

  private element: HTMLInputElement;
  private valueAtKeydown: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {}

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.keyCode === 8 && this.valueAtKeydown === '') {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.back.emit();
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 8) {
      this.valueAtKeydown = this.element.value;
    }
  }

  ngOnInit() {
    this.element = <HTMLInputElement>this.elementRef.nativeElement;
  }

  focus() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
  }

}
