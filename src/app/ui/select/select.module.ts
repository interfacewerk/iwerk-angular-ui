import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { SelectSearchInputDirective } from './select-search-input.directive';
import { SelectionItemComponent } from './selection-item/selection-item.component';
import { LeftRightNavigationDirective } from './left-right-navigation.directive';
import { SelectOptionListDirective } from './select-option-list.directive';
import { SelectOptionListItemDirective } from './select-option-list-item.directive';
import { SelectComponent } from './select/select.component';
import { SelectLabelDirective } from './select-label.directive';
import { AutofocusInputDirective } from './autofocus-input.directive';
import { SelectHighlightCtrlDirective } from './select-highlight-ctrl.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MultiSelectComponent,
    SelectSearchInputDirective,
    SelectionItemComponent,
    LeftRightNavigationDirective,
    SelectOptionListDirective,
    SelectOptionListItemDirective,
    SelectComponent,
    SelectLabelDirective,
    AutofocusInputDirective,
    SelectHighlightCtrlDirective
  ],
  exports: [
    MultiSelectComponent,
    SelectComponent
  ]
})
export class SelectModule { }
