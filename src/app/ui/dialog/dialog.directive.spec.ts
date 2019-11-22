
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogOptions } from './dialog-container/dialog-container.component';
import { DialogDirective } from './dialog.directive';
import { DialogService, IDialogService } from './dialog.service';

class MockDialogService implements IDialogService {
  private __dialogInstance: {
    close: Function
  };

  openTemplateRef<T>(templateRef: TemplateRef<T>, context: T, options: DialogOptions) {
    this.close();
    const result = {
      close: () => {
        options.onClose(result);
      }
    };
    this.__dialogInstance = result;
    return result;
  }

  open() {
    return {
      close: () => { }
    };
  }

  close() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }
}

@Component({
  template: `
  <ng-template iwDialog #myDialog="iw-dialog">My dialog works!</ng-template>
  `
})
class TestComponent {
  @ViewChild('myDialog',  { static: true }) dialog: DialogDirective;
}

describe('DialogDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let mockService: IDialogService;
  let openSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDirective, TestComponent],
      providers: [{
        provide: DialogService,
        useClass: MockDialogService
      }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get(DialogService);
    openSpy = spyOn(mockService, 'openTemplateRef').and.callThrough();
    fixture.detectChanges();
  });

  it('exports via iw-dialog', () => {
    expect(component.dialog).toBeTruthy();
  });

  it('calls the openTemplateRef method of the dialog service only once', () => {
    component.dialog.open();
    component.dialog.open();
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(1);
  });

  it('calls the openTemplateRef method twice', () => {
    component.dialog.open();
    component.dialog.close();
    component.dialog.open();
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(2);
  });

  it('calls the openTemplateRef method twice if it has been closed somewhere else in between', () => {
    component.dialog.open();
    mockService.close();
    component.dialog.open();
    expect(mockService.openTemplateRef).toHaveBeenCalledTimes(2);
  });

  it('does not fail when calling .close twice', () => {
    expect(() => {
      component.dialog.open();
      component.dialog.close();
      component.dialog.close();
    }).not.toThrow();
  });

  it('uses input values when calling openTemplateRef', () => {
    component.dialog.clickToClose = false;
    component.dialog.escToClose = false;
    component.dialog.open();
    expect(openSpy.calls.mostRecent().args[2].clickToClose).toBe(false);
    expect(openSpy.calls.mostRecent().args[2].escToClose).toBe(false);
  });
});
