(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../src/app/ui/checkbox/checkbox.config.ts":
/*!************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/checkbox/checkbox.config.ts ***!
  \************************************************************************************************/
/*! exports provided: IW_CHECKBOX_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_CHECKBOX_CONFIG", function() { return IW_CHECKBOX_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_CHECKBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-checkbox.config');


/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox.module.ts":
/*!************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/checkbox/checkbox.module.ts ***!
  \************************************************************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts");




var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]],
            exports: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.html":
/*!**************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox__checkbox\" [attr.tabindex]=\"getTabIndex()\" (keyup)=\"onKeyup($event)\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n  </svg>\n</div>\n<div class=\"checkbox__label\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.sass":
/*!**************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.sass ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-checkbox {\n  display: inline-block;\n  line-height: 15px; }\n  iw-checkbox:not(.checkbox--disabled) {\n    cursor: pointer; }\n  iw-checkbox.checkbox--disabled {\n    cursor: not-allowed; }\n  iw-checkbox.checkbox--disabled .checkbox__checkbox {\n    opacity: 0.2; }\n  iw-checkbox:not(.checkbox--disabled):not(.checkbox--checked):hover .checkbox__checkbox {\n    border-color: grey; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox {\n    border-color: black; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox svg {\n    opacity: 1; }\n  iw-checkbox .checkbox__checkbox {\n    width: 15px;\n    height: 15px;\n    position: relative;\n    margin: 0 3px;\n    display: inline-block;\n    float: left;\n    transition: border-color 0.3s;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    overflow: hidden; }\n  iw-checkbox .checkbox__checkbox svg {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 75%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      opacity: 0;\n      transition: opacity 0.3s; }\n  iw-checkbox .checkbox__label {\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9jaGVja2JveC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixrQkFBaUIsRUE4Q1c7RUFoRDlCO0lBS0ksZ0JBQWUsRUFBRztFQUx0QjtJQVFJLG9CQUFtQixFQUFHO0VBUjFCO0lBWU0sYUFBWSxFQUFHO0VBWnJCO0lBaUJNLG1CQUFrQixFQUFHO0VBakIzQjtJQXFCTSxvQkFBbUIsRUFBRztFQXJCNUI7SUF3Qk0sV0FBVSxFQUFHO0VBeEJuQjtJQTJCSSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCw4QkFBNkI7SUFDN0IsNEJBQTJCO0lBQzNCLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFTZTtFQTdDbkM7TUF1Q00sbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxTQUFRO01BQ1IsV0FBVTtNQUNWLHlDQUFnQztjQUFoQyxpQ0FBZ0M7TUFDaEMsV0FBVTtNQUNWLHlCQUF3QixFQUFHO0VBN0NqQztJQWdESSxzQkFBcUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3VpL2NoZWNrYm94L2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaXctY2hlY2tib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuXG4gICY6bm90KC5jaGVja2JveC0tZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuICAmLmNoZWNrYm94LS1kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4gICYuY2hlY2tib3gtLWRpc2FibGVkIHtcbiAgICAuY2hlY2tib3hfX2NoZWNrYm94IHtcbiAgICAgIG9wYWNpdHk6IDAuMjsgfSB9XG5cblxuICAmOm5vdCguY2hlY2tib3gtLWRpc2FibGVkKTpub3QoLmNoZWNrYm94LS1jaGVja2VkKTpob3ZlciB7XG4gICAgLmNoZWNrYm94X19jaGVja2JveCB7XG4gICAgICBib3JkZXItY29sb3I6IGdyZXk7IH0gfVxuXG4gICYuY2hlY2tib3gtLWNoZWNrZWQge1xuICAgIC5jaGVja2JveF9fY2hlY2tib3gge1xuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjazsgfVxuXG4gICAgLmNoZWNrYm94X19jaGVja2JveCBzdmcge1xuICAgICAgb3BhY2l0eTogMTsgfSB9XG5cbiAgLmNoZWNrYm94X19jaGVja2JveCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB3aWR0aDogNzUlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzOyB9IH1cblxuICAuY2hlY2tib3hfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH0gfVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts":
/*!************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox.config */ "../../src/app/ui/checkbox/checkbox.config.ts");




/**
 * A checkbox component is great!
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(renderer, elementRef, checkboxConfig) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.checkboxConfig = checkboxConfig;
        this.__value = false;
        this.__isDisabled = false;
        this.onChangeCb = this.onTouchedCb = function () { };
    }
    CheckboxComponent_1 = CheckboxComponent;
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this.__value;
        },
        set: function (v) {
            this.__value = v;
            if (v) {
                this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--checked');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--checked');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "isDisabled", {
        get: function () {
            return this.__isDisabled;
        },
        set: function (v) {
            this.__isDisabled = v;
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', v);
            if (v) {
                this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.checkboxConfig && this.checkboxConfig.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.checkboxConfig.containerClass);
        }
    };
    CheckboxComponent.prototype.onKeyup = function ($event) {
        if ($event.keyCode === 32) {
            this.userToggle();
        }
    };
    CheckboxComponent.prototype.getTabIndex = function () {
        if (this.isDisabled) {
            return '';
        }
        return String(this.tabindex || 0);
    };
    CheckboxComponent.prototype.onClick = function ($event) {
        this.userToggle();
    };
    /**
     * Implements ControlValueAccessor:writeValue
     * @param obj the new selection
     */
    CheckboxComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    /**
     * Implements ControlValueAccessor:registerOnChange
     * @param fn
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * Implements ControlValueAccessor:registerOnTouched
     * @param fn
     */
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * Implements ControlValueAccessor:setDisabledState
     * @param isDisabled
     */
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    CheckboxComponent.prototype.userToggle = function () {
        if (this.isDisabled) {
            return;
        }
        this.value = !this.value;
        this.onTouchedCb();
        this.onChangeCb(this.value);
    };
    var CheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "../../src/app/ui/checkbox/checkbox/checkbox.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxComponent_1; }),
                    multi: true
                }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox.component.sass */ "../../src/app/ui/checkbox/checkbox/checkbox.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_checkbox_config__WEBPACK_IMPORTED_MODULE_3__["IW_CHECKBOX_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dialog-container__content\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"dialog-container__focus-trap\" iwDialogFocusTrap></div>\n"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.sass":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.sass ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n  outline: none; }\n  iw-dialog-container .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px; }\n  iw-dialog-container.iw-dialog-container--visible {\n    opacity: 1; }\n  iw-dialog-container.iw-dialog-container--visible .dialog-container__content {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n  iw-dialog-container .dialog-container__focus-trap {\n    opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osV0FBVTtFQUNWLFdBQVU7RUFDVixzQ0FBcUM7RUFDckMseUJBQXdCO0VBQ3hCLGNBQWEsRUF3Qkk7RUFsQ25CO0lBYUksbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixVQUFTO0lBQ1QsV0FBVTtJQUNWLGtCQUFpQjtJQUNqQiwrQkFBOEI7SUFDOUIsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsbUNBQTBCO0lBQTFCLDJCQUEwQjtJQUExQixtREFBMEI7SUFDMUIscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixpQ0FBZ0M7SUFDaEMsY0FBYSxFQUFHO0VBekJwQjtJQTRCSSxXQUFVLEVBRXFCO0VBOUJuQztNQThCTSxpQ0FBd0I7Y0FBeEIseUJBQXdCLEVBQUc7RUE5QmpDO0lBa0NJLFdBQVUsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3VpL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpdy1kaWFsb2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC42Nyk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgb3V0bGluZTogbm9uZTtcblxuICAuZGlhbG9nLWNvbnRhaW5lcl9fY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMjAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjAwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMXB4IGdyYXk7XG4gICAgcGFkZGluZzogMTVweDsgfVxuXG4gICYuaXctZGlhbG9nLWNvbnRhaW5lci0tdmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAuZGlhbG9nLWNvbnRhaW5lcl9fY29udGVudCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG5cbiAgLmRpYWxvZy1jb250YWluZXJfX2ZvY3VzLXRyYXAge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DialogContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContainerComponent", function() { return DialogContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DialogContainerComponent = /** @class */ (function () {
    function DialogContainerComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogContainerComponent.prototype.onKeydown = function ($event) {
        if ($event.keyCode === 27 && this.dialogOptions.escToClose) {
            this.onClose.emit();
            $event.preventDefault();
        }
    };
    DialogContainerComponent.prototype.onClick = function ($event) {
        if ($event.target === this.elementRef.nativeElement && this.dialogOptions.clickToClose) {
            this.onClose.emit();
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    DialogContainerComponent.prototype.ngOnInit = function () {
        var classes = this.dialogOptions.containerClass.split(' ').filter(function (s) { return !!s; });
        for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
            var c = classes_1[_i];
            this.renderer.addClass(this.elementRef.nativeElement, c);
        }
    };
    DialogContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
        this.focus();
        setTimeout(function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, 'iw-dialog-container--visible');
        }, 0);
    };
    DialogContainerComponent.prototype.focus = function () {
        var element = this.elementRef.nativeElement;
        element.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogContainerComponent.prototype, "dialogOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogContainerComponent.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('body:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onKeydown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onClick", null);
    DialogContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-dialog-container',
            template: __webpack_require__(/*! ./dialog-container.component.html */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dialog-container.component.sass */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DialogContainerComponent);
    return DialogContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts":
/*!**********************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog-focus-trap.directive.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DialogFocusTrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFocusTrapDirective", function() { return DialogFocusTrapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");



var DialogFocusTrapDirective = /** @class */ (function () {
    function DialogFocusTrapDirective(container) {
        this.container = container;
        this.tabindex = 0;
    }
    DialogFocusTrapDirective.prototype.onFocus = function ($event) {
        this.container.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFocusTrapDirective.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FocusEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogFocusTrapDirective.prototype, "onFocus", null);
    DialogFocusTrapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwDialogFocusTrap]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"]])
    ], DialogFocusTrapDirective);
    return DialogFocusTrapDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-ref.class.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog-ref.class.ts ***!
  \***********************************************************************************************/
/*! exports provided: DialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogRef", function() { return DialogRef; });
var DialogRef = /** @class */ (function () {
    function DialogRef(container, __viewRef, __appRef, __close, __options) {
        var _this = this;
        this.container = container;
        this.__viewRef = __viewRef;
        this.__appRef = __appRef;
        this.__close = __close;
        this.__options = __options;
        this.container.instance.onClose.subscribe(function () {
            _this.__close();
        });
        this.container.instance.dialogOptions = this.__options;
    }
    DialogRef.prototype.close = function () {
        this.__close();
    };
    DialogRef.prototype.attach = function () {
        document.body.appendChild(this.container.location.nativeElement);
        this.__appRef.attachView(this.container.hostView);
        if (this.__viewRef) {
            this.__appRef.attachView(this.__viewRef);
        }
    };
    DialogRef.prototype.detach = function () {
        if (this.__options.onClose) {
            this.__options.onClose(this);
        }
        document.body.removeChild(this.container.location.nativeElement);
        this.__appRef.detachView(this.container.hostView);
        if (this.__viewRef) {
            this.__appRef.detachView(this.__viewRef);
        }
        this.container.destroy();
        if (this.__viewRef) {
            this.__viewRef.destroy();
        }
    };
    return DialogRef;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.config.ts":
/*!********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog.config.ts ***!
  \********************************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return IW_DIALOG_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_DIALOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-dialog.config');


/***/ }),

/***/ "../../src/app/ui/dialog/dialog.directive.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: DialogDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return DialogDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");



/**
 * The dialog component is meant to focus user's attention on one particular task or content.
 * It is displayed on top of the rest.
 ```ts
 import { DialogModule } from 'iwerk-angular-ui';
 ```
 */
var DialogDirective = /** @class */ (function () {
    function DialogDirective(dialogService, templateRef) {
        this.dialogService = dialogService;
        this.templateRef = templateRef;
    }
    /**
     * @ignore
     */
    DialogDirective.prototype.ngOnDestroy = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    /**
     * Open the dialog.
     */
    DialogDirective.prototype.open = function () {
        var _this = this;
        if (this.__dialogInstance) {
            return;
        }
        this.__dialogInstance = this.dialogService.openTemplateRef(this.templateRef, null, {
            clickToClose: this.clickToClose === undefined ? true : this.clickToClose,
            containerClass: this.containerClass || '',
            escToClose: this.escToClose === undefined ? true : this.escToClose,
            onClose: function (dialog) {
                if (_this.__dialogInstance === dialog) {
                    _this.__dialogInstance = undefined;
                }
            }
        });
    };
    /**
     * Close the dialog.
     */
    DialogDirective.prototype.close = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogDirective.prototype, "escToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogDirective.prototype, "clickToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogDirective.prototype, "containerClass", void 0);
    DialogDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwDialog]',
            exportAs: 'iw-dialog'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], DialogDirective);
    return DialogDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.module.ts":
/*!********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog.module.ts ***!
  \********************************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.directive */ "../../src/app/ui/dialog/dialog.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"]; });

/* harmony import */ var _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-focus-trap.directive */ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return _dialog_config__WEBPACK_IMPORTED_MODULE_7__["IW_DIALOG_CONFIG"]; });










