import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'src/public_api';
import { CoreModule } from '../core/core.module';
import {
  TooltipDemoComponent,
  Example1TooltipComponent,
  Example2TooltipComponent,
  Example3TooltipComponent
} from './tooltip-demo/tooltip-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TooltipDemoComponent }
    ]),
    TooltipModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    TooltipDemoComponent,
    Example1TooltipComponent,
    Example2TooltipComponent,
    Example3TooltipComponent
  ],
  exports: [RouterModule]
})
export class TooltipDemoModule { }
