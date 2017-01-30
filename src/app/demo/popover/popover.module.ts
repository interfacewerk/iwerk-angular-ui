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
    CustomPopoverDemoComponent
  ],
  exports: [RouterModule]
})
export class PopoverModule { }