var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__["DialogContainerComponent"],
                _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"],
                _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_6__["DialogFocusTrapDirective"]
            ],
            entryComponents: [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__["DialogContainerComponent"]],
            exports: [_dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"]],
            providers: [_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.service.ts":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/dialog/dialog.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony import */ var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-ref.class */ "../../src/app/ui/dialog/dialog-ref.class.ts");





var DialogService = /** @class */ (function () {
    function DialogService(appRef, injector, componentFactoryResolver, dialogConfig) {
        this.appRef = appRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogConfig = dialogConfig;
        this.__defaultOptions = {
            containerClass: '',
            clickToClose: true,
            escToClose: true,
            onClose: function () { }
        };
        this.__containerFactory = this.componentFactoryResolver.resolveComponentFactory(_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"]);
    }
    /**
     * Open a dialog that embeds an entry component.
     * @param componentType the component class to embed into the dialog
     * @param options the options to use with the dialog
     * @param data the data to pass to the embedded component
     */
    DialogService.prototype.open = function (componentType, options, data) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var component = factory.create(this.injector);
        var _data = data || {};
        for (var key in _data) {
            if (_data.hasOwnProperty(key)) {
                component.instance[key] = _data[key];
            }
        }
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__["DialogRef"](this.__containerFactory.create(this.injector, [[component.location.nativeElement]]), component.hostView, this.appRef, function () {
            _this.__close(dialogRef);
        }, this.__createOptions(options));
        return this.__open(dialogRef);
    };
    /**
     * Open a dialog that loads a template.
     * @param templateRef the template to load inside the dialog
     * @param context the context to associate with the template
     * @param options the options to use with the dialog
     */
    DialogService.prototype.openTemplateRef = function (templateRef, context, options) {
        var _this = this;
        var view = templateRef.createEmbeddedView(context);
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__["DialogRef"](this.__containerFactory.create(this.injector, [view.rootNodes]), view, this.appRef, function () {
            _this.__close(dialogRef);
        }, this.__createOptions(options));
        return this.__open(dialogRef);
    };
    /**
     * Close the currently opened dialog, if any
     */
    DialogService.prototype.close = function () {
        if (this.__previousDialog) {
            this.__close(this.__previousDialog);
        }
    };
    DialogService.prototype.__close = function (dialogRef) {
        if (this.__previousDialog === dialogRef) {
            this.__previousDialog.detach();
            this.__previousDialog = undefined;
        }
    };
    DialogService.prototype.__open = function (dialogRef) {
        this.close();
        this.__previousDialog = dialogRef;
        dialogRef.attach();
        return dialogRef;
    };
    DialogService.prototype.__createOptions = function (_options) {
        var dialogConfig = this.dialogConfig || {};
        var options = _options || {};
        return Object.assign({}, this.__defaultOptions, dialogConfig, options, {
            containerClass: (dialogConfig.containerClass || '') + ' ' + (options.containerClass || '')
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_dialog_config__WEBPACK_IMPORTED_MODULE_3__["IW_DIALOG_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], Object])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "../../src/app/ui/movable/movable.directive.ts":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/movable/movable.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: MovableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableDirective", function() { return MovableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movable.service */ "../../src/app/ui/movable/movable.service.ts");



/**
 * The movable directive lets the user move around elements.
 */
var MovableDirective = /** @class */ (function () {
    function MovableDirective(movable, elementRef) {
        this.movable = movable;
        this.elementRef = elementRef;
        /**
         * Emits true when the element is moved, false otherwise.
         */
        this.moved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(MovableDirective.prototype, "top", {
        get: function () {
            if (this.__position !== undefined) {
                var top_1 = this.__position.top;
                if (this.__move) {
                    top_1 += this.__move.y;
                }
                return top_1 + 'px';
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovableDirective.prototype, "left", {
        get: function () {
            if (this.__position !== undefined) {
                var left = this.__position.left;
                if (this.__move) {
                    left += this.__move.x;
                }
                return left + 'px';
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    MovableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.movable.move$.subscribe(function (move) {
            if (!_this.__position) {
                _this.updateCurrentPositionFromOffset();
            }
            _this.__move = move;
            _this.moved.next(true);
        });
        this.movable.stopped$.subscribe(function () {
            _this.__move = undefined;
            _this.updateCurrentPositionFromOffset();
            _this.moved.next(false);
        });
    };
    Object.defineProperty(MovableDirective.prototype, "element", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    MovableDirective.prototype.updateCurrentPositionFromOffset = function () {
        this.__position = {
            top: this.element.offsetTop,
            left: this.element.offsetLeft
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovableDirective.prototype, "moved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.top'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovableDirective.prototype, "top", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.left'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovableDirective.prototype, "left", null);
    MovableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwMovable]',
            providers: [_movable_service__WEBPACK_IMPORTED_MODULE_2__["MovableService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movable_service__WEBPACK_IMPORTED_MODULE_2__["MovableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MovableDirective);
    return MovableDirective;
}());



/***/ }),

/***/ "../../src/app/ui/movable/movable.module.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/movable/movable.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MovableService, MovableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableModule", function() { return MovableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movable.directive */ "../../src/app/ui/movable/movable.directive.ts");
/* harmony import */ var _move_handle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./move-handle.directive */ "../../src/app/ui/movable/move-handle.directive.ts");
/* harmony import */ var _movable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movable.service */ "../../src/app/ui/movable/movable.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableService", function() { return _movable_service__WEBPACK_IMPORTED_MODULE_5__["MovableService"]; });







var MovableModule = /** @class */ (function () {
    function MovableModule() {
    }
    MovableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_movable_directive__WEBPACK_IMPORTED_MODULE_3__["MovableDirective"], _move_handle_directive__WEBPACK_IMPORTED_MODULE_4__["MoveHandleDirective"]],
            exports: [_movable_directive__WEBPACK_IMPORTED_MODULE_3__["MovableDirective"], _move_handle_directive__WEBPACK_IMPORTED_MODULE_4__["MoveHandleDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], MovableModule);
    return MovableModule;
}());



/***/ }),

/***/ "../../src/app/ui/movable/movable.service.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/movable/movable.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: MovableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableService", function() { return MovableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var MovableService = /** @class */ (function () {
    function MovableService() {
        this.move$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stopped$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MovableService.prototype.startMoving = function (position) {
        this.initialPosition = position;
        document.addEventListener('mousemove', this);
        document.addEventListener('touchmove', this);
    };
    MovableService.prototype.stopMoving = function () {
        document.removeEventListener('touchmove', this);
        document.removeEventListener('mousemove', this);
        this.stopped$.next();
    };
    MovableService.prototype.handleEvent = function (event) {
        if (event instanceof MouseEvent) {
            // we do that to avoid selecting text while dragging
            event.preventDefault();
            event.stopPropagation();
            this.move$.next({
                x: event.pageX - this.initialPosition.left,
                y: event.pageY - this.initialPosition.top
            });
        }
        else if (event instanceof TouchEvent) {
            this.move$.next({
                x: event.touches[0].pageX - this.initialPosition.left,
                y: event.touches[0].pageY - this.initialPosition.top
            });
        }
    };
    MovableService.prototype.makeHandle = function (target) {
        var _this = this;
        var element = target.elementRef.nativeElement;
        var listeners = [
            { event: 'mousedown', fn: function ($event) {
                    $event.preventDefault();
                    _this.startMoving({
                        top: $event.pageY,
                        left: $event.pageX
                    });
                } },
            { event: 'mouseup', fn: function () {
                    _this.stopMoving();
                } },
            { event: 'touchstart', fn: function ($event) {
                    // we avoid scrolling
                    $event.preventDefault();
                    _this.startMoving({
                        top: $event.touches[0].pageY,
                        left: $event.touches[0].pageX
                    });
                } },
            { event: 'touchend', fn: function () {
                    _this.stopMoving();
                } }
        ];
        listeners.forEach(function (item) { return element.addEventListener(item.event, item.fn); });
        return function () {
            listeners.forEach(function (item) { return element.removeEventListener(item.event, item.fn); });
        };
    };
    MovableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovableService);
    return MovableService;
}());



/***/ }),

/***/ "../../src/app/ui/movable/move-handle.directive.ts":
/*!*****************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/movable/move-handle.directive.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MoveHandleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveHandleDirective", function() { return MoveHandleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movable.service */ "../../src/app/ui/movable/movable.service.ts");



var MoveHandleDirective = /** @class */ (function () {
    function MoveHandleDirective(movable, elementRef) {
        this.movable = movable;
        this.elementRef = elementRef;
    }
    Object.defineProperty(MoveHandleDirective.prototype, "isMovable", {
        get: function () {
            return !!this.movable;
        },
        enumerable: true,
        configurable: true
    });
    MoveHandleDirective.prototype.ngOnInit = function () {
        if (this.movable) {
            this.sub = this.movable.makeHandle(this);
        }
    };
    MoveHandleDirective.prototype.ngOnDestroy = function () {
        if (this.movable) {
            this.sub();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.iw-move-handle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoveHandleDirective.prototype, "isMovable", null);
    MoveHandleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwMoveHandle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movable_service__WEBPACK_IMPORTED_MODULE_2__["MovableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MoveHandleDirective);
    return MoveHandleDirective;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MultilineEllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisDirective", function() { return MultilineEllipsisDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_runner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-runner.service */ "../../src/app/ui/multiline-ellipsis/task-runner.service.ts");



/**
 * The multiline ellipsis directive can be used to display multi-line
 * text with an ellipsis character at the end if the text is too long.
 *
 ```ts
 import { MultilineEllipsisModule } from 'iwerk-angular-ui';
 ```
 */
var MultilineEllipsisDirective = /** @class */ (function () {
    function MultilineEllipsisDirective(elementRef, taskRunner) {
        this.elementRef = elementRef;
        this.taskRunner = taskRunner;
        /**
         * An event that is emitted that indicates whether the text is truncated.
         */
        this.truncated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(MultilineEllipsisDirective.prototype, "isOverflowing", {
        /**
         * A boolean that indicates if the text overflows.
         */
        get: function () {
            return this.__isOverflowing;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.ngOnInit = function () {
        var self = this.elementRef.nativeElement;
        self.classList.add('multiline-ellipsis');
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.ngAfterViewChecked = function () {
        var self = this.elementRef.nativeElement;
        if (this.iwMultilineEllipsis !== this.oldText || this.oldHeight !== self.offsetHeight || this.oldWidth !== self.offsetWidth) {
            this.oldText = this.iwMultilineEllipsis;
            this.oldHeight = self.offsetHeight;
            this.oldWidth = self.offsetWidth;
            this.needsAdjust = true;
        }
        this.adjustInner();
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.onResize = function () {
        this.needsAdjust = true;
        this.adjustInner();
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.adjustInner = function () {
        if (!this.needsAdjust) {
            return;
        }
        this.needsAdjust = false;
        var self = this.elementRef.nativeElement;
        self.innerHTML = this.iwMultilineEllipsis || '';
        var height = self.clientHeight;
        var contentHeight = self.scrollHeight;
        var overflow = height < contentHeight;
        var ellipsis = document.createElement('span');
        ellipsis.classList.add('ellipsis');
        ellipsis.innerText = '…';
        if (!overflow) {
            this.emitTruncated(false);
            return;
        }
        this.emitTruncated(true);
        self.appendChild(ellipsis);
        if (self.childNodes.length > 1) {
            var child = self.childNodes.item(self.childNodes.length - 2);
            if (this.removeLastByteAux(child)) {
                self.removeChild(child);
            }
        }
        while (overflow) {
            if (this.removeLastByte(self)) {
                break;
            }
            overflow = self.offsetHeight < self.scrollHeight;
        }
    };
    MultilineEllipsisDirective.prototype.emitTruncated = function (truncated) {
        var _this = this;
        this.taskRunner.addTaskForNextRound(function () {
            _this.truncated.emit(truncated);
        });
        this.__isOverflowing = truncated;
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.removeLastByte = function (element) {
        if (element.childNodes.length > 1) {
            var child = element.childNodes.item(element.childNodes.length - 2);
            if (this.removeLastByteAux(child)) {
                element.removeChild(child);
            }
        }
        return element.childNodes.length === 1;
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.removeLastByteAux = function (element) {
        // true to remove
        if (element.nodeType === Node.TEXT_NODE) {
            var split = element.textContent.split(' ');
            split.pop();
            element.textContent = split.join(' ');
            return element.textContent === '';
        }
        if (element.nodeType === Node.ELEMENT_NODE) {
            if (element.hasChildNodes()) {
                var last = element.childNodes.item(element.childNodes.length - 1);
                var result = this.removeLastByteAux(last);
                if (result) {
                    element.removeChild(last);
                    return this.removeLastByteAux(element);
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        throw new Error('This node type is not handled');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultilineEllipsisDirective.prototype, "iwMultilineEllipsis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultilineEllipsisDirective.prototype, "truncated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MultilineEllipsisDirective.prototype, "onResize", null);
    MultilineEllipsisDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwMultilineEllipsis]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _task_runner_service__WEBPACK_IMPORTED_MODULE_2__["TaskRunnerService"]])
    ], MultilineEllipsisDirective);
    return MultilineEllipsisDirective;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts":
/*!********************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MultilineEllipsisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisModule", function() { return MultilineEllipsisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiline-ellipsis.directive */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts");
/* harmony import */ var _task_runner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-runner.service */ "../../src/app/ui/multiline-ellipsis/task-runner.service.ts");





var MultilineEllipsisModule = /** @class */ (function () {
    function MultilineEllipsisModule() {
    }
    MultilineEllipsisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisDirective"]],
            exports: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisDirective"]],
            providers: [_task_runner_service__WEBPACK_IMPORTED_MODULE_4__["TaskRunnerService"]]
        })
    ], MultilineEllipsisModule);
    return MultilineEllipsisModule;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/task-runner.service.ts":
/*!**************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/multiline-ellipsis/task-runner.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TaskRunnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRunnerService", function() { return TaskRunnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * The TaskRunnerService was introduced to execute tasks in one zone run.
 * This is useful when directives/components want to emit outputs after change detection.
 */
var TaskRunnerService = /** @class */ (function () {
    function TaskRunnerService() {
        this.tasks = [];
        this.timeout = undefined;
    }
    TaskRunnerService.prototype.addTaskForNextRound = function (t) {
        var _this = this;
        this.tasks.push(t);
        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                var tasks = _this.tasks;
                _this.tasks = [];
                tasks.forEach(function (task) { return task(); });
                _this.timeout = undefined;
            }, 0);
        }
    };
    TaskRunnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TaskRunnerService);
    return TaskRunnerService;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation-controller.service.ts":
/*!****************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/navigation/navigation-controller.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: NavigationData, NavigationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return NavigationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return NavigationController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavigationData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('iw-navigation.NAVIGATION_DATA');
var NavigationController = /** @class */ (function () {
    function NavigationController(injector) {
        this.injector = injector;
        this.stack = [];
    }
    NavigationController.prototype.present = function (type, data) {
        var _this = this;
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].resolveAndCreate([{
                provide: NavigationData,
                useValue: data
            }], this.injector);
        return new Promise(function (resolve) {
            _this.stack.push({ type: type, resolve: resolve, injector: injector });
        });
    };
    NavigationController.prototype.dismiss = function (value) {
        var last = this.stack.pop();
        last.resolve(value);
    };
    NavigationController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], NavigationController);
    return NavigationController;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation.module.ts":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/navigation/navigation.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: NavigationComponent, NavigationData, NavigationController, NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "../../src/app/ui/navigation/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]; });

/* harmony import */ var _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-controller.service */ "../../src/app/ui/navigation/navigation-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__["NavigationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__["NavigationController"]; });







var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.html":
/*!********************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iw-navigation-container\" [class.iw-navigation-container--visible]=\"isStackEmpty\">\n  <ng-content></ng-content>\n</div>\n\n<ng-template ngFor [ngForOf]=\"stack\" let-item let-isLast=\"last\">\n  <div class=\"iw-navigation-container\" [class.iw-navigation-container--visible]=\"isLast\">\n    <ng-container *ngComponentOutlet=\"item.type; injector: item.injector\"></ng-container>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.sass":
/*!********************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.sass ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iw-navigation-container:not(.iw-navigation-container--visible) {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLml3LW5hdmlnYXRpb24tY29udGFpbmVyOm5vdCguaXctbmF2aWdhdGlvbi1jb250YWluZXItLXZpc2libGUpIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation-controller.service */ "../../src/app/ui/navigation/navigation-controller.service.ts");



/**
 * The navigation component is designed to stack views and only show the last element.
 * It is used along with the NavigationController
 ```ts
 import { NavigationModule } from 'iwerk-angular-ui';
 ```
 */
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(navigationController) {
        this.navigationController = navigationController;
    }
    Object.defineProperty(NavigationComponent.prototype, "stack", {
        /**
         * @ignore
         */
        get: function () {
            return this.navigationController.stack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isStackEmpty", {
        /**
         * @ignore
         */
        get: function () {
            return this.stack.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Present the component.
     * @param type the component class to display in the stack.
     * @returns a promise that resolves with a value that the dismissed view gives you.
     */
    NavigationComponent.prototype.present = function (type, data) {
        return this.navigationController.present(type, data);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "../../src/app/ui/navigation/navigation/navigation.component.html"),
            providers: [
                _navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]
            ],
            styles: [__webpack_require__(/*! ./navigation.component.sass */ "../../src/app/ui/navigation/navigation/navigation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/helpers.ts":
/*!***************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/helpers.ts ***!
  \***************************************************************************************/
/*! exports provided: smartPosition, addClasses, combineOptionsAndDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartPosition", function() { return smartPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineOptionsAndDefaults", function() { return combineOptionsAndDefaults; });
function smartPosition(elements, options) {
    if (options.horizontal) {
        horizontalSmartPosition(elements, options);
    }
    else {
        verticalSmartPosition(elements, options);
    }
    elements.container.style.visibility = 'visible';
    elements.arrowElement.style.visibility = 'visible';
}
function verticalSmartPosition(elements, options) {
    var target = elements.target;
    var container = elements.container;
    var arrowElement = elements.arrowElement;
    var _a = target.getBoundingClientRect(), top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    var centerYBody = document.body.getBoundingClientRect().height / 2;
    if (top > centerYBody) {
        container.style.top = (top - container.offsetHeight) + 'px';
        arrowElement.style.top = top + 'px';
        arrowElement.classList.add('from-the-top');
        options.popoverPosition({ vertical: 'top' });
    }
    else {
        container.style.top = bottom + 'px';
        arrowElement.style.top = container.style.top;
        arrowElement.classList.add('from-the-bottom');
        options.popoverPosition({ vertical: 'bottom' });
    }
    var centerX = 0.5 * (left + right);
    arrowElement.style.left = centerX + "px";
    if (options.horizontalAlignment === 'leftWithLeft') {
        var maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
        container.style.left = Math.max(0, Math.min(maxLeft, left)) + 'px';
    }
    else if (options.horizontalAlignment === 'rightWithRight') {
        var maxRight = document.body.getBoundingClientRect().width - container.offsetWidth;
        container.style.right = Math.min(maxRight, (document.body.getBoundingClientRect().width - right)) + 'px';
    }
    else {
        var maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
        container.style.left = Math.max(0, Math.min(maxLeft, centerX - 0.5 * container.offsetWidth)) + 'px';
    }
}
function horizontalSmartPosition(elements, options) {
    var target = elements.target;
    var container = elements.container;
    var arrowElement = elements.arrowElement;
    var _a = target.getBoundingClientRect(), top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    var centerXBody = document.body.getBoundingClientRect().width / 2;
    if (left > centerXBody) {
        container.style.left = (left - container.offsetWidth) + 'px';
        arrowElement.style.left = left + 'px';
        arrowElement.classList.add('from-the-left');
        options.popoverPosition({ horizontal: 'left' });
    }
    else {
        container.style.left = right + 'px';
        arrowElement.style.left = container.style.left;
        arrowElement.classList.add('from-the-right');
        options.popoverPosition({ horizontal: 'right' });
    }
    var centerY = 0.5 * (top + bottom);
    arrowElement.style.top = centerY + "px";
    var maxTop = document.body.getBoundingClientRect().height - container.offsetHeight;
    container.style.top = Math.max(0, Math.min(maxTop, centerY - 0.5 * container.offsetHeight)) + 'px';
}
function addClasses(element, str) {
    (str || '').split(' ').filter(function (s) { return !!s; }).forEach(function (c) { return element.classList.add(c); });
}
function combineOptionsAndDefaults(providedConfig, options) {
    var config = providedConfig || {};
    var defaultOptions = {
        escToClose: config.escToClose === undefined ? true : config.escToClose,
        clickOutsideToClose: config.clickOutsideToClose === undefined ? true : config.clickOutsideToClose,
        arrowClass: config.arrowClass === undefined ? '' : config.arrowClass,
        popoverClass: config.popoverClass === undefined ? '' : config.popoverClass,
        scrollMaskClass: config.scrollMaskClass === undefined ? '' : config.scrollMaskClass,
        horizontalAlignment: config.horizontalAlignment,
        horizontal: config.horizontal === undefined ? false : config.horizontal
    };
    var result = {
        escToClose: options.escToClose === undefined ? defaultOptions.escToClose : options.escToClose,
        clickOutsideToClose: options.clickOutsideToClose === undefined ? defaultOptions.clickOutsideToClose : options.clickOutsideToClose,
        arrowClass: (options.arrowClass || '') + ' ' + defaultOptions.arrowClass,
        popoverClass: (options.popoverClass || '') + ' ' + defaultOptions.popoverClass,
        scrollMaskClass: (options.scrollMaskClass || '') + ' ' + defaultOptions.scrollMaskClass,
        horizontalAlignment: options.horizontalAlignment || defaultOptions.horizontalAlignment,
        shouldClose: options.shouldClose || (function () { }),
        popoverPosition: options.popoverPosition || (function () { }),
        horizontal: options.hasOwnProperty('horizontal') ? options.horizontal : defaultOptions.horizontal
    };
    return result;
}


/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.sass":
/*!*******************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.sass ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-container {\n  position: fixed;\n  z-index: 4;\n  display: block;\n  background: white;\n  border: 1px solid black;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItY29udGFpbmVyL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsZUFBYztFQUNkLGtCQUFpQjtFQUNqQix3QkFBdUI7RUFDdkIsYUFBWSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvdWkvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIml3LXBvcG92ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    PopoverContainerComponent.prototype.onKeyDown = function ($event) {
        if (this.escToClose && $event.keyCode === 27) {
            $event.preventDefault();
            this.onClose.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('body:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverContainerComponent.prototype, "onKeyDown", null);
    PopoverContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-popover-container',
            template: __webpack_require__(/*! ./popover-container.component.html */ "../../src/app/ui/popover/popover-container/popover-container.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./popover-container.component.sass */ "../../src/app/ui/popover/popover-container/popover-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.sass":
/*!***********************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.sass ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-scroll-mask {\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.01); }\n  iw-popover-scroll-mask .iw-popover-arrow-element {\n    z-index: 5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItc2Nyb2xsLW1hc2svcG9wb3Zlci1zY3JvbGwtbWFzay5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNDQUFxQyxFQUdwQjtFQVZuQjtJQVVJLFdBQVUsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3VpL3BvcG92ZXIvcG9wb3Zlci1zY3JvbGwtbWFzay9wb3BvdmVyLXNjcm9sbC1tYXNrLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaXctcG9wb3Zlci1zY3JvbGwtbWFzayB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpO1xuXG4gIC5pdy1wb3BvdmVyLWFycm93LWVsZW1lbnQge1xuICAgIHotaW5kZXg6IDU7IH0gfVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PopoverScrollMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverScrollMaskComponent", function() { return PopoverScrollMaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverScrollMaskComponent = /** @class */ (function () {
    function PopoverScrollMaskComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    PopoverScrollMaskComponent.prototype.ngOnInit = function () {
        this.renderer.addClass(document.body, 'body-with-iw-popover');
    };
    PopoverScrollMaskComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'body-with-iw-popover');
    };
    PopoverScrollMaskComponent.prototype.onClick = function ($event) {
        if (this.clickOutsideToClose && $event.target === this.elementRef.nativeElement) {
            $event.preventDefault();
            $event.stopPropagation();
            this.onClose.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverScrollMaskComponent.prototype, "onClick", null);
    PopoverScrollMaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-popover-scroll-mask',
            template: __webpack_require__(/*! ./popover-scroll-mask.component.html */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./popover-scroll-mask.component.sass */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PopoverScrollMaskComponent);
    return PopoverScrollMaskComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.config.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: IW_POPOVER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return IW_POPOVER_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_POPOVER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-popover.config');


/***/ }),

/***/ "../../src/app/ui/popover/popover.directive.ts":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: PopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");



/**
 * The popover component can be used to display extra piece of information or more user interface elements.
 * The popover consists in a `iw-popover-container` that is added directly to the body.
 * It automatically adds a scroll mask element and an arrow element.
 *
 * ## Positionning
 *
 * By default and if possible, the popover is horizontally centered with its target's center.
 * If the popover goes out of bounds, its horizontal position is adjusted to stay in bounds.
 * It is possible to set this horizontal alignment behaviour by setting the `horizontalAlignment` input to `'leftWithLeft'`.
 *
 * By default, the popover puts itself on top of the target if the target is on the bottom-half of the screen,
 * on the bottom if the target is on the top-half of the screen.
 *
 * ## Scroll mask and arrow elements
 * The popover component automatically appends a scroll mask and an arrow elements to the body.
 * You can adjust their style to your convenience.
 * - The arrow is automatically positionned to point at the target element. This element has the class `.iw-popover-arrow-element`.
 * - The scroll mask `<iw-popover-scroll-mask>` is meant to prevent the user from scrolling
 * and to intercept clicks oustide of the popover and to dismiss the popover.
 *
 ```ts
 import { PopoverModule } from 'iwerk-angular-ui';
 ```
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(popoverService, templateRef, viewContainerRef, zone, changeDetectorRef) {
        this.popoverService = popoverService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Event triggered that gives you the opportunity to close the popover (e.g. `isOpen = false`)
         */
        this.shouldClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered when the popover position changes.
         */
        this.popoverPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @ignore
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this.__close();
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.ngOnChanges = function (changes) {
        if (changes['isOpen']) {
            this.__update();
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__update = function () {
        if (this.__popoverInstance && !this.isOpen) {
            this.__close();
        }
        else if (this.isOpen && !this.__popoverInstance) {
            this.__open();
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__open = function () {
        var _this = this;
        // get out of the zone to avoid triggering another zone run
        this.zone.runOutsideAngular(function () {
            // wait till the current stack is finished to avoid ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () {
                // go back to the zone
                _this.zone.run(function () {
                    // create the popover
                    _this.__popoverInstance = _this.popoverService.openTemplateRef(_this.templateRef, _this.viewContainerRef.element.nativeElement.parentElement, {
                        horizontal: _this.__getHorizontal(),
                        arrowClass: _this.arrowClass,
                        horizontalAlignment: _this.horizontalAlignment,
                        popoverClass: _this.popoverClass,
                        scrollMaskClass: _this.scrollMaskClass,
                        shouldClose: function () {
                            _this.shouldClose.emit();
                        },
                        popoverPosition: function (p) {
                            _this.popoverPosition.emit(p);
                        },
                        escToClose: _this.escToClose,
                        clickOutsideToClose: _this.clickOutsideToClose
                    });
                    // run the change detection
                    _this.changeDetectorRef.detectChanges();
                    _this.changeDetectorRef.markForCheck();
                });
            }, 0);
        });
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__close = function () {
        if (this.__popoverInstance) {
            this.__popoverInstance.close();
            this.__popoverInstance = undefined;
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__getHorizontal = function () {
        if (this.horizontal === undefined) {
            return false;
        }
        return this.horizontal;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "popoverClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "arrowClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "horizontalAlignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "scrollMaskClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "escToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "clickOutsideToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "horizontal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "shouldClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "popoverPosition", void 0);
    PopoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwPopover]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.module.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.directive */ "../../src/app/ui/popover/popover.directive.ts");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_6__["Popover"]; });

/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_7__["IW_POPOVER_CONFIG"]; });










var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__["PopoverContainerComponent"], _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__["PopoverScrollMaskComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _popover_directive__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"],
                _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__["PopoverContainerComponent"],
                _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__["PopoverScrollMaskComponent"]
            ],
            exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"]],
            providers: [_popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"]]
        })
    ], PopoverModule);
    return PopoverModule;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.service.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/popover/popover.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: Popover, PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/popover/helpers.ts");






var PopoverImpl = /** @class */ (function () {
    function PopoverImpl(embeddedViewRef, appRef, componentRef, container, scrollMask, arrowElement) {
        this.embeddedViewRef = embeddedViewRef;
        this.appRef = appRef;
        this.componentRef = componentRef;
        this.container = container;
        this.scrollMask = scrollMask;
        this.arrowElement = arrowElement;
        this.isClosed = false;
    }
    PopoverImpl.prototype.close = function () {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        if (this.embeddedViewRef) {
            this.embeddedViewRef.destroy();
            this.appRef.detachView(this.embeddedViewRef);
        }
        if (this.componentRef) {
            this.componentRef.destroy();
            this.appRef.detachView(this.componentRef.hostView);
        }
        this.arrowElement.remove();
        this.appRef.detachView(this.container.hostView);
        this.appRef.detachView(this.scrollMask.hostView);
        this.container.destroy();
        this.scrollMask.destroy();
    };
    return PopoverImpl;
}());
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.close = function () {
        this.__instance.close();
    };
    Popover.prototype.setInstance = function (instance) {
        this.__instance = instance;
    };
    Popover = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Popover);
    return Popover;
}());

var PopoverService = /** @class */ (function () {
    function PopoverService(injector, componentFactoryResolver, appRef, popoverConfig) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.popoverConfig = popoverConfig;
    }
    PopoverService.prototype.openTemplateRef = function (templateRef, target, options) {
        return this.__open(null, templateRef.createEmbeddedView(null), target, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["combineOptionsAndDefaults"])(this.popoverConfig, options));
    };
    PopoverService.prototype.open = function (componentType, target, options, init) {
        var reflInj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create([{ provide: Popover, deps: [] }], this.injector);
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var component = factory.create(reflInj);
        if (init) {
            init(component.instance);
        }
        var popover = reflInj.get(Popover);
        var popoverOptions = Object.assign({}, options || {});
        popoverOptions.shouldClose = function () {
            if (options && options.shouldClose) {
                options.shouldClose();
            }
            popover.close();
        };
        var instance = this.__open(component, null, target, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["combineOptionsAndDefaults"])(this.popoverConfig, popoverOptions));
        popover.setInstance(instance);
        return instance;
    };
    PopoverService.prototype.__open = function (componentRef, embeddedViewRef, target, options) {
        var arrowElement = document.createElement('div');
        arrowElement.classList.add('iw-popover-arrow-element');
        // create the popover container
        var container = this.componentFactoryResolver.resolveComponentFactory(_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContainerComponent"])
            .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
        // create the mask component
        var scrollMask = this.componentFactoryResolver.resolveComponentFactory(_popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_3__["PopoverScrollMaskComponent"])
            .create(this.injector);
        // we bind to the output (which is an observable)
        scrollMask.instance.clickOutsideToClose = options.clickOutsideToClose;
        scrollMask.instance.onClose.subscribe(function () {
            options.shouldClose();
        });
        container.instance.escToClose = options.escToClose;
        container.instance.onClose.subscribe(function () {
            options.shouldClose();
        });
        if (componentRef) {
            this.appRef.attachView(componentRef.hostView);
        }
        if (embeddedViewRef) {
            this.appRef.attachView(embeddedViewRef);
        }
        this.appRef.attachView(container.hostView);
        this.appRef.attachView(scrollMask.hostView);
        this.__showPopover({
            arrowElement: arrowElement,
            container: container.location.nativeElement,
            scrollMask: scrollMask.location.nativeElement,
            target: target
        }, options);
        return new PopoverImpl(embeddedViewRef, this.appRef, componentRef, container, scrollMask, arrowElement);
    };
    PopoverService.prototype.__showPopover = function (elements, options) {
        var container = elements.container;
        var scrollMask = elements.scrollMask;
        var arrowElement = elements.arrowElement;
        setTimeout(function () {
            container.style.visibility = 'hidden';
            arrowElement.style.visibility = 'hidden';
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(container, options.popoverClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(scrollMask, options.scrollMaskClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(arrowElement, options.arrowClass);
            document.body.appendChild(container);
            document.body.appendChild(arrowElement);
            document.body.appendChild(scrollMask);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["smartPosition"])(elements, options);
            container.classList.add('iw-popover-container--visible');
            arrowElement.classList.add('iw-popover-arrow-element--visible');
        }, 0);
    };
    PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_popover_config__WEBPACK_IMPORTED_MODULE_4__["IW_POPOVER_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Object])
    ], PopoverService);
    return PopoverService;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.directive.ts":
/*!***********************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/state-button/state-button.directive.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StateButtonDirective, SbIdleDirective, SbSuccessDirective, SbDoingDirective, SbFailureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonDirective", function() { return StateButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbIdleDirective", function() { return SbIdleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbSuccessDirective", function() { return SbSuccessDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbDoingDirective", function() { return SbDoingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFailureDirective", function() { return SbFailureDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_template_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-template.class */ "../../src/app/ui/state-button/state-template.class.ts");




var StateButtonDirective = /** @class */ (function () {
    function StateButtonDirective() {
        this.__state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.withClass = true;
    }
    Object.defineProperty(StateButtonDirective.prototype, "state", {
        get: function () {
            return this.__state.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "iwStateButton", {
        set: function (v) {
            this.__state.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isIdle", {
        get: function () {
            return this.__state.value === 'IDLE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isDoing", {
        get: function () {
            return this.__state.value === 'DOING';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isSuccess", {
        get: function () {
            return this.__state.value === 'SUCCESS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isFailure", {
        get: function () {
            return this.__state.value === 'FAILURE';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], StateButtonDirective.prototype, "iwStateButton", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.iw-state-button'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateButtonDirective.prototype, "withClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--idle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isIdle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--doing'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isDoing", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--success'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--failure'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isFailure", null);
    StateButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwStateButton]'
        })
    ], StateButtonDirective);
    return StateButtonDirective;
}());

var SbIdleDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbIdleDirective, _super);
    function SbIdleDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'IDLE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbIdleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbIdle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbIdleDirective);
    return SbIdleDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbSuccessDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbSuccessDirective, _super);
    function SbSuccessDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'SUCCESS', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbSuccessDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbSuccess]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbSuccessDirective);
    return SbSuccessDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbDoingDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbDoingDirective, _super);
    function SbDoingDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'DOING', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbDoingDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbDoing]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbDoingDirective);
    return SbDoingDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbFailureDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbFailureDirective, _super);
    function SbFailureDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'FAILURE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbFailureDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbFailure]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbFailureDirective);
    return SbFailureDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.module.ts":
/*!********************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/state-button/state-button.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: StateButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonModule", function() { return StateButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-button.directive */ "../../src/app/ui/state-button/state-button.directive.ts");




