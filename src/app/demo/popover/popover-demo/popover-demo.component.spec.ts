/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UiModule } from '../../../ui/ui.module';
import { PopoverModule } from '../popover.module';
import { PopoverDemoComponent } from './popover-demo.component';
import { CustomPopoverHeader, CustomPopoverContent, CustomPopoverDemoComponent } from '../custom-popover-demo/custom-popover-demo.component';
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
