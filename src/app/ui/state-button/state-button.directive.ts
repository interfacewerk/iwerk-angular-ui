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
import { ButtonState } from './button-state';

@Directive({
  selector: '[iwStateButton]'
})
export class StateButtonDirective {
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
export class SbIdleDirective implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private stateButtonDirective: StateButtonDirective
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .map(s => s === 'IDLE')
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
  selector: '[sbSuccess]'
})
export class SbSuccessDirective implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private stateButtonDirective: StateButtonDirective
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .map(s => s === 'SUCCESS')
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
  selector: '[sbDoing]'
})
export class SbDoingDirective implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private stateButtonDirective: StateButtonDirective
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .map(s => s === 'DOING')
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
  selector: '[sbFailure]'
})
export class SbFailureDirective implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private stateButtonDirective: StateButtonDirective
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .map(s => s === 'FAILURE')
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
