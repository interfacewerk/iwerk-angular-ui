import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
export { PopoverModule };

@NgModule({
  imports: [
    CommonModule,
    PopoverModule
  ],
  declarations: [],
  exports: [ PopoverModule ]
})
export class UiModule { }
