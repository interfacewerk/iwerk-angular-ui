import { Component, NgZone, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopoverModule, PopoverService } from './popover.module';
import { PopoverDirective } from './popover.directive';

@Component({
  selector: 'popoverTestButton',
  template: `
    <button (click)="isPopoverOpen1 = !isPopoverOpen1">I open/close a popover
      <ng-template iwPopover
        [horizontal]="horizontal"
        [isOpen]="isPopoverOpen1"
        (shouldClose)="shouldClose()">
        {{myText}}
      </ng-template>
    </button>`
})
class TestButtonComponent {
  isPopoverOpen1 = false;
  myText = 'popover content should be projected';
  otherVariable = 1;
  horizontal = false;

  shouldClose() {
    this.isPopoverOpen1 = false;
  }
}

describe('PopoverDirective basic features', () => {

  let fixture: ComponentFixture<TestButtonComponent>;
  let button: DebugElement;
  let popoverService: PopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonComponent ],
      imports: [ PopoverModule ]
    });
    fixture = TestBed.createComponent(TestButtonComponent);
    popoverService = TestBed.get(PopoverService);
    button = fixture.debugElement.query(By.css('button'));
  });

  it('appends the popover container to the body and projects content', fakeAsync(() => {
    button.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(1);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(1);
    expect((document.body.querySelectorAll('iw-popover-container')[0].textContent || '').trim())
      .toBe('popover content should be projected');
  }));

  it('closes if iw-popover is destroyed', fakeAsync(() => {
    button.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    fixture.destroy();
    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(0);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(0);
  }));

  it('closes if user clicks on the mask and isOpen becomes false', fakeAsync(() => {
    button.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    document.body.querySelectorAll('iw-popover-scroll-mask').item(0).dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(0);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(0);
  }));

  it('calls the service with horizontal: true', fakeAsync(() => {
    const spy: jasmine.Spy = spyOn(popoverService, 'openTemplateRef').and.callThrough();
    fixture.componentInstance.horizontal = true;
    fixture.detectChanges();
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();
    expect(spy.calls.mostRecent().args[2].horizontal).toBe(true);
  }));

});

@Component({
  selector: 'popoverTestButton',
  template: `
    <button (click)="isPopoverOpen1 = !isPopoverOpen1">
      I open/close a popover
      <ng-template iwPopover
        [isOpen]="isPopoverOpen1"
        (shouldClose)="shouldClose()"
        [escToClose]="escToClose">
      </ng-template>
    </button>
  `
})
class TestButtonComponentWithNoEscComponent {
  escToClose: boolean;
  isPopoverOpen1 = true;
  shouldClose() {
    this.isPopoverOpen1 = false;
  }
}

describe('PopoverDirective basic features', () => {

  let comp:    TestButtonComponentWithNoEscComponent;
  let fixture: ComponentFixture<TestButtonComponentWithNoEscComponent>;
  let button:      DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonComponentWithNoEscComponent ],
      imports: [ PopoverModule ]
    });
    fixture = TestBed.createComponent(TestButtonComponentWithNoEscComponent);

    comp = fixture.componentInstance; // TestButtonComponentWithNoEscComponent test instance

    button = fixture.debugElement.query(By.css('button'));
  });

  it('closes if user presses ESC', fakeAsync(() => {
    button.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Escape'
    }));

    fixture.detectChanges();

    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(0);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(0);
  }));


  it('does not close if user presses ESC and [escToClose]="false"', fakeAsync(() => {
    comp.escToClose = false;
    fixture.detectChanges();
    tick(0);
    fixture.detectChanges();

    document.body.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Escape'
    }));

    fixture.detectChanges();

    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(1);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(1);
  }));
});


describe('PopoverDirective behavior', () => {
  it('updates if and only if isOpen changes', fakeAsync(() => {
    const mockService = <PopoverService><any>{
      openTemplateRef: () => {}
    };
    const directive = new PopoverDirective(mockService, undefined, <ViewContainerRef>{
      element: {
        nativeElement: {
          parentElement: undefined
        }
      }
    }, <NgZone>{
      run: cb => { cb(); },
      runOutsideAngular: cb => { setTimeout(cb, 0); },
    }, <ChangeDetectorRef>{
      detectChanges: () => {},
      markForCheck: () => {}
    });
    spyOn(mockService, 'openTemplateRef');
    directive.isOpen = true;
    directive.ngOnChanges({
      isOpen: {
        currentValue: true,
        previousValue: false,
        firstChange: true,
        isFirstChange: () => true
      }
    });
    tick(0);
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(1);
    directive.isOpen = false;
    directive.ngOnChanges({
      isOpen: {
        currentValue: false,
        previousValue: true,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    tick(0);
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(1);
    directive.popoverClass = 'some class';
    directive.ngOnChanges({
      popoverClass: {
        currentValue: false,
        previousValue: true,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    tick(0);
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(1);
  }));
});
