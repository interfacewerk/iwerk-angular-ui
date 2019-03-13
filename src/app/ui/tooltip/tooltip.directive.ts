import {
  Directive,
  TemplateRef,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  ComponentFactoryResolver,
  ComponentRef,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  Input,
  Optional
} from '@angular/core';
import {
  TooltipContainerComponent
} from './tooltip-container/tooltip-container.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { smartPosition } from './helpers';
import { IW_TOOLTIP_CONFIG } from './tooltip.config';
import { TooltipConfig } from './tooltip-config.interface';

/**
 * The tooltip component can be used to display an extra piece of information to an element of an user interface.
 * This piece appears when the mouse is over this element.
 * Add a template that adds the `iwTooltip` directive inside the element where you want the tooltip to appear.
 *
 * ## Positionning
 * The tooltip is smartly positionned. It will be on top of the target if the target is on the bottom half of the screen.
 * It will be at the bottom of the target if the target is on the top half of the screen.
 ```ts
 import { TooltipModule } from 'iwerk-angular-ui';
 ```
 */
@Directive({
  selector: '[iwTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy, EventListenerObject {
  /**
   * A class for the tooltip container.
   */
  @Input() containerClass: string;
  /**
   * Whether the tooltip should be positionned horizontally. (default: `false`)
   */
  @Input() horizontal: boolean;
  /**
   * A delay before the tooltip appears. (default: `0`)
   */
  @Input() delay: number;

  private __timerId: any;
  private __parent: HTMLElement;
  private __elements: {
    content: EmbeddedViewRef<any>,
    container: ComponentRef<TooltipContainerComponent>
  } |  undefined;

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: string,
    @Optional() @Inject(IW_TOOLTIP_CONFIG) private tooltipConfig: TooltipConfig
  ) { }

  /**
   * @ignore
   */
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.__parent = (<HTMLElement>this.viewContainerRef.element.nativeElement).parentElement;
      this.__parent.addEventListener('mouseenter', this);
      this.__parent.addEventListener('mouseleave', this);
    }
  }

  /**
   * @ignore
   */
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      clearTimeout(this.__timerId);
      this.__remove();
      this.__parent.removeEventListener('mouseenter', this);
      this.__parent.removeEventListener('mouseleave', this);
    }
  }

  /**
   * @ignore
   */
  handleEvent(evt: Event): void {
    const scrollHandler = () => {
      document.removeEventListener('scroll', scrollHandler, true);
      this.__remove();
    };
    if (evt.type === 'mouseenter') {
      this.__timerId = setTimeout(() => {
        document.addEventListener('scroll', scrollHandler, true);
        return this.__onMouseEnter(<MouseEvent>evt);
      }, this.__delay);

    }
    if (evt.type === 'mouseleave') {
      clearTimeout(this.__timerId);
      document.removeEventListener('scroll', scrollHandler, true);
      return this.__onMouseLeave(<MouseEvent>evt);
    }
  }

  /**
   * @ignore
   */
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
        container: this.__elements.container.location.nativeElement
      }, this.__isHorizontal ? 'horizontal' : 'vertical');
    }

  }

  /**
   * @ignore
   */
  private get __isHorizontal(): boolean {
    if (this.horizontal === undefined) {
      return !!(this.tooltipConfig ? this.tooltipConfig.horizontal : false);
    }
    return this.horizontal;
  }

  /**
   * @ignore
   */
  private get __delay(): number {
    if (this.delay === undefined) {
      return this.tooltipConfig ? this.tooltipConfig.delay : 0;
    }
    return this.delay;
  }

  /**
   * @ignore
   */
  private __onMouseLeave(event: MouseEvent) {
    this.__remove();
  }

  /**
   * @ignore
   */
  private __remove() {
    if (!this.__elements) {
      return;
    }

    document.body.removeChild(this.__elements.container.location.nativeElement);

    this.appRef.detachView(this.__elements.content);
    this.appRef.detachView(this.__elements.container.hostView);
    this.__elements.container.hostView.detach();

    this.__elements.content.destroy();
    this.__elements.container.destroy();

    this.__elements = undefined;
  }

}
