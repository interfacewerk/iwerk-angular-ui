import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
import {
  CustomPopoverHeader,
  CustomPopoverContent,
  CustomPopoverDemoComponent
} from './custom-popover-demo/custom-popover-demo.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';
import { LastNamePopoverComponent } from './last-name-popover/last-name-popover.component';
import { FirstNamePopoverComponent } from './first-name-popover/first-name-popover.component';

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
    CustomPopoverHeader,
    CustomPopoverContent,
    CustomPopoverDemoComponent,
    LastNamePopoverComponent,
    FirstNamePopoverComponent
  ],
  exports: [RouterModule],
  entryComponents: [
    LastNamePopoverComponent,
    FirstNamePopoverComponent
  ]
})
export class PopoverModule { }
