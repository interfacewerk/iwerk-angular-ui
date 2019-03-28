import { TestBed } from '@angular/core/testing';
import { TaskRunnerService } from './task-runner.service';


describe('TaskRunnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskRunnerService = TestBed.get(TaskRunnerService);
    expect(service).toBeTruthy();
  });
});
