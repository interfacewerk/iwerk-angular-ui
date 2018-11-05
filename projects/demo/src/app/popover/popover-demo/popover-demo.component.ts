import { Component, OnInit } from '@angular/core';
import { popoverExample1 } from '../popover-example1/popover-example1.component';
import { popoverExample2 } from '../popover-example2/popover-example2.component';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  editedPerson: Person;
  editedField: string;
  persons: Person[] = [];
  firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
  lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
  popoverExample1 = popoverExample1;
  popoverExample2 = popoverExample2;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.persons.push({
        first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
        last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
      });
    }
  }

  ngOnInit() {
  }
}

interface Person {
  first: string;
  last: string;
}
