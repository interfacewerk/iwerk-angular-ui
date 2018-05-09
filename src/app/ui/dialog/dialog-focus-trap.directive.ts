import { Directive, HostBinding, HostListener } from '@angular/core';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';

@Directive({
  selector: '[iwDialogFocusTrap]'
})
export class DialogFocusTrapDirective {
  @HostBinding('attr.tabindex')
  tabindex = 0;

  constructor(private container: DialogContainerComponent) {
  }

  @HostListener('focus', ['$event'])
  onFocus($event: FocusEvent) {
    this.container.focus();
  }
}
