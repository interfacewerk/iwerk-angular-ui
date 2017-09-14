import { TestBed, inject } from '@angular/core/testing';

import { PopoverService } from './popover.service';

describe('PopoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopoverService]
    });
  });

  it('should ...', inject([PopoverService], (service: PopoverService) => {
    expect(service).toBeTruthy();
  }));
});
