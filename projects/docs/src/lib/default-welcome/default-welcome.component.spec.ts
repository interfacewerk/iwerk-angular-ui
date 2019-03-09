import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWelcomeComponent } from './default-welcome.component';

describe('DefaultWelcomeComponent', () => {
  let component: DefaultWelcomeComponent;
  let fixture: ComponentFixture<DefaultWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
