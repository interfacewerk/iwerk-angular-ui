import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlDemoComponent } from './form-control-demo.component';
import { RouterModule } from '@angular/router';
import { FormControlModule } from '../../ui/form-control/form-control.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormControlModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: FormControlDemoComponent
    }])
  ],
  declarations: [FormControlDemoComponent]
})
export class FormControlDemoModule { }
