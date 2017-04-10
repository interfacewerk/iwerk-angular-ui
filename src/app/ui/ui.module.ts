import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { StatefulButtonModule } from './stateful-button/stateful-button.module';
export * from './popover/popover.module';
export * from './tooltip/tooltip.module';
export * from './stateful-button/stateful-button.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    TooltipModule,
    StatefulButtonModule
  ],
  exports: [ PopoverModule, TooltipModule, StatefulButtonModule ]
})
export class UiModule { }
