import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss']
})
export class TooltipDemoComponent implements OnInit {
  value = 0;
  tooltipHtml1 = `<button class="two" (click)="value = value + 1">
  +1
  <ng-template iwTooltip>
    Click to go from {{value}} to {{value+1}}
  </ng-template>
</button>`.trim();

  constructor() {}

  ngOnInit() {
  }

}
