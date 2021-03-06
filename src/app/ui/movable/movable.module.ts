import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovableDirective } from './movable.directive';
import { MoveHandleDirective } from './move-handle.directive';

export { MovableService } from './movable.service';

@NgModule({
  declarations: [MovableDirective, MoveHandleDirective],
  exports: [MovableDirective, MoveHandleDirective],
  imports: [
    CommonModule
  ]
})
export class MovableModule { }
