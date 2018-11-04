import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogModule, PopoverModule, TooltipModule } from 'src/public_api';
import { CoreModule } from '../core/core.module';
import { DialogComponent, DialogExample1Component } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DialogComponent }
    ]),
    DialogModule,
    TooltipModule,
    PopoverModule,
    CoreModule
  ],
  declarations: [DialogComponent, MyDialogComponent, DialogExample1Component],
  entryComponents: [ MyDialogComponent ]
})
export class DialogDemoModule { }
