import { Component, OnInit, EventEmitter } from '@angular/core';
import { FirstNamePopoverComponent } from '../first-name-popover/first-name-popover.component';
import { LastNamePopoverComponent } from '../last-name-popover/last-name-popover.component';
import { PopoverService } from '../../../ui/popover/popover.module';

@Component({
  selector: 'app-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  editedPerson: Person;
  editedField: string;
  persons: Person[] = [];

  constructor(private popoverService: PopoverService) {
    for (let i = 0; i < 1000; i++) {
      this.persons.push({
        first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
        last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
      });
    }
  }

  trackBy(index: number) {
    return index;
  }

  openEditFirstNamePopover(person: Person, $event: MouseEvent) {
    return this.openEditPropertyPopover(person, 'First Name', 'first', $event);
  }

  openEditLastNamePopover(person: Person, $event: MouseEvent) {
    return this.openEditPropertyPopover(person, 'Last Name', 'last', $event);
  }

  openEditPropertyPopover(person: Person, propertyName: string, p: keyof Person, $event: MouseEvent) {
    const shouldClose = new EventEmitter(true);
    const popover = this.popoverService.open(FirstNamePopoverComponent, <HTMLElement>$event.target, {
      arrowClass: '',
      horizontalAlignment: undefined,
      popoverClass: 'popover-demo',
      scrollMaskClass: '',
      shouldClose,
      onToggle: new EventEmitter(),
      popoverPosition: new EventEmitter()
    }, component => {
      component.value = person[p];
      component.propertyName = propertyName;
      component.onValueChange.subscribe((v: string) => {
        person[p] = v;
      });
    });
    shouldClose.subscribe(() => {
      popover.close();
    });
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