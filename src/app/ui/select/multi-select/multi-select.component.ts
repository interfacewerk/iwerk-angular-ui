import {
  Component,
  Input,
  OnChanges,
  ViewChildren,
  QueryList,
  ViewChild,
  forwardRef,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
  NG_VALIDATORS,
  FormControl,
  ValidationErrors
} from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

import { MultiSelectItemDirective } from '../multi-select-item.directive';
import { SelectSearchInputDirective } from '../select-search-input.directive';
import { LeftRightNavigationDirective } from '../left-right-navigation.directive';
import { ListNavigationService } from '../list-navigation.service';

@Component({
  selector: 'iw-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
  }, ListNavigationService],
  encapsulation: ViewEncapsulation.None
})
export class MultiSelectComponent implements OnChanges, ControlValueAccessor, Validator {
  @Input() options: any[];
  @Input() placeholder: string;
  @Input() optionListItemTemplate: TemplateRef<any>;
  @Input() selectedItemTemplate: TemplateRef<any>;
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() indexBy: (option: any) => any;

  @ViewChildren(MultiSelectItemDirective) selectedItems: QueryList<MultiSelectItemDirective>;
  @ViewChildren(LeftRightNavigationDirective) leftRightNavigation: QueryList<LeftRightNavigationDirective>;
  @ViewChild(SelectSearchInputDirective) searchInput: SelectSearchInputDirective;

  displayOptions = new BehaviorSubject(false);
  selection = new BehaviorSubject<any[]>([]);
  search = new BehaviorSubject('');
  optionsToShow: Observable<any[]>;

  private __options = new BehaviorSubject<any[]>(undefined);
  private onChangeCb: Function;
  private onTouchedCb: Function;

  constructor(private listNavigation: ListNavigationService) {
    this.onChangeCb = this.onTouchedCb = () => {};
    this.optionsToShow = Observable.combineLatest(this.__options, this.search, this.selection)
      .map(([options, search, selection]) => {
        if (!options) {
          return [];
        }
        return (options || [])
          // exclude from the list the items that are already selected
          .filter(option => selection.map(o => this.indexBy(o)).indexOf(this.indexBy(option)) === -1)
          .filter(option => {
            return option.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
          });
      });
    this.optionsToShow.subscribe(options => this.listNavigation.optionsToShow = options);
  }

  ngOnChanges() {
    this.__options.next(this.options);
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
    const value = this.listNavigation.getHighlightedOption();
    if (!value) {
      return;
    }
    this.search.next('');
    this.listNavigation.unHighlight();
    this.changeValue(this.selection.value.concat(value));
  }

  onBack() {
    const last = this.selectedItems.last;
    if (last) {
      last.focus();
    }
  }

  onFocus() {
    this.displayOptions.next(true);
  }

  onBlur() {
    this.closeAndTouch();
  }

  select(option: any) {
    this.changeValue(this.selection.value.concat(option));
    this.listNavigation.unHighlight();
    this.searchInput.focus();
  }

  onDelete(option: any) {
    const index = this.selection.value.indexOf(option);
    if (index === -1) {
      throw new Error('Item not found!');
    }
    this.selection.value.splice(index, 1);
    this.changeValue(this.selection.value.slice(0));
    const focusOn = this.selectedItems.toArray()[index - 1];
    if (focusOn) {
      focusOn.focus();
    } else {
      this.searchInput.focus();
    }
  }

  onLeft(option: any) {
    const index = this.selection.value.indexOf(option);
    this.leftRightNavigation.toArray()[Math.max(0, index - 1)].focus();
  }

  onRight(option: any) {
    const index = this.selection.value.indexOf(option);
    if (index === this.selection.value.length - 1) {
      this.searchInput.focus();
    } else {
      this.leftRightNavigation.toArray()[Math.max(0, index + 1)].focus();
    }
  }

  getOptionItemTemplateContext(option: any) {
    return {
      option
    };
  }

  getSelectedItemContext(option: any) {
    return {
      option,
      delete: () => {
        this.onDelete(option);
      }
    };
  }

  validate(control: FormControl): ValidationErrors {
    if (this.minLength === undefined && this.maxLength === undefined) {
      return null;
    }
    const errors: ValidationErrors = {};
    const length = this.selection.value.length;
    if (this.minLength > length) {
      errors['minLength'] = true;
    }
    if (this.maxLength < length) {
      errors['maxLength'] = true;
    }
    console.log(errors);
    return errors;
  }

  /**
   * Implements ControlValueAccessor:writeValue
   * @param obj the new selection
   */
  writeValue(obj: any[]): void {
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

  private closeAndTouch() {
    this.displayOptions.next(false);
    this.onTouchedCb();
  }

  private changeValue(value: any[]) {
    this.selection.next(value || []);
    this.onTouchedCb();
    this.onChangeCb(this.selection.value);
  }
}
