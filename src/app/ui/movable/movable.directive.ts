import { Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { MovableService } from './movable.service';

/**
 * The movable directive lets the user move around elements.
 */
@Directive({
  selector: '[iwMovable]',
  providers: [MovableService]
})
export class MovableDirective implements OnInit {
  /**
   * Emits true when the element is moved, false otherwise.
   */
  @Output() moved = new EventEmitter<boolean>();

  @HostBinding('style.top')
  get top() {
    if (this.__position !== undefined) {
      let top = this.__position.top;
      if (this.__move) {
        top += this.__move.y;
      }
      return top + 'px';
    }
    return '';
  }

  @HostBinding('style.left')
  get left() {
    if (this.__position !== undefined) {
      let left = this.__position.left;
      if (this.__move) {
        left += this.__move.x;
      }
      return left + 'px';
    }
    return '';
  }

  private __position: {
    top: number
    left: number
  };
  private __move: {
    x: number
    y: number
  };

  constructor(
    private movable: MovableService,
    private elementRef: ElementRef
  ) {
  }

  /**
   * @ignore
   */
  ngOnInit() {
    this.movable.move$.subscribe(move => {
      if (!this.__position) {
        this.updateCurrentPositionFromOffset();
      }
      this.__move = move;
      this.moved.next(true);
    });
    this.movable.stopped$.subscribe(() => {
      this.__move = undefined;
      this.updateCurrentPositionFromOffset();
      this.moved.next(false);
    });
  }

  private get element() {
    return this.elementRef.nativeElement as HTMLElement;
  }

  /**
   * @ignore
   */
  private updateCurrentPositionFromOffset() {
    this.__position = {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }

}
