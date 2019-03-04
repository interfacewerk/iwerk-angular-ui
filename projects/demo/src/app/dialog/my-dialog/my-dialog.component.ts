import { Component } from '@angular/core';
import { DialogService } from 'src/public_api';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html'
})
export class MyDialogComponent {
  constructor(private dialog: DialogService) { }

  close() {
    this.dialog.close();
  }

}
