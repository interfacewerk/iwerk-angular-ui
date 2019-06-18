import { Directive, ElementRef, OnDestroy, OnInit, HostBinding, Optional } from '@angular/core';
import { MovableService } from './movable.service';

@Directive({
  selector: '[iwMoveHandle]'
})
export class MoveHandleDirective implements OnInit, OnDestroy {
  @HostBinding('class.iw-move-handle')
  get isMovable(): boolean {
    return !!this.movable;
  }

  private sub: Function;

  constructor(
    @Optional() private movable: MovableService,
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.movable) {
      this.sub = this.movable.makeHandle(this);
    }
  }

  ngOnDestroy() {
    if (this.movable) {
      this.sub();
    }
  }
}
