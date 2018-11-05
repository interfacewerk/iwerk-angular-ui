(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-dialog-module"],{

/***/ "./src/app/dialog/dialog.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.module.ts ***!
  \*****************************************/
/*! exports provided: DialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDemoModule", function() { return DialogDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DialogDemoModule = /** @class */ (function () {
    function DialogDemoModule() {
    }
    DialogDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: '', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_3__["DialogModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MyDialogComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogExample1Component"]],
            entryComponents: [_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MyDialogComponent"]]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Dialog'\"\n  [componentId]=\"'DialogDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"Simple example\" [source]=\"example1\">\n    <app-dialog-example1></app-dialog-example1>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZGlhbG9nL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogExample1Component, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExample1Component", function() { return DialogExample1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var example1 = "<button (click)=\"myDialog1.open()\">Open a dialog</button>\n\n<ng-template iwDialog #myDialog1=\"iw-dialog\" [escToClose]=\"true\" [clickToClose]=\"true\">\n  <h1>Here is my dialog</h1>\n\n  <ul>\n    <li>Press ESC to close it</li>\n    <li>You can also click outside</li>\n    <li>or <a (click)=\"myDialog1.close()\">here</a></li>\n  </ul>\n</ng-template>";
var BASIC_STYLE = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n\n  .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: transform 0.5s;\n    transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px;\n  }\n\n  &.iw-dialog-container--visible {\n    opacity: 1;\n    .dialog-container__content {\n      transform: translateY(0);\n    }\n  }\n}\n";
var DialogExample1Component = /** @class */ (function () {
    function DialogExample1Component() {
    }
    DialogExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-example1',
            template: example1
        })
    ], DialogExample1Component);
    return DialogExample1Component;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
        this.styleCode = BASIC_STYLE;
        this.example1 = example1;
    }
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    DialogComponent.prototype.openDialog = function () {
        this.__dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_1__["MyDialogComponent"]);
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/dialog/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZGlhbG9nL215LWRpYWxvZy9teS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello Dialog!</h1>\n\n<h2>To close this dialog, inject the DialogService in your component:</h2>\n<code>{{tsCode}}</code>\n\n<button (click)=\"close()\">\n  Close\n  <ng-template iwTooltip>click to close</ng-template>\n</button>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialog) {
        this.dialog = dialog;
        this.tsCode = "import { DialogService } from 'iwerk-angular-ui';\n\n@Component(...)\nexport class MyDialogComponent {\n\n  constructor(private dialog: DialogService) { }\n\n  close() {\n    this.dialog.close();\n  }\n}";
    }
    MyDialogComponent.prototype.ngOnInit = function () {
    };
    MyDialogComponent.prototype.close = function () {
        this.dialog.close();
    };
    MyDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/dialog/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.css */ "./src/app/dialog/my-dialog/my-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dialog-dialog-module.js.map