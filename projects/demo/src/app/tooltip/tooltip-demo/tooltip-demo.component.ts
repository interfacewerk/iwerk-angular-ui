import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-example1',
  templateUrl: './tooltip-demo-example1.component.html'
})
export class Example1TooltipComponent {
  value = 0;
}

@Component({
  selector: 'app-tooltip-demo-example2',
  templateUrl: './tooltip-demo-example2.component.html'
})
export class Example2TooltipComponent {
}

@Component({
  selector: 'app-tooltip-demo-example3',
  templateUrl: './tooltip-demo-example3.component.html'
})
export class Example3TooltipComponent {
}

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.sass']
})
export class TooltipDemoComponent {
}
