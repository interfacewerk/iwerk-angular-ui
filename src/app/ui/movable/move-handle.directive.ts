import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MovableService } from './movable.service';

@Directive({
  selector: '[iwMoveHandle]'
})
export class MoveHandleDirective implements OnInit, OnDestroy {
  private sub: Function;

  constructor(
    private movable: MovableService,
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.sub = this.movable.makeHandle(this);
  }

  ngOnDestroy() {
    this.sub();
  }
}
