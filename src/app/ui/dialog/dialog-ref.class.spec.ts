
import {
  Directive,
  Component,
  NgModule,
  ApplicationRef,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { DialogRef } from './dialog-ref.class';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';

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
class TestComponent {
  @ViewChild(DialogTestDirective) directive: DialogTestDirective;
}


@NgModule({
  declarations: [
    TestComponent,
    DialogTestDirective,
    DialogContainerComponent
  ],
  entryComponents: [TestComponent]
})
class TestModule {

}

describe('dialog-ref.class', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [TestModule]
    });
  });

  it('adds the container to the body and removes it', inject([ApplicationRef], (appRef: ApplicationRef) => {
    const fixture = TestBed.createComponent(TestComponent);
    const container = TestBed.createComponent(DialogContainerComponent);
    const component = fixture.componentInstance;
    const view = component.directive.template.createEmbeddedView(null);
    const ref = new DialogRef(
      container.componentRef,
      view,
      appRef,
      () => { },
      {}
    );
    ref.attach();
    expect(document.body.children.item(document.body.children.length - 1))
      .toBe(container.componentRef.location.nativeElement);
    ref.detach();
    expect(document.body.children.item(document.body.children.length - 1))
      .not.toBe(container.componentRef.location.nativeElement);
  }));

  it('calls the options.onClose callback when detaching', inject([ApplicationRef], (appRef: ApplicationRef) => {
    const fixture = TestBed.createComponent(TestComponent);
    const container = TestBed.createComponent(DialogContainerComponent);
    const component = fixture.componentInstance;
    const view = component.directive.template.createEmbeddedView(null);
    const options = {
      onClose: () => { }
    };
    spyOn(options, 'onClose');
    const ref = new DialogRef(
      container.componentRef,
      view,
      appRef,
      () => { },
      options
    );
    ref.attach();
    ref.detach();
    expect(options.onClose).toHaveBeenCalled();
  }));

  it('calls the __close callback when the container calls onClose', inject([ApplicationRef], (appRef: ApplicationRef) => {
    const fixture = TestBed.createComponent(TestComponent);
    const container = TestBed.createComponent(DialogContainerComponent);
    const component = fixture.componentInstance;
    const view = component.directive.template.createEmbeddedView(null);
    const spied = {
      close: () => { }
    };
    spyOn(spied, 'close');
    const ref = new DialogRef(
      container.componentRef,
      view,
      appRef,
      spied.close,
      {}
    );
    ref.attach();
    ref.detach();
    container.componentInstance.onClose.emit();
    expect(spied.close).toHaveBeenCalled();
  }));
});
