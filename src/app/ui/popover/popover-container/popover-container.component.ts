import {
  Injector,
  Component,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  Renderer,
  ViewChild,
  ElementRef,
  EmbeddedViewRef
} from '@angular/core';

@Component({
  selector: 'iw-popover-container',
  templateUrl: './popover-container.component.html',
  styleUrls: ['./popover-container.component.scss']
})
export class PopoverContainerComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  constructor(
    private viewContainer: ViewContainerRef,
    private renderer: Renderer,
    private injector: Injector
  ) {

  }

  ngOnInit() {
  }

}
