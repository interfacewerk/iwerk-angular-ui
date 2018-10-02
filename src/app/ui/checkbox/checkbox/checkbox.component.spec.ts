import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheckboxConfig } from '../checkbox-config.interface';
import { IW_CHECKBOX_CONFIG } from '../checkbox.config';
import { CheckboxModule } from '../checkbox.module';
import { CheckboxComponent } from './checkbox.component';


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

  it('getTabIndex() returns "" if it is disabled', () => {
    component.setDisabledState(true);
    expect(component.getTabIndex()).toBe('');
  });

  it('getTabIndex() returns 0 if it is enabled', () => {
    expect(component.getTabIndex()).toBe('0');
  });

  it('getTabIndex() returns the tabindex attribute', () => {
    component.tabindex = 10;
    expect(component.getTabIndex()).toBe('10');
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
});

@Component({
  template: `
    <iw-checkbox [ngModel]="someValue" [disabled]="disabled"></iw-checkbox>
  `
})
class TestComponent {
  someValue = false;
  disabled = false;
}

@Component({
  template: `<iw-checkbox [(ngModel)]="someValue"></iw-checkbox>`
})
class Test2Component {
  someValue = false;
}

describe('Checkbox integration tests', () => {

  it('applies disabled style when disabled', async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ CheckboxModule, FormsModule, CommonModule ]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(TestComponent);
    const checkDisabled = async (disabled: boolean) => {
      const checkbox: HTMLElement = fixture.debugElement.nativeElement.querySelector('iw-checkbox');
      fixture.componentInstance.disabled = disabled;
      fixture.detectChanges();
      await fixture.whenRenderingDone();
      expect(checkbox.classList.contains('checkbox--disabled')).toBe(disabled);
    };
    await checkDisabled(false);
    await checkDisabled(true);
    await checkDisabled(false);
  });

  it('sets the value and updates inner DOM', async () => {
    TestBed.configureTestingModule({
      declarations: [ Test2Component ],
      imports: [ CheckboxModule, FormsModule, CommonModule ]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(Test2Component);
    const checkChecked = async (checked: boolean) => {
      const checkbox: HTMLElement = fixture.debugElement.nativeElement.querySelector('iw-checkbox');
      fixture.componentInstance.someValue = checked;
      fixture.detectChanges();
      await fixture.whenRenderingDone();
      expect(checkbox.classList.contains('checkbox--checked')).toBe(checked);
    };
    await checkChecked(false);
    await checkChecked(true);
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
