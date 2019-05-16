import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovableDemoComponent, MovableDemoContentComponent } from './movable-demo/movable-demo.component';
import { RouterModule } from '@angular/router';
import { MovableModule } from '../../ui/movable/movable.module';

@NgModule({
  declarations: [MovableDemoComponent, MovableDemoContentComponent],
  entryComponents: [MovableDemoContentComponent],
  imports: [
    CommonModule,
    MovableModule,
    RouterModule.forChild([
      { path: '', component: MovableDemoComponent }
    ])
  ]
})
export class MovableDemoModule { }
