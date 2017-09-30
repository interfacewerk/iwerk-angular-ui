import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContainerComponent } from './dialog-container.component';

describe('DialogContainerComponent', () => {
  let component: DialogContainerComponent;
  let fixture: ComponentFixture<DialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContainerComponent);
    component = fixture.componentInstance;
    component.dialogOptions = {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
