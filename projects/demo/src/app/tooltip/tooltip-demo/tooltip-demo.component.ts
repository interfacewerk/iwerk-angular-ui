import { Component } from '@angular/core';

const example1 = `<button (click)="value = value + 1">
  Try me!
  <ng-template iwTooltip>
    Click to go from {{value}} to {{value+1}}
  </ng-template>
</button>`;

const example2 = `<button>
  Horizontal tooltip
  <ng-template iwTooltip [horizontal]="true">
    I show up horizontally!
  </ng-template>
</button>`;

const example3 = `<button>
  Some delay ~1s
  <ng-template iwTooltip [delay]="1000">
    Yes, you waited but it was worth it!
  </ng-template>
</button>`;

@Component({
  selector: 'app-tooltip-demo-example1',
  template: example1
})
export class Example1TooltipComponent {
  value = 0;
}

@Component({
  selector: 'app-tooltip-demo-example2',
  template: example2
})
export class Example2TooltipComponent {
}

@Component({
  selector: 'app-tooltip-demo-example3',
  template: example3
})
export class Example3TooltipComponent {
}

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss']
})
export class TooltipDemoComponent {
  example1 = example1;
  example2 = example2;
  example3 = example3;
}
