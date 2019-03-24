import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Renderer2,
  ElementRef,
  Optional,
  Inject
} from '@angular/core';
import { TooltipConfig } from '../tooltip-config.interface';
import { IW_TOOLTIP_CONFIG } from '../tooltip.config';

@Component({
  selector: 'iw-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipContainerComponent implements OnInit {
  @Input() containerClass: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Optional() @Inject(IW_TOOLTIP_CONFIG) private tooltipConfig: TooltipConfig
  ) { }

  ngOnInit() {
    if (this.containerClass) {
      this.renderer.addClass(this.elementRef.nativeElement, this.containerClass);
    }
    if (this.tooltipConfig && this.tooltipConfig.containerClass) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        this.tooltipConfig.containerClass
      );
    }
  }

}
