import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverExample1Component } from './popover-example1.component';

describe('PopoverExample1Component', () => {
  let component: PopoverExample1Component;
  let fixture: ComponentFixture<PopoverExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
