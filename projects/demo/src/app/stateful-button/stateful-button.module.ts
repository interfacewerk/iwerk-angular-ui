import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateButtonModule } from 'src/public_api';
import { StatefulButtonDemoComponent } from './stateful-button-demo/stateful-button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    StateButtonModule,
    FormsModule
  ],
  declarations: [StatefulButtonDemoComponent]
})
export class StatefulButtonDemoModule { }
