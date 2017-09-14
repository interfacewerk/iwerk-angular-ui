import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogComponent } from './my-dialog.component';
import { DialogService } from '../../../ui/dialog/dialog.module';

describe('MyDialogComponent', () => {
  let component: MyDialogComponent;
  let fixture: ComponentFixture<MyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogComponent ],
      providers: [{
        provide: DialogService,
        useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
