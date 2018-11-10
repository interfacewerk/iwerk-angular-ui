(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts":
/*!********************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts ***!
  \********************************************************************************************************/
/*! exports provided: MultilineEllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisDirective", function() { return MultilineEllipsisDirective; });
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

/**
 * The multiline ellipsis directive can be used to display multi-line
 * text with an ellipsis character at the end if the text is too long.
 *
 ```ts
 import { MultilineEllipsisModule } from 'iwerk-angular-ui';
 ```
 */
var MultilineEllipsisDirective = /** @class */ (function () {
    function MultilineEllipsisDirective(elementRef) {
        this.elementRef = elementRef;
        /**
         * An event that is emitted that indicates whether the text is truncated.
         */
        this.truncated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            this.truncated.emit(false);
            this.__isOverflowing = false;
            return;
        }
        this.truncated.emit(true);
        this.__isOverflowing = true;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MultilineEllipsisDirective.prototype, "iwMultilineEllipsis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultilineEllipsisDirective.prototype, "truncated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultilineEllipsisDirective.prototype, "onResize", null);
    MultilineEllipsisDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[iwMultilineEllipsis]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MultilineEllipsisDirective);
    return MultilineEllipsisDirective;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts":
/*!*****************************************************************************************************!*\
  !*** /home/kmpeach/dev/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MultilineEllipsisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisModule", function() { return MultilineEllipsisModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiline-ellipsis.directive */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultilineEllipsisModule = /** @class */ (function () {
    function MultilineEllipsisModule() {
    }
    MultilineEllipsisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            declarations: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__["MultilineEllipsisDirective"]],
            exports: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__["MultilineEllipsisDirective"]]
        })
    ], MultilineEllipsisModule);
    return MultilineEllipsisModule;
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










