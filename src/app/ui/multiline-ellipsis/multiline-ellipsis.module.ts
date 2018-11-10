import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultilineEllipsisDirective } from './multiline-ellipsis.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MultilineEllipsisDirective],
  exports: [MultilineEllipsisDirective]
})
export class MultilineEllipsisModule { }
