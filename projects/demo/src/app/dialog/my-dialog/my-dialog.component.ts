import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/public_api';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  tsCode = `import { DialogService } from 'iwerk-angular-ui';

@Component(...)
export class MyDialogComponent {

  constructor(private dialog: DialogService) { }

  close() {
    this.dialog.close();
  }
}`;
  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

}
