import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MovableService implements EventListenerObject {
  initialPosition: {
    top: number
    left: number
  };

  move$ = new Subject<{ x: number, y: number }>();
  stopped$ = new Subject();

  constructor() { }

  startMoving(position: { top: number, left: number }) {
    this.initialPosition = position;
    document.addEventListener('mousemove', this);
    document.addEventListener('touchmove', this);
  }

  stopMoving() {
    document.removeEventListener('touchmove', this);
    document.removeEventListener('mousemove', this);
    this.stopped$.next();
  }

  handleEvent(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) {
      this.move$.next({
        x: event.pageX - this.initialPosition.left,
        y: event.pageY - this.initialPosition.top
      });
    } else if (event instanceof TouchEvent) {
      this.move$.next({
        x: event.touches[0].pageX - this.initialPosition.left,
        y: event.touches[0].pageY - this.initialPosition.top
      });
    }
  }
}
