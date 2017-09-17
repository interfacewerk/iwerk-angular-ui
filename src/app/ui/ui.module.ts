import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { StateButtonModule } from './state-button/state-button.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    TooltipModule,
    StateButtonModule
  ],
  exports: [ PopoverModule, TooltipModule, StateButtonModule ]
})
export class UiModule { }
