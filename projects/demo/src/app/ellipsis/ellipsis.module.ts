import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'projects/docs/src/lib/core/core.module';
import { MultilineEllipsisModule } from 'src/app/ui/multiline-ellipsis/multiline-ellipsis.module';
import { EllipsisExample1Component } from './ellipsis-example1/ellipsis-example1.component';
import { EllipsisDemoComponent } from './ellipsis/ellipsis.component';

@NgModule({
  imports: [
    CommonModule,
    MultilineEllipsisModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    EllipsisDemoComponent,
    EllipsisExample1Component,
  ]
})
export class EllipsisDemoModule { }
