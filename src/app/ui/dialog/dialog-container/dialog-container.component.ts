import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  Renderer,
  AfterViewInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

export interface DialogOptions {
  escToClose?: boolean;
  clickToClose?: boolean;
  containerClass?: string;
  onClose?: (dialog: IDialog) => void;
}

export interface IDialog {
  close(): void;
}

@Component({
  selector: 'iw-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DialogContainerComponent implements OnInit, AfterViewInit {
  @Input() dialogOptions: DialogOptions;
  @Output() onClose = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('body:keydown', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if ($event.keyCode === 27 && this.dialogOptions.escToClose) {
      this.onClose.emit();
      $event.preventDefault();
    }
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if ($event.target === this.elementRef.nativeElement && this.dialogOptions.clickToClose) {
      this.onClose.emit();
      $event.preventDefault();
      $event.stopPropagation();
    }
  }


  ngOnInit() {
    const classes = this.dialogOptions.containerClass.split(' ').filter(s => !!s);
    for (const c of classes) {
      this.renderer.setElementClass(this.elementRef.nativeElement, c, true);
    }
  }

  ngAfterViewInit() {
    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'tabindex', '0');
    this.focus();
    setTimeout(() => {
      this.renderer.setElementClass(this.elementRef.nativeElement, 'iw-dialog-container--visible', true);
    }, 0);
  }

  focus() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
  }
}
