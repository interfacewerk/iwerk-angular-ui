import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doc1Component } from './doc1.component';

describe('Doc1Component', () => {
  let component: Doc1Component;
  let fixture: ComponentFixture<Doc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
