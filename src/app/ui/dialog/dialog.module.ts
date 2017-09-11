import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogService, IDialog } from './dialog.service';
import { DialogDirective } from './dialog.directive';
export { DialogService, IDialog, DialogDirective };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogContainerComponent, DialogDirective],
  entryComponents: [DialogContainerComponent],
  exports: [DialogDirective],
  providers: [DialogService]
})
export class DialogModule { }
