import { Injectable } from '@angular/core';

/**
 * The TaskRunnerService was introduced to execute tasks in one zone run.
 * This is useful when directives/components want to emit outputs after change detection.
 */
@Injectable()
export class TaskRunnerService {
  private tasks: Function[] = [];
  private timeout: any = undefined;

  addTaskForNextRound(t: Function) {
    this.tasks.push(t);
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        const tasks = this.tasks;
        this.tasks = [];
        tasks.forEach(task => task());
        this.timeout = undefined;
      }, 0);
    }
  }
}
