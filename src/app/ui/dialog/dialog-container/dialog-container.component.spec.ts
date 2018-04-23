import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContainerComponent } from './dialog-container.component';

describe('DialogContainerComponent', () => {
  let component: DialogContainerComponent;
  let fixture: ComponentFixture<DialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContainerComponent);
    component = fixture.componentInstance;
    component.dialogOptions = {
      containerClass: 'class1 class2'
    };
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('emits an onClose event if user clicks on it and clickToClose=true', () => {
    const obj = {
      toCall: () => {}
    };
    component.dialogOptions = {
      clickToClose: true
    };
    component.onClose.subscribe(spyOn(obj, 'toCall'));
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('click'));
    expect(obj.toCall).toHaveBeenCalled();
  });

  it('does not emit an onClose event if user clicks on it and clickToClose=false', () => {
    const obj = {
      toCall: () => {}
    };
    component.dialogOptions = {
      clickToClose: false
    };
    component.onClose.subscribe(spyOn(obj, 'toCall'));
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('click'));
    expect(obj.toCall).not.toHaveBeenCalled();
  });

  it('emits an onClose event if user presses ESC and escToClose=true', () => {
    const obj = {
      toCall: () => {}
    };
    component.dialogOptions = {
      escToClose: true
    };
    component.onClose.subscribe(spyOn(obj, 'toCall'));
    component.onKeydown(<KeyboardEvent>{
      keyCode: 27,
      preventDefault: () => {}
    });
    expect(obj.toCall).toHaveBeenCalled();
  });

  it('does not emit an onClose event if user presses ESC and escToClose=false', () => {
    const obj = {
      toCall: () => {}
    };
    component.dialogOptions = {
      escToClose: false
    };
    component.onClose.subscribe(spyOn(obj, 'toCall'));
    component.onKeydown(<KeyboardEvent>{
      keyCode: 27,
      preventDefault: () => {}
    });
    expect(obj.toCall).not.toHaveBeenCalled();
  });

  it('adds classes passed with dialogOptions', () => {
    expect(fixture.debugElement.classes['class1']).toBe(true);
    expect(fixture.debugElement.classes['class2']).toBe(true);
  });
});
