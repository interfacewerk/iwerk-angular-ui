import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.sass']
})
export class PopoverDemoComponent {
  editedPerson: Person;
  editedField: string;
  persons: Person[] = [];
  firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
  lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.persons.push({
        first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
        last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
      });
    }
  }
}

interface Person {
  first: string;
  last: string;
}
