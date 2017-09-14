import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
import {
  CustomPopoverHeaderDirective,
  CustomPopoverContentDirective,
  CustomPopoverDemoComponent
} from './custom-popover-demo/custom-popover-demo.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';
import { PropertyEditPopoverComponent } from './property-edit-popover/property-edit-popover.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PopoverDemoComponent }
    ]),
    UiModule,
    FormsModule
  ],
  declarations: [
    PopoverDemoComponent,
    CustomPopoverHeaderDirective,
    CustomPopoverContentDirective,
    CustomPopoverDemoComponent,
    PropertyEditPopoverComponent
  ],
  exports: [RouterModule],
  entryComponents: [
    PropertyEditPopoverComponent
  ]
})
export class PopoverModule { }
