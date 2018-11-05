import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverExample2Component } from './popover-example2.component';

describe('PopoverExample2Component', () => {
  let component: PopoverExample2Component;
  let fixture: ComponentFixture<PopoverExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
