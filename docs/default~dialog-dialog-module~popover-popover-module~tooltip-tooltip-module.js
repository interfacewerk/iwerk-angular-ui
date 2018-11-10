(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dialog-dialog-module~popover-popover-module~tooltip-tooltip-module"],{

/***/ "../../src/app/ui/checkbox/checkbox.config.ts":
/*!*********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox.config.ts ***!
  \*********************************************************************************/
/*! exports provided: IW_CHECKBOX_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_CHECKBOX_CONFIG", function() { return IW_CHECKBOX_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_CHECKBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-checkbox.config');


/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox.module.ts":
/*!*********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]],
            exports: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.html":
/*!***********************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox__checkbox\" [attr.tabindex]=\"getTabIndex()\" (keyup)=\"onKeyup($event)\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n  </svg>\n</div>\n<div class=\"checkbox__label\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.scss":
/*!***********************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-checkbox {\n  display: inline-block;\n  line-height: 15px; }\n  iw-checkbox:not(.checkbox--disabled) {\n    cursor: pointer; }\n  iw-checkbox.checkbox--disabled {\n    cursor: not-allowed; }\n  iw-checkbox.checkbox--disabled .checkbox__checkbox {\n    opacity: 0.2; }\n  iw-checkbox:not(.checkbox--disabled):not(.checkbox--checked):hover .checkbox__checkbox {\n    border-color: grey; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox {\n    border-color: black; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox svg {\n    opacity: 1; }\n  iw-checkbox .checkbox__checkbox {\n    width: 15px;\n    height: 15px;\n    position: relative;\n    margin: 0 3px;\n    display: inline-block;\n    float: left;\n    transition: border-color 0.3s;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    overflow: hidden; }\n  iw-checkbox .checkbox__checkbox svg {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 75%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      opacity: 0;\n      transition: opacity 0.3s; }\n  iw-checkbox .checkbox__label {\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9jaGVja2JveC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixrQkFBaUIsRUF5RGxCO0VBM0REO0lBS0ksZ0JBQWUsRUFDaEI7RUFOSDtJQVFJLG9CQUFtQixFQUNwQjtFQVRIO0lBYU0sYUFBWSxFQUNiO0VBZEw7SUFtQk0sbUJBQWtCLEVBQ25CO0VBcEJMO0lBeUJNLG9CQUFtQixFQUNwQjtFQTFCTDtJQTZCTSxXQUFVLEVBQ1g7RUE5Qkw7SUFrQ0ksWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsOEJBQTZCO0lBQzdCLDRCQUEyQjtJQUMzQixtQkFBa0I7SUFDbEIsaUJBQWdCLEVBV2pCO0VBdERIO01BOENNLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsU0FBUTtNQUNSLFdBQVU7TUFDVix5Q0FBZ0M7Y0FBaEMsaUNBQWdDO01BQ2hDLFdBQVU7TUFDVix5QkFBd0IsRUFDekI7RUFyREw7SUF5REksc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWkvY2hlY2tib3gvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpdy1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIFxuICAmOm5vdCguY2hlY2tib3gtLWRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICYuY2hlY2tib3gtLWRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJi5jaGVja2JveC0tZGlzYWJsZWQge1xuICAgIC5jaGVja2JveF9fY2hlY2tib3gge1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jaGVja2JveC0tZGlzYWJsZWQpOm5vdCguY2hlY2tib3gtLWNoZWNrZWQpOmhvdmVyIHtcbiAgICAuY2hlY2tib3hfX2NoZWNrYm94IHtcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICB9XG4gIH1cblxuICAmLmNoZWNrYm94LS1jaGVja2VkIHtcbiAgICAuY2hlY2tib3hfX2NoZWNrYm94IHtcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveF9fY2hlY2tib3ggc3ZnIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLmNoZWNrYm94X19jaGVja2JveCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB3aWR0aDogNzUlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgfVxuXG4gIC5jaGVja2JveF9fbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts":
/*!*********************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkbox.config */ "../../src/app/ui/checkbox/checkbox.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    CheckboxComponent = CheckboxComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'iw-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "../../src/app/ui/checkbox/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "../../src/app/ui/checkbox/checkbox/checkbox.component.scss")],
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckboxComponent_1; }),
                    multi: true
                }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_checkbox_config__WEBPACK_IMPORTED_MODULE_2__["IW_CHECKBOX_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html":
/*!*************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dialog-container__content\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"dialog-container__focus-trap\" iwDialogFocusTrap></div>\n"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.scss":
/*!*************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n  outline: none; }\n  iw-dialog-container .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px; }\n  iw-dialog-container.iw-dialog-container--visible {\n    opacity: 1; }\n  iw-dialog-container.iw-dialog-container--visible .dialog-container__content {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n  iw-dialog-container .dialog-container__focus-trap {\n    opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osV0FBVTtFQUNWLFdBQVU7RUFDVixzQ0FBcUM7RUFDckMseUJBQXdCO0VBQ3hCLGNBQWEsRUE0QmQ7RUF0Q0Q7SUFhSSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFVBQVM7SUFDVCxXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLCtCQUE4QjtJQUM5QixpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixtQ0FBMEI7SUFBMUIsMkJBQTBCO0lBQTFCLG1EQUEwQjtJQUMxQixxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLGlDQUFnQztJQUNoQyxjQUFhLEVBQ2Q7RUExQkg7SUE2QkksV0FBVSxFQUlYO0VBakNIO01BK0JNLGlDQUF3QjtjQUF4Qix5QkFBd0IsRUFDekI7RUFoQ0w7SUFvQ0ksV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvdWkvZGlhbG9nL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml3LWRpYWxvZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjY3KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICBvdXRsaW5lOiBub25lO1xuXG4gIC5kaWFsb2ctY29udGFpbmVyX19jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAyMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAxcHggZ3JheTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgJi5pdy1kaWFsb2ctY29udGFpbmVyLS12aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC5kaWFsb2ctY29udGFpbmVyX19jb250ZW50IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cblxuICAuZGlhbG9nLWNvbnRhaW5lcl9fZm9jdXMtdHJhcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts":
/*!***********************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DialogContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContainerComponent", function() { return DialogContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogContainerComponent = /** @class */ (function () {
    function DialogContainerComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogContainerComponent.prototype, "dialogOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogContainerComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('body:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onKeydown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onClick", null);
    DialogContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'iw-dialog-container',
            template: __webpack_require__(/*! ./dialog-container.component.html */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html"),
            styles: [__webpack_require__(/*! ./dialog-container.component.scss */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DialogContainerComponent);
    return DialogContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts":
/*!*******************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-focus-trap.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: DialogFocusTrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFocusTrapDirective", function() { return DialogFocusTrapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogFocusTrapDirective = /** @class */ (function () {
    function DialogFocusTrapDirective(container) {
        this.container = container;
        this.tabindex = 0;
    }
    DialogFocusTrapDirective.prototype.onFocus = function ($event) {
        this.container.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.tabindex'),
        __metadata("design:type", Object)
    ], DialogFocusTrapDirective.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], DialogFocusTrapDirective.prototype, "onFocus", null);
    DialogFocusTrapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwDialogFocusTrap]'
        }),
        __metadata("design:paramtypes", [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_1__["DialogContainerComponent"]])
    ], DialogFocusTrapDirective);
    return DialogFocusTrapDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-ref.class.ts":
