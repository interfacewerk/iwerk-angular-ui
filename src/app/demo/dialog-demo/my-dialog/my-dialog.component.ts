import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../../../ui/dialog/dialog.module';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.sass']
})
export class MyDialogComponent implements OnInit {
  @Input() title: string;

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

}
