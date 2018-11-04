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


/**
 * The popover component can be used to display extra piece of information or more user interface elements.
 * The popover consists in a `iw-popover-container` that is added directly to the body.
 * It automatically adds a scroll mask element and an arrow element.
 *
 * ## Positionning
 *
 * By default and if possible, the popover is horizontally centered with its target's center.
 * If the popover goes out of bounds, its horizontal position is adjusted to stay in bounds.
 * It is possible to set this horizontal alignment behaviour by setting the `horizontalAlignment` input to `'leftWithLeft'`.
 *
 * By default, the popover puts itself on top of the target if the target is on the bottom-half of the screen,
 * on the bottom if the target is on the top-half of the screen.
 *
 * ## Scroll mask and arrow elements
 * The popover component automatically appends a scroll mask and an arrow elements to the body.
 * You can adjust their style to your convenience.
 * - The arrow is automatically positionned to point at the target element. This element has the class `.iw-popover-arrow-element`.
 * - The scroll mask `<iw-popover-scroll-mask>` is meant to prevent the user from scrolling
 * and to intercept clicks oustide of the popover and to dismiss the popover.
 *
 ```ts
 import { PopoverModule } from 'iwerk-angular-ui';
 ```
 */
@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy, OnChanges {
  /**
   * Specify a class for the popover container.
   */
  @Input() popoverClass: string;
  /**
   * Specify a class for the arrow.
   */
  @Input() arrowClass: string;
  /**
   * Specify the horizontal alignment strategy.
   */
  @Input() horizontalAlignment: 'leftWithLeft' | undefined;
  /**
   * Specify a class for the scroll mask.
   */
  @Input() scrollMaskClass: string;
  /**
   * User can press Escape to close. (default: false)
   */
  @Input() escToClose: boolean;
  /**
   * User can click outside to close the popover. (default: false)
   */
  @Input() clickOutsideToClose: boolean;
  /**
   * Open or close the popover. (default: false)
   */
  @Input() isOpen: boolean;
  /**
   * Horizontal or vertical positionning. (default: false)
   */
  @Input() horizontal: boolean;

  /**
   * Event triggered that gives you the opportunity to close the popover (e.g. `isOpen = false`)
   */
  @Output() shouldClose = new EventEmitter();
  /**
   * Event triggered when the popover position changes.
   */
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();

  private __popoverInstance: IPopover;

  constructor(
    private popoverService: PopoverService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private zone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  /**
   * @ignore
   */
  ngOnDestroy() {
    this.__close();
  }

  /**
   * @ignore
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.__update();
    }
  }

  /**
   * @ignore
   */
  private __update() {
    if (this.__popoverInstance && !this.isOpen) {
      this.__close();
    } else if (this.isOpen && !this.__popoverInstance) {
      this.__open();
    }
  }

  /**
   * @ignore
   */
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
              horizontal: this.__getHorizontal(),
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

  /**
   * @ignore
   */
  private __close() {
    if (this.__popoverInstance) {
      this.__popoverInstance.close();
      this.__popoverInstance = undefined;
    }
  }

  /**
   * @ignore
   */
  private __getHorizontal(): boolean {
    if (this.horizontal === undefined) {
      return false;
    }
    return this.horizontal;
  }

}
