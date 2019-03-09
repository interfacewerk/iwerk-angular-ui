import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'projects/docs/src/lib/core/core.module';
import { TooltipModule } from 'src/public_api';
import {
  Example1TooltipComponent,
  Example2TooltipComponent,
  Example3TooltipComponent,
  TooltipDemoComponent
} from './tooltip-demo/tooltip-demo.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    TooltipDemoComponent,
    Example1TooltipComponent,
    Example2TooltipComponent,
    Example3TooltipComponent
  ]
})
export class TooltipDemoModule { }
