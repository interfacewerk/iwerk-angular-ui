import { Directive, EventEmitter, Input, OnDestroy, Output, TemplateRef } from '@angular/core';
import { DialogService, IDialog } from './dialog.service';

/**
 * The dialog component is meant to focus user's attention on one particular task or content.
 * It is displayed on top of the rest.
 ```ts
 import { DialogModule } from 'iwerk-angular-ui';
 ```
 */
@Directive({
  selector: '[iwDialog]',
  exportAs: 'iw-dialog'
})
export class DialogDirective implements OnDestroy {
  /**
   * User can press Escape to close the dialog.
   */
  @Input() escToClose: boolean;
  /**
   * User can click outside of the dialog to close it.
   */
  @Input() clickToClose: boolean;
  /**
   * A class that is added to the container.
   */
  @Input() containerClass: string;

  /**
   * Emitted when the dialog has been closed.
   */
  @Output() didClose = new EventEmitter<IDialog>();

  private __dialogInstance: IDialog;

  constructor(
    private dialogService: DialogService,
    private templateRef: TemplateRef<any>
  ) { }

  /**
   * @ignore
   */
  ngOnDestroy() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }

  /**
   * Open the dialog.
   */
  open() {
    if (this.__dialogInstance) {
      return;
    }
    this.__dialogInstance = this.dialogService.openTemplateRef(this.templateRef, null, {
      clickToClose: this.clickToClose === undefined ? true : this.clickToClose,
      containerClass: this.containerClass || '',
      escToClose: this.escToClose === undefined ? true : this.escToClose,
      onClose: (dialog) => {
        if (this.__dialogInstance === dialog) {
          this.didClose.emit(dialog);
          this.__dialogInstance = undefined;
        }
      }
    });
  }

  /**
   * Close the dialog.
   */
  close() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }
}
