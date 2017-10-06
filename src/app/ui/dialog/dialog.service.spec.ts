import { DialogService } from './dialog.service';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { TestBed } from '@angular/core/testing';
import { Component, NgModule, ApplicationRef } from '@angular/core';

@Component({
  template: 'some dialog {{someVariable}}'
})
class DialogServiceTestComponent {
  someVariable: string;
}

@NgModule({
  declarations: [DialogContainerComponent, DialogServiceTestComponent],
  entryComponents: [DialogContainerComponent, DialogServiceTestComponent]
})
class TestModule {

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

});
