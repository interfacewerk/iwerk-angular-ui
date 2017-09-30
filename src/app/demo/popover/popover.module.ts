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
import { PopoverModule as UiPopModule, IW_POPOVER_CONFIG, PopoverConfig } from '../../ui/popover/popover.module';
import { PropertyEditPopoverComponent } from './property-edit-popover/property-edit-popover.component';

const config: PopoverConfig = {
  escToClose: true,
  clickOutsideToClose: true,
  popoverClass: 'popover-demo-from-config'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PopoverDemoComponent }
    ]),
    UiPopModule,
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
  ],
  providers: [{
    provide: IW_POPOVER_CONFIG, useValue: config
  }]
})
export class PopoverModule { }
