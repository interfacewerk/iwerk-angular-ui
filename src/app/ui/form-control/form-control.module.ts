import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control/form-control.component';
import { FormControlErrorDirective } from './form-control-error/form-control-error.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormControlComponent, FormControlErrorDirective],
  exports: [FormControlComponent, FormControlErrorDirective]
})
export class FormControlModule { }
