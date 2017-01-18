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
  DoCheck,
  ViewContainerRef
} from '@angular/core';

import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';

@Directive({
  selector: '[iwPopover]'
})
export class PopoverDirective implements OnDestroy {

  @Input() set iwPopover(v: TemplateRef<PopoverContext>) {
    this._templateRef = v;
    this._update();
  }

  @Input() set isOpen(v: boolean) {
    this._isOpen = v;
    this._update();
  }

  @Output() shouldClose = new EventEmitter();

  constructor(
    private viewContainerRef: ViewContainerRef,
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
    let scrollMask = this.componentFactoryResolver.resolveComponentFactory(PopoverScrollMaskComponent)
      .create(this.injector);
    scrollMask.instance.onClick.asObservable().subscribe(() => this.shouldClose.emit());
    let content = this._templateRef.createEmbeddedView(this.injector);
    let container = this.componentFactoryResolver.resolveComponentFactory(PopoverContainerComponent)
      .create(this.injector, [ content.rootNodes ]);

    this.appRef.attachView(content);
    this.appRef.attachView(container.hostView);
    this.appRef.attachView(scrollMask.hostView);

    setTimeout(() => {
      (<HTMLElement>container.location.nativeElement).style.visibility = 'hidden';
      this.renderer.invokeElementMethod(document.body, 'appendChild', [scrollMask.location.nativeElement]);
      this.renderer.invokeElementMethod(document.body, 'appendChild', [container.location.nativeElement]);
      this._positionToBottom(container.location.nativeElement, this.viewContainerRef.element.nativeElement);
      (<HTMLElement>container.location.nativeElement).style.visibility = 'visible';
    }, 0);

    this._elements = {
      container: container,
      scrollMask: scrollMask
    };
  }

  _close() {
    if (!this._elements) return;
    this.appRef.detachView(this._elements.container.hostView);
    this.appRef.detachView(this._elements.scrollMask.hostView);
    this._elements.container.destroy();
    this._elements.scrollMask.destroy();
    this._elements = null;
  }

  _positionToBottom(element: HTMLElement, target: HTMLElement) {
    let w = element.getBoundingClientRect().width;
    let maxLeft = document.body.getBoundingClientRect().width - w;
    element.style.left = Math.min(maxLeft, target.getBoundingClientRect().left) + 'px';
    element.style.top = target.getBoundingClientRect().bottom + 'px';
    element.style.visibility = 'visible';
  }

  _elements: {
    container: ComponentRef<PopoverContext>,
    scrollMask: ComponentRef<PopoverContext>
  } = null;

  _templateRef: TemplateRef<PopoverContext> = null;
  _isOpen: boolean = null;
}

export type PopoverContext = {}