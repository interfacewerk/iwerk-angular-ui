import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IW_TOOLTIP_CONFIG, TooltipConfig, TooltipModule as UiTooltipModule } from '../../ui/tooltip/tooltip.module';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { RouterModule } from '@angular/router';

const config: TooltipConfig = {
  containerClass: 'demo-tooltip',
  horizontal: false,
  delay: 0,
};

@NgModule({
  imports: [
    CommonModule,
    UiTooltipModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: TooltipDemoComponent }
    ]),
  ],
  declarations: [TooltipDemoComponent],
  providers: [{ provide: IW_TOOLTIP_CONFIG, useValue: config }],
  exports: [RouterModule]
})
export class TooltipModule { }
