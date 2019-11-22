import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NavigationController, NavigationData } from '../../ui/navigation/navigation-controller.service';
import { NavigationComponent } from '../../ui/navigation/navigation.module';

interface NavData {
  depth: number;
}

@Component({
  template: `
    <p>some component (current depth: {{ depth }}, nested depth: {{ nestedDepth }})</p>
    <button (click)="present()">Present</button><button (click)="dismiss()">Dismiss</button>
  `
})
export class SomeComponent {
  depth = -1;
  nestedDepth = -1;

  constructor(private navCtrl: NavigationController, @Inject(NavigationData) private data: NavData) {
    this.depth = this.data.depth;
    this.nestedDepth = this.depth;
  }

  dismiss() {
    this.navCtrl.dismiss(this.nestedDepth);
  }

  present() {
    this.navCtrl.present<number>(SomeComponent, {depth: this.depth + 1}).then(v => this.nestedDepth = v);
  }
}


@Component({
  template: `
    <p>some other component (current depth: {{ depth }}, nested depth: {{ nestedDepth }})</p>
    <button (click)="present()">Present</button><button (click)="dismiss()">Dismiss</button>
  `
})
export class SomeOtherComponent extends SomeComponent {
}

@Component({
  templateUrl: './navigation.demo.component.html',
  styleUrls: ['./navigation.demo.component.sass']
})
export class NavigationDemoComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav: NavigationComponent;
  depth = 0;

  constructor() { }

  ngOnInit() {
  }

  present() {
    this.depth = 0;
    this.nav.present<number, NavData>(SomeComponent, {depth: this.depth + 1}).then(v => this.depth = v);
  }

  presentOther() {
    this.nav.present<number, NavData>(SomeOtherComponent, {depth: this.depth + 1}).then(v => this.depth = v);
  }
}
