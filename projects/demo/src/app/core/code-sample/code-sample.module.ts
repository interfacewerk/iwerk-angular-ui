import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSamplePipe, ComponentDescriptionPipe } from './code-sample.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CodeSamplePipe, ComponentDescriptionPipe],
  providers: [CodeSamplePipe, ComponentDescriptionPipe],
  declarations: [CodeSamplePipe, ComponentDescriptionPipe]
})
export class CodeSampleModule { }
