import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDemoComponent} from './dropdown/dropdown.component';
import {DropdownModule as UiDropdownModule} from "../../ui/dropdown/dropdown.module";

@NgModule({
  declarations: [DropdownDemoComponent],
  imports: [
    CommonModule,
    UiDropdownModule
  ],
  entryComponents: [DropdownDemoComponent]
})
export class DropdownModule {
}




