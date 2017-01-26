import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipContainerComponent } from './tooltip/tooltip-container/tooltip-container.component';
export { PopoverModule };

@NgModule({
  entryComponents: [ TooltipContainerComponent ],
  imports: [
    CommonModule,
    PopoverModule
  ],
  declarations: [TooltipDirective, TooltipContainerComponent],
  exports: [ PopoverModule, TooltipDirective ]
})
export class UiModule { }
