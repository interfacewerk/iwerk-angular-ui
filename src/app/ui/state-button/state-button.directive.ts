import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  HostBinding,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ButtonState } from './button-state';
import { StateTemplate } from './state-template.class';
import { IStateButtonDirective } from './state-button-directive.interface';

@Directive({
  selector: '[iwStateButton]'
})
export class StateButtonDirective implements IStateButtonDirective {
  state = new BehaviorSubject<ButtonState>(undefined);

  @Input() set iwStateButton(v: ButtonState) {
    this.state.next(v);
  }

  @HostBinding('class.iw-state-button')
  withClass = true;

  @HostBinding('class.sb--idle')
  get isIdle() {
    return this.state.value === 'IDLE';
  }

  @HostBinding('class.sb--doing')
  get isDoing() {
    return this.state.value === 'DOING';
  }

  @HostBinding('class.sb--success')
  get isSuccess() {
    return this.state.value === 'SUCCESS';
  }

  @HostBinding('class.sb--failure')
  get isFailure() {
    return this.state.value === 'FAILURE';
  }

}

@Directive({
  selector: '[sbIdle]'
})
export class SbIdleDirective extends StateTemplate {

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: StateButtonDirective
  ) {
    super(
      'IDLE',
      viewContainerRef,
      templateRef,
      stateButtonDirective
    );
  }
}

@Directive({
  selector: '[sbSuccess]'
})
export class SbSuccessDirective extends StateTemplate {

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: StateButtonDirective
  ) {
    super(
      'SUCCESS',
      viewContainerRef,
      templateRef,
      stateButtonDirective
    );
  }
}

@Directive({
  selector: '[sbDoing]'
})
export class SbDoingDirective extends StateTemplate {

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: StateButtonDirective
  ) {
    super(
      'DOING',
      viewContainerRef,
      templateRef,
      stateButtonDirective
    );
  }
}

@Directive({
  selector: '[sbFailure]'
})
export class SbFailureDirective extends StateTemplate {

  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: StateButtonDirective
  ) {
    super(
      'FAILURE',
      viewContainerRef,
      templateRef,
      stateButtonDirective
    );
  }
}
