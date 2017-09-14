
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDirective } from './dialog.directive';

describe('DialogDirective', () => {
  let directive: DialogDirective;
  let fixture: ComponentFixture<DialogDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
