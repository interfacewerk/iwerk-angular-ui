import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Popover } from 'src/public_api';

@Component({
  selector: 'app-property-edit-popover',
  templateUrl: './property-edit-popover.component.html',
  styleUrls: ['./property-edit-popover.component.scss']
})
export class PropertyEditPopoverComponent implements OnInit {
  @Input() value: string;
  @Input() propertyName: string;
  @Output() onValueChange = new EventEmitter<string>();

  constructor(private popoverInstance: Popover) { }

  ngOnInit() {
  }

  close() {
    this.popoverInstance.close();
  }

}
