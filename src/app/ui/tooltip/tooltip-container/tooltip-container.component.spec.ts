
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipContainerComponent } from './tooltip-container.component';
import { IW_TOOLTIP_CONFIG } from '../tooltip.config';
import { TooltipConfig } from '../tooltip-config.interface';

const config: TooltipConfig = {
  containerClass: 'class-in-config'
};

describe('TooltipContainerComponent', () => {
  let component: TooltipContainerComponent;
  let fixture: ComponentFixture<TooltipContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipContainerComponent],
      providers: [{
        provide: IW_TOOLTIP_CONFIG, useValue: config
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipContainerComponent);
    component = fixture.componentInstance;
    component.containerClass = 'container-class-test';
    fixture.detectChanges();
  });

  it('adds the containerClass provided as input', () => {
    expect(fixture.debugElement.classes['container-class-test']).toBe(true);
  });

  it('adds the containerClass provided in the injected config', () => {
    expect(fixture.debugElement.classes['class-in-config']).toBe(true);
  });
});
