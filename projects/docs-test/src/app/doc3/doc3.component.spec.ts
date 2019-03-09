import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doc3Component } from './doc3.component';

describe('Doc3Component', () => {
  let component: Doc3Component;
  let fixture: ComponentFixture<Doc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
