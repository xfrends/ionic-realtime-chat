"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 9306:
/*!**********************************************************************!*\
  !*** ./src/app/contact/add-group-modal/add-group-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGroupModalComponent": () => (/* binding */ AddGroupModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_group_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-group-modal.component.html?ngResource */ 3492);
/* harmony import */ var _add_group_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-group-modal.component.scss?ngResource */ 5882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/content.service */ 3558);







let AddGroupModalComponent = class AddGroupModalComponent {
    constructor(modalCtrl, router, alertController, contentService) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertController = alertController;
        this.contentService = contentService;
        this.handlerMessage = '';
        this.roleMessage = '';
    }
    ngOnInit() { }
    createGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Group Information',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'masukan nama group disini'
                    },
                    {
                        name: 'desc',
                        type: 'textarea',
                        placeholder: 'masukan deskripsi group disini'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Create Group Canceled';
                        },
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: data => {
                            this.storeGroup(data);
                            this.handlerMessage = 'Create Group Confirmed';
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    storeGroup(data) {
        const participant = [];
        this.contacts.forEach(element => {
            if (element.is_checked) {
                participant.push(element.other_user_id);
            }
        });
        this.contentService.getToken().then((token) => {
            this.contentService.postGroup(token, data.name, data.desc, participant).subscribe((response) => {
                console.log(response);
                this.modalCtrl.dismiss();
                this.router.navigate(['tabs/group']);
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
AddGroupModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
AddGroupModalComponent.propDecorators = {
    contacts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AddGroupModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-group-modal',
        template: _add_group_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_group_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddGroupModalComponent);



/***/ }),

/***/ 1973:
/*!************************************************************************!*\
  !*** ./src/app/contact/all-contact-list/all-contact-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllContactListComponent": () => (/* binding */ AllContactListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _all_contact_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-contact-list.component.html?ngResource */ 2904);
/* harmony import */ var _all_contact_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-contact-list.component.scss?ngResource */ 381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/content.service */ 3558);






let AllContactListComponent = class AllContactListComponent {
    constructor(contentService, router) {
        this.contentService = contentService;
        this.router = router;
    }
    ngOnInit() { }
    contactClick(email) {
        this.contentService.getToken().then((token) => {
            this.contentService.postChat(token, email).subscribe((response) => {
                const navigationExtras = {
                    queryParams: {
                        id: response.content.id
                    }
                };
                this.router.navigate(['tabs/chat/messages'], navigationExtras);
            }, (error) => {
                console.log('error: ', error);
                if (error.status === 401) {
                    this.contentService.deleteToken();
                    this.router.navigate(['/login']);
                }
            });
        });
    }
    contactArsip(item) {
        console.log('arsip: ', item);
        this.contentService.getToken().then((token) => {
            this.contentService.deleteContact(token, item.id).subscribe((response) => {
                this.router.navigate(['tabs/contact']);
            });
        });
    }
};
AllContactListComponent.ctorParameters = () => [
    { type: src_app_shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AllContactListComponent.propDecorators = {
    contacts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    isOnline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
AllContactListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-all-contact-list',
        template: _all_contact_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_all_contact_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllContactListComponent);



/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: 'add-contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact_add-contact_add-contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../contact/add-contact/add-contact.module */ 7167)).then(m => m.AddContactPageModule)
    },
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _contact_all_contact_list_all_contact_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/all-contact-list/all-contact-list.component */ 1973);
/* harmony import */ var _contact_add_group_modal_add_group_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/add-group-modal/add-group-modal.component */ 9306);










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page, _contact_all_contact_list_all_contact_list_component__WEBPACK_IMPORTED_MODULE_3__.AllContactListComponent, _contact_add_group_modal_add_group_modal_component__WEBPACK_IMPORTED_MODULE_4__.AddGroupModalComponent]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api/content.service */ 3558);







