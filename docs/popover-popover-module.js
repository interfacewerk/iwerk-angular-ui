(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module"],{

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

module.exports = ":host {\n  display: block;\n  max-height: 300px;\n  width: 200px;\n  border: 1px solid grey;\n  border-radius: 3px;\n  box-shadow: 2px 2px 5px 2px #7b7b7b;\n  overflow: hidden; }\n  :host .custom-popover--header {\n    padding: 0 30px 0 5px;\n    border-bottom: 1px solid grey;\n    background-color: lightgrey;\n    position: relative;\n    line-height: 30px;\n    height: 30px; }\n  :host .custom-popover--content {\n    padding: 15px 5px;\n    background: white; }\n  :host .custom-popover--close-button {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    line-height: 30px;\n    text-decoration: none;\n    cursor: pointer; }\n  :host .custom-popover--close-button:hover {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvb3Blbi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL2N1c3RvbS1wb3BvdmVyLWRlbW8vY3VzdG9tLXBvcG92ZXItZGVtby5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsb0NBQW1DO0VBQ25DLGlCQUFnQixFQXVCTztFQTlCeEI7SUFVRyxzQkFBcUI7SUFDckIsOEJBQTZCO0lBQzdCLDRCQUEyQjtJQUMzQixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGFBQVksRUFBRztFQWZsQjtJQWtCRyxrQkFBaUI7SUFDakIsa0JBQWlCLEVBQUc7RUFuQnZCO0lBc0JHLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsT0FBTTtJQUNOLGtCQUFpQjtJQUNqQixzQkFBcUI7SUFDckIsZ0JBQWUsRUFHSTtFQTlCdEI7TUE4QkssYUFBWSxFQUFHIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL2N1c3RvbS1wb3BvdmVyLWRlbW8vY3VzdG9tLXBvcG92ZXItZGVtby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjN2I3YjdiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5jdXN0b20tcG9wb3Zlci0taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7IH1cblxuICAuY3VzdG9tLXBvcG92ZXItLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbiAgLmN1c3RvbS1wb3BvdmVyLS1jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogYmxhY2s7IH0gfSB9XG4iXX0= */"

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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Popover'\"\n  [componentId]=\"'PopoverDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"From the template\">\n    <p>Add a template with the <code class=\"inline-code\">iwPopover</code> directive.</p>\n    <app-popover-example1></app-popover-example1>\n    <app-tabs>\n      <app-code *appTab=\"'HTML'\" path=\"popover-example1.component.html\"></app-code>\n      <app-code *appTab=\"'TS'\" path=\"popover-example1.component.ts\"></app-code>\n    </app-tabs>\n  </ng-template>\n  <ng-template appComponentExample=\"From the service\">\n    <p>\n      You can embed any of your components inside a popover. This can be very helpful to keep your templates light as well as refactoring.\n      To do so, declare the component class you want to embed as an entry component of your module.\n    </p>\n    <app-popover-example2></app-popover-example2>\n    \n    <app-tabs>\n      <app-code *appTab=\"'HTML'\" path=\"popover-example2.component.html\"></app-code>\n      <app-code *appTab=\"'TS'\" path=\"popover-example2.component.ts\"></app-code>\n    </app-tabs>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 300px;\n  border-collapse: collapse; }\n  :host table th, :host table td {\n    text-align: left;\n    width: 50%;\n    padding: 5px 5px 5px 5px; }\n  :host table td {\n    line-height: 20px; }\n  :host table thead {\n    border-bottom: 1px solid lightgrey; }\n  :host .cell-right-icon {\n  position: relative;\n  padding-right: 30px; }\n  :host .cell-right-icon:hover button {\n    opacity: 1; }\n  :host .cell-right-icon button {\n    opacity: 0.2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvb3Blbi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL3BvcG92ZXItZGVtby9wb3BvdmVyLWRlbW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFRyxhQUFZO0VBYVosMEJBQXlCLEVBQUc7RUFmL0I7SUFLSyxpQkFBZ0I7SUFDaEIsV0FBVTtJQUNWLHlCQUF3QixFQUFHO0VBUGhDO0lBVUssa0JBQWlCLEVBQUc7RUFWekI7SUFhSyxtQ0FBa0MsRUFBRztFQWIxQztFQWtCRyxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBT0E7RUExQnRCO0lBdUJPLFdBQVUsRUFBRztFQXZCcEI7SUEwQkssYUFBWSxFQUFHIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL3BvcG92ZXItZGVtby9wb3BvdmVyLWRlbW8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuXG4gICAgdGgsIHRkIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4OyB9XG5cbiAgICB0ZCB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDsgfVxuXG4gICAgdGhlYWQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTsgfVxuXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4gIC5jZWxsLXJpZ2h0LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBvcGFjaXR5OiAxOyB9IH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBvcGFjaXR5OiAwLjI7IH0gfSB9XG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-popover-demo/custom-popover-demo.component */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts");
/* harmony import */ var _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-demo/popover-demo.component */ "./src/app/popover/popover-demo/popover-demo.component.ts");
/* harmony import */ var _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-example1/popover-example1.component */ "./src/app/popover/popover-example1/popover-example1.component.ts");
/* harmony import */ var _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-example2/popover-example2.component */ "./src/app/popover/popover-example2/popover-example2.component.ts");
/* harmony import */ var _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover-example2/property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");












var PopoverDemoModule = /** @class */ (function () {
    function PopoverDemoModule() {
    }
    PopoverDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_8__["PopoverDemoComponent"] }
                ]),
                src_public_api__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            declarations: [
                _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_8__["PopoverDemoComponent"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["CustomPopoverHeaderDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["CustomPopoverContentDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["CustomPopoverDemoComponent"],
                _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_9__["PopoverExample1Component"],
                _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_10__["PopoverExample2Component"],
                _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_11__["PropertyEditPopoverComponent"]
            ],
            entryComponents: [_popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_11__["PropertyEditPopoverComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], PopoverDemoModule);
    return PopoverDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=popover-popover-module.js.map