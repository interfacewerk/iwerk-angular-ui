(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module"],{

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-popover--header\">\n  <div class=\"custom-popover--header-content\">\n    <ng-content select=\"[appCustomPopoverHeader]\"></ng-content>\n  </div>\n  <a class=\"custom-popover--close-button\" (click)=\"_close()\"><fa-icon [icon]=\"faTimes\"></fa-icon></a>\n</div>\n\n<div class=\"custom-popover--content\">\n  <ng-content select=\"[appCustomPopoverContent]\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-height: 300px;\n  width: 200px;\n  border: 1px solid grey;\n  border-radius: 3px;\n  box-shadow: 2px 2px 5px 2px #7b7b7b;\n  overflow: hidden; }\n  :host .custom-popover--header {\n    padding: 0 30px 0 5px;\n    border-bottom: 1px solid grey;\n    background-color: lightgrey;\n    position: relative;\n    line-height: 30px;\n    height: 30px; }\n  :host .custom-popover--content {\n    padding: 15px 5px;\n    background: white; }\n  :host .custom-popover--close-button {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    line-height: 30px;\n    text-decoration: none;\n    cursor: pointer; }\n  :host .custom-popover--close-button:hover {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvb3Blbi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL2N1c3RvbS1wb3BvdmVyLWRlbW8vY3VzdG9tLXBvcG92ZXItZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsb0NBQW1DO0VBQ25DLGlCQUFnQixFQTRCakI7RUFuQ0Q7SUFVSSxzQkFBcUI7SUFDckIsOEJBQTZCO0lBQzdCLDRCQUEyQjtJQUMzQixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGFBQVksRUFDYjtFQWhCSDtJQW1CSSxrQkFBaUI7SUFDakIsa0JBQWlCLEVBQ2xCO0VBckJIO0lBd0JJLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsT0FBTTtJQUNOLGtCQUFpQjtJQUNqQixzQkFBcUI7SUFDckIsZ0JBQWUsRUFLaEI7RUFsQ0g7TUFnQ00sYUFBWSxFQUNiIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL2N1c3RvbS1wb3BvdmVyLWRlbW8vY3VzdG9tLXBvcG92ZXItZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM3YjdiN2I7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmN1c3RvbS1wb3BvdmVyLS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMzBweCAwIDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5jdXN0b20tcG9wb3Zlci0tY29udGVudCB7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuY3VzdG9tLXBvcG92ZXItLWNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbn0iXX0= */"

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
            styles: [__webpack_require__(/*! ./custom-popover-demo.component.scss */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.scss")]
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

module.exports = "<app-component-documentation\n  [componentTitle]=\"'Popover'\"\n  [componentId]=\"'PopoverDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template appComponentExample=\"From the template\" [source]=\"popoverExample1\">\n    <app-popover-example1></app-popover-example1>\n  </ng-template>\n  <ng-template appComponentExample=\"From the service\" [source]=\"popoverExample2\">\n    <app-popover-example2></app-popover-example2>\n  </ng-template>\n</app-component-documentation>\n"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 300px;\n  border-collapse: collapse; }\n  :host table th, :host table td {\n    text-align: left;\n    width: 50%;\n    padding: 5px 5px 5px 5px; }\n  :host table td {\n    line-height: 20px; }\n  :host table thead {\n    border-bottom: 1px solid lightgrey; }\n  :host .cell-right-icon {\n  position: relative;\n  padding-right: 30px; }\n  :host .cell-right-icon:hover button {\n    opacity: 1; }\n  :host .cell-right-icon button {\n    opacity: 0.2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvb3Blbi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9wb3BvdmVyL3BvcG92ZXItZGVtby9wb3BvdmVyLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFZO0VBZ0JaLDBCQUF5QixFQUMxQjtFQW5CSDtJQUtNLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YseUJBQXdCLEVBQ3pCO0VBUkw7SUFXTSxrQkFBaUIsRUFDbEI7RUFaTDtJQWVNLG1DQUFrQyxFQUNuQztFQWhCTDtFQXNCSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBV3BCO0VBbENIO0lBMkJRLFdBQVUsRUFDWDtFQTVCUDtJQWdDTSxhQUFZLEVBQ2IiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci1kZW1vL3BvcG92ZXItZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIHRoLCB0ZCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIH1cblxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgXG4gIC5jZWxsLXJpZ2h0LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover-example1/popover-example1.component */ "./src/app/popover/popover-example1/popover-example1.component.ts");
/* harmony import */ var _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-example2/popover-example2.component */ "./src/app/popover/popover-example2/popover-example2.component.ts");




var PopoverDemoComponent = /** @class */ (function () {
    function PopoverDemoComponent() {
        this.persons = [];
        this.firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
        this.lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
        this.popoverExample1 = _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_2__["popoverExample1"];
        this.popoverExample2 = _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_3__["popoverExample2"];
        for (var i = 0; i < 10; i++) {
            this.persons.push({
                first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
                last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
            });
        }
    }
    PopoverDemoComponent.prototype.ngOnInit = function () {
    };
    PopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-demo',
            template: __webpack_require__(/*! ./popover-demo.component.html */ "./src/app/popover/popover-demo/popover-demo.component.html"),
            styles: [__webpack_require__(/*! ./popover-demo.component.scss */ "./src/app/popover/popover-demo/popover-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverDemoComponent);
    return PopoverDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-example1/popover-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example1/popover-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: popoverExample1, PopoverExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popoverExample1", function() { return popoverExample1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample1Component", function() { return PopoverExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var popoverExample1 = "<button (click)=\"isOpen = true\">\n  Click to open!\n  <ng-template iwPopover\n    popoverClass=\"demo-popover\"\n    [isOpen]=\"isOpen\"\n    (shouldClose)=\"isOpen = false\">\n\n    <div class=\"simple-popover\">\n      Helloooo\n    </div>\n\n  </ng-template>\n</button>";
var PopoverExample1Component = /** @class */ (function () {
    function PopoverExample1Component() {
        this.isOpen = false;
    }
    PopoverExample1Component.prototype.ngOnInit = function () {
    };
    PopoverExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-example1',
            template: "<p>Add a template with the <code class=\"inline-code\">iwPopover</code> directive.</p> " + popoverExample1
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverExample1Component);
    return PopoverExample1Component;
}());



/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLWV4YW1wbGUyL3BvcG92ZXItZXhhbXBsZTIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can embed any of your components inside a popover. This can be very helpful to keep your templates light as well as refactoring.\n  To do so, declare the component class you want to embed as an entry component of your module.\n</p>\n\n<table>\n  <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"persons\" let-person [ngForTrackBy]=\"trackBy\">\n      <tr>\n        <td class=\"cell-right-icon\">\n          {{person.first}}\n          <button (click)=\"openEditFirstNamePopover(person, $event)\">&#x270E;</button>\n        </td>\n        <td class=\"cell-right-icon\">\n          {{person.last}}\n          <button (click)=\"openEditLastNamePopover(person, $event)\">&#x270E;</button>          \n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.ts ***!
  \************************************************************************/
/*! exports provided: popoverExample2, PopoverExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popoverExample2", function() { return popoverExample2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample2Component", function() { return PopoverExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");




var popoverExample2 = "import { PopoverService } from 'iwerk-angular-ui';\n\nconstructor(private popoverService: PopoverService) {\n  \u2026\n}\n\nopenPopover() {\n  this.popoverService.open(MyComponent, \u2026)\n}\n";
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
    PopoverExample2Component.prototype.trackBy = function (index) {
        return index;
    };
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
            template: __webpack_require__(/*! ./popover-example2.component.html */ "./src/app/popover/popover-example2/popover-example2.component.html"),
            styles: [__webpack_require__(/*! ./popover-example2.component.css */ "./src/app/popover/popover-example2/popover-example2.component.css")]
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

/***/ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLWV4YW1wbGUyL3Byb3BlcnR5LWVkaXQtcG9wb3Zlci9wcm9wZXJ0eS1lZGl0LXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */"

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
    PropertyEditPopoverComponent.prototype.ngOnInit = function () {
    };
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
            template: __webpack_require__(/*! ./property-edit-popover.component.html */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html"),
            styles: [__webpack_require__(/*! ./property-edit-popover.component.scss */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.scss")]
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