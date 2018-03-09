import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
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
});
