import { Component, OnDestroy } from '@angular/core';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { DialogService, IDialog } from 'src/public_api';

// CODESAMPLE DIALOG#EXAMPLE_1
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnDestroy {
  styleCode = BASIC_STYLE;
  __dialogInstance: IDialog;

  constructor(private dialog: DialogService) { }

  ngOnDestroy() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
      this.__dialogInstance = undefined;
    }
  }

  openDialog() {
    this.__dialogInstance = this.dialog.open(MyDialogComponent);
  }

}
// _CODESAMPLE

const BASIC_STYLE = `iw-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  background: rgba(192, 192, 192, 0.67);
  transition: opacity 0.5s;

  .dialog-container__content {
    position: absolute;
    top: 100px;
    left: 20%;
    width: 60%;
    background: white;
    max-height: calc(100% - 200px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.5s;
    transform: translateY(-100%);
    box-shadow: 2px 2px 4px 1px gray;
    padding: 15px;
  }

  &.iw-dialog-container--visible {
    opacity: 1;
    .dialog-container__content {
      transform: translateY(0);
    }
  }
}
`;
