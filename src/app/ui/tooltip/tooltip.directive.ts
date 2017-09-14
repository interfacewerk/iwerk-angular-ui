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
  AfterViewInit
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
export class TooltipDirective implements OnInit, AfterViewInit {

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
    this.__parent.addEventListener('mouseenter', $event => this.onMouseEnter($event));
    this.__parent.addEventListener('mouseleave', $event => this.onMouseLeave($event));
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

      this.renderer.invokeElementMethod(document.body, 'appendChild', [container.location.nativeElement]);

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
    // const containerRect = target.getBoundingClientRect();
    const y = targetRect.top;
    const centerYBody = document.body.getBoundingClientRect().height / 2;
    if (y > centerYBody) {
      container.style.top = (target.getBoundingClientRect().top - container.offsetHeight) + 'px';
    } else {
      container.style.top = target.getBoundingClientRect().bottom + 'px';
    }

    const maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
    container.style.left = Math.min(maxLeft, target.getBoundingClientRect().left) + 'px';
    container.style.visibility = 'visible';
  }

  onMouseLeave(event: MouseEvent) {
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
