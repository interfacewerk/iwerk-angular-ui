import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent implements OnInit {
  options: IWUI.Select.Option[] = [{
    label: 'First option',
    value: 'First option',
    icon: 'some'
  }, {
    label: 'Second option',
    value: 'Second option',
    icon: 'some'
  }, {
    label: 'Third option',
    value: 'Third option',
    icon: 'some'
  }, {
    label: 'Fourth option',
    value: 'Fourth option',
    icon: 'some'
  }, {
    label: 'Fifth option',
    value: 'Fifth option',
    icon: 'some'
  }, {
    label: 'Sixth option',
    value: 'Sixth option',
    icon: 'some'
  }, {
    label: 'Seventh option',
    value: 'Seventh option',
    icon: 'some'
  }];

  constructor() { }

  ngOnInit() {
  }

  indexBy(option: IWUI.Select.Option) {
    return option.value;
  }

}
