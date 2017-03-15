import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
export * from './popover/popover.module';
export * from './tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule
  ],
  exports: [ PopoverModule, TooltipModule ]
})
export class UiModule { }
