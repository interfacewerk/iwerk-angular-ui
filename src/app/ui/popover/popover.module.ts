import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective, PopoverPosition, PopoverTargetDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
import { PopoverService, IPopover, Popover } from './popover.service';
export { PopoverPosition, PopoverService, IPopover, Popover };

@NgModule({
  entryComponents: [ PopoverContainerComponent, PopoverScrollMaskComponent ],
  imports: [
    CommonModule
  ],
  declarations: [ PopoverDirective, PopoverContainerComponent, PopoverScrollMaskComponent, PopoverTargetDirective ],
  exports: [ PopoverDirective, PopoverTargetDirective ],
  providers: [ PopoverService ]
})
export class PopoverModule { }
