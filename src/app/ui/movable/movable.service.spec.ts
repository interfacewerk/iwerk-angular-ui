import { TestBed } from '@angular/core/testing';

import { MovableService } from './movable.service';

describe('MovableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovableService = TestBed.get(MovableService);
    expect(service).toBeTruthy();
  });
});
