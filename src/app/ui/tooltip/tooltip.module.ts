import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective, TooltipTargetDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';

@NgModule({
  entryComponents: [ TooltipContainerComponent ],
  imports: [
    CommonModule
  ],
  declarations: [ TooltipDirective, TooltipContainerComponent, TooltipTargetDirective ],
  exports: [ TooltipDirective, TooltipTargetDirective ]
})
export class TooltipModule { }
