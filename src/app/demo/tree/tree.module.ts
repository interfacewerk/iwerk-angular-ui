import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeModule as UiTreeModule } from '../../ui/tree/tree.module';
import { Tree1Component, Tree2Component, Tree3Component, TreeDemoComponent } from './tree.component';

@NgModule({
  declarations: [TreeDemoComponent, Tree1Component, Tree2Component, Tree3Component],
  entryComponents: [Tree1Component, Tree2Component, Tree3Component],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    UiTreeModule
  ]
})
export class TreeModule { }
