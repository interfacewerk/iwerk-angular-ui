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
});