var StateButtonModule = /** @class */ (function () {
    function StateButtonModule() {
    }
    StateButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbSuccessDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbSuccessDirective"]
            ],
        })
    ], StateButtonModule);
    return StateButtonModule;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-template.class.ts":
/*!*********************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/state-button/state-template.class.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTemplate", function() { return StateTemplate; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");

var StateTemplate = /** @class */ (function () {
    function StateTemplate(triggeringState, viewContainerRef, templateRef, stateButtonDirective) {
        this.triggeringState = triggeringState;
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.stateButtonDirective = stateButtonDirective;
    }
    StateTemplate.prototype.ngOnInit = function () {
        var _this = this;
        var distinct = this.stateButtonDirective.state
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (s) { return s === _this.triggeringState; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        this.__subscription = distinct.subscribe(function (b) {
            if (b) {
                _this.__previousEmbedded = _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.__remove();
            }
        });
    };
    StateTemplate.prototype.ngOnDestroy = function () {
        this.__subscription.unsubscribe();
        this.__remove();
    };
    StateTemplate.prototype.__remove = function () {
        if (this.__previousEmbedded) {
            this.__previousEmbedded.destroy();
            this.viewContainerRef.remove(0);
        }
    };
    return StateTemplate;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/helpers.ts":
/*!***************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/helpers.ts ***!
  \***************************************************************************************/
/*! exports provided: smartPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartPosition", function() { return smartPosition; });
function smartPosition(options, type) {
    if (type === void 0) { type = 'vertical'; }
    switch (type) {
        case 'horizontal':
            horizontalSmartPosition(options);
            break;
        case 'vertical':
        default:
            verticalSmartPosition(options);
            break;
    }
}
function verticalSmartPosition(options) {
    var targetRect = options.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    options.container.style.visibility = 'hidden';
    // do that after, otherwise it can change the bounding client rect of the target
    document.body.appendChild(options.container);
    var y = targetRect.top;
    var centerYBody = bodyRect.height / 2;
    if (y > centerYBody) {
        options.container.style.top = (targetRect.top - options.container.offsetHeight - 1) + 'px';
        options.container.classList.add('iw-tooltip-container--top');
    }
    else {
        options.container.style.top = (1 + targetRect.bottom) + 'px';
        options.container.classList.add('iw-tooltip-container--bottom');
    }
    var containerWidth = options.container.offsetWidth;
    var idealLeft = targetRect.left + targetRect.width / 2 - containerWidth / 2;
    var maxLeft = bodyRect.width - containerWidth;
    options.container.style.left = Math.min(maxLeft, idealLeft) + 'px';
    options.container.style.visibility = 'visible';
}
function horizontalSmartPosition(options) {
    var targetRect = options.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    options.container.style.visibility = 'hidden';
    // do that after, otherwise it can change the bounding client rect of the target
    document.body.appendChild(options.container);
    var x = targetRect.left;
    var centerXBody = bodyRect.width / 2;
    if (x > centerXBody) {
        options.container.style.left = (targetRect.left - options.container.offsetWidth - 1) + 'px';
        options.container.classList.add('iw-tooltip-container--left');
    }
    else {
        options.container.style.left = (1 + targetRect.right) + 'px';
        options.container.classList.add('iw-tooltip-container--right');
    }
    var containerHeight = options.container.offsetHeight;
    var idealTop = targetRect.top + targetRect.height / 2 - containerHeight / 2;
    var maxTop = bodyRect.height - containerHeight;
    options.container.style.top = Math.min(maxTop, idealTop) + 'px';
    options.container.style.visibility = 'visible';
}


/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.html":
/*!*******************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip-container__content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.sass":
/*!*******************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.sass ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-tooltip-container {\n  z-index: 6;\n  position: absolute;\n  display: block;\n  padding: 5px; }\n  iw-tooltip-container .tooltip-container__content {\n    border-radius: 3px;\n    color: white;\n    padding: 5px;\n    background: black; }\n  iw-tooltip-container:after {\n    border: 5px solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none; }\n  iw-tooltip-container.iw-tooltip-container--bottom:after {\n    left: 50%;\n    bottom: calc(100% - 5px);\n    border-bottom-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--top:after {\n    left: 50%;\n    top: calc(100% - 5px);\n    border-top-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--right:after {\n    top: 50%;\n    right: calc(100% - 5px);\n    border-right-color: black;\n    margin-top: -5px; }\n  iw-tooltip-container.iw-tooltip-container--left:after {\n    top: 50%;\n    left: calc(100% - 5px);\n    border-left-color: black;\n    margin-top: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFOaUIsRUE0Q2lCO0VBMUNwQztJQU9JLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osYUFBWTtJQUNaLGtCQUFpQixFQUFHO0VBVnhCO0lBYUksOEJBQXdDO0lBQ3hDLGFBQVk7SUFDWixVQUFTO0lBQ1QsU0FBUTtJQUNSLG1CQUFrQjtJQUNsQixxQkFBb0IsRUFBRztFQWxCM0I7SUFxQkksVUFBUztJQUNULHlCQUFzQztJQUN0QywyQkFBMEI7SUFDMUIsa0JBMUJlLEVBMEJnQjtFQXhCbkM7SUEyQkksVUFBUztJQUNULHNCQUFtQztJQUNuQyx3QkFBdUI7SUFDdkIsa0JBaENlLEVBZ0NnQjtFQTlCbkM7SUFpQ0ksU0FBUTtJQUNSLHdCQUFxQztJQUNyQywwQkFBeUI7SUFDekIsaUJBdENlLEVBc0NlO0VBcENsQztJQXVDSSxTQUFRO0lBQ1IsdUJBQW9DO0lBQ3BDLHlCQUF3QjtJQUN4QixpQkE1Q2UsRUE0Q2UiLCJmaWxlIjoic3JjL2FwcC91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGlubmVyLXBhZGRpbmc6IDVweDtcblxuaXctdG9vbHRpcC1jb250YWluZXIge1xuICB6LWluZGV4OiA2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAkaW5uZXItcGFkZGluZztcblxuICAudG9vbHRpcC1jb250YWluZXJfX2NvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyB9XG5cbiAgJjphZnRlciB7XG4gICAgYm9yZGVyOiAkaW5uZXItcGFkZGluZyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbiAgJi5pdy10b29sdGlwLWNvbnRhaW5lci0tYm90dG9tOmFmdGVyIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgLSAjeyRpbm5lci1wYWRkaW5nfSk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IC0kaW5uZXItcGFkZGluZzsgfVxuXG4gICYuaXctdG9vbHRpcC1jb250YWluZXItLXRvcDphZnRlciB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skaW5uZXItcGFkZGluZ30pO1xuICAgIGJvcmRlci10b3AtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAtJGlubmVyLXBhZGRpbmc7IH1cblxuICAmLml3LXRvb2x0aXAtY29udGFpbmVyLS1yaWdodDphZnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IGNhbGMoMTAwJSAtICN7JGlubmVyLXBhZGRpbmd9KTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IC0kaW5uZXItcGFkZGluZzsgfVxuXG4gICYuaXctdG9vbHRpcC1jb250YWluZXItLWxlZnQ6YWZ0ZXIge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtICN7JGlubmVyLXBhZGRpbmd9KTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogLSRpbm5lci1wYWRkaW5nOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TooltipContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");



var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(renderer, elementRef, tooltipConfig) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.tooltipConfig = tooltipConfig;
    }
    TooltipContainerComponent.prototype.ngOnInit = function () {
        if (this.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.containerClass);
        }
        if (this.tooltipConfig && this.tooltipConfig.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.tooltipConfig.containerClass);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipContainerComponent.prototype, "containerClass", void 0);
    TooltipContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-tooltip-container',
            template: __webpack_require__(/*! ./tooltip-container.component.html */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tooltip-container.component.sass */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_2__["IW_TOOLTIP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.config.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return IW_TOOLTIP_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_TOOLTIP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-tooltip.config');


/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.directive.ts":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/tooltip/helpers.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");







/**
 * The tooltip component can be used to display an extra piece of information to an element of an user interface.
 * This piece appears when the mouse is over this element.
 * Add a template that adds the `iwTooltip` directive inside the element where you want the tooltip to appear.
 *
 * ## Positionning
 * The tooltip is smartly positionned. It will be on top of the target if the target is on the bottom half of the screen.
 * It will be at the bottom of the target if the target is on the top half of the screen.
 ```ts
 import { TooltipModule } from 'iwerk-angular-ui';
 ```
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(injector, appRef, componentFactoryResolver, templateRef, viewContainerRef, platformId, tooltipConfig) {
        this.injector = injector;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.platformId = platformId;
        this.tooltipConfig = tooltipConfig;
    }
    /**
     * @ignore
     */
    TooltipDirective.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.__parent = this.viewContainerRef.element.nativeElement.parentElement;
            this.__parent.addEventListener('mouseenter', this);
            this.__parent.addEventListener('mouseleave', this);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            clearTimeout(this.__timerId);
            this.__remove();
            this.__parent.removeEventListener('mouseenter', this);
            this.__parent.removeEventListener('mouseleave', this);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.handleEvent = function (evt) {
        var _this = this;
        var scrollHandler = function () {
            document.removeEventListener('scroll', scrollHandler, true);
            _this.__remove();
        };
        if (evt.type === 'mouseenter') {
            this.__timerId = setTimeout(function () {
                document.addEventListener('scroll', scrollHandler, true);
                return _this.__onMouseEnter(evt);
            }, this.__delay);
        }
        if (evt.type === 'mouseleave') {
            clearTimeout(this.__timerId);
            document.removeEventListener('scroll', scrollHandler, true);
            return this.__onMouseLeave(evt);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.__onMouseEnter = function (event) {
        if (!this.__elements) {
            var content = this.templateRef.createEmbeddedView(this.injector);
            var container = this.componentFactoryResolver
                .resolveComponentFactory(_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"])
                .create(this.injector, [content.rootNodes]);
            container.instance.containerClass = this.containerClass;
            this.__elements = {
                content: content,
                container: container
            };
            this.appRef.attachView(content);
            this.appRef.attachView(container.hostView);
            content.detectChanges();
            container.hostView.detectChanges();
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["smartPosition"])({
                target: this.__parent,
                container: this.__elements.container.location.nativeElement
            }, this.__isHorizontal ? 'horizontal' : 'vertical');
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "__isHorizontal", {
        /**
         * @ignore
         */
        get: function () {
            if (this.horizontal === undefined) {
                return !!(this.tooltipConfig ? this.tooltipConfig.horizontal : false);
            }
            return this.horizontal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "__delay", {
        /**
         * @ignore
         */
        get: function () {
            if (this.delay === undefined) {
                return this.tooltipConfig ? this.tooltipConfig.delay : 0;
            }
            return this.delay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    TooltipDirective.prototype.__onMouseLeave = function (event) {
        this.__remove();
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.__remove = function () {
        if (!this.__elements) {
            return;
        }
        document.body.removeChild(this.__elements.container.location.nativeElement);
        this.appRef.detachView(this.__elements.content);
        this.appRef.detachView(this.__elements.container.hostView);
        this.__elements.container.hostView.detach();
        this.__elements.content.destroy();
        this.__elements.container.destroy();
        this.__elements = undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipDirective.prototype, "containerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TooltipDirective.prototype, "horizontal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TooltipDirective.prototype, "delay", void 0);
    TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwTooltip]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_5__["IW_TOOLTIP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], String, Object])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.module.ts":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tooltip/tooltip.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "../../src/app/ui/tooltip/tooltip.directive.ts");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_5__["IW_TOOLTIP_CONFIG"]; });







var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__["TooltipContainerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__["TooltipContainerComponent"]],
            exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "../../src/app/ui/tree/tree.module.ts":
/*!****************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tree/tree.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TreeComponent, TreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/tree.component */ "../../src/app/ui/tree/tree/tree.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"]; });






var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeItemDirective"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeNodeTemplateDirective"]
            ],
            exports: [
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeItemDirective"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeNodeTemplateDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], TreeModule);
    return TreeModule;
}());



/***/ }),

/***/ "../../src/app/ui/tree/tree/tree.component.html":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tree/tree/tree.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngTemplateOutlet=\"treeTemplate; context: { $implicit: tree, depth: 0 }\"></ng-container>\n\n<ng-template #treeTemplate let-nodes let-depth=\"depth\">\n  <ol>\n    <li *ngFor=\"let node of nodes\">\n      <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: node, data: node.data, depth: depth, hasChildren: hasChildren(node) }\"></ng-container>\n      \n      <ng-template [ngIf]=\"hasChildren(node) && isExpanded(node)\">\n        <ng-container *ngTemplateOutlet=\"treeTemplate; context: { $implicit: node.children, depth: depth + 1 }\"></ng-container>\n      </ng-template>\n    </li>\n  </ol>\n</ng-template>\n"

/***/ }),

