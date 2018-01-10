import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectDemoComponent } from './select-demo/select-demo.component';
import { SelectModule } from '../../ui/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    RouterModule.forChild([
      { path: '', component: SelectDemoComponent }
    ]),
  ],
  declarations: [SelectDemoComponent]
})
export class SelectDemoModule { }
