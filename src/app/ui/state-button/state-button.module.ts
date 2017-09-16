import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StateButtonDirective,
  SbIdleDirective,
  SbDoingDirective,
  SbFailureDirective,
  SbSuccessDirective
} from './state-button.directive';

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
