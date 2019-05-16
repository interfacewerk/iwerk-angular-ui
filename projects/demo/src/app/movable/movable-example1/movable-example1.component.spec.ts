import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableExample1Component } from './movable-example1.component';

describe('MovableExample1Component', () => {
  let component: MovableExample1Component;
  let fixture: ComponentFixture<MovableExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovableExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
