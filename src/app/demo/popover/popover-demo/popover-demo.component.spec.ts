
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../ui/ui.module';
import { CustomPopoverDemoComponent } from '../custom-popover-demo/custom-popover-demo.component';
import { PopoverDemoComponent } from './popover-demo.component';

describe('PopoverDemoComponent', () => {
  let component: PopoverDemoComponent;
  let fixture: ComponentFixture<PopoverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PopoverDemoComponent,
        CustomPopoverDemoComponent
      ],
      imports: [
        UiModule,
        BrowserModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