/***/ "../../src/app/ui/tree/tree/tree.component.sass":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tree/tree/tree.component.sass ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS90cmVlL3RyZWUvdHJlZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGVBQWMsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3VpL3RyZWUvdHJlZS90cmVlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/tree/tree/tree.component.ts":
/*!************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/tree/tree/tree.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TreeComponent, TreeNodeTemplateDirective, TreeItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeTemplateDirective", function() { return TreeNodeTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeItemDirective", function() { return TreeItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




/**
 * This component renders a tree of DOM elements based on the provided `tree` input.
 * It does nothing else than rendering. You have to provide a template for the node.
 ```ts
 import { TreeModule } from 'iwerk-angular-ui';
 ```
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        /**
         * The expanded nodes: their children will be displayed.
         */
        this.expanded = [];
        /**
         * Event that is emitted when the set of expanded nodes changes.
         */
        this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.parentMap = new Map();
        this.__tree = [];
    }
    Object.defineProperty(TreeComponent.prototype, "tree", {
        get: function () {
            return this.__tree;
        },
        /**
         * The tree input to render. Use the `TreeItem` type definition.
         */
        set: function (v) {
            this.__tree = v;
            this.updateParentMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return `true` if the item has children, `false` otherwise.
     * @param item the item
     */
    TreeComponent.prototype.hasChildren = function (item) {
        return item.children && item.children.length > 0;
    };
    /**
     * Return `true` if the item is expanded, `false` otherwise.
     * @param item the item
     */
    TreeComponent.prototype.isExpanded = function (item) {
        return this.expanded.indexOf(item) > -1;
    };
    /**
     * Toggle the expanded state of the item.
     * @param item the item
     */
    TreeComponent.prototype.toggleExpand = function (item) {
        if (!this.hasChildren(item)) {
            return;
        }
        if (this.isExpanded(item)) {
            this.collapseItem(item);
        }
        else {
            this.expandItem(item);
        }
    };
    /**
     * Expand the item: display its children.
     * @param item the item
     */
    TreeComponent.prototype.expandItem = function (item) {
        if (!this.hasChildren(item)) {
            return;
        }
        this.setExpanded(this.expanded.concat([item]));
    };
    /**
     * Collapse the item: hide its children.
     * @param item the item
     */
    TreeComponent.prototype.collapseItem = function (item) {
        this.setExpanded(this.expanded.filter(function (e) { return e !== item; }));
    };
    /**
     * @ignore
     */
    TreeComponent.prototype.sendFocusEvent = function (item) {
        this.focusEvent.next(item);
    };
    /**
     * @ignore
     */
    TreeComponent.prototype.setExpanded = function (v) {
        this.expanded = v;
        this.expand.emit(v);
    };
    /**
     * @ignore
     */
    TreeComponent.prototype.updateParentMap = function () {
        var _this = this;
        this.parentMap = new Map();
        var aux = function (parent, nodes) {
            nodes.forEach(function (n) {
                _this.parentMap.set(n, parent);
                aux(n, n.children || []);
            });
        };
        aux(undefined, this.__tree);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], TreeComponent.prototype, "tree", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TreeComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "expand", void 0);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "../../src/app/ui/tree/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.sass */ "../../src/app/ui/tree/tree/tree.component.sass")]
        })
    ], TreeComponent);
    return TreeComponent;
}());

