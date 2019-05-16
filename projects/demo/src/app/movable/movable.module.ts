import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocsModule } from 'ng-documentation';
import { MovableModule as IwMovableModule } from '../../../../../src/app/ui/movable/movable.module';
import { MovableExample1Component } from './movable-example1/movable-example1.component';
import { MovableComponent } from './movable/movable.component';

@NgModule({
  declarations: [
    MovableComponent,
    MovableExample1Component
  ],
  imports: [
    CommonModule,
    DocsModule,
    IwMovableModule
  ],
  entryComponents: [
    MovableComponent
  ]
})
export class MovableModule { }
