import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'src/public_api';
import { CodeSampleModule } from '../code-sample/code-sample.module';
import {
  CustomPopoverContentDirective,
  CustomPopoverDemoComponent,
  CustomPopoverHeaderDirective
} from './custom-popover-demo/custom-popover-demo.component';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
import { PopoverExample1Component } from './popover-example1/popover-example1.component';
import { PopoverExample2Component } from './popover-example2/popover-example2.component';
import { PropertyEditPopoverComponent } from './popover-example2/property-edit-popover/property-edit-popover.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PopoverDemoComponent }
    ]),
    PopoverModule,
    FormsModule,
    CodeSampleModule
  ],
  declarations: [
    PopoverDemoComponent,
    CustomPopoverHeaderDirective,
    CustomPopoverContentDirective,
    CustomPopoverDemoComponent,
    PopoverExample1Component,
    PopoverExample2Component,
    PropertyEditPopoverComponent
  ],
  entryComponents: [PropertyEditPopoverComponent],
  exports: [RouterModule]
})
export class PopoverDemoModule { }
