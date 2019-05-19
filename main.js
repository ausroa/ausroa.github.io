(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");
/* harmony import */ var _views_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/campaign/campaign.component */ "./src/app/views/campaign/campaign.component.ts");
/* harmony import */ var _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/about-page/about-page.component */ "./src/app/views/about-page/about-page.component.ts");
/* harmony import */ var _views_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/shop-page/shop-page.component */ "./src/app/views/shop-page/shop-page.component.ts");
/* harmony import */ var _views_archives_page_archives_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/archives-page/archives-page.component */ "./src/app/views/archives-page/archives-page.component.ts");








var routes = [
    { path: '', component: _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'campaign', component: _views_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampaignComponent"] },
    { path: 'about', component: _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"] },
    { path: 'shop', component: _views_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_6__["ShopPageComponent"] },
    { path: 'shop/pack-ballistic', component: _views_archives_page_archives_page_component__WEBPACK_IMPORTED_MODULE_7__["ArchivesPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n<footer></footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _views_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/campaign/campaign.component */ "./src/app/views/campaign/campaign.component.ts");
/* harmony import */ var _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/about-page/about-page.component */ "./src/app/views/about-page/about-page.component.ts");
/* harmony import */ var _views_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/shop-page/shop-page.component */ "./src/app/views/shop-page/shop-page.component.ts");
/* harmony import */ var _components_mag_flip_book_mag_flip_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mag-flip-book/mag-flip-book.component */ "./src/app/components/mag-flip-book/mag-flip-book.component.ts");
/* harmony import */ var _views_archives_page_archives_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/archives-page/archives-page.component */ "./src/app/views/archives-page/archives-page.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"],
                _views_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_12__["CampaignComponent"],
                _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__["AboutPageComponent"],
                _views_shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_14__["ShopPageComponent"],
                _components_mag_flip_book_mag_flip_book_component__WEBPACK_IMPORTED_MODULE_15__["MagFlipBookComponent"],
                _views_archives_page_archives_page_component__WEBPACK_IMPORTED_MODULE_16__["ArchivesPageComponent"],
            ],
            entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataExampleDialog"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_5__["SlideshowModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <span>{{footerText}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: black;\n  margin: 0;\n  padding: 0;\n  color: white;\n  font-family: 'Nanum Gothic Coding', monospace; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXEFuZ3VsYXJcXGZhc2hpb25cXGRpc3QvLi5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWiw2Q0FBNkMsRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYyBDb2RpbmcnLCBtb25vc3BhY2U7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footerText = 'Sfr1 Int Co.';
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mag-flip-book/mag-flip-book.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mag-flip-book/mag-flip-book.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"flip-book-container\" src=\"assets/pictures/mag_final_pages-compressed.pdf\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mag-flip-book/mag-flip-book.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mag-flip-book/mag-flip-book.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%; }\n  .container div {\n    width: 100%;\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9tYWctZmxpcC1ib29rL0Q6XFxBbmd1bGFyXFxmYXNoaW9uXFxkaXN0Ly4uXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcbWFnLWZsaXAtYm9va1xcbWFnLWZsaXAtYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUksV0FBVztJQUNYLFlBQVksRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFnLWZsaXAtYm9vay9tYWctZmxpcC1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/mag-flip-book/mag-flip-book.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mag-flip-book/mag-flip-book.component.ts ***!
  \*********************************************************************/
/*! exports provided: MagFlipBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagFlipBookComponent", function() { return MagFlipBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MagFlipBookComponent = /** @class */ (function () {
    function MagFlipBookComponent() {
    }
    MagFlipBookComponent.prototype.ngOnInit = function () {
    };
    MagFlipBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mag-flip-book',
            template: __webpack_require__(/*! ./mag-flip-book.component.html */ "./src/app/components/mag-flip-book/mag-flip-book.component.html"),
            styles: [__webpack_require__(/*! ./mag-flip-book.component.scss */ "./src/app/components/mag-flip-book/mag-flip-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MagFlipBookComponent);
    return MagFlipBookComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/dialog-data-example-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/components/modal/dialog-data-example-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1 mat-dialog-title>Favorite Animal</h1>-->\r\n<!--<div mat-dialog-content>-->\r\n  <!--My favorite animal is:-->\r\n  <!--<ul>-->\r\n    <!--<li>-->\r\n      <!--<span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda-->\r\n    <!--</li>-->\r\n    <!--<li>-->\r\n      <!--<span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn-->\r\n    <!--</li>-->\r\n    <!--<li>-->\r\n      <!--<span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion-->\r\n    <!--</li>-->\r\n  <!--</ul>-->\r\n<!--</div>-->\r\n<iframe  width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/kOHB85vDuow?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button mat-button (click)=\"openDialog()\">Open dialog</button>-->\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cdk-overly-0 {\n  position: relative;\n  top: -200px;\n  border: 1px solid black;\n  width: 50%;\n  background-color: blue;\n  left: 550px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9EOlxcQW5ndWxhclxcZmFzaGlvblxcZGlzdC8uLlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBIiwiZmlsZSI6Ii4uL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjZGstb3Zlcmx5LTAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgbGVmdDogNTUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialog) {
        this.dialog = dialog;
    }
    ModalComponent.prototype.openDialog = function () {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ModalComponent);
    return ModalComponent;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example-dialog.html */ "./src/app/components/modal/dialog-data-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <!--<span style=\"width: 10px; margin-left: 10px; color: black; font-size: 40px;\"></span>-->\n  <a routerLink=\"/\" id=\"logo\">\n    <img src=\"assets/pictures/logo_web-01.png\" alt=\"\" width=\"100px\" height=\"100px\">\n  </a>\n  <div class=\"navbarLinks\">\n    <a routerLink=\"{{link.router}}\" *ngFor=\"let link of links; index as i\">{{link.name}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding\");\n.navbar {\n  background-color: white;\n  height: 68px;\n  padding: 0;\n  margin: 0;\n  font-family: 'Nanum Gothic Coding', monospace;\n  font-weight: bold; }\n.navbar #logo {\n    padding-left: 200px; }\n.navbarLinks {\n  position: relative; }\n.navbarLinks a {\n  margin-right: 55px;\n  color: black;\n  text-transform: uppercase;\n  font-size: 15px; }\n.navbarLinks a:last-child {\n  padding-right: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRDpcXEFuZ3VsYXJcXGZhc2hpb25cXGRpc3QvLi5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBWTtBQUVaO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULDZDQUE2QztFQUM3QyxpQkFBaUIsRUFBQTtBQU5uQjtJQVNJLG1CQUFtQixFQUFBO0FBSXZCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFFSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7QUFMbkI7RUFTSSxvQkFBb0IsRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmFudW0rR290aGljK0NvZGluZycpO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljIENvZGluZycsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgI2xvZ28ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXJMaW5rcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2YmFyTGlua3Mge1xyXG4gIGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = 'Sfr1';
        this.links = [
            { name: 'shop', router: 'shop' },
            { name: 'look', router: 'campaign' },
            { name: 'product', router: 'product' },
            { name: 'about', router: 'about' },
            { name: 'contact', router: 'campaign' }
        ];
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            {
                name: 'duffel',
                img: 'assets/pictures/shop_duffel.jpg',
                price: '0.00',
                displayImgs: {}
            },
            {
                name: 'lawson',
                img: 'assets/pictures/shop_lawson.jpg',
                price: '0.00',
                displayImgs: {}
            },
            {
                name: 'original pack ballistic',
                img: 'assets/pictures/shop_pack.jpg',
                price: '0.00',
                displayImgs: {
                    img1: 'assets/pictures/pack_crop_1.jpg',
                    img2: 'assets/pictures/pack_crop_2.jpg',
                    img3: 'assets/pictures/pack_crop_3.jpg',
                    img4: 'assets/pictures/pack_crop_4.jpg',
                    img5: 'assets/pictures/pack_devin_1.jpg'
                }
            },
            {
                name: 'passport',
                img: 'assets/pictures/shop_passport.jpg',
                price: '0.00',
                displayImgs: {}
            },
            {
                name: 'original pack ballistic',
                img: 'assets/pictures/shop_pack.jpg',
                price: '0.00',
                displayImgs: {
                    img1: 'assets/pictures/pack_crop_1.jpg',
                    img2: 'assets/pictures/pack_crop_2.jpg',
                    img3: 'assets/pictures/pack_crop_3.jpg',
                    img4: 'assets/pictures/pack_crop_4.jpg',
                    img5: 'assets/pictures/pack_devin_1.jpg'
                }
            },
            {
                name: 'passport',
                img: 'assets/pictures/shop_passport.jpg',
                price: '0.00',
                displayImgs: {}
            }
        ];
    }
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/views/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\" @fadeIn>\n  <div class=\"sign-up-container\">\n    <input type=\"text\" class=\"sign-up\">\n    <button>Sign Up</button>\n  </div>\n  <div class=\"summary-container\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis delectus deserunt dignissimos eligendi eos harum illo, impedit, obcaecati odio perspiciatis quos tempore, vitae. Accusamus aliquam architecto at beatae culpa dolorum eum illum, natus nemo omnis placeat praesentium ratione voluptatem.</p>\n  </div>\n  <div class=\"flipBook-container\">\n    <app-mag-flip-book></app-mag-flip-book>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/about-page/about-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-container {\n  text-align: center;\n  position: relative;\n  top: 200px; }\n  .sign-up-container input {\n    font-size: 20px;\n    margin: 0;\n    padding: 0;\n    height: 26px;\n    position: relative; }\n  .summary-container {\n  position: relative;\n  top: 300px;\n  text-align: center;\n  margin: auto auto;\n  width: 70%; }\n  .flipBook-container {\n  height: 50%;\n  width: 100%;\n  position: relative;\n  top: 300px; }\n  .full-page {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvdmlld3MvYWJvdXQtcGFnZS9EOlxcQW5ndWxhclxcZmFzaGlvblxcZGlzdC8uLlxcc3JjXFxhcHBcXHZpZXdzXFxhYm91dC1wYWdlXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFIWjtJQU1JLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7RUFHWjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUdaO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL3ZpZXdzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwMHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmZsaXBCb29rLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMzAwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(router) {
        this.router = router;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent.prototype.ngOnDestroy = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/views/about-page/about-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/views/about-page/about-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/views/archives-page/archives-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/archives-page/archives-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"archive-container\" @fadeIn>\n  <div class=\"product-image-container\">\n    <img src=\"{{product.displayImgs.img5}}\" alt=\"\">\n  </div>\n  <div id=\"product-description\">\n    <span>Original Pack - Ballistic<br>\n          000<br>\n          The original sfr1 pack, developed for use in urban and remote exploration. A daily-\n          commuter made from a waterproof balistic shell and ripstop lining; trimmed with\n          recycled leather, and metal harware; zipped pockets and magnetic closure.<br>\n          <br>\n          Made to order and hand numbered.<br>\n          <br>\n          - 100% Waterproof<br>\n          - Magnetic and drawstring closure<br>\n          - Padded Base, laptop pocket and straps<br>\n          <br>\n          Shown:<br>\n          Ballistic black / matte back leather / ripstop grey lining / nickel hardware<br>\n          <br>\n          One Size: 80cm x 45cm x 25cm<br>\n          <br>\n          <button class=\"btn\">Contact to Order</button>\n    </span>\n  </div>\n  <div class=\"product-image-container\">\n    <img src=\"{{product.displayImgs.img2}}\" alt=\"\">\n  </div>\n  <div class=\"product-image-container\">\n    <img src=\"{{product.displayImgs.img3}}\" alt=\"\">\n  </div>\n  <div class=\"product-image-container\">\n    <img src=\"{{product.displayImgs.img4}}\" alt=\"\">\n  </div>\n  <div id=\"devin-pack-img\" class=\"product-image-container\">\n    <img src=\"{{product.displayImgs.img1}}\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/archives-page/archives-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/archives-page/archives-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".archive-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding-left: 195px;\n  padding-right: 195px; }\n  .archive-container .product-image-container {\n    width: 50%;\n    height: 100%;\n    display: inline-block;\n    padding: 10px; }\n  .archive-container #product-description {\n    width: 50%;\n    display: inline-block;\n    position: relative;\n    left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvdmlld3MvYXJjaGl2ZXMtcGFnZS9EOlxcQW5ndWxhclxcZmFzaGlvblxcZGlzdC8uLlxcc3JjXFxhcHBcXHZpZXdzXFxhcmNoaXZlcy1wYWdlXFxhcmNoaXZlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBO0VBTHRCO0lBUUksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYSxFQUFBO0VBWGpCO0lBZUksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBIiwiZmlsZSI6Ii4uL3NyYy9hcHAvdmlld3MvYXJjaGl2ZXMtcGFnZS9hcmNoaXZlcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFyY2hpdmUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmctbGVmdDogMTk1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTk1cHg7XHJcblxyXG4gIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gICNwcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/archives-page/archives-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/archives-page/archives-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ArchivesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivesPageComponent", function() { return ArchivesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ArchivesPageComponent = /** @class */ (function () {
    function ArchivesPageComponent(productService) {
        this.productService = productService;
    }
    ArchivesPageComponent.prototype.ngOnInit = function () {
        this.product = this.products.find(function (p) { return p.name === 'original pack ballistic'; });
    };
    Object.defineProperty(ArchivesPageComponent.prototype, "products", {
        get: function () {
            return this.productService.products;
        },
        enumerable: true,
        configurable: true
    });
    ArchivesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archives-page',
            template: __webpack_require__(/*! ./archives-page.component.html */ "./src/app/views/archives-page/archives-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, height: '100%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./archives-page.component.scss */ "./src/app/views/archives-page/archives-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ArchivesPageComponent);
    return ArchivesPageComponent;
}());



