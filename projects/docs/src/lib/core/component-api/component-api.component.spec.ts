import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentApiComponent } from './component-api.component';

describe('ComponentApiComponent', () => {
  let component: ComponentApiComponent;
  let fixture: ComponentFixture<ComponentApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
