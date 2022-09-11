"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_manage_user_user_module_ts"],{

/***/ 4274:
/*!****************************************************!*\
  !*** ./src/app/manage/user/user-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 6731);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 9587:
/*!********************************************!*\
  !*** ./src/app/manage/user/user.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 4274);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 6731);







let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage]
    })
], UserPageModule);



/***/ }),

/***/ 6731:
/*!******************************************!*\
  !*** ./src/app/manage/user/user.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 9865);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 4685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/content.service */ 3558);






let UserPage = class UserPage {
    constructor(router, contentService) {
        this.router = router;
        this.contentService = contentService;
        this.users = [];
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.contentService.getToken().then((token) => {
            this.contentService.getUsers(token).subscribe((users) => {
                this.users = users.content;
                this.contentService.getProfile(token).subscribe((profile) => {
                    this.users.forEach(element => {
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
    saveName(event, item) {
        this.contentService.getToken().then((token) => {
            this.contentService.manageUser(token, item.id, { name: item.name }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    saveEmail(event, item) {
        this.contentService.getToken().then((token) => {
            this.contentService.manageUser(token, item.id, { email: item.email }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    saveRole(event, item) {
        this.contentService.getToken().then((token) => {
            this.contentService.manageUser(token, item.id, { role_id: event.detail.value }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    backButton() {
        this.router.navigate(['tabs/setting']);
    }
    doRefresh(event) {
        this.getUsers();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user',
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 4685:
/*!*******************************************************!*\
  !*** ./src/app/manage/user/user.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9865:
/*!*******************************************************!*\
  !*** ./src/app/manage/user/user.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Manage Users</ion-title>\n    <ion-button slot=\"start\" size=\"small\" fill=\"clear\" (click)=\"backButton()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Manage Users</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <span *ngFor=\"let item of users\">\n      <ion-item *ngIf=\"item.isYou; else other\">\n        <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n          <img src=\"{{item.avatar}}\">\n        </ion-avatar>\n        <ion-label>\n          <h4>{{item.name}}</h4>\n          <p>{{item.email}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          <ion-text>\n            <small>{{item.role.name}} (You)</small>\n          </ion-text>\n        </ion-note>\n      </ion-item>\n      <ng-template #other>\n        <ion-item  id=\"{{item.id}}\">\n          <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n            <img src=\"{{item.avatar}}\">\n          </ion-avatar>\n          <ion-label>\n            <h4>{{item.name}}</h4>\n            <p>{{item.email}}</p>\n          </ion-label>\n          <ion-note slot=\"end\">\n            <ion-text>\n              <small>{{item.role.name}}</small>\n            </ion-text>\n          </ion-note>\n        </ion-item>\n        <ion-modal\n          trigger=\"{{item.id}}\"\n          [breakpoints]=\"[0.1, 0.5, 1]\"\n          [initialBreakpoint]=\"0.5\"\n        >\n          <ng-template>\n            <ion-content>\n              <br>\n              <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"12\">\n                    <ion-item>\n                      <ion-label position=\"floating\">Name</ion-label>\n                      <ion-input [(ngModel)]=\"item.name\" [ngModelOptions]=\"{standalone: true}\" (ionBlur)=\"saveName($event, item)\" type=\"text\" placeholder=\"Edit user name\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"12\">\n                    <ion-item>\n                      <ion-label position=\"floating\">Email</ion-label>\n                      <ion-input [(ngModel)]=\"item.email\" [ngModelOptions]=\"{standalone: true}\" (ionBlur)=\"saveEmail($event, item)\" type=\"email\" placeholder=\"Edit user email\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                  <ion-col size=\"12\">\n                    <ion-item>\n                      <ion-label position=\"floating\">Position</ion-label>\n                      <ion-select value=\"{{item.role_id}}\" (ionChange)=\"saveRole($event, item)\" okText=\"Save\" cancelText=\"Cancel\">\n                        <ion-select-option value=\"1\">Direksi</ion-select-option>\n                        <ion-select-option value=\"2\">Direktur</ion-select-option>\n                        <ion-select-option value=\"3\">Manager</ion-select-option>\n                        <ion-select-option value=\"4\">Senior Staff</ion-select-option>\n                        <ion-select-option value=\"5\">Staff</ion-select-option>\n                        <ion-select-option value=\"6\">Junior Staff</ion-select-option>\n                        <ion-select-option value=\"7\">Guest</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n      </ng-template>\n    </span>\n  </ion-list>\n\n\n  <br>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_manage_user_user_module_ts.js.map