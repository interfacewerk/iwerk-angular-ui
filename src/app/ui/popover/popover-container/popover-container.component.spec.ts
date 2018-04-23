
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
    const event = <KeyboardEvent>{
      keyCode: 27,
      preventDefault: () => {}
    };
    spyOn(event, 'preventDefault');
    component.onKeyDown(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.onClose.emit).toHaveBeenCalled();
  });

  it('should not call onClose if escToClose = false', () => {
    component.escToClose = false;
    spyOn(component.onClose, 'emit');
    component.onKeyDown(<KeyboardEvent>{
      keyCode: 27
    });
    expect(component.onClose.emit).not.toHaveBeenCalled();
  });

  it('should not call onClose if escToClose = true but the event is not ESC', () => {
    component.escToClose = true;
    spyOn(component.onClose, 'emit');
    component.onKeyDown(<KeyboardEvent>{
      keyCode: 26
    });
    expect(component.onClose.emit).not.toHaveBeenCalled();
  });
});
