import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Component, NgModule, ElementRef } from '@angular/core';
import { PopoverService } from './popover.service';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';

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

  open() {
    return this.popover.open(TestComponent, this.element.nativeElement, {});
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
    expect(document.querySelector('iw-popover-container')).toBeDefined();
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

  it('creates a copy of the options argument', () => {
    const target = TestBed.createComponent(TestComponent);
    const popoverService = target.debugElement.injector.get(PopoverService);
    const options: any = {
      shouldClose: undefined
    };
    popoverService.open(TestComponent, target.debugElement.nativeElement, options);
    expect(options.shouldClose).toBe(undefined);
  });

});
