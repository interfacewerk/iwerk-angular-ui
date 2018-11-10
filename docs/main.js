(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dialog/dialog.module": [
		"./src/app/dialog/dialog.module.ts",
		"default~dialog-dialog-module~ellipsis-ellipsis-module~popover-popover-module~tooltip-tooltip-module",
		"default~dialog-dialog-module~popover-popover-module~tooltip-tooltip-module",
		"dialog-dialog-module"
	],
	"./ellipsis/ellipsis.module": [
		"./src/app/ellipsis/ellipsis.module.ts",
		"default~dialog-dialog-module~ellipsis-ellipsis-module~popover-popover-module~tooltip-tooltip-module",
		"ellipsis-ellipsis-module"
	],
	"./popover/popover.module": [
		"./src/app/popover/popover.module.ts",
		"default~dialog-dialog-module~ellipsis-ellipsis-module~popover-popover-module~tooltip-tooltip-module",
		"default~dialog-dialog-module~popover-popover-module~tooltip-tooltip-module",
		"popover-popover-module"
	],
	"./tooltip/tooltip.module": [
		"./src/app/tooltip/tooltip.module.ts",
		"default~dialog-dialog-module~ellipsis-ellipsis-module~popover-popover-module~tooltip-tooltip-module",
		"default~dialog-dialog-module~popover-popover-module~tooltip-tooltip-module",
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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

module.exports = "<aside>\n  <ul>\n    <li class=\"app__logo\"><a></a></li>\n    <li><a routerLink=\"/\"\n      [routerLinkActiveOptions]=\"{exact: true}\" \n      routerLinkActive=\"active-link\">\n      Get Started\n    </a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/popover\">Popover</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/tooltip\">Tooltip</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/dialog\">Dialog</a></li>\n    <li><a routerLinkActive=\"active-link\" routerLink=\"/ellipsis\">Ellipsis</a></li>\n    <!-- <li><a routerLinkActive=\"active-link\" routerLink=\"/stateful-button\">Stateful Button</a></li> -->\n    <li><a href=\"https://github.com/interfacewerk/iwerk-angular-ui\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n    <li><a href=\"https://interfacewerk.de\">interfacewerk.de</a></li>\n  </ul>\n</aside>\n\n<main>\n  <router-outlet></router-outlet>\n</main>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
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