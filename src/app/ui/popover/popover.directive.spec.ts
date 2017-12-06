import { Component } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopoverModule, PopoverService } from './popover.module';

@Component({
  selector: 'popoverTestButton',
  template: `
    <button (click)="isPopoverOpen1 = !isPopoverOpen1">I open/close a popover
      <ng-template iwPopover
        [isOpen]="isPopoverOpen1"
        (shouldClose)="shouldClose()">
        {{myText}}
      </ng-template>
    </button>`
})
class TestButtonComponent {
  isPopoverOpen1 = false;
  myText = 'popover content should be projected';
  shouldClose() {
    this.isPopoverOpen1 = false;
  }
}

describe('PopoverDirective basic features', () => {

  let comp:    TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;
  let button:      DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonComponent ],
      imports: [ PopoverModule ]
    });
    fixture = TestBed.createComponent(TestButtonComponent);

    comp = fixture.componentInstance; // TestButtonComponent test instance

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

    window.dispatchEvent(new KeyboardEvent('keyup', {
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

    window.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Escape'
    }));

    fixture.detectChanges();

    expect(document.body.querySelectorAll('iw-popover-container').length).toBe(1);
    expect(document.body.querySelectorAll('iw-popover-scroll-mask').length).toBe(1);
  }));

});

@Component({
  selector: 'popoverDirectionTestButton',
  template: `
    <button (click)="isPopoverOpen1 = !isPopoverOpen1">I open/close a popover
      <ng-template iwPopover
        [direction]="direction"
        [isOpen]="isPopoverOpen1"
        (shouldClose)="shouldClose()">
        {{myText}}
      </ng-template>
    </button>`
})
class TestButtonDirectionComponent {
  isPopoverOpen1 = false;
  myText = 'popover content should be projected';
  direction: string;

  shouldClose() {
    this.isPopoverOpen1 = false;
  }
}

describe('PopoverDirective direction input', () => {
  let popoverService: PopoverService;
  let button:      DebugElement;
  let fixture: ComponentFixture<TestButtonDirectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonDirectionComponent ],
      imports: [ PopoverModule ]
    });
    fixture = TestBed.createComponent(TestButtonDirectionComponent);

    popoverService = fixture.componentRef.injector.get(PopoverService);
    button = fixture.debugElement.query(By.css('button'));
  });

  const basicDirectionInputTest = (direction: string, expectedDirection: string) => {
    it('calls popoverService.openTemplateRef with direction=' + expectedDirection + ' when [direction]=' + direction,
      fakeAsync(() => {
        fixture.componentInstance.direction = direction;
        button.triggerEventHandler('click', null);
        const spy = spyOn(popoverService, 'openTemplateRef');
        fixture.detectChanges();
        tick(0);
        fixture.detectChanges();
        expect(popoverService.openTemplateRef).toHaveBeenCalled();
        // console.log(spy.calls.allArgs()[0].direction);
        expect(spy.calls.mostRecent().args[2].direction).toBe(expectedDirection);
      })
    );
  };

  basicDirectionInputTest('vertical', 'vertical');
  basicDirectionInputTest('horizontal', 'horizontal');
  basicDirectionInputTest(undefined, 'vertical');
  
});
