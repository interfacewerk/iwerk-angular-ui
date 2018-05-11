import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxDemoComponent } from './checkbox-demo.component';
import { UiModule } from '../../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { IW_CHECKBOX_CONFIG } from '../../ui/checkbox/checkbox.config';
import { CheckboxConfig } from '../../ui/checkbox/checkbox-config.interface';

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
  exports: [RouterModule],
  providers: [{
    provide: IW_CHECKBOX_CONFIG,
    useValue: <CheckboxConfig> {
      containerClass: 'demo-checkbox'
    }
  }]
})
export class CheckboxDemoModule { }
