
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPopoverDemoComponent } from './custom-popover-demo.component';

describe('CustomPopoverDemoComponent', () => {
  let component: CustomPopoverDemoComponent;
  let fixture: ComponentFixture<CustomPopoverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPopoverDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPopoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
