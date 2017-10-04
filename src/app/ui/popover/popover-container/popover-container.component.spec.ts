
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContainerComponent } from './popover-container.component';

describe('PopoverContainerComponent', () => {
  let component: PopoverContainerComponent;
  let fixture: ComponentFixture<PopoverContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onClose emitter if escToClose=true and user presses ESC', () => {
    component.escToClose = true;
    spyOn(component.onClose, 'emit');
    const event = document.createEvent('Event');
    (<{keyCode: number}><any>event).keyCode = 27;
    event.initEvent('keydown', true, true);
    window.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.onClose.emit).toHaveBeenCalled();
  });
});
