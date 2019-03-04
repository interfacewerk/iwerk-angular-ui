(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ellipsis-ellipsis-module"],{

/***/ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"ellipsis\" [iwMultilineEllipsis]=\"text\" style=\"max-height: 100px; max-width: 200px\"></p>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");
/* harmony import */ var _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ellipsis-example1/ellipsis-example1.component */ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts");









var EllipsisDemoModule = /** @class */ (function () {
    function EllipsisDemoModule() {
    }
    EllipsisDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__["EllipsisDemoComponent"] }
                ]),
                src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_6__["MultilineEllipsisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: [
                _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__["EllipsisDemoComponent"],
                _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_8__["EllipsisExample1Component"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Multi-line Ellipsis'\"\n  [componentId]=\"'MultilineEllipsisDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"Simple example\">\n    <app-ellipsis-demo-example1></app-ellipsis-demo-example1>\n    <app-code path=\"ellipsis-example1.component.html\"></app-code>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.ellipsis {\n  padding: 3px;\n  border: 1px solid grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvb3Blbi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9lbGxpcHNpcy9lbGxpcHNpcy9lbGxpcHNpcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWix1QkFBc0IsRUFBRyIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZWxsaXBzaXMvZWxsaXBzaXMvZWxsaXBzaXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLmVsbGlwc2lzIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyB9XG4iXX0= */"

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



/***/ })

}]);
//# sourceMappingURL=ellipsis-ellipsis-module.js.map