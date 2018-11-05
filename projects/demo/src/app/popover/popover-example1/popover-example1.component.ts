import { Component, OnInit } from '@angular/core';

export const popoverExample1 = `<button (click)="isOpen = true">
  Click to open!
  <ng-template iwPopover
    popoverClass="demo-popover"
    [isOpen]="isOpen"
    (shouldClose)="isOpen = false">

    <div class="simple-popover">
      Helloooo
    </div>

  </ng-template>
</button>`;

@Component({
  selector: 'app-popover-example1',
  template: `<p>Add a template with the <code class="inline-code">iwPopover</code> directive.</p> ${popoverExample1}`
})
export class PopoverExample1Component implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
