import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopoverDemoComponent } from './popover-demo/popover-demo.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PopoverDemoComponent }
    ]),
    UiModule,
    FormsModule
  ],
  declarations: [PopoverDemoComponent],
  exports: [RouterModule]
})
export class PopoverModule { }