/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dialog/dialog.module": [
		"./src/app/dialog/dialog.module.ts",
		"dialog-dialog-module"
	],
	"./ellipsis/ellipsis.module": [
		"./src/app/ellipsis/ellipsis.module.ts",
		"ellipsis-ellipsis-module"
	],
	"./popover/popover.module": [
		"./src/app/popover/popover.module.ts",
		"popover-popover-module"
	],
	"./tooltip/tooltip.module": [
		"./src/app/tooltip/tooltip.module.ts",
		"tooltip-tooltip-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <ul>\n    <li class=\"app__logo\"><a></a></li>\n    <li><a routerLink=\"/\"\n      [routerLinkActiveOptions]=\"{exact: true}\" \n      routerLinkActive=\"active-link\">\n      Get Started\n    </a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/popover\">Popover</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/tooltip\">Tooltip</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/dialog\">Dialog</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/ellipsis\">Ellipsis</a></li>\n    <!-- <li><a routerLinkActive=\"active-link\" routerLink=\"/stateful-button\">Stateful Button</a></li> -->\n    <li><a href=\"https://github.com/interfacewerk/iwerk-angular-ui\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n    <li><a href=\"https://interfacewerk.de/jobs\"><fa-icon [icon]=\"faHandshake\"></fa-icon> We are hiring!</a></li>\n    <li><a href=\"https://interfacewerk.de\">interfacewerk.de</a></li>\n  </ul>\n</aside>\n\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  :host ul li.app__logo {\n    padding: 10px 15px; }\n  :host ul li.app__logo a {\n      width: 100%;\n      display: block;\n      width: auto;\n      position: relative;\n      color: red;\n      background-image: url('https://interfacewerk.github.io/iwerk-angular-ui/assets/logo.svg');\n      background-size: 100%;\n      background-repeat: no-repeat; }\n  :host aside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 200px;\n    overflow: auto;\n    background: white;\n    color: black;\n    padding: 15px 0px;\n    border-right: 1px solid grey;\n    box-shadow: 2px 0px 2px 1px lightgray; }\n  :host main {\n    position: absolute;\n    top: 0;\n    left: 200px;\n    height: 100%;\n    right: 0;\n    overflow: auto; }\n  :host ul {\n    padding: 0;\n    margin: 0; }\n  :host ul li {\n      list-style: none;\n      width: 100%;\n      padding: 0; }\n  :host ul li a {\n        display: inline-block;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-decoration: none;\n        padding: 0px 15px;\n        color: black;\n        font-size: 1.6rem;\n        transition: color 0.2s; }\n  :host ul li a:hover {\n          color: #FF793F; }\n  :host ul li a.active-link {\n          color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVksRUF5RWI7RUE3RUQ7SUFvQkksbUJBQWtCLEVBQ25CO0VBckJIO01BVU0sWUFBVztNQUNYLGVBQWM7TUFDZCxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLFdBQVU7TUFDViwwRkFBeUM7TUFDekMsc0JBQXFCO01BQ3JCLDZCQUE0QixFQUM3QjtFQWxCTDtJQXdCSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxhQUFZO0lBQ1osYUF0QmlCO0lBdUJqQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsNkJBQTRCO0lBQzVCLHNDQUFxQyxFQUN0QztFQW5DSDtJQXNDSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFlBbENpQjtJQW1DakIsYUFBWTtJQUNaLFNBQVE7SUFDUixlQUFjLEVBQ2Y7RUE1Q0g7SUErQ0ksV0FBVTtJQUNWLFVBQVMsRUE0QlY7RUE1RUg7TUFtRE0saUJBQWdCO01BQ2hCLFlBQVc7TUFDWCxXQUFVLEVBc0JYO0VBM0VMO1FBd0RRLHNCQUFxQjtRQUNyQixZQUFXO1FBQ1gsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixzQkFBcUI7UUFDckIsa0JBQWlCO1FBQ2pCLGFBQVk7UUFDWixrQkFBaUI7UUFDakIsdUJBQXNCLEVBVXZCO0VBMUVQO1VBbUVVLGVDbkVXLEVEb0VaO0VBcEVUO1VBdUVVLGVDdEVVLEVEdUVYIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICR3aWR0aF9hc2lkZTogMjAwcHg7XG5cbiAgdWwgbGkuYXBwX19sb2dvIHtcbiAgICBhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ28uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG5cbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cblxuICBhc2lkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogJHdpZHRoX2FzaWRlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IDFweCBsaWdodGdyYXk7XG4gIH1cblxuICBtYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6ICR3aWR0aF9hc2lkZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLXRocmVlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUtbGluayB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1mb3VyO1xuICAgICAgICB9XG4gIFxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIiRjb2xvci1vbmU6ICMyOEM4RkY7XG4kY29sb3ItdHdvOiAjMjhBMkZGO1xuJGNvbG9yLXRocmVlOiAjRkY3OTNGO1xuJGNvbG9yLWZvdXI6ICNGRjREMDA7XG4kY29sb3ItZml2ZTogI0VFMjIwMDtcblxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleTsiXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.faHandshake = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandshake"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
    { path: 'popover', loadChildren: './popover/popover.module#PopoverDemoModule' },
    { path: 'tooltip', loadChildren: './tooltip/tooltip.module#TooltipDemoModule' },
    // { path: 'stateful-button', loadChildren: './stateful-button/stateful-button.module#StatefulButtonDemoModule' },
    { path: 'dialog', loadChildren: './dialog/dialog.module#DialogDemoModule' },
    { path: 'ellipsis', loadChildren: './ellipsis/ellipsis.module#EllipsisDemoModule' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/code-sample/code-sample.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/code-sample/code-sample.module.ts ***!
  \********************************************************/
/*! exports provided: CodeSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSampleModule", function() { return CodeSampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-sample.pipe */ "./src/app/core/code-sample/code-sample.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CodeSampleModule = /** @class */ (function () {
    function CodeSampleModule() {
    }
    CodeSampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["ComponentDescriptionPipe"]],
            providers: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["ComponentDescriptionPipe"]],
            declarations: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_2__["ComponentDescriptionPipe"]]
        })
    ], CodeSampleModule);
    return CodeSampleModule;
}());



/***/ }),

/***/ "./src/app/core/code-sample/code-sample.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/core/code-sample/code-sample.pipe.ts ***!
  \******************************************************/
/*! exports provided: CodeSamplePipe, ComponentDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSamplePipe", function() { return CodeSamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionPipe", function() { return ComponentDescriptionPipe; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documentation.service */ "./src/app/core/documentation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeSamplePipe = /** @class */ (function () {
    function CodeSamplePipe(http, changeDetectorRef) {
        var _this = this;
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.codeSamples = {};
        this.http.get('assets/code-samples.json')
            .subscribe(function (c) {
            _this.codeSamples = c;
            _this.changeDetectorRef.markForCheck();
        });
    }
    CodeSamplePipe.prototype.transform = function (sampleId, args) {
        return this.codeSamples[sampleId];
    };
    CodeSamplePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'codeSample',
            pure: false
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CodeSamplePipe);
    return CodeSamplePipe;
}());

