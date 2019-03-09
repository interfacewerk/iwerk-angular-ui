import { Component, OnDestroy } from '@angular/core';
import { DialogService, IDialog } from 'src/public_api';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnDestroy {
  dialogInstance: IDialog;

  constructor(private dialog: DialogService) { }

  ngOnDestroy() {
    if (this.dialogInstance) {
      this.dialogInstance.close();
      this.dialogInstance = undefined;
    }
  }

  openDialog() {
    this.dialogInstance = this.dialog.open(MyDialogComponent);
  }

}
