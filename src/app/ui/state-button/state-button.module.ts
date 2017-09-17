import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StateButtonDirective,
  SbIdleDirective,
  SbDoingDirective,
  SbFailureDirective,
  SbSuccessDirective,
  ButtonState
} from './state-button.directive';

export { ButtonState };

@NgModule({
  declarations: [
    StateButtonDirective,
    SbIdleDirective,
    SbDoingDirective,
    SbFailureDirective,
    SbSuccessDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StateButtonDirective,
    SbIdleDirective,
    SbDoingDirective,
    SbFailureDirective,
    SbSuccessDirective
  ],
})
export class StateButtonModule { }
