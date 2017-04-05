import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatefulButtonDemoComponent } from './stateful-button-demo/stateful-button-demo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StatefulButtonDemoComponent }
    ]),
    UiModule,
    FormsModule
  ],
  declarations: [StatefulButtonDemoComponent],
  exports: [RouterModule]
})
export class StatefulButtonDemoModule { }
