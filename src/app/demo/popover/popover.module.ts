import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IW_POPOVER_CONFIG, PopoverConfig, PopoverModule as UiPopModule } from '../../ui/popover/popover.module';
import { CustomPopoverDemoComponent } from './custom-popover-demo/custom-popover-demo.component';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
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
