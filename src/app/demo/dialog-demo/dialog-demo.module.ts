import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog-demo/dialog-demo.component';
import { RouterModule } from '@angular/router';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DialogModule, IW_DIALOG_CONFIG, DialogConfig } from '../../ui/dialog/dialog.module';

const dialogConfig: DialogConfig = {
  closeOnClickOutside: true,
  closeOnEsc: false
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DialogComponent }
    ]),
    DialogModule
  ],
  entryComponents: [MyDialogComponent],
  declarations: [DialogComponent, MyDialogComponent],
  providers: [{
    provide: IW_DIALOG_CONFIG, useValue: dialogConfig
  }]
})
export class DialogDemoModule { }
