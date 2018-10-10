import { Directive, HostBinding, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ButtonState } from './button-state';
import { IStateButtonDirective } from './state-button-directive.interface';
import { StateTemplate } from './state-template.class';

@Directive({
  selector: '[iwStateButton]'
})
export class StateButtonDirective implements IStateButtonDirective {
  private __state = new BehaviorSubject<ButtonState>(undefined);

  get state(): Observable<ButtonState> {
    return this.__state.asObservable();
  }

  @Input() set iwStateButton(v: ButtonState) {
    this.__state.next(v);
  }

  @HostBinding('class.iw-state-button')
  withClass = true;

  @HostBinding('class.sb--idle')
  get isIdle() {
    return this.__state.value === 'IDLE';
  }

  @HostBinding('class.sb--doing')
  get isDoing() {
    return this.__state.value === 'DOING';
  }

  @HostBinding('class.sb--success')
  get isSuccess() {
    return this.__state.value === 'SUCCESS';
  }

  @HostBinding('class.sb--failure')
  get isFailure() {
    return this.__state.value === 'FAILURE';
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
