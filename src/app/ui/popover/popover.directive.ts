import {
  Directive,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnDestroy,
  ElementRef
} from '@angular/core';
import { PopoverService, IPopover } from './popover.service';

export type PopoverPosition = {
  vertical: 'top' | 'bottom'
};

export type PopoverHorizontalAlignment = 'leftWithLeft' | undefined;

@Directive({
  selector: '[iwPopoverTarget]'
})
export class PopoverTargetDirective {
  constructor(public elementRef: ElementRef) {}
}

@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy {
  @Input() popoverClass: string;
  @Input() arrowClass: string;
  @Input() horizontalAlignment: PopoverHorizontalAlignment;
  @Input() scrollMaskClass: string;
  @Input() escToClose: boolean;
  @Input() clickOutsideToClose: boolean;
  @Input() set isOpen(v: boolean) {
    this._isOpen = v;
    this.__update();
  }

  @Output() shouldClose = new EventEmitter();
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();
  
  private __popoverInstance: IPopover;

  constructor(
    private popoverService: PopoverService,
    private target: PopoverTargetDirective,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnDestroy() {
    this.__close();
  }

  private __update() {
    if (this.__popoverInstance && !this._isOpen) {
      this.__close();
    } else if (this._isOpen && !this.__popoverInstance) {
      this.__open();
    }
  }

  private __open() {
    this.__popoverInstance = this.popoverService.openTemplateRef(
      this.templateRef,
      this.target.elementRef.nativeElement, {
        arrowClass: this.arrowClass,
        horizontalAlignment: this.horizontalAlignment,
        popoverClass: this.popoverClass,
        scrollMaskClass: this.scrollMaskClass,
        shouldClose: () => {
          this.shouldClose.emit();
        },
        popoverPosition: p => {
          this.popoverPosition.emit(p);
        },
        escToClose: this.escToClose,
        clickOutsideToClose: this.clickOutsideToClose
      });
  }

  private __close() {
    if (this.__popoverInstance) {
      this.__popoverInstance.close();
      this.__popoverInstance = undefined;
    }
  }

  _isOpen: boolean = false;
}
