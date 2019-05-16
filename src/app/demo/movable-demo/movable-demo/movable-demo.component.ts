import { Component, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MovableService } from '../../../ui/movable/movable.module';

@Directive({
  selector: '[appCustomMoveHandle]'
})
export class CustomMoveHandleDirective implements OnInit, OnDestroy {
  private sub: Function;

  constructor(private movable: MovableService, public elementRef: ElementRef) {

  }

  ngOnInit() {
    this.sub = this.movable.makeHandle(this);
  }

  ngOnDestroy() {
    this.sub();
  }
}

@Component({
  template: `<div appCustomMoveHandle>custom handle directive</div>`
})
export class MovableDemoContent2Component {

}

@Component({
  template: `<div iwMoveHandle>iwMoveHandle</div>`
})
export class MovableDemoContentComponent {

}

@Component({
  selector: 'app-movable-demo',
  templateUrl: './movable-demo.component.html',
  styleUrls: ['./movable-demo.component.sass']
})
export class MovableDemoComponent {
  movableDemoContentComponent = MovableDemoContentComponent;
  movableDemoContent2Component = MovableDemoContent2Component;
}
