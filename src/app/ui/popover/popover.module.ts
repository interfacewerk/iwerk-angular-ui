import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';

@NgModule({
  entryComponents: [ PopoverContainerComponent, PopoverScrollMaskComponent ],
  imports: [
    CommonModule
  ],
  declarations: [ PopoverDirective, PopoverContainerComponent, PopoverScrollMaskComponent ],
  exports: [ PopoverDirective ]
})
export class PopoverModule { }
