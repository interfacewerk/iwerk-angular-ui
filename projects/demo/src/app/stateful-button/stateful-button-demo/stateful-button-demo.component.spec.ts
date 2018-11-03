import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulButtonDemoComponent } from './stateful-button-demo.component';
import { UiModule } from 'iwerk-angular-ui';

describe('StatefulButtonDemoComponent', () => {
  let component: StatefulButtonDemoComponent;
  let fixture: ComponentFixture<StatefulButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulButtonDemoComponent ],
      imports: [ UiModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
