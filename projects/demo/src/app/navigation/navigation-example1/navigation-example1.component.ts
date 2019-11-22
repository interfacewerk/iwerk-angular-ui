import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from 'src/public_api';
import { Example2Component, Example2ComponentNavData, Example2ReturnedData } from './navigation-example1-nested2.component';

@Component({
  selector: 'app-navigation-example1',
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
  @ViewChild('nav', { static: true }) nav: NavigationComponent;
  returnedByExample2 = -1;

  present() {
    this.nav.present<Example2ReturnedData, Example2ComponentNavData>(Example2Component, { title: 'Example 2 title defined by us!' })
      .then(v => this.returnedByExample2 = v);
  }
}
