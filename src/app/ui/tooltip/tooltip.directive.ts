import {
  Directive,
  TemplateRef,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  Renderer,
  ComponentFactoryResolver,
  ComponentRef,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  Input
} from '@angular/core';
import {
  TooltipContainerComponent
} from './tooltip-container/tooltip-container.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { smartPosition } from './helpers';

@Directive({
  selector: '[iwTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy, EventListenerObject {
  @Input() containerClass: string;
  @Input() horizontal = false;

  private __parent: HTMLElement;
  private __elements: {
    content: EmbeddedViewRef<any>,
    container: ComponentRef<TooltipContainerComponent>
  } |  undefined;

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private renderer: Renderer,
    private componentFactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.__parent = (<HTMLElement>this.viewContainerRef.element.nativeElement).parentElement;
      this.__parent.addEventListener('mouseenter', this);
      this.__parent.addEventListener('mouseleave', this);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.__remove();
      this.__parent.removeEventListener('mouseenter', this);
      this.__parent.removeEventListener('mouseleave', this);
    }
  }

  handleEvent(evt: Event): void {
    if (evt.type === 'mouseenter') {
      return this.__onMouseEnter(<MouseEvent>evt);
    }
    if (evt.type === 'mouseleave') {
      return this.__onMouseLeave(<MouseEvent>evt);
    }
  }

  private __onMouseEnter(event: MouseEvent) {
    if (!this.__elements) {
      const content = this.templateRef.createEmbeddedView(this.injector);
      const container = this.componentFactoryResolver
        .resolveComponentFactory(TooltipContainerComponent)
        .create(this.injector, [content.rootNodes]);
      container.instance.containerClass = this.containerClass;

      this.__elements = {
        content,
        container
      };

      this.appRef.attachView(content);
      this.appRef.attachView(container.hostView);

      content.detectChanges();
      container.hostView.detectChanges();

      smartPosition({
        target: this.__parent,
        container: this.__elements.container.location.nativeElement,
        renderer: this.renderer
      }, this.horizontal ? 'horizontal' : 'vertical');
    }

  }

  private __onMouseLeave(event: MouseEvent) {
    this.__remove();
  }

  private __remove() {
    if (!this.__elements) {
      return;
    }

    this.renderer.invokeElementMethod(document.body, 'removeChild', [this.__elements.container.location.nativeElement]);

    this.appRef.detachView(this.__elements.content);
    this.appRef.detachView(this.__elements.container.hostView);
    this.__elements.container.hostView.detach();

    this.__elements.content.destroy();
    this.__elements.container.destroy();

    this.__elements = undefined;
  }

}
