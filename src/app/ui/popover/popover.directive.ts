import {
  Directive,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnDestroy,
  ViewContainerRef,
  SimpleChanges,
  OnChanges,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import {
  PopoverService,
  PopoverPosition,
  IPopover
} from './popover.service';


@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy, OnChanges {
  @Input() popoverClass: string;
  @Input() arrowClass: string;
  @Input() horizontalAlignment: 'leftWithLeft' | undefined;
  @Input() scrollMaskClass: string;
  @Input() escToClose: boolean;
  @Input() clickOutsideToClose: boolean;
  @Input() isOpen: boolean;

  @Output() shouldClose = new EventEmitter();
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();

  private __popoverInstance: IPopover;

  constructor(
    private popoverService: PopoverService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private zone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnDestroy() {
    this.__close();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.__update();
    }
  }

  private __update() {
    if (this.__popoverInstance && !this.isOpen) {
      this.__close();
    } else if (this.isOpen && !this.__popoverInstance) {
      this.__open();
    }
  }

  private __open() {
    // get out of the zone to avoid triggering another zone run
    this.zone.runOutsideAngular(() => {
      // wait till the current stack is finished to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        // go back to the zone
        this.zone.run(() => {
          // create the popover
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
          // run the change detection
          this.changeDetectorRef.detectChanges();
          this.changeDetectorRef.markForCheck();
        });
      }, 0);
    });
  }

  private __close() {
    if (this.__popoverInstance) {
      this.__popoverInstance.close();
      this.__popoverInstance = undefined;
    }
  }

}
