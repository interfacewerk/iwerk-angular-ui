/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let directive: TooltipDirective;
  let fixture: ComponentFixture<TooltipDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDirective);
    directive = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
