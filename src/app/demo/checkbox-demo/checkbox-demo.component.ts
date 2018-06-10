import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
