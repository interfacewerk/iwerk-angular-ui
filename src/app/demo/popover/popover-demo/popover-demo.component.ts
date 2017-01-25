import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  editedPerson: Person;
  editedField: string;
  persons: Person[] = [];

  constructor() {
    for(let i = 0; i < 100; i++) {
      this.persons.push({
        first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
        last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
      });
    }
  }

  ngOnInit() {
  }

  firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
  lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
}

type Person = {
  first: string
  last: string
}