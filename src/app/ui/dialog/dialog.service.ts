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
import {
  DialogContainerComponent,
  DialogOptions,
  IDialog
} from './dialog-container/dialog-container.component';
export { IDialog };

@Injectable()
export class DialogService {
  containerFactory: ComponentFactory<DialogContainerComponent>;

  private __defaultOptions: DialogOptions = {
    closeOnClickOutside: true,
    closeOnEsc: true,
    onClose: () => {}
  };

  private __previousDialog: {
    instance: DialogRef<DialogContainerComponent, any, any> | undefined
    ref: IDialog
  };

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
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        component.instance[key] = data[key];
      }
    }
    return this.__open(undefined, component, _options);
  }

  openTemplateRef<T>(templateRef: TemplateRef<T>, context: T, _options: DialogOptions): IDialog {
    const view = templateRef.createEmbeddedView(context);
    return this.__open(view, undefined, _options);
  }

  close() {
    if (this.__previousDialog) {
      this.__previousDialog.ref.close();
      this.__previousDialog = undefined;
    }
  }

  private __open<B, C>(
    embeddedViewRef: EmbeddedViewRef<C> | undefined,
    componentRef: ComponentRef<B> | undefined,
    _options?: DialogOptions
  ): IDialog {
    if (this.__previousDialog) {
      this.__previousDialog.ref.close();
      this.__previousDialog = undefined;
    }
    const options = Object.assign({}, this.__defaultOptions, _options);
    let container: ComponentRef<DialogContainerComponent> | undefined = undefined;
    if (embeddedViewRef) {
      container = this.containerFactory.create(this.injector, [embeddedViewRef.rootNodes]);
    }
    if (componentRef) {
      container = this.containerFactory.create(this.injector, [[componentRef.location.nativeElement]]);
    }
    if (!container) {
      throw new Error('To initialize the dialog, one must give an embedded view ref or a component ref');
    }
    container.instance.dialogOptions = options;
    const instance = new DialogRef(container, embeddedViewRef, componentRef, this.appRef);
    const ref = {
      close: () => {
        if (this.__previousDialog) {
          if (options.onClose) {
            options.onClose(ref);
          }
          this.__previousDialog.instance.detach();
          this.__previousDialog = undefined;
        }
      }
    };
    container.instance.onClose.subscribe(() => {
      ref.close();
    });
    this.__previousDialog = {
      instance,
      ref
    };
    this.__previousDialog.instance.attach();
    return ref;
  }
}

class DialogRef<A, B, C> {
  constructor(
    private __container: ComponentRef<A>,
    private __embeddedViewRef: EmbeddedViewRef<C> | undefined,
    private __componentRef: ComponentRef<B> | undefined,
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

