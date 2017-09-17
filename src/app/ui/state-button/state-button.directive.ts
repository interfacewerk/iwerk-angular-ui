import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
  OnInit,
  HostBinding,
  OnDestroy
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Directive({
  selector: '[iwStateButton]'
})
export class StateButtonDirective {
  state = new BehaviorSubject<IWUi.ButtonState>(undefined);

  @Input() set iwStateButton(v: IWUi.ButtonState) {
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

class StateDirectiveController implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    protected state: IWUi.ButtonState,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: StateButtonDirective,
    protected viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .map(s => s === this.state)
      .distinctUntilChanged();
    this.__subscription = distinct.subscribe(b => {
      if (b) {
        this.__previousEmbedded = this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        if (this.__previousEmbedded) {
          this.__previousEmbedded.destroy();
          this.viewContainerRef.remove(0);
        }
      }
    });
  }

  ngOnDestroy() {
    this.__subscription.unsubscribe();
    if (this.__previousEmbedded) {
      this.__previousEmbedded.destroy();
      this.viewContainerRef.remove(0);
    }
  }
}

@Directive({
  selector: '[sbIdle]'
})
export class SbIdleDirective extends StateDirectiveController {
  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<any>,
    stateButtonDirective: StateButtonDirective
  ) {
    super('IDLE', templateRef, stateButtonDirective, viewContainerRef);
  }
}

@Directive({
  selector: '[sbSuccess]'
})
export class SbSuccessDirective extends StateDirectiveController {
  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<any>,
    stateButtonDirective: StateButtonDirective
  ) {
    super('SUCCESS', templateRef, stateButtonDirective, viewContainerRef);
  }
}

@Directive({
  selector: '[sbDoing]'
})
export class SbDoingDirective extends StateDirectiveController {
  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<any>,
    stateButtonDirective: StateButtonDirective
  ) {
    super('DOING', templateRef, stateButtonDirective, viewContainerRef);
  }
}

@Directive({
  selector: '[sbFailure]'
})
export class SbFailureDirective extends StateDirectiveController {
  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<any>,
    stateButtonDirective: StateButtonDirective
  ) {
    super('FAILURE', templateRef, stateButtonDirective, viewContainerRef);
  }
}
