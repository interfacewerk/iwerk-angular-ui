import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNamePopoverComponent } from './last-name-popover.component';

describe('LastNamePopoverComponent', () => {
  let component: LastNamePopoverComponent;
  let fixture: ComponentFixture<LastNamePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNamePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNamePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
