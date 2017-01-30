import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
export { PopoverModule, TooltipModule };

@NgModule({
  imports: [
    CommonModule,
    PopoverModule
  ],
  exports: [ PopoverModule, TooltipModule ]
})
export class UiModule { }
