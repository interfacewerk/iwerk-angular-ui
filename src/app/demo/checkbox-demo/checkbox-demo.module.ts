import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxDemoComponent } from './checkbox-demo.component';
import { UiModule } from '../../ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CheckboxDemoComponent }
    ]),
    CommonModule,
    UiModule,
    FormsModule
  ],
  declarations: [CheckboxDemoComponent],
  exports: [RouterModule]
})
export class CheckboxDemoModule { }
