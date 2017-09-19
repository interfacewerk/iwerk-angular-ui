import { Directive, TemplateRef, Input, OnDestroy } from '@angular/core';
import { DialogService, IDialog } from './dialog.service';

@Directive({
  selector: '[iwDialogTest]',
  exportAs: 'iw-dialog'
})
export class DialogDirective implements OnDestroy {
  @Input() escToClose: boolean;
  @Input() clickToClose: boolean;

  private __dialogInstance: IDialog;

  constructor(
    private dialogService: DialogService,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnDestroy() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }

  open() {
    if (this.__dialogInstance) {
      return;
    }
    this.__dialogInstance = this.dialogService.openTemplateRef(this.templateRef, null, {
      closeOnClickOutside: this.clickToClose === undefined ? true : this.clickToClose,
      closeOnEsc: this.escToClose === undefined ? true : this.escToClose,
      onClose: (dialog) => {
        if (this.__dialogInstance === dialog) {
          this.__dialogInstance = undefined;
        }
      }
    });
  }

  close() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }
}
