import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlErrorDirective } from '../form-control-error/form-control-error.directive';

interface ErrorContext {
  $implicit: any;
  key: string;
}

@Component({
  selector: 'iw-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormControlComponent implements OnInit, OnChanges {
  @Input() formControl: FormControl;
  @ContentChildren(FormControlErrorDirective) errorTemplates: QueryList<FormControlErrorDirective>;
  @ViewChild('defaultErrorTemplate') defaultErrorTemplate: TemplateRef<any>;

  @HostBinding('class.iw-form-control--invalid')
  get invalidClass(): boolean {
    return this.showErrors;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.formControl) {
      console.warn('iwFormControl expects a [formControl]: FormControl as input.');
    }
  }

  get errorKeys() {
    return this.formControl ? Object.keys(this.formControl.errors || {}) : [];
  }

  get showErrors(): boolean {
    return this.formControl && this.formControl.invalid && this.formControl.touched;
  }

  getErrorTemplate(key: string): TemplateRef<ErrorContext> {
    const template = this.errorTemplates.find(t => t.iwFormControlError === key);
    if (template) {
      return template.templateRef;
    } else {
      return this.defaultErrorTemplate;
    }
  }

  getErrorContext(key: string): ErrorContext {
    return {
      $implicit: this.formControl.getError(key),
      key
    };
  }

}
