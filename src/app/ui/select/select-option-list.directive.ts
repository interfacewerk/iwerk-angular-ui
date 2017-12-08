import {
  Directive,
  Input,
  AfterViewInit,
  OnChanges,
  QueryList,
  ElementRef,
  ContentChildren,
} from '@angular/core';
import { SelectOptionListItemDirective } from './select-option-list-item.directive';

@Directive({
  selector: '[appSelectOptionList]'
})
export class SelectOptionListDirective implements AfterViewInit, OnChanges {
  @Input() highlightedOption: Keyp.Select.Option;
  @ContentChildren(SelectOptionListItemDirective) items: QueryList<SelectOptionListItemDirective>;

  private element: HTMLElement;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
    this.scrollToHighlighted();
  }

  ngOnChanges() {
    if (!this.element) {
      return;
    }
    this.scrollToHighlighted();
  }

  private scrollToHighlighted() {
    const item = this.items.toArray().find(i => i.appSelectOptionListItem === this.highlightedOption);
    if (!item) {
      this.element.scrollTop = 0;
      return;
    }
    const top = item.element.offsetTop;
    const bottom = top + item.element.offsetHeight;
    if (top > this.element.scrollTop && bottom < this.element.scrollTop + this.element.offsetHeight) {
      return;
    }
    this.element.scrollTop = top;
  }
}
