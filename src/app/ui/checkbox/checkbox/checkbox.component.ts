import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxConfig } from '../checkbox-config.interface';
import { IW_CHECKBOX_CONFIG } from '../checkbox.config';

/**
 * A checkbox component is great!
 */
@Component({
  selector: 'iw-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() tabindex: number;

  set value(v: boolean) {
    this.__value = v;
    if (v) {
      this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--checked');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--checked');
    }
  }
  get value() {
    return this.__value;
  }
  onChangeCb: (newValue: boolean) => any;
  onTouchedCb: Function;
  set isDisabled(v: boolean) {
    this.__isDisabled = v;
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', v);
    if (v) {
      this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--disabled');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--disabled');
    }
  }
  get isDisabled() {
    return this.__isDisabled;
  }

  private __value = false;
  private __isDisabled = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Optional() @Inject(IW_CHECKBOX_CONFIG) private checkboxConfig: CheckboxConfig
  ) {
    this.onChangeCb = this.onTouchedCb = () => {};
  }

  ngOnInit() {
    if (this.checkboxConfig && this.checkboxConfig.containerClass) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        this.checkboxConfig.containerClass,
      );
    }
  }

  onKeyup($event: KeyboardEvent) {
    if ($event.keyCode === 32) {
      this.userToggle();
    }
  }

  getTabIndex(): string {
    if (this.isDisabled) {
      return '';
    }
    return String(this.tabindex || 0);
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
