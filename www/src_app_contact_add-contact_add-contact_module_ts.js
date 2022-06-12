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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact-routing.module */ 4825);
/* harmony import */ var _add_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page */ 8687);
/* harmony import */ var _all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-user-list/all-user-list.component */ 6758);








let AddContactPageModule = class AddContactPageModule {
};
AddContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddContactPageRoutingModule
        ],
        declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_1__.AddContactPage, _all_user_list_all_user_list_component__WEBPACK_IMPORTED_MODULE_2__.AllUserListComponent]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact.page.html?ngResource */ 1103);
/* harmony import */ var _add_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page.scss?ngResource */ 9871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/content.service */ 3558);






let AddContactPage = class AddContactPage {
    constructor(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.contacts = [];
        this.profile = [];
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.contentService.getToken().then((token) => {
            this.contentService.getUsers(token).subscribe((users) => {
                this.contacts = users.content;
                this.contentService.getProfile(token).subscribe((profile) => {
                    this.contacts.forEach(element => {
                        if (element.email === profile.content.email) {
                            element.isYou = true;
                        }
                    });
                });
            }, (error) => {
                console.log('error: ', error);
                if (error.status === 401) {
                    this.contentService.deleteToken();
                    this.router.navigate(['/login']);
                }
            });
        });
    }
    backButton() {
        this.router.navigate(['tabs/contact']);
    }
    doRefresh(event) {
        this.getUsers();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
AddContactPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
AddContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-contact',
        template: _add_contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddContactPage);



/***/ }),

/***/ 6758:
/*!******************************************************************!*\
  !*** ./src/app/contact/all-user-list/all-user-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllUserListComponent": () => (/* binding */ AllUserListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _all_user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-user-list.component.html?ngResource */ 5437);
/* harmony import */ var _all_user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-user-list.component.scss?ngResource */ 9279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/content.service */ 3558);






let AllUserListComponent = class AllUserListComponent {
    constructor(router, contentService) {
        this.router = router;
        this.contentService = contentService;
    }
    ngOnInit() { }
    contactClick(email) {
        this.contentService.getToken().then((token) => {
            this.contentService.postContact(token, email).subscribe((contact) => {
                this.router.navigate(['tabs/contact']);
            }, (error) => {
                console.log('error: ', error);
                if (error.status === 401) {
                    this.contentService.deleteToken();
                    this.router.navigate(['/login']);
                }
            });
        });
    }
};
AllUserListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
AllUserListComponent.propDecorators = {
    contacts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
AllUserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-all-user-list',
        template: _all_user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_all_user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllUserListComponent);



/***/ }),

/***/ 9871:
/*!**********************************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udGFjdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9279:
/*!*******************************************************************************!*\
  !*** ./src/app/contact/all-user-list/all-user-list.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1103:
/*!**********************************************************************!*\
  !*** ./src/app/contact/add-contact/add-contact.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Add Contact</ion-title>\n    <ion-button slot=\"start\" size=\"small\" fill=\"clear\" (click)=\"backButton()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Add Contact</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-all-user-list [contacts]=\"contacts\"></app-all-user-list>\n\n  <br>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n";

/***/ }),

/***/ 5437:
/*!*******************************************************************************!*\
  !*** ./src/app/contact/all-user-list/all-user-list.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <span *ngFor=\"let item of contacts\">\n    <ion-item *ngIf=\"item.isYou; else other\">\n      <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n        <img src=\"{{item.avatar}}\">\n      </ion-avatar>\n      <ion-label>\n        <h4>{{item.name}}</h4>\n        <p>{{item.email}}</p>\n      </ion-label>\n      <ion-note slot=\"end\">\n        <ion-text>\n          <small>You</small>\n        </ion-text>\n      </ion-note>\n    </ion-item>\n    <ng-template #other>\n      <ion-item (click)=\"contactClick(item.email)\">\n        <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n          <img src=\"{{item.avatar}}\">\n        </ion-avatar>\n        <ion-label>\n          <h4>{{item.name}}</h4>\n          <p>{{item.email}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          <ion-text color=\"success\">\n            <small>Add</small>\n          </ion-text>\n        </ion-note>\n      </ion-item>\n    </ng-template>\n  </span>\n</ion-list>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contact_add-contact_add-contact_module_ts.js.map