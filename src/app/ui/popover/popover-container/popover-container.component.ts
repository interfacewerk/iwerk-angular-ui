import {
  Injector,
  Component,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  Renderer,
  ViewChild,
  ElementRef,
  EmbeddedViewRef,
  ViewEncapsulation,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'iw-popover-container',
  templateUrl: './popover-container.component.html',
  styleUrls: ['./popover-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverContainerComponent {
  @ViewChild('content') content: ElementRef;

  constructor() {}

}
