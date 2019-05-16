import { Injectable, ElementRef } from '@angular/core';
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

  makeHandle(target: { elementRef: ElementRef }): Function {
    const element = target.elementRef.nativeElement as HTMLElement;

    const listeners = [
      { event: 'mousedown', fn: ($event: MouseEvent) => {
        this.startMoving({
          top: $event.pageY,
          left: $event.pageX
        });
      }},
      { event: 'mouseup', fn: () => {
        this.stopMoving();
      }},
      { event: 'touchstart', fn: ($event: TouchEvent) => {
        this.startMoving({
          top: $event.touches[0].pageY,
          left: $event.touches[0].pageX
        });
      }},
      { event: 'touchend', fn: () => {
        this.stopMoving();
      }}
    ];

    listeners.forEach(item => element.addEventListener(item.event, item.fn));

    return () => {
      listeners.forEach(item => element.removeEventListener(item.event, item.fn));
    };
  }
}
