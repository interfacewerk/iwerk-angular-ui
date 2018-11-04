import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExampleComponent } from './component-example.component';

describe('ComponentExampleComponent', () => {
  let component: ComponentExampleComponent;
  let fixture: ComponentFixture<ComponentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
