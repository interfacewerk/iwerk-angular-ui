import {
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonState } from './button-state';
import { IStateButtonDirective } from './state-button-directive.interface';
import { map, distinctUntilChanged } from 'rxjs/operators';


export class StateTemplate implements OnInit, OnDestroy {
  private __previousEmbedded: EmbeddedViewRef<any>;
  private __subscription: Subscription;

  constructor(
    protected triggeringState: ButtonState,
    protected viewContainerRef: ViewContainerRef,
    protected templateRef: TemplateRef<any>,
    protected stateButtonDirective: IStateButtonDirective
  ) {
  }

  ngOnInit() {
    const distinct = this.stateButtonDirective.state.asObservable()
      .pipe(map(s => s === this.triggeringState))
      .pipe(distinctUntilChanged());

    this.__subscription = distinct.subscribe(b => {
      if (b) {
        this.__previousEmbedded = this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.__remove();
      }
    });
  }

  ngOnDestroy() {
    this.__subscription.unsubscribe();
    this.__remove();
  }

  private __remove() {
    if (this.__previousEmbedded) {
      this.__previousEmbedded.destroy();
      this.viewContainerRef.remove(0);
    }
  }

}
