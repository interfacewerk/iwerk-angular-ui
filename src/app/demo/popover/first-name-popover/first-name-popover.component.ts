import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Popover } from '../../../ui/popover/popover.module';

@Component({
  selector: 'app-first-name-popover',
  templateUrl: './first-name-popover.component.html',
  styleUrls: ['./first-name-popover.component.scss']
})
export class FirstNamePopoverComponent implements OnInit {
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
