import {
  Directive,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import {
  PopoverService,
  PopoverPosition,
  IPopover
} from './popover.service';


@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy {
  @Input() popoverClass: string;
  @Input() arrowClass: string;
  @Input() horizontalAlignment: 'leftWithLeft' | undefined;
  @Input() scrollMaskClass: string;
  @Input() escToClose: boolean;
  @Input() clickOutsideToClose: boolean;
  @Input() set isOpen(v: boolean) {
    this.__isOpen = v;
    this.__update();
  }

  @Output() shouldClose = new EventEmitter();
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();

  private __popoverInstance: IPopover;
  private __isOpen = false;

  constructor(
    private popoverService: PopoverService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnDestroy() {
    this.__close();
  }

  private __update() {
    if (this.__popoverInstance && !this.__isOpen) {
      this.__close();
    } else if (this.__isOpen && !this.__popoverInstance) {
      this.__open();
    }
  }

  private __open() {
    this.__popoverInstance = this.popoverService.openTemplateRef(
      this.templateRef,
      (<HTMLElement>this.viewContainerRef.element.nativeElement).parentElement, {
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

}
