import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponent } from './docs.component';
import { DocsModule } from '../docs.module';
import { COMPONENT_PAGES } from '../routes.token';

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DocsModule ],
      providers: [
        { provide: COMPONENT_PAGES, useValue: [] }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
