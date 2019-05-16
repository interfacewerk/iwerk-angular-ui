import { Component } from '@angular/core';

@Component({
  template: `<div class="handle" iwMoveHandle>I am the handle`
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
}
