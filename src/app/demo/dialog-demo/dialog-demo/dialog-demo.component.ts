import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DialogDirective, DialogService, IDialog } from '../../../ui/dialog/dialog.module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.sass']
})
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild('myDialog1', { static: true }) myDialog1: DialogDirective;
  someValue = 667;

  private __dialogInstance: IDialog;

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
    }
  }

  openDialog() {
    this.__dialogInstance = this.dialog.open(MyDialogComponent, {
      escToClose: true
    }, {
      title: 'Programmatic Dialog'
    });
  }

  openDialog1() {
    this.myDialog1.open();
  }

}
