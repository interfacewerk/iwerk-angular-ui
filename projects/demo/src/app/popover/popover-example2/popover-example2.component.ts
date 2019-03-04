import { Component } from '@angular/core';
import { PopoverService } from 'src/public_api';
import { PropertyEditPopoverComponent } from './property-edit-popover/property-edit-popover.component';

@Component({
  selector: 'app-popover-example2',
  templateUrl: './popover-example2.component.html'
})
export class PopoverExample2Component {
  persons: Person[] = [];
  firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
  lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];

  constructor(private popoverService: PopoverService) {
    for (let i = 0; i < 5; i++) {
      this.persons.push({
        first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
        last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
      });
    }
  }

  openEditFirstNamePopover(person: Person, $event: MouseEvent) {
    return this.openEditPropertyPopover(person, 'First Name', 'first', $event);
  }

  openEditLastNamePopover(person: Person, $event: MouseEvent) {
    return this.openEditPropertyPopover(person, 'Last Name', 'last', $event);
  }

  openEditPropertyPopover(person: Person, propertyName: string, p: keyof Person, $event: MouseEvent) {
    this.popoverService.open(PropertyEditPopoverComponent, <HTMLElement>$event.target, {
      popoverClass: 'demo-popover',
      escToClose: true
    }, component => {
      component.value = person[p];
      component.propertyName = propertyName;
      component.onValueChange.subscribe((v: string) => {
        person[p] = v;
      });
    });
  }
}

interface Person {
  first: string;
  last: string;
}

