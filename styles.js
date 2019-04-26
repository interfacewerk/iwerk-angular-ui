(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/ng-documentation/ng-documentation.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/postcss-loader/src??embedded!/home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/ng-documentation/ng-documentation.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\n  font-size: 10px; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: 'Lato', sans-serif;\n  line-height: 1.5;\n  font-weight: 400;\n  background: white; }\n\n* {\n  box-sizing: border-box; }\n\na {\n  text-decoration: underline;\n  outline: none; }\n\na:hover {\n    text-decoration: none; }\n\niw-popover-container.demo-popover {\n  padding: 9px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background: transparent;\n  font-size: 1.6rem;\n  border: none; }\n\niw-popover-container.demo-popover.iw-popover-container--visible {\n    opacity: 1; }\n\n.simple-popover {\n  background: lightgray;\n  padding: 7px;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 5px 0 grey; }\n\n.iw-popover-arrow-element {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-top: 1px solid grey;\n  border-right: 1px solid grey; }\n\n.iw-popover-arrow-element.from-the-bottom {\n    -webkit-transform: rotateZ(-45deg) translate(-7px, 0px);\n            transform: rotateZ(-45deg) translate(-7px, 0px);\n    background-color: lightgrey; }\n\n.iw-popover-arrow-element.from-the-top {\n    -webkit-transform: translate(-5px, -15px) rotateZ(135deg);\n            transform: translate(-5px, -15px) rotateZ(135deg);\n    background-color: white;\n    box-shadow: 4px -4px 6px -1px #7b7b7b; }\n\np, ul, ol, th, td {\n  font-size: 1.6rem; }\n\nh1 {\n  font-size: 2rem; }\n\nh2 {\n  font-size: 1.8rem; }\n\nh3 {\n  font-size: 1.7rem; }\n\ncode {\n  display: inline;\n  padding: 0;\n  margin: 0;\n  background: none;\n  color: #51aceb; }\n\npre code {\n  display: block;\n  white-space: pre;\n  padding: 10px;\n  margin: 10px 0;\n  font-size: 1.4rem;\n  background: whitesmoke;\n  color: #7a7272;\n  overflow: auto; }\n\n.iw-state-button {\n  display: inline-block; }\n\n.iw-state-button.sb--doing {\n    background-color: grey;\n    color: white;\n    cursor: wait; }\n\n.iw-state-button.sb--success {\n    background-color: #2ECC40;\n    color: white; }\n\n.iw-state-button.sb--failure {\n    background-color: red;\n    color: white; }\n\n.iw-state-button.sb--doing::before {\n    content: '';\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin: 0px 5px -3px 0px;\n    border-radius: 8px;\n    box-shadow: 0 1px 0 0 white;\n    -webkit-animation: stateful-button--animation 1s linear infinite;\n    animation: stateful-button--animation 1s linear infinite;\n    z-index: 1; }\n\n@-webkit-keyframes stateful-button--animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes stateful-button--animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\niw-dialog-container {\n  background: rgba(192, 192, 192, 0.67); }\n\niw-tooltip-container {\n  font-size: 1.2rem !important; }\n\n.menu-popover .iw-popover-arrow-element {\n  display: none; }\n\ndocs-tabs docs-code {\n  height: 100%; }\n\nbutton, a.button {\n  color: #fff;\n  border: none;\n  border-radius: 20px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0 25px;\n  background-color: #666;\n  box-shadow: 0 2px #404040;\n  cursor: pointer;\n  font-weight: 600;\n  font-family: 'Lato';\n  transition: opacity 0.2s linear;\n  font-size: 1.6rem;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0, 0, 0);\n  text-decoration: none; }\n\nbutton.one, a.button.one {\n    background-color: #28C8FF;\n    box-shadow: 0 2px #00a3db; }\n\nbutton.two, a.button.two {\n    background-color: #28A2FF;\n    box-shadow: 0 2px #007cdb; }\n\nbutton.three, a.button.three {\n    background-color: #FF793F;\n    box-shadow: 0 2px #f24900; }\n\nbutton.four, a.button.four {\n    background-color: #FF4D00;\n    box-shadow: 0 2px #b33600; }\n\nbutton.five, a.button.five {\n    background-color: #EE2200;\n    box-shadow: 0 2px #a21700; }\n\nbutton.outline, a.button.outline {\n    border: none;\n    box-shadow: none;\n    background: none;\n    color: black;\n    height: auto;\n    line-height: auto;\n    padding: 0; }\n\nul.ng-documentation__menu-links {\n  padding: 0;\n  margin: 0; }\n\nul.ng-documentation__menu-links li {\n    list-style: none;\n    width: 100%;\n    padding: 0; }\n\nul.ng-documentation__menu-links li a {\n      display: inline-block;\n      width: 100%;\n      line-height: 20px;\n      text-decoration: none;\n      padding: 10px 15px;\n      color: black;\n      font-size: 1.6rem;\n      transition: all 0.2s; }\n\nul.ng-documentation__menu-links li a:hover {\n        color: #FF793F;\n        background: whitesmoke; }\n\nul.ng-documentation__menu-links li a.active-link {\n        color: #FF4D00;\n        background: whitesmoke; }\n\nul.ng-documentation__menu-links.ng-documentation__menu-extra-links li:first-child {\n    margin-top: 30px;\n    border-top: 1px solid lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZy1kb2N1bWVudGF0aW9uL25nLWRvY3VtZW50YXRpb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFOztBQUV0QjtFQUNFLHVCQUF1QixFQUFFOztBQUUzQjtFQUNFLDJCQUEyQjtFQUMzQixjQUFjLEVBQUU7O0FBQ2hCO0lBQ0Usc0JBQXNCLEVBQUU7O0FBRTVCO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUU7O0FBQ2Y7SUFDRSxXQUFXLEVBQUU7O0FBRWpCO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsK0JBQStCLEVBQUU7O0FBRW5DO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFFOztBQUMvQjtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7SUFDaEQsNEJBQTRCLEVBQUU7O0FBQ2hDO0lBQ0UsMERBQWtEO1lBQWxELGtEQUFrRDtJQUNsRCx3QkFBd0I7SUFDeEIsc0NBQXNDLEVBQUU7O0FBRTVDO0VBQ0Usa0JBQWtCLEVBQUU7O0FBRXRCO0VBQ0UsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUU7O0FBRXRCO0VBQ0Usa0JBQWtCLEVBQUU7O0FBRXRCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZSxFQUFFOztBQUVuQjtFQUNFLHNCQUFzQixFQUFFOztBQUN4QjtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYSxFQUFFOztBQUNqQjtJQUNFLDBCQUEwQjtJQUMxQixhQUFhLEVBQUU7O0FBQ2pCO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWEsRUFBRTs7QUFDakI7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFHNUIsaUVBQWlFO0lBRWpFLHlEQUF5RDtJQUN6RCxXQUFXLEVBQUU7O0FBa0JqQjtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QixFQUFFO0VBQzVCO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQixFQUFFLEVBQUU7O0FBVWxDO0VBQ0U7SUFHRSxnQ0FBZ0M7SUFFaEMsd0JBQXdCLEVBQUU7RUFDNUI7SUFHRSxrQ0FBa0M7SUFFbEMsMEJBQTBCLEVBQUUsRUFBRTs7QUFFbEM7RUFDRSxzQ0FBc0MsRUFBRTs7QUFFMUM7RUFDRSw2QkFBNkIsRUFBRTs7QUFFakM7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0UsYUFBYSxFQUFFOztBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFFcEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxzQkFBc0IsRUFBRTs7QUFDeEI7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCLEVBQUU7O0FBQzlCO0lBQ0UsMEJBQTBCO0lBQzFCLDBCQUEwQixFQUFFOztBQUM5QjtJQUNFLDBCQUEwQjtJQUMxQiwwQkFBMEIsRUFBRTs7QUFDOUI7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCLEVBQUU7O0FBQzlCO0lBQ0UsMEJBQTBCO0lBQzFCLDBCQUEwQixFQUFFOztBQUM5QjtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsVUFBVSxFQUFFOztBQUNaO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXLEVBQUU7O0FBQ2I7TUFDRSxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUU7O0FBQ3ZCO1FBQ0UsZUFBZTtRQUNmLHVCQUF1QixFQUFFOztBQUMzQjtRQUNFLGVBQWU7UUFDZix1QkFBdUIsRUFBRTs7QUFDL0I7SUFDRSxpQkFBaUI7SUFDakIsZ0NBQWdDLEVBQUUiLCJmaWxlIjoibm9kZV9tb2R1bGVzL25nLWRvY3VtZW50YXRpb24vbmctZG9jdW1lbnRhdGlvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgZm9udC1zaXplOiAxMHB4OyB9XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgb3V0bGluZTogbm9uZTsgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuaXctcG9wb3Zlci1jb250YWluZXIuZGVtby1wb3BvdmVyIHtcbiAgcGFkZGluZzogOXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYm9yZGVyOiBub25lOyB9XG4gIGl3LXBvcG92ZXItY29udGFpbmVyLmRlbW8tcG9wb3Zlci5pdy1wb3BvdmVyLWNvbnRhaW5lci0tdmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTsgfVxuXG4uc2ltcGxlLXBvcG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMCBncmV5OyB9XG5cbi5pdy1wb3BvdmVyLWFycm93LWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5OyB9XG4gIC5pdy1wb3BvdmVyLWFycm93LWVsZW1lbnQuZnJvbS10aGUtYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTdweCwgMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IH1cbiAgLml3LXBvcG92ZXItYXJyb3ctZWxlbWVudC5mcm9tLXRoZS10b3Age1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0xNXB4KSByb3RhdGVaKDEzNWRlZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogNHB4IC00cHggNnB4IC0xcHggIzdiN2I3YjsgfVxuXG5wLCB1bCwgb2wsIHRoLCB0ZCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtOyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtOyB9XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cblxuaDMge1xuICBmb250LXNpemU6IDEuN3JlbTsgfVxuXG5jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNTFhY2ViOyB9XG5cbnByZSBjb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICM3YTcyNzI7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5pdy1zdGF0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLml3LXN0YXRlLWJ1dHRvbi5zYi0tZG9pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogd2FpdDsgfVxuICAuaXctc3RhdGUtYnV0dG9uLnNiLS1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzQwO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAuaXctc3RhdGUtYnV0dG9uLnNiLS1mYWlsdXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5pdy1zdGF0ZS1idXR0b24uc2ItLWRvaW5nOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHggNXB4IC0zcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgd2hpdGU7XG4gICAgLW1zLWFuaW1hdGlvbjogc3RhdGVmdWwtYnV0dG9uLS1hbmltYXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBzdGF0ZWZ1bC1idXR0b24tLWFuaW1hdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHN0YXRlZnVsLWJ1dHRvbi0tYW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtby1hbmltYXRpb246IHN0YXRlZnVsLWJ1dHRvbi0tYW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHN0YXRlZnVsLWJ1dHRvbi0tYW5pbWF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAxOyB9XG5cbkAtbW96LWtleWZyYW1lcyBzdGF0ZWZ1bC1idXR0b24tLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQC1tcy1rZXlmcmFtZXMgc3RhdGVmdWwtYnV0dG9uLS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3RhdGVmdWwtYnV0dG9uLS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkAtby1rZXlmcmFtZXMgc3RhdGVmdWwtYnV0dG9uLS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBzdGF0ZWZ1bC1idXR0b24tLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuaXctZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC42Nyk7IH1cblxuaXctdG9vbHRpcC1jb250YWluZXIge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tZW51LXBvcG92ZXIgLml3LXBvcG92ZXItYXJyb3ctZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuZG9jcy10YWJzIGRvY3MtY29kZSB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5idXR0b24sIGEuYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICBib3gtc2hhZG93OiAwIDJweCAjNDA0MDQwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICBidXR0b24ub25lLCBhLmJ1dHRvbi5vbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOEM4RkY7XG4gICAgYm94LXNoYWRvdzogMCAycHggIzAwYTNkYjsgfVxuICBidXR0b24udHdvLCBhLmJ1dHRvbi50d28ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOEEyRkY7XG4gICAgYm94LXNoYWRvdzogMCAycHggIzAwN2NkYjsgfVxuICBidXR0b24udGhyZWUsIGEuYnV0dG9uLnRocmVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTNGO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4ICNmMjQ5MDA7IH1cbiAgYnV0dG9uLmZvdXIsIGEuYnV0dG9uLmZvdXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjREMDA7XG4gICAgYm94LXNoYWRvdzogMCAycHggI2IzMzYwMDsgfVxuICBidXR0b24uZml2ZSwgYS5idXR0b24uZml2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFMjIwMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAjYTIxNzAwOyB9XG4gIGJ1dHRvbi5vdXRsaW5lLCBhLmJ1dHRvbi5vdXRsaW5lIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDsgfVxuXG51bC5uZy1kb2N1bWVudGF0aW9uX19tZW51LWxpbmtzIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG4gIHVsLm5nLWRvY3VtZW50YXRpb25fX21lbnUtbGlua3MgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIHVsLm5nLWRvY3VtZW50YXRpb25fX21lbnUtbGlua3MgbGkgYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAgICAgdWwubmctZG9jdW1lbnRhdGlvbl9fbWVudS1saW5rcyBsaSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNGRjc5M0Y7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7IH1cbiAgICAgIHVsLm5nLWRvY3VtZW50YXRpb25fX21lbnUtbGlua3MgbGkgYS5hY3RpdmUtbGluayB7XG4gICAgICAgIGNvbG9yOiAjRkY0RDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyB9XG4gIHVsLm5nLWRvY3VtZW50YXRpb25fX21lbnUtbGlua3MubmctZG9jdW1lbnRhdGlvbl9fbWVudS1leHRyYS1saW5rcyBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5OyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.sass":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/postcss-loader/src??embedded!/home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.sass ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* These are global styles. */\niw-tree.menu-tree ol, iw-tree.menu-tree li {\n  margin: 0;\n  padding: 0; }\niw-tree.menu-tree li {\n  list-style: none; }\niw-tree.menu-tree a {\n  color: black;\n  line-height: 40px;\n  height: 40px;\n  padding: 0;\n  display: block;\n  text-decoration: none; }\niw-tree.menu-tree a:visited {\n    color: black; }\niw-tree.menu-tree a.active {\n    font-weight: bold; }\niw-tree.menu-tree a:hover, iw-tree.menu-tree a:focus {\n    text-decoration: none;\n    background: lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9pbnRlcmZhY2V3ZXJrL2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZGVtby9zcmMvc3R5bGVzL21lbnUtdHJlZS5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUU5QjtFQUVJLFVBQVM7RUFDVCxXQUFVLEVBQUc7QUFIakI7RUFNSSxpQkFBZ0IsRUFBRztBQU52QjtFQVNJLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFdBQVU7RUFDVixlQUFjO0VBQ2Qsc0JBQXFCLEVBVU87QUF4QmhDO0lBaUJNLGFBQVksRUFBRztBQWpCckI7SUFvQk0sa0JBQWlCLEVBQUc7QUFwQjFCO0lBdUJNLHNCQUFxQjtJQUNyQixzQkFBcUIsRUFBRyIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9zdHlsZXMuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZXNlIGFyZSBnbG9iYWwgc3R5bGVzLiAqL1xuXG5pdy10cmVlLm1lbnUtdHJlZSB7XG4gIG9sLCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7IH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6IGJsYWNrOyB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7IH0gfSB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "../../node_modules/ng-documentation/ng-documentation.css":
/*!************************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/ng-documentation/ng-documentation.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./ng-documentation.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/ng-documentation/ng-documentation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/style-loader/lib/urls.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.sass */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!************************************************************************************************************************************!*\
  !*** multi /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/ng-documentation/ng-documentation.css ./src/styles.sass ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/travis/build/interfacewerk/iwerk-angular-ui/node_modules/ng-documentation/ng-documentation.css */"../../node_modules/ng-documentation/ng-documentation.css");
module.exports = __webpack_require__(/*! /home/travis/build/interfacewerk/iwerk-angular-ui/projects/demo/src/styles.sass */"./src/styles.sass");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map