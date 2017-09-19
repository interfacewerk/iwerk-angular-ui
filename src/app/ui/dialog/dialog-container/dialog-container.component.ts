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
  Input
} from '@angular/core';

export interface DialogOptions {
  closeOnEsc?: boolean;
  closeOnClickOutside?: boolean;
  onClose?: (dialog: IDialog) => void;
}

export interface IDialog {
  close(): void;
}

@Component({
  selector: 'iw-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContainerComponent implements OnInit, AfterViewInit {
  @Input() dialogOptions: DialogOptions;
  @Output() onClose = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) { }

  @HostListener('window:keydown', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if ($event.keyCode === 27 && this.dialogOptions.closeOnEsc) {
      this.onClose.emit();
      $event.preventDefault();
    }
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if ($event.target === this.elementRef.nativeElement && this.dialogOptions.closeOnClickOutside) {
      this.onClose.emit();
      $event.preventDefault();
      $event.stopPropagation();
    }
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setElementClass(this.elementRef.nativeElement, 'iw-dialog-container--visible', true);
    }, 0);
  }

}
