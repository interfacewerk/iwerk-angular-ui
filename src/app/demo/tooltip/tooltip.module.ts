import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule as UiTooltipModule, IW_TOOLTIP_CONFIG, TooltipConfig } from '../../ui/tooltip/tooltip.module';

const config: TooltipConfig = {
  containerClass: 'demo-tooltip',
  horizontal: false,
  delay: 0,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TooltipDemoComponent }
    ]),
    UiTooltipModule,
    FormsModule
  ],
  declarations: [TooltipDemoComponent],
  exports: [RouterModule],
  providers: [{provide: IW_TOOLTIP_CONFIG, useValue: config}]
})
export class TooltipModule { }
