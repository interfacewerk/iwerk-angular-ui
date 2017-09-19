import {
  Directive,
  OnInit,
  TemplateRef,
  ElementRef,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  Renderer,
  ComponentFactoryResolver,
  ComponentRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {
  TooltipContainerComponent
} from './tooltip-container/tooltip-container.component';

@Directive({
  selector: '[iwTooltipTarget]'
})
export class TooltipTargetDirective {
  constructor(public elementRef: ElementRef) {

  }
}

@Directive({
  selector: '[iwTooltip]'
})
export class TooltipDirective implements OnInit, AfterViewInit, OnDestroy, EventListenerObject {

  private __parent: HTMLElement;
  private _elements: {
    content: EmbeddedViewRef<any>,
    container: ComponentRef<TooltipContainerComponent>
  } |  undefined;

  constructor(
    private target: TooltipTargetDirective,
    private injector: Injector,
    private appRef: ApplicationRef,
    private renderer: Renderer,
    private componentFactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.__parent = this.target.elementRef.nativeElement;
    this.__parent.addEventListener('mouseenter', this);
    this.__parent.addEventListener('mouseleave', this);
  }

  ngOnDestroy() {
    this.__remove();
    this.__parent.removeEventListener('mouseenter', this);
    this.__parent.removeEventListener('mouseleave', this);
  }

  handleEvent(evt: Event): void {
    if (evt.type === 'mouseenter') {
      return this.onMouseEnter(<MouseEvent>evt);
    }
    if (evt.type === 'mouseleave') {
      return this.onMouseLeave(<MouseEvent>evt);
    }
  }

  onMouseEnter(event: MouseEvent) {
    if (!this._elements) {
      const content = this.templateRef.createEmbeddedView(this.injector);
      const container = this.componentFactoryResolver
        .resolveComponentFactory(TooltipContainerComponent)
        .create(this.injector, [content.rootNodes]);

      this._elements = {
        content,
        container
      };

      this.appRef.attachView(content);
      this.appRef.attachView(container.hostView);

      content.detectChanges();
      container.hostView.detectChanges();

      this._smartPosition();
    }

  }

  _smartPosition() {
    if (!this._elements) {
      return;
    }

    const target: HTMLElement = this.__parent;
    const container: HTMLElement = this._elements.container.location.nativeElement;
    const targetRect = target.getBoundingClientRect();

    // do that after, otherwise it can change the bounding client rect of the target
    this.renderer.invokeElementMethod(document.body, 'appendChild', [container]);

    const y = targetRect.top;
    const centerYBody = document.body.getBoundingClientRect().height / 2;
    if (y > centerYBody) {
      container.style.top = (targetRect.top - container.offsetHeight) + 'px';
    } else {
      container.style.top = targetRect.bottom + 'px';
    }

    const maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
    container.style.left = Math.min(maxLeft, targetRect.left) + 'px';
    container.style.visibility = 'visible';
  }

  onMouseLeave(event: MouseEvent) {
    this.__remove();
  }

  private __remove() {
    if (!this._elements) {
      return;
    }

    this.appRef.detachView(this._elements.content);
    this.appRef.detachView(this._elements.container.hostView);
    this._elements.container.hostView.detach();

    this._elements.content.destroy();
    this._elements.container.destroy();

    this._elements = undefined;
  }

}
