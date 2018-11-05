import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDescriptionComponent } from './component-description.component';

describe('ComponentDescriptionComponent', () => {
  let component: ComponentDescriptionComponent;
  let fixture: ComponentFixture<ComponentDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
