import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { Component, HostListener } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SelectLabelDirective } from './select-label.directive';

@Component({
  template: '<div iwSelectLabel (open)="open()"></div>'
})
export class TestComponent {
  @HostListener('keydown')
  onKeydown() { }
  open() { }
}

describe('SelectLabelDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SelectLabelDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('calls the open output on click', fakeAsync(() => {
    spyOn(component, 'open');
    fixture.debugElement.query(By.css('[iwSelectLabel]')).triggerEventHandler('click', {});
    tick(0);
    expect(component.open).toHaveBeenCalled();
  }));

  it('calls the open output on key down', fakeAsync(() => {
    spyOn(component, 'open');
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 38;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('[iwSelectLabel]'))
      .triggerEventHandler('keydown', event);
    tick(0);
    expect(component.open).toHaveBeenCalled();
  }));

  it('calls the open output on key up', fakeAsync(() => {
    spyOn(component, 'open');
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 40;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('[iwSelectLabel]'))
      .triggerEventHandler('keydown', event);
    tick(0);
    expect(component.open).toHaveBeenCalled();
  }));

  it('calls the open output on key enter', fakeAsync(() => {
    spyOn(component, 'open');
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 13;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('[iwSelectLabel]'))
      .triggerEventHandler('keydown', event);
    tick(0);
    expect(component.open).toHaveBeenCalled();
  }));

  it('stops the propagation of keyboard events when it opens', fakeAsync(() => {
    spyOn(component, 'onKeydown');
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 13;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('[iwSelectLabel]'))
      .triggerEventHandler('keydown', event);
    tick(0);
    expect(component.onKeydown).not.toHaveBeenCalled();
  }));
});
