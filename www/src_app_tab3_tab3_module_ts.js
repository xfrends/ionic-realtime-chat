"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    },
    {
        path: 'manage-user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_manage_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../manage/user/user.module */ 9587)).then(m => m.UserPageModule)
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api/content.service */ 3558);






let Tab3Page = class Tab3Page {
    constructor(contentService, router) {
        this.contentService = contentService;
        this.router = router;
        this.settingForm = {
            id: null,
            email: '',
            name: '',
            avatar: '',
            status: 'aktif',
            role: null
        };
        this.status = false;
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.contentService.getToken().then((token) => {
            this.contentService.getProfile(token).subscribe((response) => {
                this.settingForm.id = response.content.id;
                this.settingForm.email = response.content.email;
                this.settingForm.name = response.content.name;
                this.settingForm.avatar = response.content.avatar;
                this.settingForm.status = response.content.status;
                this.settingForm.role = response.content.role_id;
                if (this.settingForm.status === 'aktif') {
                    this.status = true;
                }
                else {
                    this.status = false;
                }
            });
        });
    }
    editProfile() {
        if (this.settingForm.avatar === 'https://avataaars.io?topType=LongHairStraight') {
            this.settingForm.avatar = 'https://avataaars.io?topType=ShortHairShortWaved';
        }
        else {
            this.settingForm.avatar = 'https://avataaars.io?topType=LongHairStraight';
        }
        this.contentService.getToken().then((token) => {
            this.contentService.putUser(token, this.settingForm.id, { avatar: this.settingForm.avatar }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    statusChange(event) {
        if (this.settingForm.id != null) {
            if (this.status) {
                this.settingForm.status = 'aktif';
            }
            else {
                this.settingForm.status = 'nonaktif';
            }
            this.contentService.getToken().then((token) => {
                this.contentService.putUser(token, this.settingForm.id, { status: this.settingForm.status }).subscribe((response) => {
                    console.log('status: ', response);
                });
            });
        }
    }
    saveName(event) {
        this.contentService.getToken().then((token) => {
            this.contentService.putUser(token, this.settingForm.id, { name: this.settingForm.name }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    saveEmail(event) {
        this.contentService.getToken().then((token) => {
            this.contentService.putUser(token, this.settingForm.id, { email: this.settingForm.email }).subscribe((response) => {
                console.log('status: ', response);
            });
        });
    }
    logout() {
        this.contentService.getToken().then((token) => {
            this.contentService.postLogout(token).subscribe((response) => {
                this.contentService.deleteToken();
                console.log('Success & delete token');
            }, (error) => {
                this.contentService.deleteToken();
                console.log('Unauthorization & delete token');
            });
        });
        this.router.navigate(['/login']);
    }
    manageUsers() {
        this.router.navigate(['tabs/setting/manage-user']);
    }
    greaterThan(subj, num) {
        return subj < num;
    }
    doRefresh(event) {
        this.getProfile();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".profile {\n  border-radius: 50%;\n  width: auto;\n  height: auto;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Settings\n    </ion-title>\n    <ion-button slot=\"end\" size=\"small\" fill=\"clear\" (click)=\"manageUsers()\" *ngIf=\"greaterThan(settingForm.role, 4)\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n      <ion-col size=\"6\"  size-md=\"3\" (click)=\"editProfile()\">\n        <img class=\"profile\" src=\"{{settingForm.avatar}}\" alt=\"{{settingForm.name}}\"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Online</ion-label>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"status\" [checked]=\"status\" (ionChange)=\"statusChange($event)\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input [(ngModel)]=\"settingForm.name\" [ngModelOptions]=\"{standalone: true}\" (ionBlur)=\"saveName($event)\" type=\"text\" placeholder=\"Edit your name\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input [(ngModel)]=\"settingForm.email\" [ngModelOptions]=\"{standalone: true}\" (ionBlur)=\"saveEmail($event)\" type=\"email\" placeholder=\"Edit your email\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n      <ion-col size=\"11\">\n        <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"logout()\">Logout</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map