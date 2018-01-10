import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class ListNavigationService {
  highlightedOption: Observable<any>;

  set optionsToShow(options: any[]) {
    this.__optionsToShow.next(options);
    if (options.length > 0) {
      this.__highlightedOption.next(options[0]);
    }
  }

  private __optionsToShow = new BehaviorSubject<any[]>(undefined);
  private __highlightedOption = new BehaviorSubject<any>(undefined);
  private __navigationEvent = new Subject<-1 | 1>();

  constructor() {
    this.highlightedOption = this.__highlightedOption.asObservable();
    this.__navigationEvent.asObservable()
      .withLatestFrom(this.__optionsToShow, (a, b) => {
        const index = b.indexOf(this.__highlightedOption.value);
        if (index === -1) {
          if (a === -1) {
            return b[b.length - 1];
          } else if (a === 1) {
            return b[0];
          }
        } else {
          return b[(index + a + b.length) % b.length];
        }
      })
      .subscribe(highlighted => this.__highlightedOption.next(highlighted));
  }

  getHighlightedOption() {
    return this.__highlightedOption.value;
  }

  up() {
    this.__navigationEvent.next(-1);
  }

  down() {
    this.__navigationEvent.next(1);
  }

  unHighlight() {
    this.__highlightedOption.next(undefined);
  }
}
