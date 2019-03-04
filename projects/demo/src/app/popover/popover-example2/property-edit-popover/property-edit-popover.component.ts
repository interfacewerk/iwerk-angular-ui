import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Popover } from 'src/public_api';

@Component({
  selector: 'app-property-edit-popover',
  templateUrl: './property-edit-popover.component.html'
})
export class PropertyEditPopoverComponent {
  @Input() value: string;
  @Input() propertyName: string;
  @Output() onValueChange = new EventEmitter<string>();

  constructor(private popoverInstance: Popover) { }

  close() {
    this.popoverInstance.close();
  }

}
