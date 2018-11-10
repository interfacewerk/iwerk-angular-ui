import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const example1 = `<p class="ellipsis" [iwMultilineEllipsis]="text" style="max-height: 100px; max-width: 200px"></p>`;

@Component({
  selector: 'app-ellipsis-demo-example1',
  template: example1,
  encapsulation: ViewEncapsulation.None
})
export class EllipsisDemoExample1Component {
  // tslint:disable-next-line
  text = 'Pariatur tempor anim culpa enim consequat. Sit commodo irure labore pariatur dolor consequat fugiat nisi pariatur. Magna in in dolor aliqua veniam duis nulla pariatur ut. Deserunt elit aute do ut ad sit irure proident dolor. Amet excepteur elit consectetur sit ipsum enim fugiat cupidatat est aliqua.';

  width = 100;
  height = 50;

  getHeight() {
    return this.height + 'px';
  }

  getWidth() {
    return this.width + 'px';
  }
}

@Component({
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EllipsisDemoComponent implements OnInit {
  example1 = example1;

  constructor() { }

  ngOnInit() {
  }

}
