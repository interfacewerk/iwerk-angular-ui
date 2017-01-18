import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {

  isPopoverOpen1 = false;
  myText = 'some text here';

  constructor() { }

  ngOnInit() {
  }


}
