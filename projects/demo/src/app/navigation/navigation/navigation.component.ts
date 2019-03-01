import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NavigationComponent, NavigationData } from '../../../../../../src/public_api';
import { NavigationController } from 'src/app/ui/navigation/navigation-controller.service';

const example = `
// html

<iw-navigation #nav>
  <h1>Here the content of the first view</h1>
</iw-navigation>

<button (click)="present()">Present</button>

// ts: YourComponent

import { NavigationComponent, NavigationData } from 'iwerk-angular-ui';

@ViewChild('nav') nav: NavigationComponent;

click() {
  this.nav.present(SomeComponent, { someCustomData })
    .then(someValueDismissedByThePresentedView => {
      …
    });
}

// ts: SomeComponent

constructor(private navCtrl: NavigationController) {

}

dismiss() {
  this.navCtrl.dismiss(someValue);
}
`;

interface Example2ComponentNavData {
  title: string;
}

type Example2ReturnedData = number;

@Component({
  template: `<h5>One level deeper!</h5><button (click)="dismiss()">Dismiss</button>`,
  styles: [
    `.nav-container {
      padding: 3px 10px;
      box-shadow: 1px 1px 1px 1px black;
      height: 300px;
      width: 300px;
    }`
  ]
})
export class Example3Component {
  constructor(
    private navCtrl: NavigationController
  ) {

  }

  dismiss() {
    this.navCtrl.dismiss();
  }
}

@Component({
  template: `<h5>{{data.title}}</h5>
  <button (click)="present()">Present one more view!</button>
  <button (click)="dismiss()">Dismiss with value 1234</button>`,
  styles: [
    `.nav-container {
      padding: 3px 10px;
      box-shadow: 1px 1px 1px 1px black;
      height: 300px;
      width: 300px;
    }`
  ]
})
export class Example2Component {
  constructor(
    @Inject(NavigationData) public data: Example2ComponentNavData,
    private navCtrl: NavigationController
  ) {

  }

  present() {
    this.navCtrl.present(Example3Component);
  }
  dismiss() {
    this.navCtrl.dismiss<Example2ReturnedData>(1234);
  }
}

@Component({
  template: `<p>Add the <code class="inline-code">iw-navigation</code> element into your template.</p>
  <div class="nav-container">
    <iw-navigation #nav>
      <h3>Here is our first view</h3>
      <button (click)="present()">Present a new view</button>
    </iw-navigation>
  </div>`,
  styles: [
    `.nav-container {
      padding: 3px 10px;
      box-shadow: 1px 1px 1px 1px black;
      height: 300px;
      width: 300px;
    }`
  ]
})
export class Example1Component {
  @ViewChild('nav') nav: NavigationComponent;
  returnedByExample2 = -1;

  present() {
    this.nav.present<Example2ReturnedData, Example2ComponentNavData>(Example2Component, { title: 'Example 2 title defined by us!' })
      .then(v => this.returnedByExample2 = v);
  }
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationdDemoComponent implements OnInit {
  example1Src = example;
  example1Comp = Example1Component;

  constructor() { }

  ngOnInit() {
  }

}


