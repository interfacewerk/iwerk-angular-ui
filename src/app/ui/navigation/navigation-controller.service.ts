import { Injectable, Type, Injector, ReflectiveInjector, InjectionToken } from '@angular/core';

export const NavigationData = new InjectionToken<any>('iw-navigation.NAVIGATION_DATA');

export interface NavigationItem {
  type: Type<any>;
  resolve: (v: any) => void;
  injector: Injector;
}

@Injectable()
export class NavigationController {
  stack: NavigationItem[] = [];

  constructor(
    private injector: Injector
  ) { }

  present<ReturnDataType>(type: Type<any>, data?: any): Promise<ReturnDataType> {
    const injector = ReflectiveInjector.resolveAndCreate([{
      provide: NavigationData,
      useValue: data
    }], this.injector);
    return new Promise(resolve => {
      this.stack.push(
        { type, resolve, injector }
      );
    });
  }

  dismiss<ReturnDataType>(value?: ReturnDataType) {
    const last = this.stack.pop();
    last.resolve(value);
  }
}
