import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultilineEllipsisDirective } from './multiline-ellipsis.directive';
import { TaskRunnerService } from './task-runner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MultilineEllipsisDirective],
  exports: [MultilineEllipsisDirective],
  providers: [TaskRunnerService]
})
export class MultilineEllipsisModule { }
