import { Component, OnInit, ViewChild } from '@angular/core';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DialogDirective, DialogService, IDialog } from '../../../ui/dialog/dialog.module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('myDialog1') myDialog1: DialogDirective;
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
    this.__dialogInstance = this.dialog.open(MyDialogComponent, undefined, {
      title: 'Programmatic Dialog'
    });
  }

  openDialog1() {
    this.myDialog1.open();
  }

  code1 = `class MyComponent {
    constructor(private dialog: DialogService) { }
    
    openDialog() {
      this.dialog.open(MyDialogComponent, {...});
    }
  }`;

  code2 = `
  <button (click)="myDialog1.open()">Open a dialog with a template</button>
  ...  
  <ng-template iwDialogTest #myDialog1="iw-dialog">
    <app-my-dialog title="Template Dialog"></app-my-dialog>
  </ng-template>`;
}
