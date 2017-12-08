import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { LeftRightNavigationDirective } from '../left-right-navigation.directive';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionItemComponent {
  @Input() item: Keyp.Select.Option;

  constructor(private leftRightNavigation: LeftRightNavigationDirective) {}

  focus() {
    this.leftRightNavigation.focus();
  }

  onDelete() {
    this.leftRightNavigation.delete.emit();
  }
}
