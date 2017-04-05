
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverScrollMaskComponent } from './popover-scroll-mask.component';

describe('PopoverScrollMaskComponent', () => {
  let component: PopoverScrollMaskComponent;
  let fixture: ComponentFixture<PopoverScrollMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverScrollMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverScrollMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