/*!********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-ref.class.ts ***!
  \********************************************************************************/
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
/*!*****************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.config.ts ***!
  \*****************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return IW_DIALOG_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_DIALOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-dialog.config');


/***/ }),

/***/ "../../src/app/ui/dialog/dialog.directive.ts":
/*!********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.directive.ts ***!
  \********************************************************************************/
/*! exports provided: DialogDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return DialogDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The dialog component is meant to focus user's attention on one particular task or content.
 * It is displayed on top of the rest.
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogDirective.prototype, "escToClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogDirective.prototype, "clickToClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogDirective.prototype, "containerClass", void 0);
    DialogDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwDialog]',
            exportAs: 'iw-dialog'
        }),
        __metadata("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], DialogDirective);
    return DialogDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.module.ts":
/*!*****************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]; });

/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.directive */ "../../src/app/ui/dialog/dialog.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _dialog_directive__WEBPACK_IMPORTED_MODULE_4__["DialogDirective"]; });

/* harmony import */ var _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-focus-trap.directive */ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return _dialog_config__WEBPACK_IMPORTED_MODULE_6__["IW_DIALOG_CONFIG"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"],
                _dialog_directive__WEBPACK_IMPORTED_MODULE_4__["DialogDirective"],
                _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_5__["DialogFocusTrapDirective"]
            ],
            entryComponents: [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"]],
            exports: [_dialog_directive__WEBPACK_IMPORTED_MODULE_4__["DialogDirective"]],
            providers: [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.service.ts":
/*!******************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.service.ts ***!
  \******************************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony import */ var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-ref.class */ "../../src/app/ui/dialog/dialog-ref.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




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
        this.__containerFactory = this.componentFactoryResolver.resolveComponentFactory(_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_1__["DialogContainerComponent"]);
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
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["DialogRef"](this.__containerFactory.create(this.injector, [[component.location.nativeElement]]), component.hostView, this.appRef, function () {
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
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_3__["DialogRef"](this.__containerFactory.create(this.injector, [view.rootNodes]), view, this.appRef, function () {
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
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dialog_config__WEBPACK_IMPORTED_MODULE_2__["IW_DIALOG_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], Object])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "../../src/app/ui/popover/helpers.ts":
/*!************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/helpers.ts ***!
  \************************************************************************/
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
/*!****************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.scss":
/*!****************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-container {\n  position: absolute;\n  z-index: 4;\n  display: block;\n  background: white;\n  border: 1px solid black;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItY29udGFpbmVyL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItY29udGFpbmVyL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXctcG9wb3Zlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.ts":
/*!**************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    PopoverContainerComponent.prototype.onKeyDown = function ($event) {
        if (this.escToClose && $event.keyCode === 27) {
            $event.preventDefault();
            this.onClose.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('body:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PopoverContainerComponent.prototype, "onKeyDown", null);
    PopoverContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'iw-popover-container',
            template: __webpack_require__(/*! ./popover-container.component.html */ "../../src/app/ui/popover/popover-container/popover-container.component.html"),
            styles: [__webpack_require__(/*! ./popover-container.component.scss */ "../../src/app/ui/popover/popover-container/popover-container.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html":
/*!********************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss":
/*!********************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-scroll-mask {\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.01); }\n  iw-popover-scroll-mask .iw-popover-arrow-element {\n    z-index: 5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItc2Nyb2xsLW1hc2svcG9wb3Zlci1zY3JvbGwtbWFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNDQUFxQyxFQUt0QztFQVpEO0lBVUksV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvdWkvcG9wb3Zlci9wb3BvdmVyLXNjcm9sbC1tYXNrL3BvcG92ZXItc2Nyb2xsLW1hc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpdy1wb3BvdmVyLXNjcm9sbC1tYXNrIHtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSk7XG4gIFxuICAuaXctcG9wb3Zlci1hcnJvdy1lbGVtZW50IHtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts":
/*!******************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PopoverScrollMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverScrollMaskComponent", function() { return PopoverScrollMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverScrollMaskComponent = /** @class */ (function () {
    function PopoverScrollMaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    PopoverScrollMaskComponent.prototype.onClick = function ($event) {
        if (this.clickOutsideToClose && $event.target === this.elementRef.nativeElement) {
            $event.preventDefault();
            $event.stopPropagation();
            this.onClose.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], PopoverScrollMaskComponent.prototype, "onClick", null);
    PopoverScrollMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'iw-popover-scroll-mask',
            template: __webpack_require__(/*! ./popover-scroll-mask.component.html */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html"),
            styles: [__webpack_require__(/*! ./popover-scroll-mask.component.scss */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PopoverScrollMaskComponent);
    return PopoverScrollMaskComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.config.ts":
/*!*******************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover.config.ts ***!
  \*******************************************************************************/
/*! exports provided: IW_POPOVER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return IW_POPOVER_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_POPOVER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-popover.config');


/***/ }),

/***/ "../../src/app/ui/popover/popover.directive.ts":
/*!**********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: PopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        this.shouldClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event triggered when the popover position changes.
         */
        this.popoverPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "arrowClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "horizontalAlignment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "scrollMaskClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopoverDirective.prototype, "escToClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopoverDirective.prototype, "clickOutsideToClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopoverDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopoverDirective.prototype, "horizontal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PopoverDirective.prototype, "shouldClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PopoverDirective.prototype, "popoverPosition", void 0);
    PopoverDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwPopover]'
        }),
        __metadata("design:paramtypes", [_popover_service__WEBPACK_IMPORTED_MODULE_1__["PopoverService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.module.ts":
/*!*******************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.directive */ "../../src/app/ui/popover/popover.directive.ts");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_5__["Popover"]; });

/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_6__["IW_POPOVER_CONFIG"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_3__["PopoverContainerComponent"], _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_4__["PopoverScrollMaskComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _popover_directive__WEBPACK_IMPORTED_MODULE_2__["PopoverDirective"],
                _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_3__["PopoverContainerComponent"],
                _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_4__["PopoverScrollMaskComponent"]
            ],
            exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_2__["PopoverDirective"]],
            providers: [_popover_service__WEBPACK_IMPORTED_MODULE_5__["PopoverService"]]
        })
    ], PopoverModule);
    return PopoverModule;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.service.ts":
/*!********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/popover/popover.service.ts ***!
  \********************************************************************************/
/*! exports provided: Popover, PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/popover/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PopoverImpl = /** @class */ (function () {
    function PopoverImpl(embeddedViewRef, appRef, componentRef, container, scrollMask) {
        this.embeddedViewRef = embeddedViewRef;
        this.appRef = appRef;
        this.componentRef = componentRef;
        this.container = container;
        this.scrollMask = scrollMask;
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
    Popover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
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
        return this.__open(null, templateRef.createEmbeddedView(null), target, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["combineOptionsAndDefaults"])(this.popoverConfig, options));
    };
    PopoverService.prototype.open = function (componentType, target, options, init) {
        var reflInj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create([{ provide: Popover, deps: [] }], this.injector);
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
        var instance = this.__open(component, null, target, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["combineOptionsAndDefaults"])(this.popoverConfig, popoverOptions));
        popover.setInstance(instance);
        return instance;
    };
    PopoverService.prototype.__open = function (componentRef, embeddedViewRef, target, options) {
        var arrowElement = document.createElement('div');
        arrowElement.classList.add('iw-popover-arrow-element');
        // create the popover container
        var container = this.componentFactoryResolver.resolveComponentFactory(_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContainerComponent"])
            .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
        // create the mask component
        var scrollMask = this.componentFactoryResolver.resolveComponentFactory(_popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_2__["PopoverScrollMaskComponent"])
            .create(this.injector, [[container.location.nativeElement, arrowElement]]);
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
        return new PopoverImpl(embeddedViewRef, this.appRef, componentRef, container, scrollMask);
    };
    PopoverService.prototype.__showPopover = function (elements, options) {
        var container = elements.container;
        var scrollMask = elements.scrollMask;
        var arrowElement = elements.arrowElement;
        setTimeout(function () {
            container.style.visibility = 'hidden';
            arrowElement.style.visibility = 'hidden';
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["addClasses"])(container, options.popoverClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["addClasses"])(scrollMask, options.scrollMaskClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["addClasses"])(arrowElement, options.arrowClass);
            document.body.appendChild(scrollMask);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["smartPosition"])(elements, options);
            container.classList.add('iw-popover-container--visible');
            arrowElement.classList.add('iw-popover-arrow-element--visible');
        }, 0);
    };
    PopoverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_popover_config__WEBPACK_IMPORTED_MODULE_3__["IW_POPOVER_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], Object])
    ], PopoverService);
    return PopoverService;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.directive.ts":
/*!********************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/state-button/state-button.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: StateButtonDirective, SbIdleDirective, SbSuccessDirective, SbDoingDirective, SbFailureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonDirective", function() { return StateButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbIdleDirective", function() { return SbIdleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbSuccessDirective", function() { return SbSuccessDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbDoingDirective", function() { return SbDoingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFailureDirective", function() { return SbFailureDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_template_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-template.class */ "../../src/app/ui/state-button/state-template.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateButtonDirective = /** @class */ (function () {
    function StateButtonDirective() {
        this.__state = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], StateButtonDirective.prototype, "iwStateButton", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.iw-state-button'),
        __metadata("design:type", Object)
    ], StateButtonDirective.prototype, "withClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sb--idle'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isIdle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sb--doing'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isDoing", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sb--success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isSuccess", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sb--failure'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isFailure", null);
    StateButtonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwStateButton]'
        })
    ], StateButtonDirective);
    return StateButtonDirective;
}());