var TreeNodeTemplateDirective = /** @class */ (function () {
    function TreeNodeTemplateDirective(templateRef, menu) {
        this.templateRef = templateRef;
        this.menu = menu;
        this.menu.nodeTemplate = this.templateRef;
    }
    TreeNodeTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwTreeNodeTemplate]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], TreeComponent])
    ], TreeNodeTemplateDirective);
    return TreeNodeTemplateDirective;
}());

var TreeItemDirective = /** @class */ (function () {
    function TreeItemDirective(menu, elementRef) {
        this.menu = menu;
        this.elementRef = elementRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"];
    }
    TreeItemDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.menu.focusEvent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e === _this.item; }))
            .subscribe(function (e) {
            _this.elementRef.nativeElement.focus();
        }));
    };
    TreeItemDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TreeItemDirective.prototype.keydown = function ($event) {
        switch ($event.keyCode) {
            case 39:
                this.goRight($event);
                break;
            case 40:
                this.goDown($event);
                break;
            case 38:
                this.goUp($event);
                break;
            case 37:
                this.goLeft($event);
                break;
        }
    };
    TreeItemDirective.prototype.goLeft = function ($event) {
        $event.preventDefault();
        if (this.menu.isExpanded(this.item)) {
            return this.menu.collapseItem(this.item);
        }
        var parent = this.menu.parentMap.get(this.item);
        if (parent) {
            this.menu.sendFocusEvent(parent);
        }
        else {
            this.goUp($event);
        }
    };
    TreeItemDirective.prototype.goRight = function ($event) {
        $event.preventDefault();
        if (!this.menu.hasChildren(this.item)) {
            return this.goDown($event);
        }
        if (!this.menu.isExpanded(this.item)) {
            return this.menu.expandItem(this.item);
        }
        this.menu.sendFocusEvent(this.item.children[0]);
    };
    TreeItemDirective.prototype.goDown = function ($event) {
        var _this = this;
        $event.preventDefault();
        if (this.menu.hasChildren(this.item) &&
            this.menu.isExpanded(this.item)) {
            return this.menu.sendFocusEvent(this.item.children[0]);
        }
        var selectAfter = function (item) {
            var parent = _this.menu.parentMap.get(item);
            var children = parent ? parent.children : _this.menu.tree;
            var index = children.indexOf(item);
            var next = children[index + 1];
            if (next) {
                _this.menu.sendFocusEvent(next);
            }
            else if (parent) {
                selectAfter(parent);
            }
        };
        selectAfter(this.item);
    };
    TreeItemDirective.prototype.goUp = function ($event) {
        var _this = this;
        $event.preventDefault();
        var selectLastPossible = function (item) {
            if (_this.menu.hasChildren(item) && _this.menu.isExpanded(item)) {
                selectLastPossible(item.children[item.children.length - 1]);
            }
            else {
                _this.menu.sendFocusEvent(item);
            }
        };
        var selectBefore = function (item) {
            var parent = _this.menu.parentMap.get(item);
            var children = parent ? parent.children : _this.menu.tree;
            var index = children.indexOf(item);
            var previous = children[index - 1];
            if (previous) {
                selectLastPossible(previous);
            }
            else if (parent) {
                _this.menu.sendFocusEvent(parent);
            }
        };
        selectBefore(this.item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('iwTreeItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeItemDirective.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TreeItemDirective.prototype, "keydown", null);
    TreeItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwTreeItem]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TreeComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TreeItemDirective);
    return TreeItemDirective;
}());



/***/ }),

/***/ "../../src/app/ui/ui.module.ts":
/*!*********************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/app/ui/ui.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox/checkbox.module */ "../../src/app/ui/checkbox/checkbox.module.ts");
/* harmony import */ var _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover/popover.module */ "../../src/app/ui/popover/popover.module.ts");
/* harmony import */ var _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-button/state-button.module */ "../../src/app/ui/state-button/state-button.module.ts");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "../../src/app/ui/tooltip/tooltip.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.module */ "../../src/app/ui/navigation/navigation.module.ts");
/* harmony import */ var _tree_tree_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree/tree.module */ "../../src/app/ui/tree/tree.module.ts");










var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__["MultilineEllipsisModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
                _tree_tree_module__WEBPACK_IMPORTED_MODULE_9__["TreeModule"]
            ],
            exports: [
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__["MultilineEllipsisModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
                _tree_tree_module__WEBPACK_IMPORTED_MODULE_9__["TreeModule"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../src/public_api.ts":
/*!***************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/src/public_api.ts ***!
  \***************************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule, IW_TOOLTIP_CONFIG, TooltipModule, StateButtonModule, CheckboxModule, IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule, MultilineEllipsisModule, NavigationComponent, NavigationData, NavigationController, NavigationModule, TreeComponent, TreeModule, MovableService, MovableModule, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ui/popover/popover.module */ "../../src/app/ui/popover/popover.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["PopoverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["IW_POPOVER_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]; });

/* harmony import */ var _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/ui/tooltip/tooltip.module */ "../../src/app/ui/tooltip/tooltip.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__["IW_TOOLTIP_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__["TooltipModule"]; });

/* harmony import */ var _app_ui_state_button_state_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/ui/state-button/state-button.module */ "../../src/app/ui/state-button/state-button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateButtonModule", function() { return _app_ui_state_button_state_button_module__WEBPACK_IMPORTED_MODULE_2__["StateButtonModule"]; });

/* harmony import */ var _app_ui_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ui/checkbox/checkbox.module */ "../../src/app/ui/checkbox/checkbox.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _app_ui_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]; });

/* harmony import */ var _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ui/dialog/dialog.module */ "../../src/app/ui/dialog/dialog.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["IW_DIALOG_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogModule"]; });

/* harmony import */ var _app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisModule", function() { return _app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"]; });

/* harmony import */ var _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ui/navigation/navigation.module */ "../../src/app/ui/navigation/navigation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]; });

/* harmony import */ var _app_ui_tree_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/ui/tree/tree.module */ "../../src/app/ui/tree/tree.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return _app_ui_tree_tree_module__WEBPACK_IMPORTED_MODULE_7__["TreeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return _app_ui_tree_tree_module__WEBPACK_IMPORTED_MODULE_7__["TreeModule"]; });

