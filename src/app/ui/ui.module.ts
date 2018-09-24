import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { StateButtonModule } from './state-button/state-button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { FormControlModule } from './form-control/form-control.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    FormControlModule
  ],
  exports: [
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    FormControlModule
  ]
})
export class UiModule { }
