import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { Component, HostListener } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SelectSearchInputDirective } from './select-search-input.directive';

@Component({
  template: '<input type="text" iwSelectSearchInput (back)="back()"/>'
})
export class TestComponent {
  @HostListener('keydown')
  onKeydown() { }
  back() { }
}

describe('SelectSearchInputDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SelectSearchInputDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('calls the back output on backspace keyup if the input is empty', fakeAsync(() => {
    spyOn(component, 'back');
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 8;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('input')).triggerEventHandler('keydown', event);
    tick(0);
    fixture.debugElement.query(By.css('input')).triggerEventHandler('keyup', event);
    tick(0);
    expect(component.back).toHaveBeenCalled();
  }));

  it('does not call the back output on backspace keyup if the input is not empty', fakeAsync(() => {
    spyOn(component, 'back');
    fixture.debugElement.query(By.css('input')).nativeElement.value = 'a';
    const event = document.createEvent('Event');
    (<{ keyCode: number }><any>event).keyCode = 8;
    event.initEvent('keydown', true, true);
    fixture.debugElement.query(By.css('input')).triggerEventHandler('keydown', event);
    tick(0);
    fixture.debugElement.query(By.css('input')).triggerEventHandler('keyup', event);
    tick(0);
    expect(component.back).not.toHaveBeenCalled();
  }));

});