/* harmony import */ var _app_ui_movable_movable_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/ui/movable/movable.module */ "../../src/app/ui/movable/movable.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableService", function() { return _app_ui_movable_movable_module__WEBPACK_IMPORTED_MODULE_8__["MovableService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableModule", function() { return _app_ui_movable_movable_module__WEBPACK_IMPORTED_MODULE_8__["MovableModule"]; });

/* harmony import */ var _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/ui/ui.module */ "../../src/app/ui/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["UiModule"]; });













/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-app>\n  <ng-template docsBrandHeader>\n    <img class=\"brand-header-image\" [attr.src]=\"'assets/logo.svg'\" />\n  </ng-template>\n\n  <li><a href=\"https://github.com/interfacewerk/iwerk-angular-ui\"><fa-icon [icon]=\"faGithub\"></fa-icon><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n  <li><a href=\"https://interfacewerk.de/jobs\"><fa-icon [icon]=\"faHandshake\"></fa-icon> We are hiring!</a></li>\n  <li><a href=\"https://interfacewerk.de\">interfacewerk.de</a></li>\n</docs-app>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-header-image {\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1oZWFkZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.faHandshake = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHandshake"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _ellipsis_ellipsis_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ellipsis/ellipsis.module */ "./src/app/ellipsis/ellipsis.module.ts");
/* harmony import */ var _ellipsis_ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ellipsis/ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _navigation_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");
/* harmony import */ var _popover_popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popover/popover-demo/popover-demo.component */ "./src/app/popover/popover-demo/popover-demo.component.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popover/popover.module */ "./src/app/popover/popover.module.ts");
/* harmony import */ var _tooltip_tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tooltip/tooltip-demo/tooltip-demo.component */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "./src/app/tooltip/tooltip.module.ts");
/* harmony import */ var _tree_docs_tree_docs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tree-docs/tree-docs.component */ "./src/app/tree-docs/tree-docs.component.ts");
/* harmony import */ var _tree_docs_tree_docs_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tree-docs/tree-docs.module */ "./src/app/tree-docs/tree-docs.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _movable_movable_movable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./movable/movable/movable.component */ "./src/app/movable/movable/movable.component.ts");
/* harmony import */ var _movable_movable_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./movable/movable.module */ "./src/app/movable/movable.module.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_15__["PopoverDemoModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_17__["TooltipDemoModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_12__["NavigationDemoModule"],
                _ellipsis_ellipsis_module__WEBPACK_IMPORTED_MODULE_10__["EllipsisDemoModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogDemoModule"],
                _tree_docs_tree_docs_module__WEBPACK_IMPORTED_MODULE_19__["TreeDocsModule"],
                _movable_movable_module__WEBPACK_IMPORTED_MODULE_22__["MovableModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_6__["DocsModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_6__["DocsModule"].configure({
                    welcomePage: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
                    componentPages: {
                        popover: { title: 'Popover', component: _popover_popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_14__["PopoverDemoComponent"] },
                        tooltip: { title: 'Tooltip', component: _tooltip_tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_16__["TooltipDemoComponent"] },
                        dialog: { title: 'Dialog', component: _dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"] },
                        navigation: { title: 'Navigation', component: _navigation_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationdDemoComponent"] },
                        ellipsis: { title: 'Ellipsis', component: _ellipsis_ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_11__["EllipsisDemoComponent"] },
                        tree: { title: 'Tree', component: _tree_docs_tree_docs_component__WEBPACK_IMPORTED_MODULE_18__["TreeDocsComponent"] },
                        movable: { title: 'Movable', component: _movable_movable_movable_component__WEBPACK_IMPORTED_MODULE_21__["MovableComponent"] }
                    }
                })
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.module.ts ***!
  \*****************************************/
/*! exports provided: DialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDemoModule", function() { return DialogDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example1/dialog-example1.component */ "./src/app/dialog/example1/dialog-example1.component.ts");
/* harmony import */ var _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example2/dialog-example2.component */ "./src/app/dialog/example2/dialog-example2.component.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");









var DialogDemoModule = /** @class */ (function () {
    function DialogDemoModule() {
    }
    DialogDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_3__["DocsModule"]
            ],
            declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyDialogComponent"], _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_6__["DialogExample1Component"], _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_7__["DialogExample2Component"]],
            entryComponents: [_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyDialogComponent"]]
        })
    ], DialogDemoModule);
    return DialogDemoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Dialog'\"\n  [componentId]=\"'DialogDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"From the template\">\n    <app-dialog-example1></app-dialog-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"dialog-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Using the dialog service\">\n    <app-dialog-example2></app-dialog-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'TS'\" path=\"dialog-example2.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZGlhbG9nL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");




var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.dialogInstance) {
            this.dialogInstance.close();
            this.dialogInstance = undefined;
        }
    };
    DialogComponent.prototype.openDialog = function () {
        this.dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MyDialogComponent"]);
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.sass */ "./src/app/dialog/dialog/dialog.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/example1/dialog-example1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialog/example1/dialog-example1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"myDialog1.open()\">Open a dialog</button>\n\n<ng-template iwDialog #myDialog1=\"iw-dialog\" [escToClose]=\"true\" [clickToClose]=\"true\">\n  <h1>Here is my dialog</h1>\n\n  <ul>\n    <li>Press ESC to close it</li>\n    <li>You can also click outside</li>\n    <li>or <a (click)=\"myDialog1.close()\">here</a></li>\n  </ul>\n</ng-template>"

/***/ }),

/***/ "./src/app/dialog/example1/dialog-example1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/example1/dialog-example1.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExample1Component", function() { return DialogExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DialogExample1Component = /** @class */ (function () {
    function DialogExample1Component() {
    }
    DialogExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-example1',
            template: __webpack_require__(/*! ./dialog-example1.component.html */ "./src/app/dialog/example1/dialog-example1.component.html")
        })
    ], DialogExample1Component);
    return DialogExample1Component;
}());



/***/ }),

/***/ "./src/app/dialog/example2/dialog-example2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialog/example2/dialog-example2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"open()\">Open a dialog</button>\n"

/***/ }),

/***/ "./src/app/dialog/example2/dialog-example2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/example2/dialog-example2.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExample2Component", function() { return DialogExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");




var DialogExample2Component = /** @class */ (function () {
    function DialogExample2Component(dialog) {
        this.dialog = dialog;
    }
    DialogExample2Component.prototype.ngOnDestroy = function () {
        if (this.dialogInstance) {
            this.dialogInstance.close();
            this.dialogInstance = undefined;
        }
    };
    DialogExample2Component.prototype.open = function () {
        this.dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MyDialogComponent"]);
    };
    DialogExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-example2',
            template: __webpack_require__(/*! ./dialog-example2.component.html */ "./src/app/dialog/example2/dialog-example2.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], DialogExample2Component);
    return DialogExample2Component;
}());



/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello Dialog!</h1>\n\n<h2>To close this dialog, inject the DialogService in your component:</h2>\n\n<docs-code path=\"my-dialog.component.ts\"></docs-code>\n\n<button (click)=\"close()\">\n  Close\n  <ng-template iwTooltip>click to close</ng-template>\n</button>\n"

/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialog) {
        this.dialog = dialog;
    }
    MyDialogComponent.prototype.close = function () {
        this.dialog.close();
    };
    MyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/dialog/my-dialog/my-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"ellipsis\"\n  [iwMultilineEllipsis]=\"text\"\n  style=\"max-height: 100px; max-width: 200px\"\n></p>"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts ***!
  \***************************************************************************/
/*! exports provided: EllipsisExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisExample1Component", function() { return EllipsisExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EllipsisExample1Component = /** @class */ (function () {
    function EllipsisExample1Component() {
        // tslint:disable-next-line
        this.text = 'Pariatur tempor anim culpa enim consequat. Sit commodo irure labore pariatur dolor consequat fugiat nisi pariatur. Magna in in dolor aliqua veniam duis nulla pariatur ut. Deserunt elit aute do ut ad sit irure proident dolor. Amet excepteur elit consectetur sit ipsum enim fugiat cupidatat est aliqua.';
    }
    EllipsisExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ellipsis-demo-example1',
            template: __webpack_require__(/*! ./ellipsis-example1.component.html */ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        })
    ], EllipsisExample1Component);
    return EllipsisExample1Component;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ellipsis/ellipsis.module.ts ***!
  \*********************************************/
/*! exports provided: EllipsisDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoModule", function() { return EllipsisDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ellipsis-example1/ellipsis-example1.component */ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts");
/* harmony import */ var _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");








var EllipsisDemoModule = /** @class */ (function () {
    function EllipsisDemoModule() {
    }
    EllipsisDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_4__["DocsModule"]
            ],
            declarations: [
                _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__["EllipsisDemoComponent"],
                _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_6__["EllipsisExample1Component"],
            ]
        })
    ], EllipsisDemoModule);
    return EllipsisDemoModule;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Multi-line Ellipsis'\"\n  [componentId]=\"'MultilineEllipsisDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"Simple example\">\n    <app-ellipsis-demo-example1></app-ellipsis-demo-example1>\n    <docs-code path=\"ellipsis-example1.component.html\"></docs-code>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.ellipsis {\n  padding: 3px;\n  border: 1px solid grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2VsbGlwc2lzL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQixFQUFHIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9lbGxpcHNpcy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInAuZWxsaXBzaXMge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.ts ***!
  \*********************************************************/
/*! exports provided: EllipsisDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoComponent", function() { return EllipsisDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EllipsisDemoComponent = /** @class */ (function () {
    function EllipsisDemoComponent() {
    }
    EllipsisDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./ellipsis.component.html */ "./src/app/ellipsis/ellipsis/ellipsis.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ellipsis.component.sass */ "./src/app/ellipsis/ellipsis/ellipsis.component.sass")]
        })
    ], EllipsisDemoComponent);
    return EllipsisDemoComponent;
}());



/***/ }),

/***/ "./src/app/movable/movable-example1/movable-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/movable/movable-example1/movable-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"area\">\n\n  <div class=\"target\" iwMovable (moved)=\"moved = $event\" [class.moved]=\"moved\">\n    <div class=\"handle\" iwMoveHandle>I'm the move handle!</div>\n    I can be moved around!\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/movable/movable-example1/movable-example1.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/movable/movable-example1/movable-example1.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".area {\n  width: 300px;\n  height: 300px;\n  border: 1px solid grey;\n  position: relative;\n  overflow: hidden; }\n\n.handle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  cursor: pointer;\n  background: black;\n  color: white; }\n\n.target {\n  position: absolute;\n  padding: 20px 0 0 0;\n  border: 3px solid red;\n  width: 100px; }\n\n.target.moved {\n    border-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL21vdmFibGUvbW92YWJsZS1leGFtcGxlMS9tb3ZhYmxlLWV4YW1wbGUxLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUFHOztBQUVyQjtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsYUFBWSxFQUFHOztBQUVqQjtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLGFBQVksRUFHYzs7QUFQNUI7SUFPSSxvQkFBbUIsRUFBRyIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvbW92YWJsZS9tb3ZhYmxlLWV4YW1wbGUxL21vdmFibGUtZXhhbXBsZTEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJlYSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi50YXJnZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgd2lkdGg6IDEwMHB4O1xuXG4gICYubW92ZWQge1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/movable/movable-example1/movable-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/movable/movable-example1/movable-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: MovableExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableExample1Component", function() { return MovableExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MovableExample1Component = /** @class */ (function () {
    function MovableExample1Component() {
        this.moved = false;
    }
    MovableExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movable-example1',
            template: __webpack_require__(/*! ./movable-example1.component.html */ "./src/app/movable/movable-example1/movable-example1.component.html"),
            styles: [__webpack_require__(/*! ./movable-example1.component.sass */ "./src/app/movable/movable-example1/movable-example1.component.sass")]
        })
    ], MovableExample1Component);
    return MovableExample1Component;
}());



/***/ }),

/***/ "./src/app/movable/movable.module.ts":
/*!*******************************************!*\
  !*** ./src/app/movable/movable.module.ts ***!
  \*******************************************/
/*! exports provided: MovableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableModule", function() { return MovableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var _src_app_ui_movable_movable_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/app/ui/movable/movable.module */ "../../src/app/ui/movable/movable.module.ts");
/* harmony import */ var _movable_example1_movable_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movable-example1/movable-example1.component */ "./src/app/movable/movable-example1/movable-example1.component.ts");
/* harmony import */ var _movable_movable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movable/movable.component */ "./src/app/movable/movable/movable.component.ts");







var MovableModule = /** @class */ (function () {
    function MovableModule() {
    }
    MovableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _movable_movable_component__WEBPACK_IMPORTED_MODULE_6__["MovableComponent"],
                _movable_example1_movable_example1_component__WEBPACK_IMPORTED_MODULE_5__["MovableExample1Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_3__["DocsModule"],
                _src_app_ui_movable_movable_module__WEBPACK_IMPORTED_MODULE_4__["MovableModule"]
            ],
            entryComponents: [
                _movable_movable_component__WEBPACK_IMPORTED_MODULE_6__["MovableComponent"]
            ]
        })
    ], MovableModule);
    return MovableModule;
}());



/***/ }),

/***/ "./src/app/movable/movable/movable.component.html":
/*!********************************************************!*\
  !*** ./src/app/movable/movable/movable.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Movable'\"\n  [componentId]=\"'MovableDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"Basic Usage\">\n    <app-movable-example1></app-movable-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"movable-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/movable/movable/movable.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movable/movable/movable.component.ts ***!
  \******************************************************/
