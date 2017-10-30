import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Component, NgModule, ElementRef } from '@angular/core';
import { PopoverService } from './popover.service';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
import { PopoverOptions } from './popover-options.interface';

@Component({
  template: 'my popover test'
})
class TestComponent {

}

@Component({
  template: ''
})
class Test2Component {
  constructor(private popover: PopoverService, private element: ElementRef) {

  }

  open(options?: PopoverOptions) {
    return this.popover.open(TestComponent, this.element.nativeElement, options || {});
  }
}

@NgModule({
  entryComponents: [TestComponent, PopoverContainerComponent, PopoverScrollMaskComponent],
  declarations: [TestComponent, Test2Component, PopoverContainerComponent, PopoverScrollMaskComponent]
})
class TestModule {

}

describe('PopoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopoverService],
      imports: [TestModule],
      declarations: []
    });
  });

  it('adds the popover container to the body', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test2Component);
    const popover = fixture.componentInstance.open();
    tick(0);
    expect(document.querySelector('iw-popover-container')).not.toBeNull();
    popover.close();
  }));

  it('removes the popover container from the body', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test2Component);
    const popover = fixture.componentInstance.open();
    tick(0);
    popover.close();
    expect(document.querySelector('iw-popover-container')).toBeNull();
  }));

  it('does not throw an error if no options are provided', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test2Component);
    const popoverService = fixture.debugElement.injector.get(PopoverService);
    expect(() => {
      const popover = popoverService.open(TestComponent, fixture.nativeElement);
      tick(0);
      popover.close();
    }).not.toThrow();
  }));

  it('creates a copy of the options argument', fakeAsync(() => {
    const target = TestBed.createComponent(TestComponent);
    const popoverService = target.debugElement.injector.get(PopoverService);
    const options: any = {
      shouldClose: undefined
    };
    const popover = popoverService.open(TestComponent, target.debugElement.nativeElement, options);
    tick(0);
    expect(options.shouldClose).toBe(undefined);
    popover.close();
  }));

  it('calls the init function if provided', fakeAsync(() => {
    const target = TestBed.createComponent(TestComponent);
    const popoverService = target.debugElement.injector.get(PopoverService);
    const initObj = {
      init: () => { }
    };
    spyOn(initObj, 'init');
    const popover = popoverService.open(TestComponent, target.debugElement.nativeElement, {}, initObj.init);
    tick(0);
    expect(initObj.init).toHaveBeenCalled();
    popover.close();
  }));

  it('calls the optional shouldClose function if provided when clicking on the scroll mask', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test2Component);
    const options: PopoverOptions = {
      shouldClose: () => {}
    };
    spyOn(options, 'shouldClose');
    const popover = fixture.componentInstance.open(options);
    tick(0);
    document.querySelector('iw-popover-scroll-mask').dispatchEvent(new MouseEvent('click'));
    expect(options.shouldClose).toHaveBeenCalled();
    popover.close();
  }));

  it('calls the optional shouldClose function if provided when pressing ESC', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test2Component);
    const popoverService = fixture.debugElement.injector.get(PopoverService);
    const options: PopoverOptions = {
      shouldClose: () => {}
    };
    spyOn(options, 'shouldClose');
    const popover = popoverService.open(TestComponent, fixture.nativeElement, options);
    tick(0);
    const event = document.createEvent('Event');
    (<{keyCode: number}><any>event).keyCode = 27;
    event.initEvent('keydown', true, true);
    window.dispatchEvent(event);
    tick(0);
    expect(options.shouldClose).toHaveBeenCalled();
    popover.close();
  }));

});
