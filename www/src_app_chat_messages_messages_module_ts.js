"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_messages_messages_module_ts"],{

/***/ 8520:
/*!**********************************************************!*\
  !*** ./src/app/chat/messages/messages-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 4093);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 7763:
/*!**************************************************!*\
  !*** ./src/app/chat/messages/messages.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 8520);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 4093);







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage]
    })
], MessagesPageModule);



/***/ }),

/***/ 4093:
/*!************************************************!*\
  !*** ./src/app/chat/messages/messages.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 9261);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 1296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let MessagesPage = class MessagesPage {
    constructor(router) {
        this.router = router;
        this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.newMessage = '';
    }
    ngOnInit() {
    }
    backButton() {
        this.router.navigate(['tabs/chat']);
    }
    reply(item) {
        console.log(item);
    }
    deleteMessage(item) {
        console.log(item);
    }
    writing() {
        console.log('ngetik');
    }
    stopWriting() {
        console.log('stop ngetik');
    }
    editText() {
        console.log(this.newMessage);
        while (this.newMessage.includes('\n\n')) {
            this.newMessage = this.newMessage.replace('\n\n', '\n');
        }
    }
};
MessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-messages',
        template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 1296:
/*!*************************************************************!*\
  !*** ./src/app/chat/messages/messages.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9261:
/*!*************************************************************!*\
  !*** ./src/app/chat/messages/messages.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>User 1</ion-title>\n    <ion-button slot=\"start\" size=\"small\" fill=\"clear\" (click)=\"backButton()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>&nbsp;\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of itemList\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada774{{item}}?d=identicon&f=y\">\n        </ion-avatar>\n        <span class=\"ion-margin-vertical\">\n          <ion-label>User {{item}}</ion-label>\n          <ion-text style=\"font-size: 14px; color: var(--ion-color-step-600, #666666);\">Notes are text elements generally used as subtitles that provide more information. Notes are styled to appear grey by default. Notes can be used in an item as metadata text.</ion-text>\n        </span>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"reply(item)\">Reply</ion-item-option>\n        <ion-item-option (click)=\"deleteMessage(item)\" color=\"danger\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <br>\n</ion-content>\n\n<ion-footer collapse=\"fade\" style=\"box-shadow: rgb(0 0 0 / 10%) 0px 0px 25px 1px;\">\n  <ion-item>\n    <ion-textarea class=\"ion-align-self-center\" style=\"max-height: 200px!important;\" auto-grow=\"true\" (ionFocus)=\"writing()\" (ionBlur)=\"stopWriting()\" (ionChange)=\"editText()\" [(ngModel)]=\"newMessage\" placeholder=\"Enter message here...\"></ion-textarea>\n    <ion-button slot=\"end\" fill=\"clear\" class=\"ion-align-self-center\">\n      <ion-icon name=\"send\"></ion-icon>\n    </ion-button>\n  </ion-item>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chat_messages_messages_module_ts.js.map