/*! exports provided: MovableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableComponent", function() { return MovableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MovableComponent = /** @class */ (function () {
    function MovableComponent() {
    }
    MovableComponent.prototype.ngOnInit = function () {
    };
    MovableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movable',
            template: __webpack_require__(/*! ./movable.component.html */ "./src/app/movable/movable/movable.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovableComponent);
    return MovableComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Example2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2Component", function() { return Example2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-example1-nested3.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts");




var Example2Component = /** @class */ (function () {
    function Example2Component(data, navCtrl) {
        this.data = data;
        this.navCtrl = navCtrl;
    }
    Example2Component.prototype.present = function () {
        this.navCtrl.present(_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_3__["Example3Component"]);
    };
    Example2Component.prototype.dismiss = function () {
        this.navCtrl.dismiss(1234);
    };
    Example2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>{{data.title}}</h5>\n  <button (click)=\"present()\">Present one more view!</button>\n  <button (click)=\"dismiss()\">Dismiss with value 1234</button>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationData"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], Example2Component);
    return Example2Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Example3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3Component", function() { return Example3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var Example3Component = /** @class */ (function () {
    function Example3Component(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Example3Component.prototype.dismiss = function () {
        this.navCtrl.dismiss();
    };
    Example3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>One level deeper!</h5><button (click)=\"dismiss()\">Dismiss</button>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], Example3Component);
    return Example3Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Example1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Component", function() { return Example1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-example1-nested2.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts");




var Example1Component = /** @class */ (function () {
    function Example1Component() {
        this.returnedByExample2 = -1;
    }
    Example1Component.prototype.present = function () {
        var _this = this;
        this.nav.present(_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_3__["Example2Component"], { title: 'Example 2 title defined by us!' })
            .then(function (v) { return _this.returnedByExample2 = v; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"])
    ], Example1Component.prototype, "nav", void 0);
    Example1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-example1',
            template: "<p>Add the <code class=\"inline-code\">iw-navigation</code> element into your template.</p>\n  <div class=\"nav-container\">\n    <iw-navigation #nav>\n      <h3>Here is our first view</h3>\n      <button (click)=\"present()\">Present a new view</button>\n    </iw-navigation>\n  </div>",
            styles: [".nav-container {\n      padding: 3px 10px;\n      box-shadow: 1px 1px 1px 1px black;\n      height: 300px;\n      width: 300px;\n    }"]
        })
    ], Example1Component);
    return Example1Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDemoModule", function() { return NavigationDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested2.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested3.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-example1/navigation-example1.component */ "./src/app/navigation/navigation-example1/navigation-example1.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");









var NavigationDemoModule = /** @class */ (function () {
    function NavigationDemoModule() {
    }
    NavigationDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_3__["DocsModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationdDemoComponent"],
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
            ],
            entryComponents: [
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
            ]
        })
    ], NavigationDemoModule);
    return NavigationDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Navigation'\"\n  [componentId]=\"'NavigationComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Example\">\n    <app-navigation-example1></app-navigation-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'Main TS'\" path=\"navigation-example1.component.ts\"></docs-code>\n      <docs-code *docsTab=\"'Nested TS #1'\" path=\"navigation-example1-nested2.component.ts\"></docs-code>\n      <docs-code *docsTab=\"'Nested TS #2'\" path=\"navigation-example1-nested3.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationdDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationdDemoComponent", function() { return NavigationdDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavigationdDemoComponent = /** @class */ (function () {
    function NavigationdDemoComponent() {
    }
    NavigationdDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.sass */ "./src/app/navigation/navigation/navigation.component.sass")]
        })
    ], NavigationdDemoComponent);
    return NavigationdDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-popover--header\">\n  <div class=\"custom-popover--header-content\">\n    <ng-content select=\"[appCustomPopoverHeader]\"></ng-content>\n  </div>\n  <a class=\"custom-popover--close-button\" (click)=\"_close()\"><fa-icon [icon]=\"faTimes\"></fa-icon></a>\n</div>\n\n<div class=\"custom-popover--content\">\n  <ng-content select=\"[appCustomPopoverContent]\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-height: 300px;\n  width: 200px;\n  border: 1px solid grey;\n  border-radius: 3px;\n  box-shadow: 2px 2px 5px 2px #7b7b7b;\n  overflow: hidden; }\n  :host .custom-popover--header {\n    padding: 0 30px 0 5px;\n    border-bottom: 1px solid grey;\n    background-color: lightgrey;\n    position: relative;\n    line-height: 30px;\n    height: 30px; }\n  :host .custom-popover--content {\n    padding: 15px 5px;\n    background: white; }\n  :host .custom-popover--close-button {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    line-height: 30px;\n    text-decoration: none;\n    cursor: pointer; }\n  :host .custom-popover--close-button:hover {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL3BvcG92ZXIvY3VzdG9tLXBvcG92ZXItZGVtby9jdXN0b20tcG9wb3Zlci1kZW1vLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixvQ0FBbUM7RUFDbkMsaUJBQWdCLEVBdUJPO0VBOUJ4QjtJQVVHLHNCQUFxQjtJQUNyQiw4QkFBNkI7SUFDN0IsNEJBQTJCO0lBQzNCLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsYUFBWSxFQUFHO0VBZmxCO0lBa0JHLGtCQUFpQjtJQUNqQixrQkFBaUIsRUFBRztFQW5CdkI7SUFzQkcsbUJBQWtCO0lBQ2xCLFdBQVU7SUFDVixPQUFNO0lBQ04sa0JBQWlCO0lBQ2pCLHNCQUFxQjtJQUNyQixnQkFBZSxFQUdJO0VBOUJ0QjtNQThCSyxhQUFZLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3BvcG92ZXIvY3VzdG9tLXBvcG92ZXItZGVtby9jdXN0b20tcG9wb3Zlci1kZW1vLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM3YjdiN2I7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmN1c3RvbS1wb3BvdmVyLS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMzBweCAwIDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogMzBweDsgfVxuXG4gIC5jdXN0b20tcG9wb3Zlci0tY29udGVudCB7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuICAuY3VzdG9tLXBvcG92ZXItLWNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBibGFjazsgfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomPopoverHeaderDirective, CustomPopoverContentDirective, CustomPopoverDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverHeaderDirective", function() { return CustomPopoverHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverContentDirective", function() { return CustomPopoverContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverDemoComponent", function() { return CustomPopoverDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var CustomPopoverHeaderDirective = /** @class */ (function () {
    function CustomPopoverHeaderDirective() {
    }
    CustomPopoverHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCustomPopoverHeader]'
        })
    ], CustomPopoverHeaderDirective);
    return CustomPopoverHeaderDirective;
}());

var CustomPopoverContentDirective = /** @class */ (function () {
    function CustomPopoverContentDirective() {
    }
    CustomPopoverContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCustomPopoverContent]'
        })
    ], CustomPopoverContentDirective);
    return CustomPopoverContentDirective;
}());

var CustomPopoverDemoComponent = /** @class */ (function () {
    function CustomPopoverDemoComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
    }
    CustomPopoverDemoComponent.prototype.ngOnInit = function () {
    };
    CustomPopoverDemoComponent.prototype._close = function () {
        this.close.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomPopoverDemoComponent.prototype, "close", void 0);
    CustomPopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-popover-demo',
            template: __webpack_require__(/*! ./custom-popover-demo.component.html */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.html"),
            styles: [__webpack_require__(/*! ./custom-popover-demo.component.sass */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomPopoverDemoComponent);
    return CustomPopoverDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Popover'\"\n  [componentId]=\"'PopoverDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"From the template\">\n    <p>Add a template with the <code class=\"inline-code\">iwPopover</code> directive.</p>\n    <app-popover-example1></app-popover-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"popover-example1.component.html\"></docs-code>\n      <docs-code *docsTab=\"'TS'\" path=\"popover-example1.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"From the service\">\n    <p>\n      You can embed any of your components inside a popover. This can be very helpful to keep your templates light as well as refactoring.\n      To do so, declare the component class you want to embed as an entry component of your module.\n    </p>\n    <app-popover-example2></app-popover-example2>\n    \n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"popover-example2.component.html\"></docs-code>\n      <docs-code *docsTab=\"'TS'\" path=\"popover-example2.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 300px;\n  border-collapse: collapse; }\n  :host table th, :host table td {\n    text-align: left;\n    width: 50%;\n    padding: 5px 5px 5px 5px; }\n  :host table td {\n    line-height: 20px; }\n  :host table thead {\n    border-bottom: 1px solid lightgrey; }\n  :host .cell-right-icon {\n  position: relative;\n  padding-right: 30px; }\n  :host .cell-right-icon:hover button {\n    opacity: 1; }\n  :host .cell-right-icon button {\n    opacity: 0.2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci1kZW1vL3BvcG92ZXItZGVtby5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUVHLGFBQVk7RUFhWiwwQkFBeUIsRUFBRztFQWYvQjtJQUtLLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YseUJBQXdCLEVBQUc7RUFQaEM7SUFVSyxrQkFBaUIsRUFBRztFQVZ6QjtJQWFLLG1DQUFrQyxFQUFHO0VBYjFDO0VBa0JHLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFPQTtFQTFCdEI7SUF1Qk8sV0FBVSxFQUFHO0VBdkJwQjtJQTBCSyxhQUFZLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci1kZW1vL3BvcG92ZXItZGVtby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICB0aCwgdGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7IH1cblxuICAgIHRkIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG5cbiAgICB0aGVhZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5OyB9XG5cbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbiAgLmNlbGwtcmlnaHQtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIG9wYWNpdHk6IDAuMjsgfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: PopoverDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoComponent", function() { return PopoverDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverDemoComponent = /** @class */ (function () {
    function PopoverDemoComponent() {
        this.persons = [];
        this.firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
        this.lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
        for (var i = 0; i < 10; i++) {
            this.persons.push({
                first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
                last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
            });
        }
    }
    PopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-demo',
            template: __webpack_require__(/*! ./popover-demo.component.html */ "./src/app/popover/popover-demo/popover-demo.component.html"),
            styles: [__webpack_require__(/*! ./popover-demo.component.sass */ "./src/app/popover/popover-demo/popover-demo.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverDemoComponent);
    return PopoverDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-example1/popover-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/popover/popover-example1/popover-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"isOpen = true\">\n  Click to open!\n\n  <ng-template iwPopover\n    popoverClass=\"demo-popover\"\n    [isOpen]=\"isOpen\"\n    (shouldClose)=\"isOpen = false\">\n  \n    <div class=\"simple-popover\">\n      Helloooo\n    </div>\n  \n  </ng-template>\n</button>\n\n"

/***/ }),

/***/ "./src/app/popover/popover-example1/popover-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example1/popover-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: PopoverExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample1Component", function() { return PopoverExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverExample1Component = /** @class */ (function () {
    function PopoverExample1Component() {
        this.isOpen = false;
    }
    PopoverExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-example1',
            template: __webpack_require__(/*! ./popover-example1.component.html */ "./src/app/popover/popover-example1/popover-example1.component.html")
        })
    ], PopoverExample1Component);
    return PopoverExample1Component;
}());



/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead><tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n  </tr></thead>\n  <tr *ngFor=\"let person of persons\">\n    <td class=\"cell-right-icon\">\n      {{person.first}}\n      <button (click)=\"openEditFirstNamePopover(person, $event)\">&#x270E;</button>\n    </td>\n    <td class=\"cell-right-icon\">\n      {{person.last}}\n      <button (click)=\"openEditLastNamePopover(person, $event)\">&#x270E;</button>          \n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.ts ***!
  \************************************************************************/
/*! exports provided: PopoverExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample2Component", function() { return PopoverExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");




var PopoverExample2Component = /** @class */ (function () {
    function PopoverExample2Component(popoverService) {
        this.popoverService = popoverService;
        this.persons = [];
        this.firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
        this.lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
        for (var i = 0; i < 5; i++) {
            this.persons.push({
                first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
                last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
            });
        }
    }
    PopoverExample2Component.prototype.openEditFirstNamePopover = function (person, $event) {
        return this.openEditPropertyPopover(person, 'First Name', 'first', $event);
    };
    PopoverExample2Component.prototype.openEditLastNamePopover = function (person, $event) {
        return this.openEditPropertyPopover(person, 'Last Name', 'last', $event);
    };
    PopoverExample2Component.prototype.openEditPropertyPopover = function (person, propertyName, p, $event) {
        this.popoverService.open(_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_3__["PropertyEditPopoverComponent"], $event.target, {
            popoverClass: 'demo-popover',
            escToClose: true
        }, function (component) {
            component.value = person[p];
            component.propertyName = propertyName;
            component.onValueChange.subscribe(function (v) {
                person[p] = v;
            });
        });
    };
    PopoverExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-example2',
            template: __webpack_require__(/*! ./popover-example2.component.html */ "./src/app/popover/popover-example2/popover-example2.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["PopoverService"]])
    ], PopoverExample2Component);
    return PopoverExample2Component;
}());



/***/ }),

/***/ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-popover-demo (close)=\"close()\">\n  <ng-container appCustomPopoverHeader>Edit</ng-container>\n  <ng-container appCustomPopoverContent>    \n    {{propertyName}}: <input autofocus autocomplete=\"false\" [ngModel]=\"value\" (ngModelChange)=\"onValueChange.emit($event)\" type=\"text\"/>\n  </ng-container>\n</app-custom-popover-demo>"

/***/ }),

/***/ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PropertyEditPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEditPopoverComponent", function() { return PropertyEditPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var PropertyEditPopoverComponent = /** @class */ (function () {
    function PropertyEditPopoverComponent(popoverInstance) {
        this.popoverInstance = popoverInstance;
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PropertyEditPopoverComponent.prototype.close = function () {
        this.popoverInstance.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PropertyEditPopoverComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PropertyEditPopoverComponent.prototype, "propertyName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PropertyEditPopoverComponent.prototype, "onValueChange", void 0);
    PropertyEditPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-edit-popover',
            template: __webpack_require__(/*! ./property-edit-popover.component.html */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["Popover"]])
    ], PropertyEditPopoverComponent);
    return PropertyEditPopoverComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover.module.ts":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/*! exports provided: PopoverDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoModule", function() { return PopoverDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-popover-demo/custom-popover-demo.component */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts");
/* harmony import */ var _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-demo/popover-demo.component */ "./src/app/popover/popover-demo/popover-demo.component.ts");
/* harmony import */ var _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-example1/popover-example1.component */ "./src/app/popover/popover-example1/popover-example1.component.ts");
/* harmony import */ var _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-example2/popover-example2.component */ "./src/app/popover/popover-example2/popover-example2.component.ts");
/* harmony import */ var _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-example2/property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");











var PopoverDemoModule = /** @class */ (function () {
    function PopoverDemoModule() {
    }
    PopoverDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_5__["DocsModule"]
            ],
            declarations: [
                _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["PopoverDemoComponent"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverHeaderDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverContentDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverDemoComponent"],
                _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_8__["PopoverExample1Component"],
                _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_9__["PopoverExample2Component"],
                _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__["PropertyEditPopoverComponent"]
            ],
            entryComponents: [
                _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__["PropertyEditPopoverComponent"]
            ]
        })
    ], PopoverDemoModule);
    return PopoverDemoModule;
}());



