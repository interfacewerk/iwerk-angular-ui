
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from 'iwerk-angular-ui';
import { PopoverDemoComponent } from './popover-demo.component';
import {
  CustomPopoverHeader,
  CustomPopoverContent,
  CustomPopoverDemoComponent
} from '../custom-popover-demo/custom-popover-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('PopoverDemoComponent', () => {
  let component: PopoverDemoComponent;
  let fixture: ComponentFixture<PopoverDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PopoverDemoComponent,
        CustomPopoverHeader,
        CustomPopoverContent,
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
