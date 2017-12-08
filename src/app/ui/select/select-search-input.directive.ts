import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Optional
} from '@angular/core';
import { LeftRightNavigationDirective } from './left-right-navigation.directive';

@Directive({
  selector: 'input[type="text"][appSelectSearchInput]'
})
export class SelectSearchInputDirective implements OnInit {
  @Output() back = new EventEmitter(true);

  private element: HTMLInputElement;

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.keyCode === 8 && this.element.value === '') {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.back.emit();
    }
  }

  constructor(
    private elementRef: ElementRef,
    @Optional() private leftRightNavigation: LeftRightNavigationDirective
  ) {}

  ngOnInit() {
    this.element = <HTMLInputElement>this.elementRef.nativeElement;
  }

  focus() {
    if (this.leftRightNavigation) {
      this.leftRightNavigation.focus();
    }
  }
}
