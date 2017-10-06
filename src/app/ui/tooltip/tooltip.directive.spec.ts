import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
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
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, TooltipDirective ],
      imports: [TestModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('appends the tooltip to the body when the mouse enters the element', () => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(1);
  });

  it('removes the tooltip when the mouse enters and leaves the element', () => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseleave'));
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(0);
  });

  it('removes the tooltip when the mouse enters and the directive is destroyed', () => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(1);
    fixture.destroy();
    expect(document.body.querySelectorAll('iw-tooltip-container').length).toBe(0);
  });

  it('projects the content', () => {
    (<HTMLElement>(fixture.nativeElement)).dispatchEvent(new MouseEvent('mouseenter'));
    expect(document.body.querySelectorAll('iw-tooltip-container').item(0).textContent).toBe('Here is my tooltip');
  });
});