var SbIdleDirective = /** @class */ (function (_super) {
    __extends(SbIdleDirective, _super);
    function SbIdleDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'IDLE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbIdleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sbIdle]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            StateButtonDirective])
    ], SbIdleDirective);
    return SbIdleDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_2__["StateTemplate"]));

var SbSuccessDirective = /** @class */ (function (_super) {
    __extends(SbSuccessDirective, _super);
    function SbSuccessDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'SUCCESS', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbSuccessDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sbSuccess]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            StateButtonDirective])
    ], SbSuccessDirective);
    return SbSuccessDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_2__["StateTemplate"]));

var SbDoingDirective = /** @class */ (function (_super) {
    __extends(SbDoingDirective, _super);
    function SbDoingDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'DOING', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbDoingDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sbDoing]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            StateButtonDirective])
    ], SbDoingDirective);
    return SbDoingDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_2__["StateTemplate"]));

var SbFailureDirective = /** @class */ (function (_super) {
    __extends(SbFailureDirective, _super);
    function SbFailureDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'FAILURE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbFailureDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[sbFailure]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            StateButtonDirective])
    ], SbFailureDirective);
    return SbFailureDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_2__["StateTemplate"]));



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.module.ts":
/*!*****************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/state-button/state-button.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: StateButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonModule", function() { return StateButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-button.directive */ "../../src/app/ui/state-button/state-button.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StateButtonModule = /** @class */ (function () {
    function StateButtonModule() {
    }
    StateButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbSuccessDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_2__["SbSuccessDirective"]
            ],
        })
    ], StateButtonModule);
    return StateButtonModule;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-template.class.ts":
