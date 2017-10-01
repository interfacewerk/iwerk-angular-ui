import { DialogService } from './dialog.service';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';

@Component({
  template: 'some dialog'
})
class DialogServiceTestComponent {

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

  it('should not throw an error when no option is provided', () => {
    expect(() => dialogService.open(DialogServiceTestComponent)).not.toThrow();
  });
});