var ComponentDescriptionPipe = /** @class */ (function () {
    function ComponentDescriptionPipe(documentationService, changeDetectorRef) {
        var _this = this;
        this.documentationService = documentationService;
        this.changeDetectorRef = changeDetectorRef;
        this.documentationService.documentation$.subscribe(function () {
            _this.changeDetectorRef.markForCheck();
        });
    }
    ComponentDescriptionPipe.prototype.transform = function (name, type) {
        var comp = this.documentationService.getComponentDocumentation(name, type);
        if (comp) {
            return comp.description;
        }
        else {
            return 'Loading';
        }
    };
    ComponentDescriptionPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'componentDescription',
            pure: false
        }),
        __metadata("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_2__["DocumentationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ComponentDescriptionPipe);
    return ComponentDescriptionPipe;
}());



/***/ }),

/***/ "./src/app/core/component-api/component-api.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/component-api/component-api.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selector: <code>{{selector$ | async}}</code></h2>\n\n<ng-template [ngIf]=\"hasInputs$ | async\">\n  <h3>Inputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Input</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"inputs$ | async\" let-input>\n        <tr>\n          <td><code>{{input.name}}</code></td>\n          <td><code>{{input.type}}</code></td>\n          <td [innerHTML]=\"input.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasOutputs$ | async\">\n  <h3>Outputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Output</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"outputs$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td><code>{{output.defaultValue}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasMethods$ | async\">\n  <h3>Methods</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Method</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"methods$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>"

/***/ }),

/***/ "./src/app/core/component-api/component-api.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/component-api/component-api.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  border: 1px solid lightgrey;\n  border-radius: 1px;\n  width: 100%; }\n\nthead {\n  background: lightgrey; }\n\nth {\n  text-align: left; }\n\nth, td {\n  padding: 3px 20px 3px 3px; }\n\ntr {\n  border-bottom: 1px solid lightgrey; }\n\n.name, .type {\n  width: 30%; }\n\n.description {\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva21wZWFjaC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQ0V3QjtFRER4QixtQkFBa0I7RUFDbEIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksc0JDSndCLEVESzNCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUNDaEJ3QixFRGlCM0I7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxXQUFVLEVBQ2IiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgsIHRkIHtcbiAgICBwYWRkaW5nOiAzcHggMjBweCAzcHggM3B4O1xufVxuXG50ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5O1xufVxuXG4ubmFtZSwgLnR5cGUge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDQwJTtcbn1cbiIsIiRjb2xvci1vbmU6ICMyOEM4RkY7XG4kY29sb3ItdHdvOiAjMjhBMkZGO1xuJGNvbG9yLXRocmVlOiAjRkY3OTNGO1xuJGNvbG9yLWZvdXI6ICNGRjREMDA7XG4kY29sb3ItZml2ZTogI0VFMjIwMDtcblxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleTsiXX0= */"

/***/ }),

/***/ "./src/app/core/component-api/component-api.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/component-api/component-api.component.ts ***!
  \***************************************************************/
/*! exports provided: ComponentApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function() { return ComponentApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documentation.service */ "./src/app/core/documentation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentApiComponent = /** @class */ (function () {
    function ComponentApiComponent(documentation) {
        this.documentation = documentation;
    }
    ComponentApiComponent.prototype.ngOnChanges = function () {
        this.documentation$ = this.documentation.getComponentDocumentation$(this.componentId, this.componentType);
        this.selector$ = this.documentation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (d) { return d ? d.selector : ''; }));
        this.inputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (d) { return d ? d.inputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(sortByName));
        this.outputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (d) { return d ? d.outputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(sortByName));
        this.methods$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (d) { return d ? d.methodsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(sortByName));
        this.hasOutputs$ = this.outputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (a) { return a.length > 0; }));
        this.hasInputs$ = this.inputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (a) { return a.length > 0; }));
        this.hasMethods$ = this.methods$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (a) { return a.length > 0; }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentApiComponent.prototype, "componentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentApiComponent.prototype, "componentType", void 0);
    ComponentApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-api',
            template: __webpack_require__(/*! ./component-api.component.html */ "./src/app/core/component-api/component-api.component.html"),
            styles: [__webpack_require__(/*! ./component-api.component.scss */ "./src/app/core/component-api/component-api.component.scss")]
        }),
        __metadata("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_2__["DocumentationService"]])
    ], ComponentApiComponent);
    return ComponentApiComponent;
}());

