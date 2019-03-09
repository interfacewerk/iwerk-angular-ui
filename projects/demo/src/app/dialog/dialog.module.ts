import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'projects/docs/src/lib/core/core.module';
import { DialogModule, PopoverModule, TooltipModule } from 'src/public_api';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExample1Component } from './example1/dialog-example1.component';
import { DialogExample2Component } from './example2/dialog-example2.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TooltipModule,
    PopoverModule,
    CoreModule
  ],
  declarations: [DialogComponent, MyDialogComponent, DialogExample1Component, DialogExample2Component],
  entryComponents: [ MyDialogComponent ]
})
export class DialogDemoModule { }
