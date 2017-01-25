import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {

  isPopoverOpen1 = true;
  myText = 'some text here';
  trucs: {isOpen: boolean}[] = [];

  constructor() {
    for(let i = 0; i < 100; i++) {
      this.trucs.push({isOpen: false});
    }
  }

  ngOnInit() {
  }


}
