import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeComponent, TreeItem, TreeItemDirective, TreeNodeTemplateDirective } from './tree/tree.component';

export { TreeComponent, TreeItem };

@NgModule({
  declarations: [
    TreeComponent,
    TreeItemDirective,
    TreeNodeTemplateDirective
  ],
  exports: [
    TreeComponent,
    TreeItemDirective,
    TreeNodeTemplateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TreeModule { }
