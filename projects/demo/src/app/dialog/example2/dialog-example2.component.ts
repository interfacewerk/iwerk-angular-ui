import { Component, OnDestroy } from '@angular/core';
import { DialogService, IDialog } from 'src/public_api';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-example2',
  templateUrl: './dialog-example2.component.html'
})
export class DialogExample2Component implements OnDestroy {
  dialogInstance: IDialog;

  constructor(private dialog: DialogService) { }

  ngOnDestroy() {
    if (this.dialogInstance) {
      this.dialogInstance.close();
      this.dialogInstance = undefined;
    }
  }

  open() {
    this.dialogInstance = this.dialog.open(MyDialogComponent);
  }
}