function sortByName(arr) {
    var result = (arr || []).slice(0);
    result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return result;
}


/***/ }),

/***/ "./src/app/core/component-description/component-description.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/core/component-description/component-description.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [innerHTML]=\"componentId | componentDescription: componentType\"></div>"

/***/ }),

/***/ "./src/app/core/component-description/component-description.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/component-description/component-description.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvY29yZS9jb21wb25lbnQtZGVzY3JpcHRpb24vY29tcG9uZW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/component-description/component-description.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/component-description/component-description.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComponentDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionComponent", function() { return ComponentDescriptionComponent; });
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

var ComponentDescriptionComponent = /** @class */ (function () {
    function ComponentDescriptionComponent() {
    }
    ComponentDescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentType", void 0);
    ComponentDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-description',
            template: __webpack_require__(/*! ./component-description.component.html */ "./src/app/core/component-description/component-description.component.html"),
            styles: [__webpack_require__(/*! ./component-description.component.scss */ "./src/app/core/component-description/component-description.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ComponentDescriptionComponent);
    return ComponentDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/core/component-documentation/component-documentation.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/core/component-documentation/component-documentation.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>{{componentTitle}}</h1>\n\n  <ol>\n    <li [class.active]=\"isOverview$ | async\" (click)=\"select('overview')\">Overview</li>\n    <li [class.active]=\"isExamples$ | async\" (click)=\"select('examples')\">Examples</li>\n    <li [class.active]=\"isApi$ | async\" (click)=\"select('api')\">API</li>\n  </ol>\n</div>\n\n<div class=\"content\" [appAnchorContainer]=\"tab$ | async\">\n  <app-component-description\n    appAnchor=\"overview\"\n    [componentId]=\"componentId\"\n    [componentType]=\"'directives'\"\n  ></app-component-description>\n\n  <h2 appAnchor=\"examples\">Examples</h2>\n  <ng-template ngFor [ngForOf]=\"examples\" let-example>\n    <app-component-example [example]=\"example\"></app-component-example>\n  </ng-template>\n\n  <h2 appAnchor=\"api\">API</h2>\n  \n  <app-component-api\n    [componentId]=\"componentId\"\n    [componentType]=\"'directives'\"\n  ></app-component-api>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/core/component-documentation/component-documentation.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/core/component-documentation/component-documentation.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid grey;\n  box-shadow: 2px 0px 2px 1px lightgrey;\n  padding: 0 15px; }\n\n.content {\n  flex: 1 1;\n  padding: 15px;\n  overflow: auto; }\n\nh2 {\n  margin-top: 50px;\n  border-bottom: 1px solid lightgrey; }\n\nol {\n  list-style: none;\n  margin: 0 0 0 30px;\n  padding: 0; }\n\nli {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 10px;\n  transition: color 0.2s;\n  cursor: pointer; }\n\nli:hover {\n    color: #FF793F; }\n\nli.active {\n    color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWRvY3VtZW50YXRpb24vY29tcG9uZW50LWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9rbXBlYWNoL2Rldi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsOEJBQTZCO0VBQzdCLHNDQUFxQztFQUNyQyxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLFVBQVM7RUFDVCxjQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFHRDtFQUNJLGlCQUFnQjtFQUNoQixtQ0N0QndCLEVEdUIzQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsV0FBVSxFQUNiOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLGdCQUFlLEVBVWxCOztBQWZEO0lBUU0sZUMzQ2UsRUQ0Q2hCOztBQVRMO0lBWU0sZUM5Q2MsRUQrQ2YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWRvY3VtZW50YXRpb24vY29tcG9uZW50LWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4OiAxIDE7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG5oMiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7XG59XG5cbm9sIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMCAwIDAgMzBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRjb2xvci10aHJlZTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWZvdXI7XG4gICAgfVxuXG59IiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5OyJdfQ== */"

/***/ }),

/***/ "./src/app/core/component-documentation/component-documentation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/component-documentation/component-documentation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ComponentDocumentationComponent, AnchorContainerDirective, AnchorDirective, ComponentExampleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationComponent", function() { return ComponentDocumentationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorContainerDirective", function() { return AnchorContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorDirective", function() { return AnchorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleDirective", function() { return ComponentExampleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentDocumentationComponent = /** @class */ (function () {
    function ComponentDocumentationComponent(router, route) {
        this.router = router;
        this.route = route;
        this.examples = [];
        this.tab$ = this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (p) { return p.tab || 'overview'; }));
        this.isOverview$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) { return v === 'overview'; }));
        this.isExamples$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) { return v === 'examples'; }));
        this.isApi$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) { return v === 'api'; }));
    }
    ComponentDocumentationComponent.prototype.ngOnInit = function () {
    };
    ComponentDocumentationComponent.prototype.registerExample = function (example) {
        this.examples.push(example);
    };
    ComponentDocumentationComponent.prototype.select = function (tab) {
        this.router.navigate(['.'], {
            queryParamsHandling: 'merge',
            queryParams: {
                tab: tab
            },
            relativeTo: this.route,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentTitle", void 0);
    ComponentDocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-documentation',
            template: __webpack_require__(/*! ./component-documentation.component.html */ "./src/app/core/component-documentation/component-documentation.component.html"),
            styles: [__webpack_require__(/*! ./component-documentation.component.scss */ "./src/app/core/component-documentation/component-documentation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ComponentDocumentationComponent);
    return ComponentDocumentationComponent;
}());

var AnchorContainerDirective = /** @class */ (function () {
    function AnchorContainerDirective(elementRef) {
        this.elementRef = elementRef;
        this.anchors = [];
    }
    AnchorContainerDirective.prototype.registerAnchor = function (anchor) {
        this.anchors.push(anchor);
    };
    AnchorContainerDirective.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.currentAnchor === this.appAnchorContainer) {
            return;
        }
        this.currentAnchor = this.appAnchorContainer;
        var element = this.elementRef.nativeElement;
        var anchor = (this.anchors.find(function (a) { return a.appAnchor === _this.appAnchorContainer; }).elementRef.nativeElement);
        element.scrollTop = anchor.offsetTop - element.offsetTop - 15;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnchorContainerDirective.prototype, "appAnchorContainer", void 0);
    AnchorContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAnchorContainer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AnchorContainerDirective);
    return AnchorContainerDirective;
}());

