
import {
  Directive,
  Component,
  NgModule,
  ApplicationRef,
  TemplateRef,
  ViewChild,
  EmbeddedViewRef
} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
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
  @ViewChild(DialogTestDirective,  { static: true }) directive: DialogTestDirective;
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

  let fixture: ComponentFixture<TestComponent>;
  let container: ComponentFixture<DialogContainerComponent>;
  let component: TestComponent;
  let view: EmbeddedViewRef<any>;
  let appRef: ApplicationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [TestModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    container = TestBed.createComponent(DialogContainerComponent);
    component = fixture.componentInstance;
    view = component.directive.template.createEmbeddedView(null);
    appRef = fixture.debugElement.injector.get(ApplicationRef);
  });

  it('adds the container to the body and removes it', () => {
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
  });

  it('calls the options.onClose callback when detaching', () => {
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
  });

  it('calls the __close callback when the container calls onClose', () => {
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
  });

  it('does not call appRef.attachView if viewRef is falsy', () => {
    const ref = new DialogRef(
      container.componentRef,
      undefined,
      appRef,
      undefined,
      {}
    );
    spyOn(appRef, 'attachView');
    ref.attach();
    expect(appRef.attachView).toHaveBeenCalledTimes(1);
    expect(appRef.attachView).not.toHaveBeenCalledWith(undefined);
  });

  it('does not call appRef.detachView if viewRef is falsy', () => {
    const ref = new DialogRef(
      container.componentRef,
      undefined,
      appRef,
      undefined,
      {}
    );
    spyOn(appRef, 'detachView');
    ref.detach();
    expect(appRef.detachView).toHaveBeenCalledTimes(1);
    expect(appRef.detachView).not.toHaveBeenCalledWith(undefined);
  });
});
