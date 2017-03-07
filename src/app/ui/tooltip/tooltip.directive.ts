import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ElementRef,
  Injector,
  ApplicationRef,
  EmbeddedViewRef,
  Renderer,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener
} from '@angular/core';
import {
  TooltipContainerComponent
} from './tooltip-container/tooltip-container.component';

@Directive({
  selector: '[iwTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input() set iwTooltip(v: TemplateRef<TooltipContext>) {
    this._templateRef = v;
  }

  constructor(
    private elementRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef,
    private renderer: Renderer,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let element = <HTMLElement>this.elementRef.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter(event: MouseEvent) {
    if (!this._elements) {
      let content = this._templateRef.createEmbeddedView(this.injector);
      let container = this.componentFactoryResolver
        .resolveComponentFactory(TooltipContainerComponent)
        .create(this.injector, [ content.rootNodes ]);

      this._elements = {
        content,
        container
      };

      this.appRef.attachView(content);
      this.appRef.attachView(container.hostView);

      content.detectChanges();
      container.hostView.detectChanges();

      this.renderer.invokeElementMethod(document.body, 'appendChild', [ container.location.nativeElement ]);

      this._smartPosition();
    }
    
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

  @HostListener('mouseleave')
  onMouseLeave(event: MouseEvent) {
    if (!this._elements) return;
    this.appRef.detachView(this._elements.content);
    this.appRef.detachView(this._elements.container.hostView);
    this._elements.container.hostView.detach();
    
    this._elements.content.destroy();
    this._elements.container.destroy();

    this._elements = undefined;
  }

  _elements: {
    content: EmbeddedViewRef<TooltipContext>,
    container: ComponentRef<TooltipContainerComponent>
  } | undefined = undefined;
  
  _templateRef: TemplateRef<TooltipContext>;

}

type TooltipContext = {}