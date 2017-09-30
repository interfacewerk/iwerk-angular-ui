import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Renderer,
  ElementRef,
  Optional,
  Inject
} from '@angular/core';
import { TooltipConfig } from '../tooltip-config.interface';
import { IW_TOOLTIP_CONFIG } from '../tooltip.config';

@Component({
  selector: 'iw-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipContainerComponent implements OnInit {
  @Input() containerClass: string;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    @Optional() @Inject(IW_TOOLTIP_CONFIG) private tooltipConfig: TooltipConfig
  ) { }

  ngOnInit() {
    if (this.containerClass) {
      this.renderer.setElementClass(this.elementRef.nativeElement, this.containerClass, true);
    }
    if (this.tooltipConfig && this.tooltipConfig.containerClass) {
      this.renderer.setElementClass(
        this.elementRef.nativeElement,
        this.tooltipConfig.containerClass,
        true
      );
    }
  }

}
