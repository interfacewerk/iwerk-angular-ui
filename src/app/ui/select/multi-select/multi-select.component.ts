import {
  Component,
  Input,
  OnChanges,
  ViewChildren,
  QueryList,
  ViewChild,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { SelectionItemComponent } from '../selection-item/selection-item.component';
import { SelectSearchInputDirective } from '../select-search-input.directive';
import { LeftRightNavigationDirective } from '../left-right-navigation.directive';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
  }],
})
export class MultiSelectComponent implements OnChanges, ControlValueAccessor {
  @Input() options: Keyp.Select.Option[];
  @Input() placeholder: string;

  @ViewChildren(SelectionItemComponent) selectionItems: QueryList<SelectionItemComponent>;
  @ViewChildren(LeftRightNavigationDirective) leftRightNavigation: QueryList<LeftRightNavigationDirective>;
  @ViewChild(SelectSearchInputDirective) searchInput: SelectSearchInputDirective;

  displayOptions = new BehaviorSubject(false);
  selection = new BehaviorSubject<Keyp.Select.Option[]>([]);
  highlightedOption = new BehaviorSubject<Keyp.Select.Option>(undefined);
  search = new BehaviorSubject('');
  optionsToShow: Observable<Keyp.Select.Option[]>;
  navigationEvent = new Subject<-1 | 1>();

  private __options = new BehaviorSubject<Keyp.Select.Option[]>(undefined);
  private onChangeCb: Function;
  private onTouchedCb: Function;

  constructor() {
    this.optionsToShow = Observable.combineLatest(this.__options, this.search, this.selection)
      .map(([options, search, selection]) => {
        if (!options) {
          return [];
        }
        return (options || [])
          .filter(option => selection.indexOf(option) === -1)
          .filter(option => {
            return option.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
          });
      });
    this.navigationEvent.withLatestFrom(this.optionsToShow, (a, b) => {
      const index = b.indexOf(this.highlightedOption.value);
      if (index === -1) {
        if (a === -1) {
          return b[b.length - 1];
        } else if (a === 1) {
          return b[0];
        }
      } else {
        return b[(index + a + b.length) % b.length];
      }
    }).subscribe(highlighted => this.highlightedOption.next(highlighted));
  }

  ngOnChanges() {
    this.__options.next(this.options);
  }

  isHighlighted(option: Keyp.Select.Option) {
    return this.highlightedOption.value === option;
  }

  onSearchChange($event: string) {
    this.search.next($event);
  }

  onUp() {
    this.navigationEvent.next(-1);
  }

  onDown() {
    this.navigationEvent.next(1);
  }

  onEnter() {
    const value = this.highlightedOption.value;
    if (!value) {
      return;
    }
    this.search.next('');
    this.highlightedOption.next(undefined);
    this.changeValue(this.selection.value.concat(value));
  }

  onBack() {
    const last = this.selectionItems.last;
    if (last) {
      last.focus();
    }
  }

  onFocus() {
    window.requestAnimationFrame(() => {
      this.displayOptions.next(true);
    });
  }

  onBlur($event: Event) {
    window.requestAnimationFrame(() => {
      this.displayOptions.next(false);
    });
  }

  select(option: Keyp.Select.Option) {
    this.changeValue(this.selection.value.concat(option));
    this.highlightedOption.next(undefined);
    this.searchInput.focus();
  }

  onDelete(option: Keyp.Select.Option) {
    const index = this.selection.value.indexOf(option);
    if (index === -1) {
      throw new Error('Item not found!');
    }
    this.selection.value.splice(index, 1);
    this.changeValue(this.selection.value.slice(0));
    const focusOn = this.selectionItems.toArray()[index - 1];
    if (focusOn) {
      focusOn.focus();
    } else {
      this.searchInput.focus();
    }
  }

  onLeft(option: Keyp.Select.Option) {
    const index = this.selection.value.indexOf(option);
    this.leftRightNavigation.toArray()[Math.max(0, index - 1)].focus();
  }

  onRight(option: Keyp.Select.Option) {
    const index = this.selection.value.indexOf(option);
    if (index === this.selection.value.length - 1) {
      this.searchInput.focus();
    } else {
      this.leftRightNavigation.toArray()[Math.max(0, index + 1)].focus();
    }
  }

  /**
   * Implements ControlValueAccessor:writeValue
   * @param obj the new selection
   */
  writeValue(obj: Keyp.Select.Option[]): void {
    this.selection.next(obj || []);
  }

  /**
   * Implements ControlValueAccessor:registerOnChange
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  /**
   * Implements ControlValueAccessor:registerOnTouched
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  /**
   * Implements ControlValueAccessor:setDisabledState
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {
    alert();
  }

  private changeValue(value: Keyp.Select.Option[]) {
    this.selection.next(value || []);
    this.onChangeCb(this.selection.value);
  }
}
