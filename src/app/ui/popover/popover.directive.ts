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

@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy {
  @Input() popoverClass: string;

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

  constructor(
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer,
    private appRef: ApplicationRef
  ) {}

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
      .create(this.injector, [ content.rootNodes ]);

    this.appRef.attachView(content);
    this.appRef.attachView(container.hostView);
    this.appRef.attachView(scrollMask.hostView);

    let escPressedHandler = this._onKeyPress.bind(this);
    window.addEventListener("keyup", escPressedHandler);

    this._elements = {
      content,
      container,
      scrollMask,
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
    this._elements.container.destroy();
    this._elements.scrollMask.destroy();
    window.removeEventListener('keyup', this._elements.escPressedHandler);
    this._elements = undefined;
  }

  _showPopover() {
    let container: HTMLElement = this._elements.container.location.nativeElement;
    let scrollMask: HTMLElement = this._elements.scrollMask.location.nativeElement;

    setTimeout(() => {
      container.style.visibility = 'hidden';
      container.classList.add(this.popoverClass);
      this.renderer.invokeElementMethod(document.body, 'appendChild', [scrollMask]);
      this.renderer.invokeElementMethod(document.body, 'appendChild', [container]);

      this._smartPosition();

      container.style.visibility = 'visible';
      container.classList.add('iw-popover-container--visible');
    }, 0);
  }

  _smartPosition() {
    let target: HTMLElement = this.elementRef.nativeElement;
    let container: HTMLElement = this._elements.container.location.nativeElement;

    let targetRect = target.getBoundingClientRect();
    let containerRect = target.getBoundingClientRect();
    let y = targetRect.top;
    let centerYBody = document.body.getBoundingClientRect().height / 2;
    if (y > centerYBody) {
      container.style.top = (target.getBoundingClientRect().top - container.offsetHeight) + 'px';
    } else {
      container.style.top = target.getBoundingClientRect().bottom + 'px';
    }

    let maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
    container.style.left = Math.min(maxLeft, target.getBoundingClientRect().left) + 'px';
    container.style.visibility = 'visible';
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
    clickSubscription: Subscription,
    escPressedHandler: EventListenerObject
  };

  _templateRef: TemplateRef<PopoverContext>;
  _isOpen: boolean = false;
  _escToClose: boolean = true;
}

export type PopoverContext = {}