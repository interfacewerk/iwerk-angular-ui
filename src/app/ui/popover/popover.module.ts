import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
import { PopoverService, Popover } from './popover.service';
export { PopoverService, Popover };

@NgModule({
  entryComponents: [ PopoverContainerComponent, PopoverScrollMaskComponent ],
  imports: [
    CommonModule
  ],
  declarations: [
    PopoverDirective,
    PopoverContainerComponent,
    PopoverScrollMaskComponent
  ],
  exports: [ PopoverDirective ],
  providers: [ PopoverService ]
})
export class PopoverModule { }
