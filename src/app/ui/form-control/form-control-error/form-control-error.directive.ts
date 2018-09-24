import { Directive, Input, OnChanges, TemplateRef } from '@angular/core';

@Directive({
  selector: '[iwFormControlError]'
})
export class FormControlErrorDirective implements OnChanges {
  @Input() iwFormControlError: string;

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

  ngOnChanges() {
    if (!this.iwFormControlError) {
      throw new Error('iwFormControlError directive expects an input [iwFormControlError].');
    }
  }
}
