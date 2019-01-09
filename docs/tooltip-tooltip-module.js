(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tooltip-tooltip-module"],{

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Tooltip'\"\n  [componentId]=\"'TooltipDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"Simple example\" [source]=\"example1\">\n    <app-tooltip-demo-example1></app-tooltip-demo-example1>\n  </ng-template>\n  <ng-template appComponentExample=\"Horizontal\" [source]=\"example2\">\n    <app-tooltip-demo-example2></app-tooltip-demo-example2>\n  </ng-template>\n  <ng-template appComponentExample=\"Delay\" [source]=\"example3\">\n    <app-tooltip-demo-example3></app-tooltip-demo-example3>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvdG9vbHRpcC90b29sdGlwLWRlbW8vdG9vbHRpcC1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */"

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


var example1 = "<button (click)=\"value = value + 1\">\n  Try me!\n  <ng-template iwTooltip>\n    Click to go from {{value}} to {{value+1}}\n  </ng-template>\n</button>";
var example2 = "<button>\n  Horizontal tooltip\n  <ng-template iwTooltip [horizontal]=\"true\">\n    I show up horizontally!\n  </ng-template>\n</button>";
var example3 = "<button>\n  Some delay ~1s\n  <ng-template iwTooltip [delay]=\"1000\">\n    Yes, you waited but it was worth it!\n  </ng-template>\n</button>";
var Example1TooltipComponent = /** @class */ (function () {
    function Example1TooltipComponent() {
        this.value = 0;
    }
    Example1TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example1',
            template: example1
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
            template: example2
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
            template: example3
        })
    ], Example3TooltipComponent);
    return Example3TooltipComponent;
}());

var TooltipDemoComponent = /** @class */ (function () {
    function TooltipDemoComponent() {
        this.example1 = example1;
        this.example2 = example2;
        this.example3 = example3;
    }
    TooltipDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo',
            template: __webpack_require__(/*! ./tooltip-demo.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-demo.component.scss */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip-demo/tooltip-demo.component */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts");








var TooltipDemoModule = /** @class */ (function () {
    function TooltipDemoModule() {
    }
    TooltipDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__["TooltipDemoComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            declarations: [
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__["TooltipDemoComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__["Example1TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__["Example2TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_7__["Example3TooltipComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], TooltipDemoModule);
    return TooltipDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=tooltip-tooltip-module.js.map