import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSamplePipe } from './code-sample.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CodeSamplePipe],
  providers: [CodeSamplePipe],
  declarations: [CodeSamplePipe]
})
export class CodeSampleModule { }
