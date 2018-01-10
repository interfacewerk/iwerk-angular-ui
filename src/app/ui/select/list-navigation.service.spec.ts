import { TestBed, inject } from '@angular/core/testing';

import { ListNavigationService } from './list-navigation.service';

describe('ListNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListNavigationService]
    });
  });

  it('should be created', inject([ListNavigationService], (service: ListNavigationService) => {
    expect(service).toBeTruthy();
  }));

  it('automatically selects the first element', inject([ListNavigationService], (service: ListNavigationService) => {
    service.optionsToShow = [1, 2, 3];
    expect(service.getHighlightedOption()).toBe(1);
  }));

  it('selects the 2nd element when going down', inject([ListNavigationService], (service: ListNavigationService) => {
    service.optionsToShow = [1, 2, 3];
    service.down();
    expect(service.getHighlightedOption()).toBe(2);
  }));

  it('loops', inject([ListNavigationService], (service: ListNavigationService) => {
    service.optionsToShow = [1, 2, 3];
    service.down();
    service.down();
    service.down();
    expect(service.getHighlightedOption()).toBe(1);
  }));

  it('loops when going up', inject([ListNavigationService], (service: ListNavigationService) => {
    service.optionsToShow = [1, 2, 3];
    service.up();
    expect(service.getHighlightedOption()).toBe(3);
  }));
});
