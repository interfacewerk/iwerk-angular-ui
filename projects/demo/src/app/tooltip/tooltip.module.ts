import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'src/public_api';
import { CodeSampleModule } from '../code-sample/code-sample.module';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TooltipDemoComponent }
    ]),
    TooltipModule,
    FormsModule,
    CodeSampleModule
  ],
  declarations: [TooltipDemoComponent],
  exports: [RouterModule]
})
export class TooltipDemoModule { }