let Tab2Page = class Tab2Page {
    constructor(router, platform, contentService) {
        this.router = router;
        this.platform = platform;
        this.contentService = contentService;
        this.contacts = [];
        this.empty = true;
        this.showButton = false;
        this.isOnline = false;
    }
    ngOnInit() {
        if (!this.platform.is('ios')) {
            this.showButton = true;
        }
    }
    ionViewWillEnter() {
        this.getContact();
    }
    onScroll(event) {
        if (event.detail.deltaY > 0) {
            this.showButton = true;
        }
        else if (event.detail.deltaY < 0 && this.platform.is('ios')) {
            this.showButton = false;
        }
    }
    getContact() {
        this.contentService.getToken().then((token) => {
            this.contentService.getContacts(token).subscribe((response) => {
                this.contacts = response.content;
                if (this.contacts.length !== 0) {
                    this.empty = !true;
                    const today = new Date();
                    console.log('contacts: ', this.contacts);
                    this.contacts.forEach(element => {
                        const last = new Date(element.other_user.updated_at);
                        if (today.toDateString() === last.toDateString()) {
                            element.today = true;
                        }
                    });
                }
            }, (error) => {
                console.log('error: ', error);
                if (error.status === 401) {
                    this.contentService.deleteToken();
                    this.router.navigate(['/login']);
                }
            });
        });
    }
    addContact() {
        this.router.navigate(['tabs/contact/add-contact']);
    }
    doRefresh(event) {
        this.getContact();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 5882:
/*!***********************************************************************************!*\
  !*** ./src/app/contact/add-group-modal/add-group-modal.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZ3JvdXAtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 381:
/*!*************************************************************************************!*\
  !*** ./src/app/contact/all-contact-list/all-contact-list.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3492:
/*!***********************************************************************************!*\
  !*** ./src/app/contact/add-group-modal/add-group-modal.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-modal #modal trigger=\"open-modal-add-group\" [initialBreakpoint]=\"0.25\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n  <ng-template>\n    <ion-content>\n      <ion-searchbar placeholder=\"Search\" (click)=\"modal.setCurrentBreakpoint(0.75)\" class=\"ion-margin-top\"></ion-searchbar>\n      <ion-list>\n        <div *ngFor=\"let item of contacts\">\n          <ion-item *ngIf=\"item.other_user_id !== item.user_id\">\n            <ion-avatar slot=\"start\">\n              <ion-img src=\"{{item.other_user.avatar}}\"></ion-img>\n            </ion-avatar>\n            <ion-label>\n              <h2>{{item.other_user.name}}</h2>\n              <p>{{item.other_user.role.name}}</p>\n            </ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"item.is_checked\"></ion-checkbox>\n          </ion-item>\n        </div>\n      </ion-list>\n      <ion-button (click)=\"createGroup()\" expand=\"block\" class=\"ion-margin-horizontal\">Create Group</ion-button>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ }),

/***/ 2904:
/*!*************************************************************************************!*\
  !*** ./src/app/contact/all-contact-list/all-contact-list.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <ion-item-sliding *ngFor=\"let item of contacts\">\n    <ion-item (click)=\"contactClick(item.other_user.email)\" *ngIf=\"item.other_user_id !== item.user_id\">\n      <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n        <img src=\"{{item.other_user.avatar}}\">\n      </ion-avatar>\n      <ion-label>{{item.other_user.name}}</ion-label>\n      <ion-note slot=\"end\">\n        <ion-text color=\"success\" *ngIf=\"isOnline; else lastOnline\">\n          <small>{{item.other_user.status}}</small>\n        </ion-text>\n        <ng-template #lastOnline>\n          <ion-text color=\"medium\" *ngIf=\"!item.today; else today\">\n            <small>{{item.other_user.updated_at | date:\"mediumDate\"}}</small>\n          </ion-text>\n          <ng-template #today>\n            <ion-text color=\"medium\">\n              <small>{{item.other_user.updated_at | date:\"shortTime\"}}</small>\n            </ion-text>\n          </ng-template>\n        </ng-template>\n      </ion-note>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"contactClick(item)\">Open</ion-item-option>\n      <ion-item-option (click)=\"contactArsip(item)\" color=\"danger\">Delete</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"default\" slot=\"start\">\n      Contacts\n    </ion-title>\n    <ion-button slot=\"end\" size=\"small\" fill=\"clear\" (click)=\"addContact()\" *ngIf=\"showButton\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Contacts</ion-title>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"addContact()\">\n          <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container *ngIf=\"empty\" name=\"Contact Empty\" navigate=\"tabs/contact/add-contact\"></app-explore-container>\n\n  <ion-item id=\"open-modal-add-group\" class=\"pointer\">\n    <ion-icon name=\"people-outline\" class=\"ion-margin-vertical ion-margin-horizontal\"></ion-icon>\n    <ion-label>Create Group</ion-label>\n  </ion-item>\n  <app-add-group-modal [contacts]=\"contacts\"></app-add-group-modal>\n\n  <app-all-contact-list [contacts]=\"contacts\" [isOnline]=\"isOnline\"></app-all-contact-list>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map