import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableDemoComponent } from './movable-demo.component';

describe('MovableDemoComponent', () => {
  let component: MovableDemoComponent;
  let fixture: ComponentFixture<MovableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
