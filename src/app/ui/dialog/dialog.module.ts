import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogService, IDialog } from './dialog.service';
import { DialogDirective } from './dialog.directive';
import { DialogFocusTrapDirective } from './dialog-focus-trap.directive';
export { IW_DIALOG_CONFIG } from './dialog.config';
export { DialogConfig } from './dialog-config.interface';
export { DialogService, IDialog, DialogDirective };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogContainerComponent,
    DialogDirective,
    DialogFocusTrapDirective,
  ],
  entryComponents: [DialogContainerComponent],
  exports: [DialogDirective],
  providers: [DialogService]
})
export class DialogModule { }
