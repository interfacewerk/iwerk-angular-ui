import { Directive, TemplateRef, Input } from '@angular/core';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[iwDialogTest]',
  exportAs: 'iw-dialog'
})
export class DialogDirective {
  @Input() escToClose: boolean;
  @Input() clickToClose: boolean;

  constructor(private dialogService: DialogService, private templateRef: TemplateRef<any>) {

  }

  ngOnInit() {
  }

  open() {
    this.dialogService.openTemplateRef(this.templateRef, {
      closeOnClickOutside: this.clickToClose === undefined ? true : this.clickToClose,
      closeOnEsc: this.escToClose === undefined ? true : this.escToClose
    });
  }
}