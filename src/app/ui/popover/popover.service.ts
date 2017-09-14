import {
  Injectable,
  TemplateRef,
  ComponentRef,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  EmbeddedViewRef,
  Type,
  ReflectiveInjector
} from '@angular/core';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';

@Injectable()
export class Popover {
  private __instance: IPopover;

  constructor() {}

  close() {
    this.__instance.close();
  }

  setInstance(instance: IPopover) {
    this.__instance = instance;
  }
}

export interface IPopover {
  close: () => void;
}

export type PopoverPosition = {
  vertical: 'top' | 'bottom'
};

export type PopoverHorizontalAlignment = 'leftWithLeft' | undefined;

export interface PopoverOptions {
  popoverClass?: string;
  arrowClass?: string;
  horizontalAlignment?: PopoverHorizontalAlignment;
  scrollMaskClass?: string;
  escToClose?: boolean;
  clickOutsideToClose?: boolean;
  shouldClose?: () => void;
  popoverPosition?: (p: PopoverPosition) => void;
}

@Injectable()
export class PopoverService {

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) { }

  openTemplateRef<T>(templateRef: TemplateRef<T>, target: HTMLElement, options: PopoverOptions): IPopover {
    return this.__open(null, templateRef.createEmbeddedView(null), target, this.__combineOptionsAndDefaults(options));
  }

  open<T>(componentType: Type<T>, target: HTMLElement, options?: PopoverOptions, init?: (component: T) => void): IPopover {
    const reflInj = ReflectiveInjector.resolveAndCreate([Popover], this.injector);
    
    const factory = this.componentFactoryResolver
      .resolveComponentFactory(
        componentType
      );
    const component = factory.create(reflInj);
    if (init) {
      init(component.instance);
    }
    const popover: Popover = reflInj.get(Popover);

    const instance = this.__open(component, null, target, this.__combineOptionsAndDefaults(Object.assign(options, {
      shouldClose: () => {
        popover.close()
      }
    })));
    popover.setInstance(instance);
    return instance;
  }

  private __combineOptionsAndDefaults(options: PopoverOptions): PopoverOptions {
    return {
      escToClose: options.escToClose === undefined ? true : options.escToClose,
      clickOutsideToClose: options.clickOutsideToClose === undefined ? true : options.clickOutsideToClose,
      arrowClass: options.arrowClass === undefined ? '' : options.arrowClass,
      popoverClass: options.popoverClass === undefined ? '' : options.popoverClass,
      scrollMaskClass: options.scrollMaskClass === undefined ? '' : options.scrollMaskClass,
      horizontalAlignment: options.horizontalAlignment,
      shouldClose: options.shouldClose || (() => {}),
      popoverPosition: options.popoverPosition || (() => {})
    };
  }

  private __open<T>(
    componentRef: ComponentRef<T>,
    embeddedViewRef: EmbeddedViewRef<T>,
    target: HTMLElement,
    options: PopoverOptions
  ) {
    // create the mask component
    let scrollMask = this.componentFactoryResolver.resolveComponentFactory(PopoverScrollMaskComponent)
    .create(this.injector);
    // we bind to the output (which is an observable)
    scrollMask.instance.clickOutsideToClose = options.clickOutsideToClose;
    scrollMask.instance.onClose.subscribe(() => {
      options.shouldClose();
    });
    // create the popover container
    let container = this.componentFactoryResolver.resolveComponentFactory(PopoverContainerComponent)
      .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
      
    container.instance.escToClose = options.escToClose;
    container.instance.onClose.subscribe(() => {
      options.shouldClose();
    });

    let arrowElement = document.createElement('div');
    arrowElement.classList.add('iw-popover-arrow-element');

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

    const instance = {
      close: () => {
        if (embeddedViewRef) {
          embeddedViewRef.destroy();
          this.appRef.detachView(embeddedViewRef);
        }
        if (componentRef) {
          componentRef.destroy();
          this.appRef.detachView(componentRef.hostView);
        }
        this.appRef.detachView(container.hostView);
        this.appRef.detachView(scrollMask.hostView);
        document.body.removeChild(arrowElement);
        container.destroy();
        scrollMask.destroy();
      }
    };

    return instance;
  }

  private __showPopover(elements: {
    container: HTMLElement
    scrollMask: HTMLElement
    arrowElement: HTMLElement
    target: HTMLElement
  }, options: PopoverOptions) {
    let container: HTMLElement = elements.container;
    let scrollMask: HTMLElement = elements.scrollMask;
    let arrowElement: HTMLElement = elements.arrowElement;

    setTimeout(() => {
      container.style.visibility = 'hidden';
      arrowElement.style.visibility = 'hidden';
      container.classList.add(options.popoverClass);
      if (options.scrollMaskClass) {
        scrollMask.classList.add(options.scrollMaskClass);
      }
      if (options.arrowClass) {
        arrowElement.classList.add(options.arrowClass);
      }
      document.body.appendChild(scrollMask);
      document.body.appendChild(container);
      document.body.appendChild(arrowElement);

      this.__smartPosition(elements, options);

      container.classList.add('iw-popover-container--visible');
      arrowElement.classList.add('iw-popover-arrow-element--visible');
    }, 0);
  }

  private __smartPosition(elements: {
    container: HTMLElement
    scrollMask: HTMLElement
    arrowElement: HTMLElement
    target: HTMLElement
  }, options: PopoverOptions) {
    let target: HTMLElement = elements.target;
    let container: HTMLElement = elements.container;
    let arrowElement: HTMLElement = elements.arrowElement;

    let { top, left, bottom, right } = target.getBoundingClientRect();
    let centerYBody = document.body.getBoundingClientRect().height / 2;
    if (top > centerYBody) {
      container.style.top = (top - container.offsetHeight) + 'px';
      arrowElement.style.top = top + 'px';
      arrowElement.classList.add('from-the-top');
      options.popoverPosition({ vertical: 'top' });
    } else {
      container.style.top = bottom + 'px';
      arrowElement.style.top = container.style.top;
      arrowElement.classList.add('from-the-bottom');
      options.popoverPosition({ vertical: 'bottom' });
    }

    let centerX = 0.5 * (left + right);
    arrowElement.style.left = `${centerX}px`;
    if (options.horizontalAlignment === 'leftWithLeft') {
      let maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
      container.style.left = Math.max(0, Math.min(maxLeft, left)) + 'px';
    }
    else {
      let maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
      container.style.left = Math.max(0, Math.min(maxLeft, centerX - 0.5 * container.offsetWidth)) + 'px';
    }

    container.style.visibility = 'visible';
    arrowElement.style.visibility = 'visible';
  }
}
