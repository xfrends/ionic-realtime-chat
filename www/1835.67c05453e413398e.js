"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(S,m,l)=>{l.r(m),l.d(m,{Tab1PageModule:()=>y});var o=l(7181),_=l(9808),u=l(4182),p=l(581),g=l(9800),t=l(2096),d=l(8568),h=l(4762);function f(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().createChat()}),t._UZ(1,"ion-icon",6),t.qZA()}}function T(n,a){1&n&&t._UZ(0,"app-explore-container",11)}function x(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"..."),t.qZA())}function Z(n,a){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.lastMessages)}}function b(n,a){if(1&n&&(t.TgZ(0,"ion-text",25)(1,"small"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(t.xi3(3,1,e.updated_at,"shortTime"))}}function C(n,a){if(1&n&&(t.TgZ(0,"ion-text",28)(1,"small"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(t.xi3(3,1,e.updated_at,"mediumDate"))}}function P(n,a){if(1&n&&(t.TgZ(0,"ion-text",28)(1,"small"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&n){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(t.xi3(3,1,e.updated_at,"shortTime"))}}function v(n,a){if(1&n&&(t.YNc(0,C,4,4,"ion-text",26),t.YNc(1,P,4,4,"ng-template",null,27,t.W1O)),2&n){const e=t.MAs(2),i=t.oxw().$implicit;t.Q6J("ngIf",!i.today)("ngIfElse",e)}}function A(n,a){1&n&&(t.TgZ(0,"small"),t._UZ(1,"ion-icon",29),t.qZA())}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-option",30),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw().pinChat(s.id)}),t._uU(1,"Pin"),t.qZA()}}function J(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-option",30),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw().unPinChat(s.id)}),t._uU(1,"Unpin"),t.qZA()}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().openChat(c.id)}),t.TgZ(2,"ion-avatar",13),t._UZ(3,"img",14),t.qZA(),t.TgZ(4,"ion-label")(5,"h3"),t._uU(6),t.qZA(),t.YNc(7,x,2,0,"p",15),t.YNc(8,Z,2,1,"ng-template",null,16,t.W1O),t.qZA(),t.TgZ(10,"ion-note",17),t.YNc(11,b,4,4,"ion-text",18),t.YNc(12,v,3,2,"ng-template",null,19,t.W1O),t._UZ(14,"br"),t.YNc(15,A,2,0,"small",20),t.qZA()(),t.TgZ(16,"ion-item-options",21),t.YNc(17,I,2,0,"ion-item-option",22),t.YNc(18,J,2,0,"ng-template",null,23,t.W1O),t.TgZ(20,"ion-item-option",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().openChat(c.id)}),t._uU(21,"Open"),t.qZA(),t.TgZ(22,"ion-item-option",24),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteChat(c.id)}),t._uU(23,"Delete"),t.qZA()()()}if(2&n){const e=a.$implicit,i=t.MAs(9),s=t.MAs(13),c=t.MAs(19),r=t.oxw();t.xp6(3),t.s9C("src",e.avatar,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",!e.lastMessages)("ngIfElse",i),t.xp6(4),t.Q6J("ngIf",r.newMessage)("ngIfElse",s),t.xp6(4),t.Q6J("ngIf",e.pin),t.xp6(2),t.Q6J("ngIf",!e.pin)("ngIfElse",c)}}const N=[{path:"messages",loadChildren:()=>l.e(8592).then(l.bind(l,1160)).then(n=>n.MessagesPageModule)},{path:"",component:(()=>{class n{constructor(e,i,s){this.platform=e,this.router=i,this.contentService=s,this.empty=!0,this.showButton=!1,this.newMessage=!1,this.chats=[]}ngOnInit(){this.getChats(),this.platform.is("ios")||(this.showButton=!0)}getChats(){this.contentService.getToken().then(e=>{this.contentService.getChats(e).subscribe(i=>{if(this.chats=i.content,0!==this.chats.length){this.empty=!1;const s=new Date;this.chats.forEach(c=>{const r=new Date(c.updated_at);s.toDateString()===r.toDateString()&&(c.today=!0)})}},i=>{console.log("error: ",i),401===i.status&&(this.contentService.deleteToken(),this.router.navigate(["/login"]))})})}onScroll(e){e.detail.deltaY>0?this.showButton=!0:e.detail.deltaY<0&&this.platform.is("ios")&&(this.showButton=!1)}createChat(){this.router.navigate(["tabs/contact"])}pinChat(e){this.contentService.getToken().then(i=>{this.contentService.pinChat(i,e,!0).subscribe(s=>{this.getChats()})})}unPinChat(e){this.contentService.getToken().then(i=>{this.contentService.pinChat(i,e,!1).subscribe(s=>{this.getChats()})})}openChat(e){this.router.navigate(["tabs/chat/messages"],{queryParams:{id:e}})}deleteChat(e){this.contentService.getToken().then(i=>{this.contentService.deleteChat(i,e).subscribe(s=>{this.getChats()})})}unread(e){console.log("unread chat",e)}doRefresh(e){this.getChats(),setTimeout(()=>{e.target.complete()},2e3)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.t4),t.Y36(g.F0),t.Y36(d._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tab1"]],decls:18,vars:6,consts:[[3,"translucent"],["slot","end","size","small","fill","clear",3,"click",4,"ngIf"],[3,"fullscreen","scrollEvents","ionScroll"],["collapse","condense"],["size","large"],["slot","end","fill","clear",3,"click"],["name","create-outline"],["name","Chat Empty","navigate","tabs/contact",4,"ngIf"],[4,"ngFor","ngForOf"],["slot","fixed",3,"ionRefresh"],["slot","end","size","small","fill","clear",3,"click"],["name","Chat Empty","navigate","tabs/contact"],[3,"click"],[1,"ion-margin-vertical","ion-margin-end"],[3,"src"],[4,"ngIf","ngIfElse"],["message",""],["slot","end",1,"ion-text-end"],["color","success",4,"ngIf","ngIfElse"],["read",""],[4,"ngIf"],["side","end"],["color","tertiary",3,"click",4,"ngIf","ngIfElse"],["unpin",""],["color","danger",3,"click"],["color","success"],["color","medium",4,"ngIf","ngIfElse"],["today",""],["color","medium"],["name","pin-outline"],["color","tertiary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Chats "),t.qZA(),t.YNc(4,f,2,0,"ion-button",1),t.qZA()(),t.TgZ(5,"ion-content",2),t.NdJ("ionScroll",function(c){return i.onScroll(c)}),t.TgZ(6,"ion-header",3)(7,"ion-toolbar")(8,"ion-title",4),t._uU(9,"Chats"),t.qZA(),t.TgZ(10,"ion-button",5),t.NdJ("click",function(){return i.createChat()}),t._UZ(11,"ion-icon",6),t.qZA()()(),t.YNc(12,T,1,0,"app-explore-container",7),t.TgZ(13,"ion-list"),t.YNc(14,M,24,9,"ion-item-sliding",8),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"ion-refresher",9),t.NdJ("ionRefresh",function(c){return i.doRefresh(c)}),t._UZ(17,"ion-refresher-content"),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("ngIf",i.showButton),t.xp6(1),t.Q6J("fullscreen",!0)("scrollEvents",!0),t.xp6(7),t.Q6J("ngIf",i.empty),t.xp6(2),t.Q6J("ngForOf",i.chats))},directives:[o.Gu,o.sr,o.wd,_.O5,o.YG,o.gu,o.W2,h.Z,o.q_,_.sg,o.td,o.Ie,o.BJ,o.Q$,o.uN,o.yW,o.IK,o.u8,o.nJ,o.Wo],pipes:[_.uU],styles:[""]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(N)],g.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.Pc,_.ez,u.u5,p.e,U]]}),n})()}}]);