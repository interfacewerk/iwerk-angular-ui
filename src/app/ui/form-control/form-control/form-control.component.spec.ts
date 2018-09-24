import { Component, TemplateRef, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { FormControlErrorDirective } from '../form-control-error/form-control-error.directive';
import { FormControlComponent } from './form-control.component';


// describe('FormControlComponent', () => {
//   let component: FormControlComponent;
//   let fixture: ComponentFixture<FormControlComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [FormControlComponent]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FormControlComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
// });

@Component({
  template: `<iw-form-control [formControl]="formControl">
    <ng-template #errorTemplate iwFormControlError="required">This is required.</ng-template>
  </iw-form-control>`
})
class UseFormControlComponent {
  @ViewChild(FormControlComponent) formControlComponent: FormControlComponent;
  @ViewChild('errorTemplate') errorTemplate: TemplateRef<any>;

  formControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
}

describe('FormControlComponent', () => {
  let component: UseFormControlComponent;
  let fixture: ComponentFixture<UseFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlComponent, UseFormControlComponent, FormControlErrorDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(console, 'warn').and.callFake(() => {});
  });

  it('displays a warning in the console if no formControl is provided', () => {
      component.formControl = undefined;
      fixture.detectChanges();
      expect(console.warn).toHaveBeenCalledWith('iwFormControl expects a [formControl]: FormControl as input.');
  });

  it('errorKeys is an array of error keys', () => {
    component.formControl = undefined;
    fixture.detectChanges();
    expect(component.formControlComponent.errorKeys).toEqual([]);
    component.formControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
    fixture.detectChanges();
    expect(component.formControlComponent.errorKeys).toEqual(['required']);
    component.formControl.setValue('1234567');
    fixture.detectChanges();
    expect(component.formControlComponent.errorKeys).toEqual(['minlength']);
    component.formControl.setValue('12345678910');
    fixture.detectChanges();
    expect(component.formControlComponent.errorKeys).toEqual([]);
  });

  it('showErrors returns true if the form is touched and invalid', () => {
    component.formControl = undefined;
    fixture.detectChanges();
    expect(component.formControlComponent.showErrors).toBeFalsy();
    component.formControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
    fixture.detectChanges();
    expect(component.formControlComponent.showErrors).toEqual(false);
    component.formControl.setValue('1234567');
    component.formControl.markAsTouched();
    expect(component.formControlComponent.showErrors).toEqual(true);
    component.formControl.setValue('12345678910');
    expect(component.formControlComponent.showErrors).toEqual(false);
  });

  it('has a default error template', () => {
    expect(component.formControlComponent.defaultErrorTemplate).toBeDefined();
  });

  it('gets the error template for the required validator', () => {
    expect(component.formControlComponent.getErrorTemplate('required')).toBe(component.errorTemplate);
  });

  it('gets the default error template for any other validator', () => {
    expect(component.formControlComponent.getErrorTemplate('minlength')).toBeDefined(component.formControlComponent.defaultErrorTemplate);
  });

  it('gets the error context for the required validator', () => {
    expect(component.formControlComponent.getErrorContext('required')).toEqual({
      key: 'required',
      $implicit: true
    });
  });

  it('gets the error context for the required validator', () => {
    component.formControl.setValue('0');
    expect(component.formControlComponent.getErrorContext('minlength')).toEqual({
      key: 'minlength',
      $implicit: {
        requiredLength: 2,
        actualLength: 1
      }
    });
  });

});

@Component({
  template: `<iw-form-control [formControl]="formControl">
    <ng-template #errorTemplate iwFormControlError>This is required.</ng-template>
  </iw-form-control>`
})
class MisuseFormControlComponent {
  formControl = new FormControl('');
}

describe('FormControlErrorDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlComponent, MisuseFormControlComponent, FormControlErrorDirective]
    })
    .compileComponents();
  }));

  it('throws an error if the form control error does not have an input', () => {
    expect(() => {
      const fixture = TestBed.createComponent(MisuseFormControlComponent);
      fixture.detectChanges();
    }).toThrowError('iwFormControlError directive expects an input [iwFormControlError].');
  });

});

