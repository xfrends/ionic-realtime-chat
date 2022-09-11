"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/messages/messages.module */ 7763)).then(m => m.MessagesPageModule)
    },
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api/content.service */ 3558);







let Tab1Page = class Tab1Page {
    constructor(platform, router, contentService) {
        this.platform = platform;
        this.router = router;
        this.contentService = contentService;
        this.empty = true;
        this.showButton = false;
        this.newMessage = false;
        this.chats = [];
    }
    ngOnInit() {
        this.getChats();
        if (!this.platform.is('ios')) {
            this.showButton = true;
        }
    }
    getChats() {
        this.contentService.getToken().then((token) => {
            this.contentService.getChats(token).subscribe((response) => {
                this.chats = response.content;
                if (this.chats.length !== 0) {
                    this.empty = !true;
                    const today = new Date();
                    this.chats.forEach(element => {
                        const last = new Date(element.updated_at);
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
    onScroll(event) {
        if (event.detail.deltaY > 0) {
            this.showButton = true;
        }
        else if (event.detail.deltaY < 0 && this.platform.is('ios')) {
            this.showButton = false;
        }
    }
    createChat() {
        this.router.navigate(['tabs/contact']);
    }
    pinChat(chatId) {
        this.contentService.getToken().then((token) => {
            this.contentService.pinChat(token, chatId, true).subscribe((response) => {
                this.getChats();
            });
        });
    }
    unPinChat(chatId) {
        this.contentService.getToken().then((token) => {
            this.contentService.pinChat(token, chatId, false).subscribe((response) => {
                this.getChats();
            });
        });
    }
    openChat(chatId) {
        const navigationExtras = {
            queryParams: {
                id: chatId
            }
        };
        this.router.navigate(['tabs/chat/messages'], navigationExtras);
    }
    deleteChat(chatId) {
        this.contentService.getToken().then((token) => {
            this.contentService.deleteChat(token, chatId).subscribe((response) => {
                this.getChats();
            });
        });
    }
    unread(chatId) {
        console.log('unread chat', chatId);
    }
    doRefresh(event) {
        this.getChats();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_api_content_service__WEBPACK_IMPORTED_MODULE_2__.ContentService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Chats\n    </ion-title>\n    <ion-button slot=\"end\" size=\"small\" fill=\"clear\" (click)=\"createChat()\" *ngIf=\"showButton\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Chats</ion-title>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"createChat()\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container *ngIf=\"empty\" name=\"Chat Empty\" navigate=\"tabs/contact\"></app-explore-container>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of chats\">\n      <ion-item (click)=\"openChat(item.id)\">\n        <ion-avatar class=\"ion-margin-vertical ion-margin-end\">\n          <img src=\"{{item.avatar}}\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{item.name}}</h3>\n          <p *ngIf=\"!item.lastMessages;else message\">...</p>\n          <ng-template #message>\n            <p>{{item.lastMessages}}</p>\n          </ng-template>\n        </ion-label>\n        <ion-note slot=\"end\" class=\"ion-text-end\">\n          <ion-text color=\"success\" *ngIf=\"newMessage; else read\">\n            <small>{{item.updated_at | date:\"shortTime\"}}</small>\n          </ion-text>\n          <ng-template #read>\n            <ion-text color=\"medium\" *ngIf=\"!item.today; else today\">\n              <small>{{item.updated_at | date:\"mediumDate\"}}</small>\n            </ion-text>\n            <ng-template #today>\n              <ion-text color=\"medium\">\n                <small>{{item.updated_at | date:\"shortTime\"}}</small>\n              </ion-text>\n            </ng-template>\n          </ng-template>\n          <br>\n          <small *ngIf=\"item.pin\" >\n            <ion-icon name=\"pin-outline\"></ion-icon>\n          </small>\n        </ion-note>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option *ngIf=\"!item.pin; else unpin\" (click)=\"pinChat(item.id)\" color=\"tertiary\">Pin</ion-item-option>\n        <ng-template #unpin>\n        <ion-item-option (click)=\"unPinChat(item.id)\" color=\"tertiary\">Unpin</ion-item-option>\n        </ng-template>\n        <ion-item-option (click)=\"openChat(item.id)\">Open</ion-item-option>\n        <ion-item-option (click)=\"deleteChat(item.id)\" color=\"danger\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <br>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map