var AnchorDirective = /** @class */ (function () {
    function AnchorDirective(container, elementRef) {
        this.container = container;
        this.elementRef = elementRef;
        this.container.registerAnchor(this);
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnchorDirective.prototype, "appAnchor", void 0);
    AnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAnchor]'
        }),
        __metadata("design:paramtypes", [AnchorContainerDirective,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AnchorDirective);
    return AnchorDirective;
}());

var ComponentExampleDirective = /** @class */ (function () {
    function ComponentExampleDirective(documentation, template) {
        this.documentation = documentation;
        this.template = template;
        this.documentation.registerExample(this);
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentExampleDirective.prototype, "appComponentExample", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentExampleDirective.prototype, "source", void 0);
    ComponentExampleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appComponentExample]'
        }),
        __metadata("design:paramtypes", [ComponentDocumentationComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], ComponentExampleDirective);
    return ComponentExampleDirective;
}());



/***/ }),

/***/ "./src/app/core/component-example/component-example.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/component-example/component-example.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{example.appComponentExample}}</h3>\n\n<ng-container [ngTemplateOutlet]=\"example.template\"></ng-container>\n\n<div class=\"source\">\n  <pre *ngIf=\"example.source\"><code #code>{{ example.source }}</code></pre>\n  <button class=\"copy\" (click)=\"copy()\">\n    <fa-icon [icon]=\"faCopy\"></fa-icon>\n    <ng-template iwTooltip [horizontal]=\"true\">Copy this code sample</ng-template>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/core/component-example/component-example.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/component-example/component-example.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre {\n  margin: 20px 0;\n  padding: 0; }\n  pre code {\n    margin: 0; }\n  .source {\n  position: relative; }\n  .copy {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  outline: none;\n  background: none;\n  box-shadow: none;\n  color: grey; }\n  .copy:hover {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWV4YW1wbGUvY29tcG9uZW50LWV4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUtiO0VBUEQ7SUFLUSxVQUFTLEVBQ1o7RUFHTDtFQUNJLG1CQUFrQixFQUNyQjtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixTQUFRO0VBQ1IsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUtkO0VBWkQ7SUFVUSxhQUFZLEVBQ2YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2NvcmUvY29tcG9uZW50LWV4YW1wbGUvY29tcG9uZW50LWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gICAgY29kZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5zb3VyY2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvcHkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiBncmV5O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/core/component-example/component-example.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/component-example/component-example.component.ts ***!
  \***********************************************************************/
