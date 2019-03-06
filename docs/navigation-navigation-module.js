(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested2.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested3.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-example1/navigation-example1.component */ "./src/app/navigation/navigation-example1/navigation-example1.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");










var NavigationDemoModule = /** @class */ (function () {
    function NavigationDemoModule() {
    }
    NavigationDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationdDemoComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationdDemoComponent"],
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_8__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_6__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_7__["Example3Component"]
            ],
            entryComponents: [
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_8__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_6__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_7__["Example3Component"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Navigation'\"\n  [componentId]=\"'NavigationComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template appComponentExample=\"Example\">\n    <app-navigation-example1></app-navigation-example1>\n    <app-tabs>\n      <app-code *appTab=\"'Main TS'\" path=\"navigation-example1.component.ts\"></app-code>\n      <app-code *appTab=\"'Nested TS #1'\" path=\"navigation-example1-nested2.component.ts\"></app-code>\n      <app-code *appTab=\"'Nested TS #2'\" path=\"navigation-example1-nested3.component.ts\"></app-code>\n    </app-tabs>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

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
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation/navigation.component.scss")]
        })
    ], NavigationdDemoComponent);
    return NavigationdDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-navigation-module.js.map