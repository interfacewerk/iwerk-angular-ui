import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appSelectHighlightCtrl]'
})
export class SelectHighlightCtrlDirective {
  @Input() highlightCtrlDisabled: boolean;

  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();
  @Output() enter = new EventEmitter();

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.highlightCtrlDisabled) {
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.keyCode === 38) {
      event.preventDefault();
      this.up.emit();
    } else if (event.keyCode === 40) {
      event.preventDefault();
      this.down.emit();
    } else if (event.keyCode === 13) {
      event.preventDefault();
      this.enter.emit();
    }
    // console.log(event.keyCode);
  }

  constructor() { }

}
