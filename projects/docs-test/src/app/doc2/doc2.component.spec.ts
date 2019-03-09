import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doc2Component } from './doc2.component';

describe('Doc2Component', () => {
  let component: Doc2Component;
  let fixture: ComponentFixture<Doc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
