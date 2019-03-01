(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"],{

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
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");







var NavigationDemoModule = /** @class */ (function () {
    function NavigationDemoModule() {
    }
    NavigationDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationdDemoComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationdDemoComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example1Component"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example2Component"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
            ],
            entryComponents: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example1Component"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example2Component"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Navigation'\"\n  [componentId]=\"'NavigationComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template appComponentExample=\"Example\" [source]=\"example1Src\">\n    <ng-container *ngComponentOutlet=\"example1Comp\"></ng-container>\n  </ng-template>\n</app-component-documentation>\n"

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
/*! exports provided: Example3Component, Example2Component, Example1Component, NavigationdDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3Component", function() { return Example3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2Component", function() { return Example2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Component", function() { return Example1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationdDemoComponent", function() { return NavigationdDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/public_api */ "../../src/public_api.ts");
/* harmony import */ var src_app_ui_navigation_navigation_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ui/navigation/navigation-controller.service */ "../../src/app/ui/navigation/navigation-controller.service.ts");




var example = "\n// html\n\n<iw-navigation #nav>\n  <h1>Here the content of the first view</h1>\n</iw-navigation>\n\n<button (click)=\"present()\">Present</button>\n\n// ts: YourComponent\n\nimport { NavigationComponent, NavigationData } from 'iwerk-angular-ui';\n\n@ViewChild('nav') nav: NavigationComponent;\n\nclick() {\n  this.nav.present(SomeComponent, { someCustomData })\n    .then(someValueDismissedByThePresentedView => {\n      \u2026\n    });\n}\n\n// ts: SomeComponent\n\nconstructor(private navCtrl: NavigationController) {\n\n}\n\ndismiss() {\n  this.navCtrl.dismiss(someValue);\n}\n";
var Example3Component = /** @class */ (function () {
    function Example3Component(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Example3Component.prototype.dismiss = function () {
        this.navCtrl.dismiss();
    };
    Example3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>One level deeper!</h5><button (click)=\"dismiss()\">Dismiss</button>",
            styles: [".nav-container {\n      padding: 3px 10px;\n      box-shadow: 1px 1px 1px 1px black;\n      height: 300px;\n      width: 300px;\n    }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ui_navigation_navigation_controller_service__WEBPACK_IMPORTED_MODULE_3__["NavigationController"]])
    ], Example3Component);
    return Example3Component;
}());

var Example2Component = /** @class */ (function () {
    function Example2Component(data, navCtrl) {
        this.data = data;
        this.navCtrl = navCtrl;
    }
    Example2Component.prototype.present = function () {
        this.navCtrl.present(Example3Component);
    };
    Example2Component.prototype.dismiss = function () {
        this.navCtrl.dismiss(1234);
    };
    Example2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>{{data.title}}</h5>\n  <button (click)=\"present()\">Present one more view!</button>\n  <button (click)=\"dismiss()\">Dismiss with value 1234</button>",
            styles: [".nav-container {\n      padding: 3px 10px;\n      box-shadow: 1px 1px 1px 1px black;\n      height: 300px;\n      width: 300px;\n    }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationData"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_app_ui_navigation_navigation_controller_service__WEBPACK_IMPORTED_MODULE_3__["NavigationController"]])
    ], Example2Component);
    return Example2Component;
}());

var Example1Component = /** @class */ (function () {
    function Example1Component() {
        this.returnedByExample2 = -1;
    }
    Example1Component.prototype.present = function () {
        var _this = this;
        this.nav.present(Example2Component, { title: 'Example 2 title defined by us!' })
            .then(function (v) { return _this.returnedByExample2 = v; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"])
    ], Example1Component.prototype, "nav", void 0);
    Example1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<p>Add the <code class=\"inline-code\">iw-navigation</code> element into your template.</p>\n  <div class=\"nav-container\">\n    <iw-navigation #nav>\n      <h3>Here is our first view</h3>\n      <button (click)=\"present()\">Present a new view</button>\n    </iw-navigation>\n  </div>",
            styles: [".nav-container {\n      padding: 3px 10px;\n      box-shadow: 1px 1px 1px 1px black;\n      height: 300px;\n      width: 300px;\n    }"]
        })
    ], Example1Component);
    return Example1Component;
}());

var NavigationdDemoComponent = /** @class */ (function () {
    function NavigationdDemoComponent() {
        this.example1Src = example;
        this.example1Comp = Example1Component;
    }
    NavigationdDemoComponent.prototype.ngOnInit = function () {
    };
    NavigationdDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationdDemoComponent);
    return NavigationdDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-navigation-module.js.map