
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

  it('should close if clickOutsideToClose=true and the mask is the click target', () => {
    component.clickOutsideToClose = true;
    spyOn(component.onClose, 'emit');
    const event = <MouseEvent><any>{
      target: fixture.debugElement.nativeElement,
      preventDefault: () => {},
      stopPropagation: () => {}
    };
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');
    component.onClick(event);
    expect(component.onClose.emit).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should not close if clickOutsideToClose=false and the mask is the click target', () => {
    component.clickOutsideToClose = false;
    spyOn(component.onClose, 'emit');
    const event = <MouseEvent><any>{
      target: fixture.debugElement.nativeElement,
      preventDefault: () => {},
      stopPropagation: () => {}
    };
    component.onClick(event);
    expect(component.onClose.emit).not.toHaveBeenCalled();
  });

  it('should not close if clickOutsideToClose=true and the mask is not the click target', () => {
    component.clickOutsideToClose = false;
    spyOn(component.onClose, 'emit');
    const event = <MouseEvent><any>{
      target: 1,
      preventDefault: () => {},
      stopPropagation: () => {}
    };
    component.onClick(event);
    expect(component.onClose.emit).not.toHaveBeenCalled();
  });

});
