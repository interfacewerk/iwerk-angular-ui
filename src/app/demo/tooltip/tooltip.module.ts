import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IW_TOOLTIP_CONFIG, TooltipConfig, TooltipModule as UiTooltipModule } from '../../ui/tooltip/tooltip.module';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';

const config: TooltipConfig = {
  containerClass: 'demo-tooltip',
  horizontal: false,
  delay: 0,
};

@NgModule({
  imports: [
    CommonModule,
    UiTooltipModule,
    FormsModule
  ],
  declarations: [TooltipDemoComponent],
  providers: [{ provide: IW_TOOLTIP_CONFIG, useValue: config }]
})
export class TooltipModule { }
