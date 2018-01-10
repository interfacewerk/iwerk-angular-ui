import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core/';

import { SelectDemoComponent } from './select-demo.component';

describe('SelectDemoComponent', () => {
  let component: SelectDemoComponent;
  let fixture: ComponentFixture<SelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDemoComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
