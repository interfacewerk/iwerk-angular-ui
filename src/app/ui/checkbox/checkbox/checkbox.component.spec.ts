import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { IW_CHECKBOX_CONFIG } from '../checkbox.config';
import { CheckboxConfig } from '../checkbox-config.interface';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ],
      providers: [{
        provide: IW_CHECKBOX_CONFIG, useValue: <CheckboxConfig> {
          containerClass: 'checkbox-test-class'
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the value when calling writeValue', () => {
    component.writeValue(true);
    expect(component.value).toBe(true);
  });

  it('registers onTouched & onChange callbacks which are called onClick', () => {
    const obj = {
      touched: () => {},
      change: () => {}
    };
    spyOn(obj, 'touched');
    spyOn(obj, 'change');
    component.registerOnTouched(obj.touched);
    component.registerOnChange(obj.change);
    component.onClick(undefined);
    expect(obj.touched).toHaveBeenCalled();
    expect(obj.change).toHaveBeenCalled();
  });

  it('does not change the value when it is disabled', () => {
    component.onClick(undefined);
    expect(component.value).toBe(true);
    component.setDisabledState(true);
    component.onClick(undefined);
    expect(component.value).toBe(true);
  });

  it('getTabIndex() returns -1 if it is disabled', () => {
    component.setDisabledState(true);
    expect(component.getTabIndex()).toBe(-1);
  });

  it('getTabIndex() returns 0 if it is enabled', () => {
    expect(component.getTabIndex()).toBe(0);
  });

  it('getTabIndex() returns the tabindex attribute', () => {
    component.tabindex = 10;
    expect(component.getTabIndex()).toBe(10);
  });

  it('changes the value when hitting Space on the checkbox', () => {
    component.onKeyup({
      keyCode: 32
    } as KeyboardEvent);
    expect(component.value).toBe(true);
  });

  it('does not change the value when hitting something else than Space on the checkbox', () => {
    component.onKeyup({
      keyCode: 3
    } as KeyboardEvent);
    expect(component.value).toBeFalsy();
  });

  it('triggers the change detection when disabling the component', () => {
    spyOn((component as any).changeDetectorRef, 'detectChanges');
    component.setDisabledState(true);
    expect((component as any).changeDetectorRef.detectChanges).toHaveBeenCalled();
  });
});

describe('Checkbox component global config', () => {
  it('adds the containerClass provided as global config', () => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ],
      providers: [{
        provide: IW_CHECKBOX_CONFIG, useValue: <CheckboxConfig> {
          containerClass: 'checkbox-test-class'
        }
      }]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(CheckboxComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.classes['checkbox-test-class']).toBe(true);
  });

  it('does not add the containerClass provided as global config', () => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(CheckboxComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.classes['checkbox-test-class']).toBeFalsy();
  });
});
