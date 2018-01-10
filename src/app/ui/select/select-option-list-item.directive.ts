import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  Renderer,
  OnDestroy
} from '@angular/core';
import { ListNavigationService } from './list-navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[iwSelectOptionListItem]'
})
export class SelectOptionListItemDirective implements OnInit, OnDestroy {
  @Input() iwSelectOptionListItem: IWUI.Select.Option;
  @Input() highlightedClass: string;

  element: HTMLElement;

  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    private listNavigation: ListNavigationService,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'tabindex', '-1');
    this.subscriptions.push(
      this.listNavigation.highlightedOption.map(highlighted => highlighted === this.iwSelectOptionListItem)
      .subscribe(isHighlighted => {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.highlightedClass, isHighlighted);
      }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