/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"value = value + 1\">\n  Try me!\n  <ng-template iwTooltip>\n    Click to go from {{value}} to {{value+1}}\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button>Horizontal tooltip\n  <ng-template iwTooltip [horizontal]=\"true\">\n    I show up horizontally!\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button>\n  Some delay ~1s\n  <ng-template iwTooltip [delay]=\"1000\">\n    Yes, you waited but it was worth it!\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Tooltip'\"\n  [componentId]=\"'TooltipDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"Simple example\">\n    <app-tooltip-demo-example1></app-tooltip-demo-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Horizontal\">\n    <app-tooltip-demo-example2></app-tooltip-demo-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example2.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Delay\">\n    <app-tooltip-demo-example3></app-tooltip-demo-example3>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example3.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvdG9vbHRpcC90b29sdGlwLWRlbW8vdG9vbHRpcC1kZW1vLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: Example1TooltipComponent, Example2TooltipComponent, Example3TooltipComponent, TooltipDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1TooltipComponent", function() { return Example1TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2TooltipComponent", function() { return Example2TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3TooltipComponent", function() { return Example3TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoComponent", function() { return TooltipDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Example1TooltipComponent = /** @class */ (function () {
    function Example1TooltipComponent() {
        this.value = 0;
    }
    Example1TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example1',
            template: __webpack_require__(/*! ./tooltip-demo-example1.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html")
        })
    ], Example1TooltipComponent);
    return Example1TooltipComponent;
}());

var Example2TooltipComponent = /** @class */ (function () {
    function Example2TooltipComponent() {
    }
    Example2TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example2',
            template: __webpack_require__(/*! ./tooltip-demo-example2.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html")
        })
    ], Example2TooltipComponent);
    return Example2TooltipComponent;
}());

var Example3TooltipComponent = /** @class */ (function () {
    function Example3TooltipComponent() {
    }
    Example3TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example3',
            template: __webpack_require__(/*! ./tooltip-demo-example3.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html")
        })
    ], Example3TooltipComponent);
    return Example3TooltipComponent;
}());

var TooltipDemoComponent = /** @class */ (function () {
    function TooltipDemoComponent() {
    }
    TooltipDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo',
            template: __webpack_require__(/*! ./tooltip-demo.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-demo.component.sass */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass")]
        })
    ], TooltipDemoComponent);
    return TooltipDemoComponent;
}());



/***/ }),

/***/ "./src/app/tooltip/tooltip.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tooltip/tooltip.module.ts ***!
  \*******************************************/
/*! exports provided: TooltipDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip-demo/tooltip-demo.component */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts");







var TooltipDemoModule = /** @class */ (function () {
    function TooltipDemoModule() {
    }
    TooltipDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_4__["DocsModule"]
            ],
            declarations: [
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["TooltipDemoComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example1TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example2TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example3TooltipComponent"]
            ]
        })
    ], TooltipDemoModule);
    return TooltipDemoModule;
}());



/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iw-tree [tree]=\"items\" #tree>\n  <ng-template iwTreeNodeTemplate let-node let-hasChildren=\"hasChildren\">\n    {{node.data}} <button *ngIf=\"hasChildren\" (click)=\"tree.toggleExpand(node)\">toggle</button>\n  </ng-template>\n</iw-tree>"

/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.ts ***!
  \******************************************************************************/
/*! exports provided: TreeDocsExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDocsExample1Component", function() { return TreeDocsExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TreeDocsExample1Component = /** @class */ (function () {
    function TreeDocsExample1Component() {
        this.items = [{
                data: 'Node #1',
                children: [{
                        data: 'Node #1.1',
                        children: [{
                                data: 'Node #1.1.1'
                            }, {
                                data: 'Node #1.1.2'
                            }, {
                                data: 'Node #1.1.3'
                            }]
                    }, {
                        data: 'Node #1.2',
                        children: [{
                                data: 'Node #1.2.1'
                            }, {
                                data: 'Node #1.2.2'
                            }, {
                                data: 'Node #1.2.3'
                            }]
                    }, {
                        data: 'Node #1.3',
                        children: [{
                                data: 'Node #1.3.1'
                            }, {
                                data: 'Node #1.3.2'
                            }, {
                                data: 'Node #1.3.3'
                            }]
                    }]
            }];
    }
    TreeDocsExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-docs-example1',
            template: __webpack_require__(/*! ./tree-docs-example1.component.html */ "./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.html")
        })
    ], TreeDocsExample1Component);
    return TreeDocsExample1Component;
}());



/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Use your arrow keys to navigate inside this tree.</p>\n\n<iw-tree [tree]=\"items\" #tree>\n  <ng-template iwTreeNodeTemplate let-node>\n    <div tabindex=\"0\"\n      [iwTreeItem]=\"node\"\n    >{{node.data}}</div>\n  </ng-template>\n</iw-tree>"

/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.ts ***!
  \******************************************************************************/
/*! exports provided: TreeDocsExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDocsExample2Component", function() { return TreeDocsExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TreeDocsExample2Component = /** @class */ (function () {
    function TreeDocsExample2Component() {
        this.items = [{
                data: 'Node #1',
                children: [{
                        data: 'Node #1.1',
                        children: [{
                                data: 'Node #1.1.1'
                            }, {
                                data: 'Node #1.1.2'
                            }, {
                                data: 'Node #1.1.3'
                            }]
                    }, {
                        data: 'Node #1.2',
                        children: [{
                                data: 'Node #1.2.1'
                            }, {
                                data: 'Node #1.2.2'
                            }, {
                                data: 'Node #1.2.3'
                            }]
                    }, {
                        data: 'Node #1.3',
                        children: [{
                                data: 'Node #1.3.1'
                            }, {
                                data: 'Node #1.3.2'
                            }, {
                                data: 'Node #1.3.3'
                            }]
                    }]
            }];
    }
    TreeDocsExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-docs-example2',
            template: __webpack_require__(/*! ./tree-docs-example2.component.html */ "./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.html"),
            styles: ["div:focus { background: grey; }"]
        })
    ], TreeDocsExample2Component);
    return TreeDocsExample2Component;
}());



/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iw-tree #treeComponent [tree]=\"tree\" class=\"menu-tree\">\n  <ng-template iwTreeNodeTemplate let-node let-depth=\"depth\">\n    <a [routerLink]=\"node.data.routerLink\"\n      [ngStyle]=\"getLinkStyle(depth)\"\n      [queryParams]=\"node.data.queryParams\"\n      [queryParamsHandling]=\"'merge'\"\n      [routerLinkActive]=\"'active'\"\n      [iwTreeItem]=\"node\"\n      (click)=\"treeComponent.expandItem(node)\">\n      <fa-icon\n        [style.visibility]=\"treeComponent.hasChildren(node) ? 'visible' : 'hidden'\"\n        (click)=\"toggleExpand(treeComponent, node, $event)\"\n        [icon]=\"treeComponent.isExpanded(node) ? caretDown : caretRight\"\n      ></fa-icon>\n      Node #{{node.data.label}}\n    </a>\n  </ng-template>\n</iw-tree>"

/***/ }),

/***/ "./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.ts ***!
  \******************************************************************************/
/*! exports provided: TreeDocsExample3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDocsExample3Component", function() { return TreeDocsExample3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var TreeDocsExample3Component = /** @class */ (function () {
    function TreeDocsExample3Component() {
        this.tree = [{
                data: {
                    label: '1',
                    routerLink: [],
                    queryParams: {
                        someParam: 1
                    }
                },
                children: [{
                        data: {
                            label: '2',
                            routerLink: [],
                            queryParams: {
                                someParam: 2
                            },
                        },
                        children: [{
                                data: {
                                    label: '3',
                                    routerLink: [],
                                    queryParams: {
                                        someParam: 3
                                    }
                                }
                            }, {
                                data: {
                                    label: '4',
                                    routerLink: [],
                                    queryParams: {
                                        someParam: 4
                                    }
                                }
                            }]
                    }, {
                        data: {
                            label: '5',
                            routerLink: [],
                            queryParams: {
                                someParam: 5
                            }
                        }
                    }]
            }, {
                data: {
                    label: '6',
                    routerLink: [],
                    queryParams: {
                        someParam: 6
                    }
                },
                children: [{
                        data: {
                            label: '7',
                            routerLink: [],
                            queryParams: {
                                someParam: 7
                            }
                        }
                    }, {
                        data: {
                            label: '8',
                            routerLink: [],
                            queryParams: {
                                someParam: 8
                            }
                        }
                    }]
            }];
        this.caretRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretRight"];
        this.caretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretDown"];
    }
    TreeDocsExample3Component.prototype.getLinkStyle = function (depth) {
        return { padding: "0 " + depth * 20 + "px" };
    };
    TreeDocsExample3Component.prototype.toggleExpand = function (tree, item, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        $event.stopImmediatePropagation();
        tree.toggleExpand(item);
    };
    TreeDocsExample3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-docs-example3',
            template: __webpack_require__(/*! ./tree-docs-example3.component.html */ "./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.html")
        })
    ], TreeDocsExample3Component);
    return TreeDocsExample3Component;
}());



/***/ }),

/***/ "./src/app/tree-docs/tree-docs.component.html":
/*!****************************************************!*\
  !*** ./src/app/tree-docs/tree-docs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Tree'\"\n  [componentId]=\"'TreeComponent'\"\n  [componentType]=\"'components'\"\n>\n<ng-template docsComponentExample=\"Simple Tree\">\n  <ng-container [ngComponentOutlet]=\"\"></ng-container>\n  <app-tree-docs-example1></app-tree-docs-example1>\n  <docs-tabs>\n    <docs-code *docsTab=\"'HTML'\" path=\"tree-docs-example1.component.html\"></docs-code>\n    <docs-code *docsTab=\"'TS'\" path=\"tree-docs-example1.component.ts\"></docs-code>\n  </docs-tabs>\n</ng-template>\n<ng-template docsComponentExample=\"Keyboard Navigation\">\n  <ng-container [ngComponentOutlet]=\"\"></ng-container>\n  <app-tree-docs-example2></app-tree-docs-example2>\n  <docs-tabs>\n    <docs-code *docsTab=\"'HTML'\" path=\"tree-docs-example2.component.html\"></docs-code>\n    <docs-code *docsTab=\"'TS'\" path=\"tree-docs-example2.component.ts\"></docs-code>\n  </docs-tabs>\n</ng-template>\n<ng-template docsComponentExample=\"Navigation Menu\">\n  <ng-container [ngComponentOutlet]=\"\"></ng-container>\n  <app-tree-docs-example3></app-tree-docs-example3>\n  <docs-tabs>\n    <docs-code *docsTab=\"'HTML'\" path=\"tree-docs-example3.component.html\"></docs-code>\n    <docs-code *docsTab=\"'TS'\" path=\"tree-docs-example3.component.ts\"></docs-code>\n  </docs-tabs>\n</ng-template>\n  <!--<ng-template docsComponentExample=\"Horizontal\">\n    <app-tooltip-demo-example2></app-tooltip-demo-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example2.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Delay\">\n    <app-tooltip-demo-example3></app-tooltip-demo-example3>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example3.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template> -->\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/tree-docs/tree-docs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/tree-docs/tree-docs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvdHJlZS1kb2NzL3RyZWUtZG9jcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tree-docs/tree-docs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tree-docs/tree-docs.component.ts ***!
  \**************************************************/
/*! exports provided: TreeDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDocsComponent", function() { return TreeDocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TreeDocsComponent = /** @class */ (function () {
    function TreeDocsComponent() {
    }
    TreeDocsComponent.prototype.ngOnInit = function () {
    };
    TreeDocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-docs',
            template: __webpack_require__(/*! ./tree-docs.component.html */ "./src/app/tree-docs/tree-docs.component.html"),
            styles: [__webpack_require__(/*! ./tree-docs.component.scss */ "./src/app/tree-docs/tree-docs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeDocsComponent);
    return TreeDocsComponent;
}());



/***/ }),

/***/ "./src/app/tree-docs/tree-docs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tree-docs/tree-docs.module.ts ***!
  \***********************************************/
/*! exports provided: TreeDocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDocsModule", function() { return TreeDocsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_documentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _tree_docs_example1_tree_docs_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-docs-example1/tree-docs-example1.component */ "./src/app/tree-docs/tree-docs-example1/tree-docs-example1.component.ts");
/* harmony import */ var _tree_docs_example2_tree_docs_example2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree-docs-example2/tree-docs-example2.component */ "./src/app/tree-docs/tree-docs-example2/tree-docs-example2.component.ts");
/* harmony import */ var _tree_docs_example3_tree_docs_example3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-docs-example3/tree-docs-example3.component */ "./src/app/tree-docs/tree-docs-example3/tree-docs-example3.component.ts");
/* harmony import */ var _tree_docs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree-docs.component */ "./src/app/tree-docs/tree-docs.component.ts");










var TreeDocsModule = /** @class */ (function () {
    function TreeDocsModule() {
    }
    TreeDocsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _tree_docs_component__WEBPACK_IMPORTED_MODULE_9__["TreeDocsComponent"],
                _tree_docs_example1_tree_docs_example1_component__WEBPACK_IMPORTED_MODULE_6__["TreeDocsExample1Component"],
                _tree_docs_example2_tree_docs_example2_component__WEBPACK_IMPORTED_MODULE_7__["TreeDocsExample2Component"],
                _tree_docs_example3_tree_docs_example3_component__WEBPACK_IMPORTED_MODULE_8__["TreeDocsExample3Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_documentation__WEBPACK_IMPORTED_MODULE_4__["DocsModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_5__["TreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], TreeDocsModule);
    return TreeDocsModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Interfacewerk Angular UI</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Production ready, highly customizable</h2>\n<p>This library is a set of interface tools that we use everyday in our Angular projects. They are designed as single\n  blocks, easily customizable with CSS, opinionated\n  components or directives.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> AOT compatible</h2>\n<p>We keep this library up-to-date with the latest Angular capabilities. Therefore, we can use any of its component in\n  your AOT ready projects.</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> UX and performance</h2>\n<p>We develop this library with the user experience in mind. Therefore, interactions must be easy to understand and none\n  of the components should affect\n  the performance. When working with other libraries, we often face the problem that, in huge tables, a simple tooltip\n  on each cell could greatly impact\n  the snappiness of the application.\n</p>\n\n<h2>Get Started</h2>\n\n<ol>\n  <li>\n    1. Install the package\n    <docs-code-line>{{ \"npm install --save iwerk-angular-ui\" }}</docs-code-line>\n  </li>\n  <li>\n    2. Import the default styles in your angular.json or in your stylesheets.\n    <docs-code-line>{{ '@import \"~iwerk-angular-ui/iwerk-angular-ui.css\"' }}</docs-code-line>\n  </li>\n  <li>\n    3. Import the modules you need to any of your modules\n    <docs-code-line>{{ \"import { DialogModule } from 'iwerk-angular-ui';\" }}</docs-code-line>\n  </li>\n</ol>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.sass":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 15px;\n  display: block;\n  overflow: auto; }\n\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGNBQWE7RUFDYixlQUFjO0VBQ2QsZUFBYyxFQUFHOztBQUVuQjtFQUNFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5vbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.sass */ "./src/app/welcome/welcome.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/interfacewerk/iwerk-angular-ui/projects/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map