import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { CodeSampleModule } from '../code-sample/code-sample.module';
import { DialogModule, TooltipModule, PopoverModule } from 'src/public_api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DialogComponent }
    ]),
    DialogModule,
    TooltipModule,
    PopoverModule,
    CodeSampleModule
  ],
  declarations: [DialogComponent, MyDialogComponent],
  entryComponents: [ MyDialogComponent ]
})
export class DialogDemoModule { }
