import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';
export { IW_TOOLTIP_CONFIG } from './tooltip.config';
export { TooltipConfig } from './tooltip-config.interface';

@NgModule({
  entryComponents: [ TooltipContainerComponent ],
  imports: [
    CommonModule
  ],
  declarations: [ TooltipDirective, TooltipContainerComponent ],
  exports: [ TooltipDirective ]
})
export class TooltipModule { }
