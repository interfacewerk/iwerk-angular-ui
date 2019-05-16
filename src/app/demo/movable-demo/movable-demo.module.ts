import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovableModule } from '../../ui/movable/movable.module';
import {
  CustomMoveHandleDirective,
  MovableDemoComponent,
  MovableDemoContent2Component,
  MovableDemoContentComponent
} from './movable-demo/movable-demo.component';

@NgModule({
  declarations: [
    MovableDemoComponent,
    MovableDemoContentComponent,
    CustomMoveHandleDirective,
    MovableDemoContent2Component
  ],
  entryComponents: [
    MovableDemoContentComponent,
    MovableDemoContent2Component
  ],
  imports: [
    CommonModule,
    MovableModule,
    RouterModule.forChild([
      { path: '', component: MovableDemoComponent }
    ])
  ]
})
export class MovableDemoModule { }
