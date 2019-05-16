import { Directive, ElementRef, HostBinding, OnInit, EventEmitter, Output } from '@angular/core';
import { MovableService } from './movable.service';

@Directive({
  selector: '[iwMovable]',
  providers: [MovableService]
})
export class MovableDirective implements OnInit {
  @Output() moved = new EventEmitter();

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

  ngOnInit() {
    this.movable.move$.subscribe(move => {
      if (!this.__position) {
        this.updateCurrentPositionFromOffset();
      }
      this.__move = move;
      this.moved.next();
    });
    this.movable.stopped$.subscribe(() => {
      this.__move = undefined;
      this.updateCurrentPositionFromOffset();
    });
  }

  private get element() {
    return this.elementRef.nativeElement as HTMLElement;
  }

  private updateCurrentPositionFromOffset() {
    this.__position = {
      top: this.element.offsetTop,
      left: this.element.offsetLeft
    };
  }

}
