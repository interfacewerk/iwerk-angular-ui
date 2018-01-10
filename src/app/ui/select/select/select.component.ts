import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  forwardRef,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

import { SelectLabelDirective } from '../select-label.directive';
import { ListNavigationService } from '../list-navigation.service';

@Component({
  selector: 'iw-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }, ListNavigationService]
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() options: IWUI.Select.Option[];
  @Input() placeholder: string;
  @Input() autocomplete: boolean;
  @Input() optionListItemTemplate: TemplateRef<IWUI.Select.Option>;
  @Input() labelTemplate: TemplateRef<IWUI.Select.Option>;

  @ViewChild(SelectLabelDirective) label: SelectLabelDirective;

  selection = new BehaviorSubject<IWUI.Select.Option>(undefined);
  displayOptions = new BehaviorSubject(false);
  search = new BehaviorSubject('');
  optionsToShow: Observable<IWUI.Select.Option[]>;

  private __options = new BehaviorSubject<IWUI.Select.Option[]>(undefined);
  private onChangeCb: Function;
  private onTouchedCb: Function;

  constructor(private listNavigation: ListNavigationService) {
    this.onChangeCb = this.onTouchedCb = () => {};
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
    this.optionsToShow.subscribe(options => this.listNavigation.optionsToShow = options);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.__options.next(this.options);
  }

  onLabelClick() {
    this.openOptions();
  }

  onSearchChange($event: string) {
    this.search.next($event);
  }

  onUp() {
    this.listNavigation.up();
  }

  onDown() {
    this.listNavigation.down();
  }

  onEnter() {
    const highlighted = this.listNavigation.getHighlightedOption();
    if (highlighted) {
      this.changeValue(highlighted);
      this.search.next('');
      this.listNavigation.unHighlight();
      this.closeAndFocusLabel();
    }
  }

  select(option: IWUI.Select.Option) {
    this.changeValue(option);
    this.listNavigation.unHighlight();
    this.closeAndFocusLabel();
  }

  onBlurLabel() {
    if (this.autocomplete) {
      this.onTouchedCb();
      return;
    }
    window.requestAnimationFrame(() => {
      this.closeAndTouch();
    });
  }

  onBlur() {
    window.requestAnimationFrame(() => {
      this.closeAndTouch();
    });
  }

  getLabelTemplateContext() {
    return {
      option: this.selection.value
    };
  }


  /**
   * Implements ControlValueAccessor:writeValue
   * @param obj the new selection
   */
  writeValue(obj: IWUI.Select.Option): void {
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

  private openOptions() {
    this.displayOptions.next(true);
    this.search.next('');
  }

  private closeAndTouch() {
    this.displayOptions.next(false);
    this.onTouchedCb();
  }

  private closeAndFocusLabel() {
    window.requestAnimationFrame(() => {
      this.displayOptions.next(false);
      this.label.focus();
    });
  }

  private changeValue(value: IWUI.Select.Option) {
    this.selection.next(value);
    this.onChangeCb(this.selection.value);
  }
}
