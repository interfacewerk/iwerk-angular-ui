import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  Type,
  Injector,
  ApplicationRef,
  ComponentRef,
  TemplateRef,
  EmbeddedViewRef
} from '@angular/core';
import { DialogContainerComponent, DialogOptions } from './dialog-container/dialog-container.component';

@Injectable()
export class DialogService {
  containerFactory: ComponentFactory<DialogContainerComponent>;

  private __defaultOptions: DialogOptions = {
    closeOnClickOutside: true,
    closeOnEsc: true
  };

  private __previousDialog: DialogRef<DialogContainerComponent, any, any>;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.containerFactory = this.componentFactoryResolver.resolveComponentFactory(DialogContainerComponent);
  }

  open<T>(componentType: Type<T>, _options?: DialogOptions, _data?: {[key: string]: any}): IDialog {
    const factory = this.componentFactoryResolver.resolveComponentFactory<{[key: string]: any}>(componentType);
    const component = factory.create(this.injector);
    const data = _data || {};
    for (let key in data) {
      component.instance[key] = data[key];
    }
    return this.__open(null, component, _options);
  }

  openTemplateRef<T>(templateRef: TemplateRef<T>, _options?: DialogOptions): IDialog {
    const view = templateRef.createEmbeddedView(null);
    return this.__open(view, null, _options);
  }

  close() {
    if (this.__previousDialog) {
      this.__previousDialog.detach();
      this.__previousDialog = undefined;
    }
  }

  private __open<B, C>(embeddedViewRef: EmbeddedViewRef<C>, componentRef: ComponentRef<B>, _options?: DialogOptions) {
    if (this.__previousDialog) {
      this.__previousDialog.detach();
    }
    const options = Object.assign({}, this.__defaultOptions, _options);
    const container = this.containerFactory.create(this.injector, embeddedViewRef ? [embeddedViewRef.rootNodes] : [[componentRef.location.nativeElement]]);
    container.instance.dialogOptions = options;
    this.__previousDialog = new DialogRef(container, embeddedViewRef, componentRef, this.appRef);
    container.instance.onClose.subscribe(() => {
      this.__previousDialog.detach();
      this.__previousDialog = undefined;
    });
    this.__previousDialog.attach();

    return {
      close: () => {
        if (this.__previousDialog) {
          this.__previousDialog.detach();
          this.__previousDialog = undefined;
        }
      }
    };
  }
}

class DialogRef<A, B, C> {
  constructor(
    private __container: ComponentRef<A>,
    private __embeddedViewRef: EmbeddedViewRef<C>,
    private __componentRef: ComponentRef<B>,
    private __appRef: ApplicationRef
  ) {

  }

  attach() {
    document.body.appendChild(this.__container.location.nativeElement);
    this.__appRef.attachView(this.__container.hostView);
    if (this.__componentRef) {
      this.__appRef.attachView(this.__componentRef.hostView);
    }
    if (this.__embeddedViewRef) {
      this.__appRef.attachView(this.__embeddedViewRef);
    }
  }

  detach() {
    document.body.removeChild(this.__container.location.nativeElement);
    this.__appRef.detachView(this.__container.hostView);
    if (this.__componentRef) {
      this.__appRef.detachView(this.__componentRef.hostView);
    }
    if (this.__embeddedViewRef) {
      this.__appRef.detachView(this.__embeddedViewRef);
    }      
    this.__container.destroy();
    if (this.__componentRef) {
      this.__componentRef.destroy();
    }
    if (this.__embeddedViewRef) {
      this.__embeddedViewRef.destroy();
    }
  }
}

export interface IDialog {
  close(): void;
}
