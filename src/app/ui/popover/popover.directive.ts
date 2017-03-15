import {
  ApplicationRef,
  Renderer,
  Directive,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  OnDestroy,
  ElementRef,
  EmbeddedViewRef
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';

export type PopoverPosition = {
  vertical: 'top' | 'bottom'
};

export type PopoverHorizontalAlignment = 'leftWithLeft' | undefined;

@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy {
  @Input() popoverClass: string;
  @Input() arrowClass: string;
  @Input() horizontalAlignment: PopoverHorizontalAlignment;
  @Input() scrollMaskClass: string;

  @Input() set iwPopover(v: TemplateRef<PopoverContext>) {
    this._templateRef = v;
    this._update();
  }

  @Input() set isOpen(v: boolean) {
    this._isOpen = v;
    this._update();
  }

  @Input() set escToClose(v: boolean) {
    this._escToClose = v;
  }

  @Output() shouldClose = new EventEmitter();
  @Output() popoverPosition = new EventEmitter<PopoverPosition>();
  @Output() onToggle = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer,
    private appRef: ApplicationRef
  ) { }

  ngOnDestroy() {
    this._close();
  }

  _update() {
    if (this._isOpen && !this._elements && this._templateRef) {
      setTimeout(() => this._open(), 0);
    } else if (!this._isOpen && this._elements) {
      this._close();
    }
  }

  _open() {
    // create the mask component
    let scrollMask = this.componentFactoryResolver.resolveComponentFactory(PopoverScrollMaskComponent)
      .create(this.injector);
    // we bind to the output (which is an observable)
    let clickSubscription = scrollMask.instance.onClick.asObservable().subscribe(() => this.shouldClose.emit());
    // create the popover container
    let content = this._templateRef.createEmbeddedView(this.injector);
    let container = this.componentFactoryResolver.resolveComponentFactory(PopoverContainerComponent)
      .create(this.injector, [content.rootNodes]);

    let arrowElement = document.createElement('div');
    arrowElement.classList.add('iw-popover-arrow-element');

    this.appRef.attachView(content);
    this.appRef.attachView(container.hostView);
    this.appRef.attachView(scrollMask.hostView);

    let escPressedHandler = this._onKeyPress.bind(this);
    window.addEventListener("keyup", escPressedHandler);

    this._elements = {
      content,
      container,
      scrollMask,
      arrowElement,
      clickSubscription,
      escPressedHandler
    };

    this._showPopover();
  }

  _close() {
    if (!this._elements) return;
    this._elements.clickSubscription.unsubscribe();
    this._elements.content.destroy();
    this.appRef.detachView(this._elements.container.hostView);
    this.appRef.detachView(this._elements.scrollMask.hostView);
    this.renderer.invokeElementMethod(document.body, 'removeChild', [this._elements.arrowElement]);
    this._elements.container.destroy();
    this._elements.scrollMask.destroy();
    window.removeEventListener('keyup', this._elements.escPressedHandler);
    this._elements = undefined;
    this.onToggle.emit(false);
  }

  _showPopover() {
    if (!this._elements) return;

    let container: HTMLElement = this._elements.container.location.nativeElement;
    let scrollMask: HTMLElement = this._elements.scrollMask.location.nativeElement;
    let arrowElement: HTMLElement = this._elements.arrowElement;

    setTimeout(() => {
      container.style.visibility = 'hidden';
      arrowElement.style.visibility = 'hidden';
      container.classList.add(this.popoverClass);
      if (this.scrollMaskClass) {
        scrollMask.classList.add(this.scrollMaskClass);
      }
      if (this.arrowClass) {
        arrowElement.classList.add(this.arrowClass);
      }
      this.renderer.invokeElementMethod(document.body, 'appendChild', [scrollMask]);
      this.renderer.invokeElementMethod(document.body, 'appendChild', [container]);
      this.renderer.invokeElementMethod(document.body, 'appendChild', [arrowElement]);

      this._smartPosition();

      container.classList.add('iw-popover-container--visible');
      arrowElement.classList.add('iw-popover-arrow-element--visible');

      this.onToggle.emit(true);
    }, 0);
  }

  _smartPosition() {
    if (!this._elements) return;

    let target: HTMLElement = this.elementRef.nativeElement;
    let container: HTMLElement = this._elements.container.location.nativeElement;
    let arrowElement: HTMLElement = this._elements.arrowElement;

    let { top, left, bottom, right } = target.getBoundingClientRect();
    let centerYBody = document.body.getBoundingClientRect().height / 2;
    if (top > centerYBody) {
      container.style.top = (top - container.offsetHeight) + 'px';
      this._elements.arrowElement.style.top = top + 'px';
      this._elements.arrowElement.classList.add('from-the-top');
      this.popoverPosition.emit({ vertical: 'top' });
    } else {
      container.style.top = bottom + 'px';
      this._elements.arrowElement.style.top = container.style.top;
      this._elements.arrowElement.classList.add('from-the-bottom');
      this.popoverPosition.emit({ vertical: 'bottom' });
    }

    let centerX = 0.5 * (left + right);
    this._elements.arrowElement.style.left = `${centerX}px`;
    if (this.horizontalAlignment === 'leftWithLeft') {
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

  _onKeyPress(event: KeyboardEvent) {
    if (this._escToClose && event.key === 'Escape') {
      event.preventDefault();
      this._close();
    }
  }

  _elements: {
    content: EmbeddedViewRef<PopoverContext>,
    container: ComponentRef<PopoverContext>,
    scrollMask: ComponentRef<PopoverContext>,
    arrowElement: HTMLElement,
    clickSubscription: Subscription,
    escPressedHandler: EventListenerObject
  } |  undefined;

  _templateRef: TemplateRef<PopoverContext>;
  _isOpen: boolean = false;
  _escToClose: boolean = true;
}

export type PopoverContext = {}
