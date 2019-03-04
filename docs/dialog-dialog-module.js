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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example1/dialog-example1.component */ "./src/app/dialog/example1/dialog-example1.component.ts");
/* harmony import */ var _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example2/dialog-example2.component */ "./src/app/dialog/example2/dialog-example2.component.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");










var DialogDemoModule = /** @class */ (function () {
    function DialogDemoModule() {
    }
    DialogDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: '', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"], _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_7__["DialogExample1Component"], _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_8__["DialogExample2Component"]],
            entryComponents: [_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"]]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Dialog'\"\n  [componentId]=\"'DialogDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"From the template\">\n    <app-dialog-example1></app-dialog-example1>\n    <app-tabs>\n      <app-code *appTab=\"'HTML'\" path=\"dialog-example1.component.html\"></app-code>\n    </app-tabs>\n  </ng-template>\n  <ng-template appComponentExample=\"Using the dialog service\">\n    <app-dialog-example2></app-dialog-example2>\n    <app-tabs>\n      <app-code *appTab=\"'TS'\" path=\"dialog-example2.component.ts\"></app-code>\n    </app-tabs>\n  </ng-template>\n</app-component-documentation>\n"

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
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");




var example1 = "<button (click)=\"myDialog1.open()\">Open a dialog</button>\n\n<ng-template iwDialog #myDialog1=\"iw-dialog\" [escToClose]=\"true\" [clickToClose]=\"true\">\n  <h1>Here is my dialog</h1>\n\n  <ul>\n    <li>Press ESC to close it</li>\n    <li>You can also click outside</li>\n    <li>or <a (click)=\"myDialog1.close()\">here</a></li>\n  </ul>\n</ng-template>";
var BASIC_STYLE = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n\n  .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: transform 0.5s;\n    transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px;\n  }\n\n  &.iw-dialog-container--visible {\n    opacity: 1;\n    .dialog-container__content {\n      transform: translateY(0);\n    }\n  }\n}\n";
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
        this.__dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MyDialogComponent"]);
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.sass */ "./src/app/dialog/dialog/dialog.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
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

module.exports = "<h1>Hello Dialog!</h1>\n\n<h2>To close this dialog, inject the DialogService in your component:</h2>\n\n<app-code path=\"my-dialog.component.ts\"></app-code>\n\n<button (click)=\"close()\">\n  Close\n  <ng-template iwTooltip>click to close</ng-template>\n</button>\n"

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



/***/ })

}]);
//# sourceMappingURL=dialog-dialog-module.js.map