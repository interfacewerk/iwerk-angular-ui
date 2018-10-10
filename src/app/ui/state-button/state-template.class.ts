import { EmbeddedViewRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ButtonState } from './button-state';
import { IStateButtonDirective } from './state-button-directive.interface';

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
    const distinct = this.stateButtonDirective.state
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