/***/ }),

/***/ "./src/app/views/campaign/campaign.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/campaign/campaign.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/views/campaign/campaign.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/campaign/campaign.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3ZpZXdzL2NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/campaign/campaign.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/campaign/campaign.component.ts ***!
  \******************************************************/
/*! exports provided: CampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CampaignComponent = /** @class */ (function () {
    function CampaignComponent() {
    }
    CampaignComponent.prototype.ngOnInit = function () {
    };
    CampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campaign',
            template: __webpack_require__(/*! ./campaign.component.html */ "./src/app/views/campaign/campaign.component.html"),
            styles: [__webpack_require__(/*! ./campaign.component.scss */ "./src/app/views/campaign/campaign.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CampaignComponent);
    return CampaignComponent;
}());



/***/ }),

/***/ "./src/app/views/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<audio  src=\"assets/pictures/01_FANCY.mp3\" autoplay=\"true\"></audio>-->\n<!--<div @fadeIn class=\"slideShowContainer\">-->\n  <!--<slideshow [imageUrls]=\"tilesUrls\"-->\n             <!--[height]=\"'100%'\"-->\n             <!--[backgroundSize]=\"'contain'\"></slideshow>-->\n<!--</div>-->\n\n<!--<div style=\"position: absolute; top: 160px; width: 100%\">-->\n  <!--<div style=\"position: absolute; top: 545px; font-weight: bold; color: white; left: 235px; font-size: 25px\">-->\n    <!--<div style=\"position: relative; top: 10px; \">POISE</div><br>-->\n    <!--<div>Autumn/Winter 2019</div>-->\n  <!--</div>-->\n  <!--<button class=\"btn\" style=\"position: absolute; top: 621px; left: 235px; font-weight: bold; border: none;\" (click)=\"onSelect()\">Explore</button>-->\n\n<!--</div>-->\n<div class=\"row2\" @fadeIn>\n    <a href=\"\">\n      <div class=\"row1Content\" style=\"background-image: url('assets/pictures/banner1.jpg')\"></div>\n    </a>\n    <div class=\"button-container\">\n          <div>\n            <span>POISE</span><br><br>\n            <span>Autumn/Winter 2019</span>\n          </div>\n          <button class=\"btn\" (click)=\"onSelect()\">Explore</button>\n        </div>\n      <div class=\"row2\" @fadeIn>\n        <a routerLink=\"shop\">\n          <div class=\"row2Content\" style=\"background-image: url('assets/pictures/banner2_lawson.jpg')\"></div>\n        </a>\n        <div class=\"button-container\">\n          <div>\n            <span>POISE</span><br><br>\n            <span>Autumn/Winter 2019</span>\n          </div>\n          <button class=\"btn\" (click)=\"onSelect()\">Shop</button>\n      </div>\n      <div class=\"row3\" @fadeIn>\n        <a href=\"\">\n          <div class=\"row3Content\" style=\"background-image: url('assets/pictures/banner3_navy.jpg');\"></div>\n        </a>\n        <div class=\"button-container\">\n          <div>\n            <span>POISE</span><br><br>\n            <span>Autumn/Winter 2019</span>\n          </div>\n          <button class=\"btn\" (click)=\"onSelect()\">Explore</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slideShowContainer {\n  width: 100%;\n  height: 136%; }\n\n.row1Content {\n  height: 1269px;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%; }\n\n.row2 {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  vertical-align: top; }\n\n.row2Content {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 1080px;\n  width: 100%; }\n\n.row3 {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  vertical-align: top; }\n\n.row3 .row3Content {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    height: 1080px;\n    width: 100%; }\n\n.button-container {\n  position: absolute;\n  top: 160px;\n  width: 100%; }\n\n.button-container div {\n    position: absolute;\n    top: 545px;\n    font-weight: bold;\n    color: white;\n    left: 235px;\n    font-size: 25px; }\n\n.button-container div div {\n      position: relative;\n      top: 10px; }\n\n.button-container button {\n    position: absolute;\n    top: 621px;\n    left: 235px;\n    font-weight: bold;\n    border: none; }\n\n.tileHeightAdjustment {\n  top: -788px; }\n\n@supports (-webkit-overflow-scrolling: touch) {\n  .slideShowContainer {\n    width: 100%;\n    height: 200px; }\n  .row1Content {\n    width: 100%;\n    height: 200px; }\n  .row2 .row2Content {\n    width: 100%;\n    height: 300px; }\n  .row3 .row3Content {\n    width: 100%;\n    height: 300px; }\n  .buttonStyle {\n    padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvdmlld3MvaG9tZXBhZ2UvRDpcXEFuZ3VsYXJcXGZhc2hpb25cXGRpc3QvLi5cXHNyY1xcYXBwXFx2aWV3c1xcaG9tZXBhZ2VcXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHbkI7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFJZjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUhiO0lBTUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlLEVBQUE7O0FBWG5CO01BY00sa0JBQWtCO01BQ2xCLFNBQVMsRUFBQTs7QUFmZjtJQW9CSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWSxFQUFBOztBQUloQjtFQUNFLFdBQVcsRUFBQTs7QUFHZ0M7RUFDM0M7SUFDRSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBR2Y7SUFDRSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBR2Y7SUFFSSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBSWpCO0lBRUksV0FBVztJQUNYLGFBQWEsRUFBQTtFQUlqQjtJQUNFLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6Ii4uL3NyYy9hcHAvdmlld3MvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVTaG93Q29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTM2JTtcclxufVxyXG5cclxuLnJvdzFDb250ZW50IHtcclxuICBoZWlnaHQ6IDEyNjlweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcblxyXG4gIC5yb3cyQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5yb3czIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gIC5yb3czQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1NDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGVmdDogMjM1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MjFweDtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udGlsZUhlaWdodEFkanVzdG1lbnQge1xyXG4gIHRvcDogLTc4OHB4O1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCkge1xyXG4gIC5zbGlkZVNob3dDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAucm93MUNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJvdzIge1xyXG4gICAgLnJvdzJDb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93MyB7XHJcbiAgICAucm93M0NvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b25TdHlsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.tilesUrls = [
            'assets/pictures/banner1.jpg'
            // 'assets/pictures/3_side_lawson.JPG',
            // 'assets/pictures/5_lawson_detail.JPG',
            // 'assets/pictures/5_lawson_model1.JPG',
            // 'assets/pictures/6_lawson_model2.JPG',
            // 'assets/pictures/7_lawson_charlotte.JPG',
            // 'assets/pictures/pack_devin_1.jpg'
        ];
        this.tiles = [
            'assets/pictures/backpack_4.jpg',
            'assets/pictures/pack_devin_1.jpg',
            'assets/pictures/EDC.png'
        ];
        this.soloTile = [
            2
        ];
        this.row2ContentImg = 'assets/pictures/pack_devin_1.jpg';
        this.autoPlay = false;
    };
    HomepageComponent.prototype.onSelect = function () {
        this.router.navigate(['shop']);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/views/homepage/homepage.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/views/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/views/shop-page/shop-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/shop-page/shop-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-container\" @fadeIn>\n  <div class=\"product-container\">\n    <div class=\"product\" *ngFor=\"let product of products; index as i\">\n      <img src=\"{{product.img}}\" alt=\"\" (click)=\"testRun(product)\">\n      <span>{{product.name}}</span>\n      <!--<span id=\"price\">{{product.price | currency}}</span>-->\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/shop-page/shop-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/shop-page/shop-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  height: 140%;\n  width: 100%; }\n\n.product-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  padding: 0 200px 0 200px; }\n\n.product-container div {\n    width: 33%;\n    height: 50%;\n    border-radius: 10px;\n    transition: all 1s ease-in-out; }\n\n.product-container div span {\n      padding-left: 10px;\n      text-transform: capitalize; }\n\n.product-container div #price {\n      padding-right: 10px;\n      float: right; }\n\n.product-container div:hover {\n    z-index: 1;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvdmlld3Mvc2hvcC1wYWdlL0Q6XFxBbmd1bGFyXFxmYXNoaW9uXFxkaXN0Ly4uXFxzcmNcXGFwcFxcdmlld3NcXHNob3AtcGFnZVxcc2hvcC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix3QkFBd0IsRUFBQTs7QUFMMUI7SUFRSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUFYbEM7TUFjTSxrQkFBa0I7TUFDbEIsMEJBQTBCLEVBQUE7O0FBZmhDO01BbUJNLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7O0FBcEJsQjtJQXdCSSxVQUFVO0lBQ1YsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFBIiwiZmlsZSI6Ii4uL3NyYy9hcHAvdmlld3Mvc2hvcC1wYWdlL3Nob3AtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTQwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDAgMjAwcHggMCAyMDBweDtcclxuXHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ByaWNlIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXY6aG92ZXIge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/shop-page/shop-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/shop-page/shop-page.component.ts ***!
  \********************************************************/
/*! exports provided: ShopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageComponent", function() { return ShopPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShopPageComponent = /** @class */ (function () {
    function ShopPageComponent(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ShopPageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ShopPageComponent.prototype, "products", {
        get: function () {
            return this.productService.products;
        },
        enumerable: true,
        configurable: true
    });
    ShopPageComponent.prototype.testRun = function (product) {
        switch (product.name) {
            case 'original pack ballistic':
                this.router.navigate(['pack-ballistic'], { relativeTo: this.route });
                break;
        }
    };
    ShopPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-page',
            template: __webpack_require__(/*! ./shop-page.component.html */ "./src/app/views/shop-page/shop-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./shop-page.component.scss */ "./src/app/views/shop-page/shop-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ShopPageComponent);
    return ShopPageComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\Angular\fashion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map