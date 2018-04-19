import {
  Component,
  OnInit,
  forwardRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostListener,
  HostBinding,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'iw-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() tabindex: number;

  @HostBinding('class.checkbox--checked')
  value: boolean;
  onChangeCb: (newValue: boolean) => any;
  onTouchedCb: Function;
  @HostBinding('class.checkbox--disabled')
  isDisabled: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.onChangeCb = this.onTouchedCb = () => {};
  }

  ngOnInit() {
  }

  onKeyup($event: KeyboardEvent) {
    if ($event.keyCode === 32) {
      this.userToggle();
    }
  }

  getTabIndex(): number {
    if (this.isDisabled) {
      return -1;
    }
    return this.tabindex || 0;
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    this.userToggle();
  }

  /**
   * Implements ControlValueAccessor:writeValue
   * @param obj the new selection
   */
  writeValue(obj: boolean): void {
    this.value = obj;
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
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.detectChanges();
  }

  private userToggle() {
    if (this.isDisabled) {
      return;
    }
    this.value = !this.value;
    this.onTouchedCb();
    this.onChangeCb(this.value);
  }
}