/*!******************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/state-button/state-template.class.ts ***!
  \******************************************************************************************/
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
/*!************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/helpers.ts ***!
  \************************************************************************/
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
/*!****************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip-container__content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss":
/*!****************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-tooltip-container {\n  z-index: 6;\n  position: absolute;\n  display: block;\n  padding: 5px; }\n  iw-tooltip-container .tooltip-container__content {\n    border-radius: 3px;\n    color: white;\n    padding: 5px;\n    background: black; }\n  iw-tooltip-container:after {\n    border: 5px solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none; }\n  iw-tooltip-container.iw-tooltip-container--bottom:after {\n    left: 50%;\n    bottom: calc(100% - 5px);\n    border-bottom-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--top:after {\n    left: 50%;\n    top: calc(100% - 5px);\n    border-top-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--right:after {\n    top: 50%;\n    right: calc(100% - 5px);\n    border-right-color: black;\n    margin-top: -5px; }\n  iw-tooltip-container.iw-tooltip-container--left:after {\n    top: 50%;\n    left: calc(100% - 5px);\n    border-left-color: black;\n    margin-top: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvc3JjL2FwcC91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFOaUIsRUFtRGxCO0VBakREO0lBT0ksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixhQUFZO0lBQ1osa0JBQWlCLEVBQ2xCO0VBWEg7SUFjSSw4QkFBd0M7SUFDeEMsYUFBWTtJQUNaLFVBQVM7SUFDVCxTQUFRO0lBQ1IsbUJBQWtCO0lBQ2xCLHFCQUFvQixFQUNyQjtFQXBCSDtJQXVCSSxVQUFTO0lBQ1QseUJBQXNDO0lBQ3RDLDJCQUEwQjtJQUMxQixrQkE1QmUsRUE2QmhCO0VBM0JIO0lBOEJJLFVBQVM7SUFDVCxzQkFBbUM7SUFDbkMsd0JBQXVCO0lBQ3ZCLGtCQW5DZSxFQW9DaEI7RUFsQ0g7SUFxQ0ksU0FBUTtJQUNSLHdCQUFxQztJQUNyQywwQkFBeUI7SUFDekIsaUJBMUNlLEVBMkNoQjtFQXpDSDtJQTRDSSxTQUFRO0lBQ1IsdUJBQW9DO0lBQ3BDLHlCQUF3QjtJQUN4QixpQkFqRGUsRUFrRGhCIiwiZmlsZSI6InNyYy9hcHAvdWkvdG9vbHRpcC90b29sdGlwLWNvbnRhaW5lci90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpbm5lci1wYWRkaW5nOiA1cHg7XG5cbml3LXRvb2x0aXAtY29udGFpbmVyIHtcbiAgei1pbmRleDogNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogJGlubmVyLXBhZGRpbmc7XG5cbiAgLnRvb2x0aXAtY29udGFpbmVyX19jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjazsgICAgXG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBib3JkZXI6ICRpbm5lci1wYWRkaW5nIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAmLml3LXRvb2x0aXAtY29udGFpbmVyLS1ib3R0b206YWZ0ZXIge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IGNhbGMoMTAwJSAtICN7JGlubmVyLXBhZGRpbmd9KTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogLSRpbm5lci1wYWRkaW5nO1xuICB9XG5cbiAgJi5pdy10b29sdGlwLWNvbnRhaW5lci0tdG9wOmFmdGVyIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyRpbm5lci1wYWRkaW5nfSk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IC0kaW5uZXItcGFkZGluZztcbiAgfVxuXG4gICYuaXctdG9vbHRpcC1jb250YWluZXItLXJpZ2h0OmFmdGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogY2FsYygxMDAlIC0gI3skaW5uZXItcGFkZGluZ30pO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogLSRpbm5lci1wYWRkaW5nO1xuICB9XG5cbiAgJi5pdy10b29sdGlwLWNvbnRhaW5lci0tbGVmdDphZnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogY2FsYygxMDAlIC0gI3skaW5uZXItcGFkZGluZ30pO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAtJGlubmVyLXBhZGRpbmc7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts":
/*!**************************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TooltipContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipContainerComponent.prototype, "containerClass", void 0);
    TooltipContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'iw-tooltip-container',
            template: __webpack_require__(/*! ./tooltip-container.component.html */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-container.component.scss */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_1__["IW_TOOLTIP_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.config.ts":
/*!*******************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.config.ts ***!
  \*******************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return IW_TOOLTIP_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_TOOLTIP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-tooltip.config');


/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.directive.ts":
/*!**********************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/tooltip/helpers.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * The tooltip component can be used to display an extra piece of information to an element of an user interface.
 * This piece appears when the mouse is over this element.
 * Add a template that adds the `iwTooltip` directive inside the element where you want the tooltip to appear.
 *
 * ## Positionning
 * The tooltip is smartly positionned. It will be on top of the target if the target is on the bottom half of the screen.
 * It will be at the bottom of the target if the target is on the top half of the screen.
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
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.__parent = this.viewContainerRef.element.nativeElement.parentElement;
            this.__parent.addEventListener('mouseenter', this);
            this.__parent.addEventListener('mouseleave', this);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
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
        if (evt.type === 'mouseenter') {
            this.__timerId = setTimeout(function () {
                return _this.__onMouseEnter(evt);
            }, this.__delay);
        }
        if (evt.type === 'mouseleave') {
            clearTimeout(this.__timerId);
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
                .resolveComponentFactory(_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__["TooltipContainerComponent"])
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
            Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["smartPosition"])({
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "containerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "horizontal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TooltipDirective.prototype, "delay", void 0);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwTooltip]'
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_4__["IW_TOOLTIP_CONFIG"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], String, Object])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.module.ts":
/*!*******************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.module.ts ***!
  \*******************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.directive */ "../../src/app/ui/tooltip/tooltip.directive.ts");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_4__["IW_TOOLTIP_CONFIG"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_3__["TooltipContainerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_3__["TooltipContainerComponent"]],
            exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "../../src/app/ui/ui.module.ts":
/*!******************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/ui.module.ts ***!
  \******************************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/checkbox.module */ "../../src/app/ui/checkbox/checkbox.module.ts");
/* harmony import */ var _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover/popover.module */ "../../src/app/ui/popover/popover.module.ts");
/* harmony import */ var _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-button/state-button.module */ "../../src/app/ui/state-button/state-button.module.ts");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "../../src/app/ui/tooltip/tooltip.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_5__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisModule"]
            ],
            exports: [
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_5__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisModule"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../src/public_api.ts":
/*!************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/public_api.ts ***!
  \************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule, IW_TOOLTIP_CONFIG, TooltipModule, StateButtonModule, CheckboxModule, IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule, MultilineEllipsisModule, UiModule */
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

/* harmony import */ var _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ui/ui.module */ "../../src/app/ui/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"]; });










/***/ })

}]);
//# sourceMappingURL=default~dialog-dialog-module~popover-popover-module~tooltip-tooltip-module.js.map