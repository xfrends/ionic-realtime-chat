"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contact_add-contact_add-contact_module_ts"],{

/***/ 4825:
/*!*******************************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPageRoutingModule": () => (/* binding */ AddContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact.page */ 8687);




const routes = [
    {
        path: '',
        component: _add_contact_page__WEBPACK_IMPORTED_MODULE_0__.AddContactPage
    }
];
let AddContactPageRoutingModule = class AddContactPageRoutingModule {
};
AddContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddContactPageRoutingModule);



/***/ }),

/***/ 7167:
/*!***********************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPageModule": () => (/* binding */ AddContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact-routing.module */ 4825);
/* harmony import */ var _add_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page */ 8687);







let AddContactPageModule = class AddContactPageModule {
};
AddContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddContactPageRoutingModule
        ],
        declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_1__.AddContactPage]
    })
], AddContactPageModule);



/***/ }),

/***/ 8687:
/*!*********************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPage": () => (/* binding */ AddContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact.page.html?ngResource */ 1103);
/* harmony import */ var _add_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page.scss?ngResource */ 9871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let AddContactPage = class AddContactPage {
    constructor(router) {
        this.router = router;
        this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    }
    ngOnInit() {
    }
    backButton() {
        this.router.navigate(['tabs/contact']);
    }
    contactClick(item) {
        console.log('click ' + item);
    }
};
AddContactPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AddContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-contact',
        template: _add_contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddContactPage);



/***/ }),

/***/ 9871:
/*!**********************************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udGFjdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1103:
/*!**********************************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Add Contact</ion-title>\n    <ion-button slot=\"start\" size=\"small\" fill=\"clear\" (click)=\"backButton()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Add Contact</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of itemList\" (click)=\"contactClick(item)\">\n      <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada774{{item}}?d=identicon&f=y\">\n      </ion-avatar>\n      <ion-label>User {{item}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <br>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contact_add-contact_add-contact_module_ts.js.map