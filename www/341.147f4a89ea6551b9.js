"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[341],{341:(A,_,l)=>{l.r(_),l.d(_,{UserPageModule:()=>M});var c=l(9808),g=l(4182),o=l(7181),u=l(9800),e=l(2096),d=l(8568);function Z(t,r){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-avatar",9),e._UZ(2,"img",10),e.qZA(),e.TgZ(3,"ion-label")(4,"h4"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"ion-note",11)(9,"ion-text")(10,"small"),e._uU(11),e.qZA()()()()),2&t){const n=e.oxw().$implicit;e.xp6(2),e.s9C("src",n.avatar,e.LSH),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.Oqu(n.email),e.xp6(4),e.hij("",n.role.name," (You)")}}const p=function(){return{standalone:!0}};function f(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"ion-content"),e._UZ(1,"br"),e.TgZ(2,"ion-grid")(3,"ion-row",14)(4,"ion-col",15)(5,"ion-item")(6,"ion-label",16),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"ion-input",17),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw(2).$implicit.name=a})("ionBlur",function(a){e.CHM(n);const s=e.oxw(2).$implicit;return e.oxw().saveName(a,s)}),e.qZA()()()()(),e.TgZ(9,"ion-grid")(10,"ion-row",14)(11,"ion-col",15)(12,"ion-item")(13,"ion-label",16),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"ion-input",18),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw(2).$implicit.email=a})("ionBlur",function(a){e.CHM(n);const s=e.oxw(2).$implicit;return e.oxw().saveEmail(a,s)}),e.qZA()()()()(),e.TgZ(16,"ion-grid")(17,"ion-row",14)(18,"ion-col",15)(19,"ion-item")(20,"ion-label",16),e._uU(21,"Position"),e.qZA(),e.TgZ(22,"ion-select",19),e.NdJ("ionChange",function(a){e.CHM(n);const s=e.oxw(2).$implicit;return e.oxw().saveRole(a,s)}),e.TgZ(23,"ion-select-option",20),e._uU(24,"Direksi"),e.qZA(),e.TgZ(25,"ion-select-option",21),e._uU(26,"Direktur"),e.qZA(),e.TgZ(27,"ion-select-option",22),e._uU(28,"Manager"),e.qZA(),e.TgZ(29,"ion-select-option",23),e._uU(30,"Senior Staff"),e.qZA(),e.TgZ(31,"ion-select-option",24),e._uU(32,"Staff"),e.qZA(),e.TgZ(33,"ion-select-option",25),e._uU(34,"Junior Staff"),e.qZA(),e.TgZ(35,"ion-select-option",26),e._uU(36,"Guest"),e.qZA()()()()()()()}if(2&t){const n=e.oxw(2).$implicit;e.xp6(8),e.Q6J("ngModel",n.name)("ngModelOptions",e.DdM(5,p)),e.xp6(7),e.Q6J("ngModel",n.email)("ngModelOptions",e.DdM(6,p)),e.xp6(7),e.s9C("value",n.role_id)}}const U=function(){return[.1,.5,1]};function h(t,r){if(1&t&&(e.TgZ(0,"ion-item",12)(1,"ion-avatar",9),e._UZ(2,"img",10),e.qZA(),e.TgZ(3,"ion-label")(4,"h4"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"ion-note",11)(9,"ion-text")(10,"small"),e._uU(11),e.qZA()()()(),e.TgZ(12,"ion-modal",13),e.YNc(13,f,37,7,"ng-template"),e.qZA()),2&t){const n=e.oxw().$implicit;e.s9C("id",n.id),e.xp6(2),e.s9C("src",n.avatar,e.LSH),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.Oqu(n.email),e.xp6(4),e.Oqu(n.role.name),e.xp6(1),e.s9C("trigger",n.id),e.Q6J("breakpoints",e.DdM(8,U))("initialBreakpoint",.5)}}function T(t,r){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,Z,12,4,"ion-item",7),e.YNc(2,h,14,9,"ng-template",null,8,e.W1O),e.qZA()),2&t){const n=r.$implicit,i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",n.isYou)("ngIfElse",i)}}const v=[{path:"",component:(()=>{class t{constructor(n,i){this.router=n,this.contentService=i,this.users=[]}ngOnInit(){this.getUsers()}getUsers(){this.contentService.getToken().then(n=>{this.contentService.getUsers(n).subscribe(i=>{this.users=i.content,this.contentService.getProfile(n).subscribe(a=>{this.users.forEach(s=>{s.email===a.content.email&&(s.isYou=!0)})})},i=>{console.log("error: ",i),401===i.status&&(this.contentService.deleteToken(),this.router.navigate(["/login"]))})})}saveName(n,i){this.contentService.getToken().then(a=>{this.contentService.manageUser(a,i.id,{name:i.name}).subscribe(s=>{console.log("status: ",s)})})}saveEmail(n,i){this.contentService.getToken().then(a=>{this.contentService.manageUser(a,i.id,{email:i.email}).subscribe(s=>{console.log("status: ",s)})})}saveRole(n,i){this.contentService.getToken().then(a=>{this.contentService.manageUser(a,i.id,{role_id:n.detail.value}).subscribe(s=>{console.log("status: ",s)})})}backButton(){this.router.navigate(["tabs/setting"])}doRefresh(n){this.getUsers(),setTimeout(()=>{n.target.complete()},2e3)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(d._))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user"]],decls:16,vars:2,consts:[[3,"translucent"],["slot","start","size","small","fill","clear",3,"click"],["name","chevron-back-outline"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf","ngIfElse"],["other",""],[1,"ion-margin-vertical","ion-margin-end"],[3,"src"],["slot","end"],[3,"id"],[3,"trigger","breakpoints","initialBreakpoint"],[1,"ion-justify-content-center"],["size","12"],["position","floating"],["type","text","placeholder","Edit user name",3,"ngModel","ngModelOptions","ngModelChange","ionBlur"],["type","email","placeholder","Edit user email",3,"ngModel","ngModelOptions","ngModelChange","ionBlur"],["okText","Save","cancelText","Cancel",3,"value","ionChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Manage Users"),e.qZA(),e.TgZ(4,"ion-button",1),e.NdJ("click",function(){return i.backButton()}),e._UZ(5,"ion-icon",2),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),e._uU(10,"Manage Users"),e.qZA()()(),e.TgZ(11,"ion-list"),e.YNc(12,T,4,2,"span",5),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"ion-refresher",6),e.NdJ("ionRefresh",function(s){return i.doRefresh(s)}),e._UZ(15,"ion-refresher-content"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngForOf",i.users))},directives:[o.Gu,o.sr,o.wd,o.YG,o.gu,o.W2,o.q_,c.sg,c.O5,o.Ie,o.BJ,o.Q$,o.uN,o.yW,o.ki,o.jY,o.Nd,o.wI,o.pK,o.j9,g.JJ,g.On,o.t9,o.QI,o.n0,o.nJ,o.Wo],styles:[""]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,g.u5,o.Pc,x]]}),t})()}}]);