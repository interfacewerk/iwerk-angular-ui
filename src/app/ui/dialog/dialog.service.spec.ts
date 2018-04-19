import { DialogService } from './dialog.service';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { TestBed } from '@angular/core/testing';
import {
  Directive,
  Component,
  NgModule,
  ApplicationRef,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  template: 'some dialog {{someVariable}}'
})
class DialogServiceTestComponent {
  someVariable = 'default string';
}

@Directive({
  selector: '[dialogTest]'
})
class DialogTestDirective {
  constructor(public template: TemplateRef<any>) {

  }
}

@Component({
  template: '<ng-template dialogTest></ng-template>'
})
class DialogServiceTest2Component {
  @ViewChild(DialogTestDirective) directive: DialogTestDirective;
}

@NgModule({
  declarations: [
    DialogContainerComponent,
    DialogServiceTestComponent,
    DialogServiceTest2Component,
    DialogTestDirective
  ],
  entryComponents: [DialogContainerComponent, DialogServiceTestComponent]
})
class TestModule {

}

class TestClass {
  someVariable() {}
}

describe('dialog.service', () => {
  let dialogService: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [DialogService],
      imports: [TestModule]
    });
    dialogService = TestBed.get(DialogService);
  });

  it('appends a container to the body and is able to remove it', () => {
    const dialog = dialogService.open(DialogServiceTestComponent);
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(1);
    dialog.close();
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(0);
  });

  it('only opens one dialog at a time', () => {
    dialogService.open(DialogServiceTestComponent);
    dialogService.open(DialogServiceTestComponent);
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(1);
    dialogService.close();
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(0);
  });

  it('does not throw an error when no option is provided', () => {
    expect(() => dialogService.open(DialogServiceTestComponent)).not.toThrow();
    dialogService.close();
  });

  it('initializes the members of the projected content', () => {
    dialogService.open(DialogServiceTestComponent, undefined, {
      someVariable: 'here it is'
    });
    const appRef: ApplicationRef = TestBed.get(ApplicationRef);
    appRef.tick();
    expect(document.body.querySelectorAll('iw-dialog-container').item(0).textContent.trim()).toBe('some dialog here it is');
    dialogService.close();
  });

  it('opens with a TemplateRef given', () => {
    const fixture = TestBed.createComponent(DialogServiceTest2Component);
    const component = fixture.componentInstance;
    dialogService.openTemplateRef(component.directive.template, null, {});
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(1);
    dialogService.close();
  });

  it('opens with a TemplateRef given and closes it', () => {
    const fixture = TestBed.createComponent(DialogServiceTest2Component);
    const component = fixture.componentInstance;
    dialogService.openTemplateRef(component.directive.template, null, {});
    dialogService.close();
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(0);
  });

  it('opens with a TemplateRef given and closes it with the IDialog reference', () => {
    const fixture = TestBed.createComponent(DialogServiceTest2Component);
    const component = fixture.componentInstance;
    const dialog = dialogService.openTemplateRef(component.directive.template, null, {});
    dialog.close();
    expect(document.body.querySelectorAll('iw-dialog-container').length).toBe(0);
  });

  it('excludes non property values', () => {
    dialogService.open(DialogServiceTestComponent, {}, new TestClass());
    const appRef: ApplicationRef = TestBed.get(ApplicationRef);
    appRef.tick();
    expect(document.body.querySelectorAll('iw-dialog-container').item(0).textContent.trim()).toBe('some dialog default string');
  });

  it('does not throw when calling close on an already closed dialog', () => {
    expect(() => {
      const ref1 = dialogService.open(DialogServiceTestComponent, {}, new TestClass());
      dialogService.open(DialogServiceTestComponent, {}, new TestClass());
      ref1.close();
    }).not.toThrow();
  });

});
