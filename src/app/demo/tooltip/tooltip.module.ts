import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TooltipDemoComponent }
    ]),
    UiModule,
    FormsModule
  ],
  declarations: [TooltipDemoComponent],
  exports: [RouterModule]
})
export class TooltipModule { }
