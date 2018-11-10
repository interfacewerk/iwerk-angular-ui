(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ellipsis-ellipsis-module"],{

/***/ "./src/app/ellipsis/ellipsis.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ellipsis/ellipsis.module.ts ***!
  \*********************************************/
/*! exports provided: EllipsisDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoModule", function() { return EllipsisDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EllipsisDemoModule = /** @class */ (function () {
    function EllipsisDemoModule() {
    }
    EllipsisDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__["EllipsisDemoComponent"] }
                ]),
                src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__["EllipsisDemoComponent"],
                _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_6__["EllipsisDemoExample1Component"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Multi-line Ellipsis'\"\n  [componentId]=\"'MultilineEllipsisDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"Simple example\" [source]=\"example1\">\n    <app-ellipsis-demo-example1></app-ellipsis-demo-example1>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.ellipsis {\n  padding: 3px;\n  border: 1px solid grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ttcGVhY2gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvYXBwL2VsbGlwc2lzL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQixFQUN6QiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZWxsaXBzaXMvZWxsaXBzaXMvZWxsaXBzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLmVsbGlwc2lzIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.ts ***!
  \*********************************************************/
/*! exports provided: EllipsisDemoExample1Component, EllipsisDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoExample1Component", function() { return EllipsisDemoExample1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoComponent", function() { return EllipsisDemoComponent; });
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

var example1 = "<p class=\"ellipsis\" [iwMultilineEllipsis]=\"text\" style=\"max-height: 100px; max-width: 200px\"></p>";
var EllipsisDemoExample1Component = /** @class */ (function () {
    function EllipsisDemoExample1Component() {
        // tslint:disable-next-line
        this.text = 'Pariatur tempor anim culpa enim consequat. Sit commodo irure labore pariatur dolor consequat fugiat nisi pariatur. Magna in in dolor aliqua veniam duis nulla pariatur ut. Deserunt elit aute do ut ad sit irure proident dolor. Amet excepteur elit consectetur sit ipsum enim fugiat cupidatat est aliqua.';
        this.width = 100;
        this.height = 50;
    }
    EllipsisDemoExample1Component.prototype.getHeight = function () {
        return this.height + 'px';
    };
    EllipsisDemoExample1Component.prototype.getWidth = function () {
        return this.width + 'px';
    };
    EllipsisDemoExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ellipsis-demo-example1',
            template: example1,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], EllipsisDemoExample1Component);
    return EllipsisDemoExample1Component;
}());

var EllipsisDemoComponent = /** @class */ (function () {
    function EllipsisDemoComponent() {
        this.example1 = example1;
    }
    EllipsisDemoComponent.prototype.ngOnInit = function () {
    };
    EllipsisDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ellipsis.component.html */ "./src/app/ellipsis/ellipsis/ellipsis.component.html"),
            styles: [__webpack_require__(/*! ./ellipsis.component.scss */ "./src/app/ellipsis/ellipsis/ellipsis.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EllipsisDemoComponent);
    return EllipsisDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=ellipsis-ellipsis-module.js.map