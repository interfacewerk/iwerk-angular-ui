import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StatefulButtonComponent,
  SBLabelDoingComponent,
  SBLabelFailureComponent,
  SBLabelIdleComponent,
  SBLabelSuccessComponent,
  ButtonState,
  delay
} from './stateful-button/stateful-button.component';
export { ButtonState, delay };

@NgModule({
  declarations: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent, SBLabelFailureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent, SBLabelFailureComponent
  ],
})
export class StatefulButtonModule { }
