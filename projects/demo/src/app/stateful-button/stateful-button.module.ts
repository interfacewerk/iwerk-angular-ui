import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StateButtonModule } from 'src/public_api';
import { StatefulButtonDemoComponent } from './stateful-button-demo/stateful-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StatefulButtonDemoComponent }
    ]),
    StateButtonModule,
    FormsModule
  ],
  declarations: [StatefulButtonDemoComponent],
  exports: [RouterModule]
})
export class StatefulButtonDemoModule { }
