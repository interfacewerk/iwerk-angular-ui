import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/checkbox.module';
import { MultilineEllipsisModule } from './multiline-ellipsis/multiline-ellipsis.module';
import { PopoverModule } from './popover/popover.module';
import { StateButtonModule } from './state-button/state-button.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    MultilineEllipsisModule
  ],
  exports: [
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    MultilineEllipsisModule
  ]
})
export class UiModule { }
