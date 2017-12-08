import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSelectOptionListItem]'
})
export class SelectOptionListItemDirective implements OnInit {
  @Input() appSelectOptionListItem: Keyp.Select.Option;

  element: HTMLElement;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
  }
}
