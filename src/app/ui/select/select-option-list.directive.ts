import {
  Directive,
  AfterViewInit,
  QueryList,
  ElementRef,
  ContentChildren,
} from '@angular/core';
import { SelectOptionListItemDirective } from './select-option-list-item.directive';
import { ListNavigationService } from './list-navigation.service';

@Directive({
  selector: '[iwSelectOptionList]'
})
export class SelectOptionListDirective implements AfterViewInit {
  @ContentChildren(SelectOptionListItemDirective) items: QueryList<SelectOptionListItemDirective>;

  private element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private listNavigation: ListNavigationService
  ) { }

  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
    this.listNavigation.highlightedOption.subscribe(o => {
      this.scrollToHighlighted(o);
    });
  }

  private scrollToHighlighted(highlighted: IWUI.Select.Option) {
    const item = this.items.toArray().find(i => i.iwSelectOptionListItem === highlighted);
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
