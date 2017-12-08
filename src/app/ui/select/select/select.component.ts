import {
  Component,
  OnInit,
  OnChanges,
  Input,
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

import { SelectLabelDirective } from '../select-label.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }],
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() options: IwerkUi.Select.Option[];
  @Input() placeholder: string;
  @Input() autocomplete: boolean;

  @ViewChild(SelectLabelDirective) label: SelectLabelDirective;

  selection = new BehaviorSubject<IwerkUi.Select.Option>(undefined);
  displayOptions = new BehaviorSubject(false);
  search = new BehaviorSubject('');
  optionsToShow: Observable<IwerkUi.Select.Option[]>;
  navigationEvent = new Subject<-1 | 1>();
  highlightedOption = new BehaviorSubject<IwerkUi.Select.Option>(undefined);

  private __options = new BehaviorSubject<IwerkUi.Select.Option[]>(undefined);
  private onChangeCb: Function;
  private onTouchedCb: Function;

  constructor() {
    this.optionsToShow = Observable.combineLatest(this.__options, this.search)
      .map(([options, search]) => {
        if (!options) {
          return [];
        }
        return (options || [])
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

  ngOnInit() {
  }

  ngOnChanges() {
    this.__options.next(this.options);
  }

  isHighlighted(option: IwerkUi.Select.Option) {
    return this.highlightedOption.value === option;
  }

  onLabelClick() {
    this.displayOptions.next(true);
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
    if (this.highlightedOption.value) {
      this.changeValue(this.highlightedOption.value);
      this.search.next('');
      this.highlightedOption.next(undefined);
      this.closeAndFocusLabel();
    }
  }

  select(option: IwerkUi.Select.Option) {
    this.changeValue(option);
    this.highlightedOption.next(undefined);
    this.closeAndFocusLabel();
  }

  onBlurLabel() {
    if (this.autocomplete) {
      return;
    }
    window.requestAnimationFrame(() => {
      this.displayOptions.next(false);
    });
  }

  onBlur() {
    window.requestAnimationFrame(() => {
      this.displayOptions.next(false);
    });
  }

  private closeAndFocusLabel() {
    window.requestAnimationFrame(() => {
      this.displayOptions.next(false);
      this.label.focus();
    });
  }

  /**
   * Implements ControlValueAccessor:writeValue
   * @param obj the new selection
   */
  writeValue(obj: IwerkUi.Select.Option): void {
    this.selection.next(obj);
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

  private changeValue(value: IwerkUi.Select.Option) {
    this.selection.next(value);
    this.onChangeCb(this.selection.value);
  }
}
