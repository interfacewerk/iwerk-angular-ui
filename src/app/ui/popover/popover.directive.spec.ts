import { Component } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { PopoverModule } from './popover.module';

@Component({
  selector: 'popoverTestButton',
  template: `
    <button [iwPopover]="myPopoverTemplate"
      [isOpen]="isPopoverOpen1"
      (shouldClose)="shouldClose()"
      (click)="isPopoverOpen1 = !isPopoverOpen1">I open/close a popover</button>

    <ng-template #myPopoverTemplate>
      {{myText}}
    </ng-template>
  `
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
    expect((document.body.querySelectorAll('iw-popover-container')[0].textContent || '').trim()).toBe('popover content should be projected');
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
    <button [iwPopover]="myPopoverTemplate"
      [isOpen]="isPopoverOpen1"
      (shouldClose)="shouldClose()"
      (click)="isPopoverOpen1 = !isPopoverOpen1">I open/close a popover</button>

    <ng-template #myPopoverTemplate></ng-template>
  `
})
class TestButtonComponentWithNoEsc {
  escToClose: boolean;
  isPopoverOpen1 = true;
  shouldClose() {
    this.isPopoverOpen1 = false;
  }
}

describe('PopoverDirective basic features', () => {

  let comp:    TestButtonComponentWithNoEsc;
  let fixture: ComponentFixture<TestButtonComponentWithNoEsc>;
  let button:      DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonComponentWithNoEsc ],
      imports: [ PopoverModule ]
    });
    fixture = TestBed.createComponent(TestButtonComponentWithNoEsc);

    comp = fixture.componentInstance; // TestButtonComponentWithNoEsc test instance

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