/*! exports provided: ComponentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleComponent", function() { return ComponentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-documentation/component-documentation.component */ "./src/app/core/component-documentation/component-documentation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentExampleComponent = /** @class */ (function () {
    function ComponentExampleComponent() {
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCopy"];
    }
    ComponentExampleComponent.prototype.ngOnInit = function () {
    };
    ComponentExampleComponent.prototype.copy = function () {
        this.copyToClipboard(this.example.source);
    };
    ComponentExampleComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ComponentExampleDirective"])
    ], ComponentExampleComponent.prototype, "example", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('code'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentExampleComponent.prototype, "code", void 0);
    ComponentExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-example',
            template: __webpack_require__(/*! ./component-example.component.html */ "./src/app/core/component-example/component-example.component.html"),
            styles: [__webpack_require__(/*! ./component-example.component.scss */ "./src/app/core/component-example/component-example.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentExampleComponent);
    return ComponentExampleComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-sample/code-sample.module */ "./src/app/core/code-sample/code-sample.module.ts");
/* harmony import */ var _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-api/component-api.component */ "./src/app/core/component-api/component-api.component.ts");
/* harmony import */ var _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-description/component-description.component */ "./src/app/core/component-description/component-description.component.ts");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-documentation/component-documentation.component */ "./src/app/core/component-documentation/component-documentation.component.ts");
/* harmony import */ var _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-example/component-example.component */ "./src/app/core/component-example/component-example.component.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_3__["CodeSampleModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]
            ],
            exports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_3__["CodeSampleModule"],
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_5__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_4__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_7__["ComponentExampleComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["AnchorDirective"]
            ],
            declarations: [
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_5__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_4__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_7__["ComponentExampleComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_6__["AnchorDirective"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/documentation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/documentation.service.ts ***!
  \***********************************************/
/*! exports provided: DocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationService", function() { return DocumentationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentationService = /** @class */ (function () {
    function DocumentationService(http) {
        var _this = this;
        this.http = http;
        this.documentationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.http.get('assets/documentation/documentation.json')
            .subscribe(function (c) {
            _this.documentationSubject.next(c);
        });
    }
    Object.defineProperty(DocumentationService.prototype, "documentation", {
        get: function () {
            return this.documentationSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentationService.prototype, "documentation$", {
        get: function () {
            return this.documentationSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DocumentationService.prototype.getComponentDocumentation$ = function (name, type) {
        return this.documentationSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (documentation) {
            if (!documentation) {
                return undefined;
            }
            else {
                return documentation[type].find(function (d) { return d.name === name; });
            }
        }));
    };
    DocumentationService.prototype.getComponentDocumentation = function (name, type) {
        if (!this.documentation) {
            return undefined;
        }
        else {
            return this.documentation[type].find(function (d) { return d.name === name; });
        }
    };
    DocumentationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocumentationService);
    return DocumentationService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Interfacewerk Angular UI</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Production ready, highly customizable</h2>\n<p>This library is a set of interface tools that we use everyday in our Angular projects. They are designed as single blocks, easily customizable with CSS, opinionated\n  components or directives.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> AOT compatible</h2>\n<p>We keep this library up-to-date with the latest Angular capabilities. Therefore, we can use any of its component in your AOT ready projects.</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> UX and performance</h2>\n<p>We develop this library with the user experience in mind. Therefore, interactions must be easy to understand and none of the components should affect\n  the performance. When working with other libraries, we often face the problem that, in huge tables, a simple tooltip on each cell could greatly impact\n  the snappiness of the application.\n</p>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 15px;\n  display: block;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2QsZUFBYyxFQUNqQiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"

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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = __webpack_require__(/*! /home/kmpeach/dev/iwerk-angular-ui/projects/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map