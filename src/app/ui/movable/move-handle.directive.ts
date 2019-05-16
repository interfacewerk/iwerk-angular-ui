import { Directive, HostListener } from '@angular/core';
import { MovableService } from './movable.service';

@Directive({
  selector: '[iwMoveHandle]'
})
export class MoveHandleDirective {
  constructor(
    private movable: MovableService
  ) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown($event: MouseEvent) {
    this.startMoving({
      top: $event.pageY,
      left: $event.pageX
    });
  }

  @HostListener('mouseup', [])
  onMouseUp() {
    this.stopMoving();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart($event: TouchEvent) {
    this.startMoving({
      top: $event.touches[0].pageY,
      left: $event.touches[0].pageX
    });
  }

  @HostListener('touchend', [])
  onTouchEnd() {
    this.stopMoving();
  }

  private startMoving(position: {top: number, left: number}) {
    this.movable.startMoving(position);
  }

  private stopMoving() {
    this.movable.stopMoving();
  }
}
