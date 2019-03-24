import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDocsExample2Component } from './tree-docs-example2.component';

describe('TreeDocsExample2Component', () => {
  let component: TreeDocsExample2Component;
  let fixture: ComponentFixture<TreeDocsExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDocsExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDocsExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
