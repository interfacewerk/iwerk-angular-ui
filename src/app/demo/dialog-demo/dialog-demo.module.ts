import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog-demo/dialog-demo.component';
import { RouterModule } from '@angular/router';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DialogModule } from '../../ui/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DialogComponent }
    ]),
    DialogModule
  ],
  entryComponents: [MyDialogComponent],
  declarations: [DialogComponent, MyDialogComponent]
})
export class DialogDemoModule { }
