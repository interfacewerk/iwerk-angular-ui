import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocsModule } from 'ng-documentation';
import { TreeModule } from 'src/public_api';
import { TreeDocsExample1Component } from './tree-docs-example1/tree-docs-example1.component';
import { TreeDocsExample2Component } from './tree-docs-example2/tree-docs-example2.component';
import { TreeDocsExample3Component } from './tree-docs-example3/tree-docs-example3.component';
import { TreeDocsComponent } from './tree-docs.component';

@NgModule({
  declarations: [
    TreeDocsComponent,
    TreeDocsExample1Component,
    TreeDocsExample2Component,
    TreeDocsExample3Component
  ],
  imports: [
    CommonModule,
    DocsModule,
    TreeModule,
    RouterModule
  ]
})
export class TreeDocsModule { }
