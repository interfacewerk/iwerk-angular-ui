import {
  ApplicationRef,
  Renderer,
  Directive,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  OnDestroy,
  ElementRef,
  EmbeddedViewRef
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
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

  @Input() set isOpen(v: boolean) {
    this._isOpen = v;
    this.__update();
  }

  @Input() set escToClose(v: boolean) {
    this._escToClose = v;
  }

  @Output() shouldClose = new EventEmitter();
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();
  @Output() onToggle = new EventEmitter<boolean>();
  
  private __popoverInstance: IPopover;

  constructor(
    private popoverService: PopoverService,
    private target: PopoverTargetDirective,
    private templateRef: TemplateRef<any>,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer,
    private appRef: ApplicationRef
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
        shouldClose: this.shouldClose,
        onToggle: this.onToggle,
        popoverPosition: this.popoverPosition
      });
  }

  private __close() {
    if (this.__popoverInstance) {
      this.__popoverInstance.close();
      this.__popoverInstance = undefined;
    }
  }

  private __onKeyPress(event: KeyboardEvent) {
    if (this._escToClose && event.key === 'Escape') {
      event.preventDefault();
      this.__close();
    }
  }

  _isOpen: boolean = false;
  _escToClose: boolean = true;
}
