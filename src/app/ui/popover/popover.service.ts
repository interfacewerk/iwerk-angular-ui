import {
  Injectable,
  TemplateRef,
  ComponentRef,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  EmbeddedViewRef,
  Type,
  Optional,
  Inject
} from '@angular/core';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
import { IW_POPOVER_CONFIG } from './popover.config';
import { PopoverConfig } from './popover-config.interface';
import { smartPosition, addClasses, combineOptionsAndDefaults } from './helpers';
import { PopoverOptions } from './popover-options.interface';
export { PopoverPosition } from './popover-position.interface';
export { PopoverOptions };

export interface IPopover {
  close: () => void;
}

class PopoverImpl implements IPopover {
  private isClosed = false;

  constructor(
    private embeddedViewRef: EmbeddedViewRef<any>,
    private appRef: ApplicationRef,
    private componentRef: ComponentRef<any>,
    private container: ComponentRef<PopoverContainerComponent>,
    private scrollMask: ComponentRef<PopoverScrollMaskComponent>,
    private arrowElement: HTMLElement
  ) {

  }

  close() {
    if (this.isClosed) {
      return;
    }
    this.isClosed = true;
    if (this.embeddedViewRef) {
      this.embeddedViewRef.destroy();
      this.appRef.detachView(this.embeddedViewRef);
    }
    if (this.componentRef) {
      this.componentRef.destroy();
      this.appRef.detachView(this.componentRef.hostView);
    }
    this.arrowElement.remove();
    this.appRef.detachView(this.container.hostView);
    this.appRef.detachView(this.scrollMask.hostView);
    this.container.destroy();
    this.scrollMask.destroy();
  }
}

@Injectable()
export class Popover {
  private __instance: IPopover;

  constructor() { }

  close() {
    this.__instance.close();
  }

  setInstance(instance: IPopover) {
    this.__instance = instance;
  }
}

@Injectable()
export class PopoverService {

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    @Optional() @Inject(IW_POPOVER_CONFIG) private popoverConfig: PopoverConfig
  ) { }

  openTemplateRef<T>(templateRef: TemplateRef<T>, target: HTMLElement, options: PopoverOptions): IPopover {
    return this.__open(
      null,
      templateRef.createEmbeddedView(null),
      target,
      combineOptionsAndDefaults(this.popoverConfig, options)
    );
  }

  open<T>(componentType: Type<T>, target: HTMLElement, options?: PopoverOptions, init?: (component: T) => void): IPopover {
    const reflInj = Injector.create([{provide: Popover, deps: []}], this.injector);

    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const component = factory.create(reflInj);
    if (init) {
      init(component.instance);
    }
    const popover: Popover = reflInj.get(Popover);
    const popoverOptions: PopoverOptions = Object.assign({}, options || {});
    popoverOptions.shouldClose = () => {
      if (options && options.shouldClose) {
        options.shouldClose();
      }
      popover.close();
    };

    const instance = this.__open(
      component,
      null,
      target,
      combineOptionsAndDefaults(this.popoverConfig, popoverOptions)
    );
    popover.setInstance(instance);
    return instance;
  }

  private __open<T>(
    componentRef: ComponentRef<T>,
    embeddedViewRef: EmbeddedViewRef<T>,
    target: HTMLElement,
    options: PopoverOptions
  ) {
    const arrowElement = document.createElement('div');
    arrowElement.classList.add('iw-popover-arrow-element');

    // create the popover container
    const container = this.componentFactoryResolver.resolveComponentFactory(PopoverContainerComponent)
      .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
    // create the mask component
    const scrollMask = this.componentFactoryResolver.resolveComponentFactory(PopoverScrollMaskComponent)
      .create(this.injector);

    // we bind to the output (which is an observable)
    scrollMask.instance.clickOutsideToClose = options.clickOutsideToClose;
    scrollMask.instance.onClose.subscribe(() => {
      options.shouldClose();
    });

    container.instance.escToClose = options.escToClose;
    container.instance.onClose.subscribe(() => {
      options.shouldClose();
    });


    if (componentRef) {
      this.appRef.attachView(componentRef.hostView);
    }
    if (embeddedViewRef) {
      this.appRef.attachView(embeddedViewRef);
    }
    this.appRef.attachView(container.hostView);
    this.appRef.attachView(scrollMask.hostView);

    this.__showPopover({
      arrowElement,
      container: container.location.nativeElement,
      scrollMask: scrollMask.location.nativeElement,
      target
    }, options);

    return new PopoverImpl(
      embeddedViewRef,
      this.appRef,
      componentRef,
      container,
      scrollMask,
      arrowElement
    );
  }

  private __showPopover(elements: {
    container: HTMLElement
    scrollMask: HTMLElement
    arrowElement: HTMLElement
    target: HTMLElement
  }, options: PopoverOptions) {
    const container: HTMLElement = elements.container;
    const scrollMask: HTMLElement = elements.scrollMask;
    const arrowElement: HTMLElement = elements.arrowElement;

    setTimeout(() => {
      container.style.visibility = 'hidden';
      arrowElement.style.visibility = 'hidden';
      addClasses(container, options.popoverClass);
      addClasses(scrollMask, options.scrollMaskClass);
      addClasses(arrowElement, options.arrowClass);

      if (options.zIndex) {
        container.style.zIndex = options.zIndex.toString();
        arrowElement.style.zIndex = options.zIndex.toString();
        scrollMask.style.zIndex = (options.zIndex - 1).toString();
      }

      options.appendTo.appendChild(container);
      options.appendTo.appendChild(arrowElement);
      options.appendTo.appendChild(scrollMask);

      smartPosition(elements, options);

      container.classList.add('iw-popover-container--visible');
      arrowElement.classList.add('iw-popover-arrow-element--visible');
    }, 0);
  }

}

