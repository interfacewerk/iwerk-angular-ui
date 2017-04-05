
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let directive: TooltipDirective;
  let fixture: ComponentFixture<TooltipDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
