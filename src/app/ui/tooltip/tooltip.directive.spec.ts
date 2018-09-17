import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, NgModule, ViewContainerRef, TemplateRef, ComponentFactoryResolver, ApplicationRef, Renderer } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';

@Component({
  template: '<ng-template iwTooltip>Here is my tooltip</ng-template>'
})
class TestComponent {

}

@NgModule({
  declarations: [TooltipContainerComponent],
  entryComponents: [
    TooltipContainerComponent,
  ]
})
class TestModule {}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, TooltipDirective ],
      imports: [TestModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('appends the tooltip to the body when the mouse enters the element', fakeAsync(() => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    tick();
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(1);
  }));

  it('removes the tooltip when the mouse enters and leaves the element', fakeAsync(() => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    tick();
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseleave'));
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(0);
  }));

  it('removes the tooltip when the mouse enters and the directive is destroyed', fakeAsync(() => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    tick();
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(1);
    fixture.destroy();
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(0);
  }));
});

describe('TooltipDirective behavior', () => {
  let viewContainerRef: ViewContainerRef;
  let templateRef: TemplateRef<any>;
  let componentFactoryResolver: ComponentFactoryResolver;
  let appRef: ApplicationRef;

  beforeEach(() => {
    viewContainerRef = <ViewContainerRef>{
      element: {
        nativeElement: {
          parentElement: document.createElement('div')
        }
      }
    };

    templateRef = <TemplateRef<any>><any>{
      createEmbeddedView: () => {
        return {
          detectChanges: () => {},
          rootNodes: [document.createElement('div')],
          destroy: () => {}
        };
      }
    };

    componentFactoryResolver = <ComponentFactoryResolver><any>{
      resolveComponentFactory: () => {
        return {
          create: () => {
            return {
              hostView: {
                detectChanges: () => {},
                detach: () => {}
              },
              location: {
                nativeElement: document.createElement('div')
              },
              instance: new TooltipContainerComponent(undefined, undefined, undefined),
              destroy: () => {}
            };
          }
        };
      }
    };

    appRef = <ApplicationRef><any>{
      attachView: () => {},
      detachView: () => {}
    };
  });

  it('attaches events only if platform=browser', () => {
    const directive = new TooltipDirective(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      viewContainerRef,
      'browser',
      {}
    );
    spyOn(viewContainerRef.element.nativeElement.parentElement, 'addEventListener');
    spyOn(viewContainerRef.element.nativeElement.parentElement, 'removeEventListener');
    directive.ngAfterViewInit();
    expect(viewContainerRef.element.nativeElement.parentElement.addEventListener).toHaveBeenCalledTimes(2);
    directive.ngOnDestroy();
    expect(viewContainerRef.element.nativeElement.parentElement.removeEventListener).toHaveBeenCalledTimes(2);
  });

  it('does not attach events only if platform !== browser', () => {
    const directive = new TooltipDirective(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      viewContainerRef,
      'server',
    {});
    spyOn(viewContainerRef.element.nativeElement.parentElement, 'addEventListener');
    spyOn(viewContainerRef.element.nativeElement.parentElement, 'removeEventListener');
    directive.ngAfterViewInit();
    expect(viewContainerRef.element.nativeElement.parentElement.addEventListener).toHaveBeenCalledTimes(0);
    directive.ngOnDestroy();
    expect(viewContainerRef.element.nativeElement.parentElement.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('does not do anything if tooltip is already open', fakeAsync(() => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: () => {},
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    spyOn(templateRef, 'createEmbeddedView').and.callThrough();
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'mouseenter' });
    directive.handleEvent(<Event>{ type: 'mouseenter' });
    tick();
    expect(templateRef.createEmbeddedView).toHaveBeenCalledTimes(1);
  }));

  it('closes the tooltip on mouseleave', fakeAsync(() => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: () => {},
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    spyOn(templateRef, 'createEmbeddedView').and.callThrough();
    spyOn(appRef, 'detachView').and.callThrough();
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'mouseenter' });
    tick();
    expect(templateRef.createEmbeddedView).toHaveBeenCalledTimes(1);
    directive.handleEvent(<Event>{ type: 'mouseleave' });
    expect(appRef.detachView).toHaveBeenCalledTimes(2);
  }));

  it('does not do anything if tooltip is not open', () => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: () => {},
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    spyOn(templateRef, 'createEmbeddedView').and.callThrough();
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'mouseleave' });
  });

  it('does not do anything if event is not enter or mouse', () => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: () => {},
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    spyOn(templateRef, 'createEmbeddedView').and.callThrough();
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'aaa' });
    expect(templateRef.createEmbeddedView).toHaveBeenCalledTimes(0);
  });

  it('positions the tooltip horizontally', fakeAsync(() => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: (element: HTMLElement, method: string, args: any[]) => {
          if (method === 'appendChild') {
            (args || []).forEach(el => element.appendChild(el));
          }
        },
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    directive.horizontal = true;
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'mouseenter' });
    tick();
    expect(document.body.querySelector('.iw-tooltip-container--right')).not.toBeNull();
  }));

  it('append the tooltip with 1 second delay', fakeAsync(() => {
    const directive = new TooltipDirective(
      undefined,
      appRef,
      <Renderer><any>{
        invokeElementMethod: (element: HTMLElement, method: string, args: any[]) => {
          if (method === 'appendChild') {
            (args || []).forEach(el => element.appendChild(el));
          }
        },
      },
      componentFactoryResolver,
      templateRef,
      viewContainerRef,
      'browser',
      {}
    );
    directive.delay = 1000;
    directive.ngAfterViewInit();
    directive.handleEvent(<Event>{ type: 'mouseenter' });
    tick(1000);
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(0);
  }));

});
