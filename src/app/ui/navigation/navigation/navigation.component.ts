import { Component, Type } from '@angular/core';
import { NavigationController } from '../navigation-controller.service';


/**
 * The navigation component is designed to stack views and only show the last element.
 * It is used along with the NavigationController
 ```ts
 import { NavigationModule } from 'iwerk-angular-ui';
 ```
 */
@Component({
  selector: 'iw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  providers: [
    NavigationController
  ]
})
export class NavigationComponent {

  constructor(
    private navigationController: NavigationController,
  ) { }

  /**
   * @ignore
   */
  get stack() {
    return this.navigationController.stack;
  }

  /**
   * @ignore
   */
  get isStackEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Present the component.
   * @param type the component class to display in the stack.
   * @returns a promise that resolves with a value that the dismissed view gives you.
   */
  present<ReturnedDataType, NavDataType>(type: Type<any>, data?: NavDataType) {
    return this.navigationController.present<ReturnedDataType>(type, data);
  }

}
