webpackJsonpac__name_([12],{"./src/app/inbox/inbox.component.ts":function(e,a,t){"use strict";(function(e){var i=t("./node_modules/@angular/core/index.js"),n=function(){function a(a){this.mailListShow=!0,this.mailFormShow=!1,this.mailDetailShow=!1,this.currentFolderName="Inbox",this.$el=e(a.nativeElement),this.initMailboxAppDemo(this.$el)}return a.prototype.handleComposeBtn=function(e){this.repliedMessage=e||void 0,this.changeEmailComponents("mailForm")},a.prototype.onReplyMail=function(e){this.currentMail=e,this.changeEmailComponents("mailDetail")},a.prototype.changeEmailComponents=function(e){var a={mailList:function(e){e.mailFormShow=e.mailDetailShow=!1,e.mailListShow=!0},mailForm:function(e){e.mailListShow=e.mailDetailShow=!1,e.mailFormShow=!0},mailDetail:function(e){e.mailListShow=e.mailFormShow=!1,e.mailDetailShow=!0}};a[e](this)},a.prototype.setFolderName=function(e){this.currentFolderName=e,this.mailListShow||this.changeEmailComponents("mailList")},a.prototype.initMailboxAppDemo=function(a){var t=function(){a.find("#app-alert").removeClass("hide").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e(this).removeClass("animated bounceInLeft")})};setTimeout(function(){return t()},3e3)},a.prototype.changeActiveItem=function(){this.$el.find(".nav a").on("click",function(){e(".nav").find(".active").removeClass("active"),e(this).parent().addClass("active")})},a.prototype.ngOnInit=function(){this.changeActiveItem()},a=__decorate([i.Component({selector:"inbox",template:t("./src/app/inbox/inbox.template.html"),styles:[t("./src/app/inbox/inbox.style.scss")]}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.ElementRef&&i.ElementRef)&&n||Object])],a);var n}();a.Inbox=n}).call(a,t("./node_modules/jquery/dist/jquery.js"))},"./src/app/inbox/inbox.module.ts":function(e,a,t){"use strict";var i=t("./node_modules/@angular/core/index.js"),n=t("./node_modules/@angular/common/index.js"),l=t("./node_modules/@angular/forms/index.js"),s=t("./node_modules/@angular/router/index.js"),r=t("./src/app/inbox/inbox.component.ts"),o=t("./src/app/inbox/mail-list/mail-list.component.ts"),c=t("./src/app/inbox/mail-form/mail-form.component.ts"),d=t("./src/app/inbox/mail-detail/mail-detail.component.ts"),m=t("./src/app/inbox/mail-list/pipes/search-pipe.ts"),p=t("./src/app/inbox/mail-list/pipes/folders-pipe.ts");a.routes=[{path:"",component:r.Inbox,pathMatch:"full"}];var u=function(){function e(){}return e.routes=a.routes,e=__decorate([i.NgModule({imports:[l.FormsModule,n.CommonModule,s.RouterModule.forChild(a.routes)],declarations:[r.Inbox,o.MailList,c.MailForm,d.MailDetail,p.FoldersPipe,m.SearchPipe]}),__metadata("design:paramtypes",[])],e)}();Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=u},"./src/app/inbox/inbox.style.scss":function(e,a){e.exports=".nav-email-folders>li>.nav-link{padding-top:10px;padding-bottom:10px;border-radius:.25rem;color:#777;font-weight:400}.nav-email-folders>li>.nav-link:hover{background-color:#e5e5e5;color:#55595c}.nav-email-folders>li>.nav-link>.fa-circle{margin-top:3px}.nav-email-folders>li>.nav-link>.label{padding-top:5px;padding-bottom:5px}.nav-email-folders>li.active>.nav-link,.nav-email-folders>li.active>.nav-link:hover,.nav-email-folders>li.active>.nav-link:focus{background-color:#ddd;color:#55595c;font-weight:600}.nav-email-folders>li.active>.nav-link>.label,.nav-email-folders>li.active>.nav-link:hover>.label,.nav-email-folders>li.active>.nav-link:focus>.label{color:#55595c;background-color:#fff}.nav-email-folders .tag-white{color:#555}\n"},"./src/app/inbox/inbox.template.html":function(e,a){e.exports='<ol class="breadcrumb">\r\n  <li class="breadcrumb-item">YOU ARE HERE</li>\r\n  <li class="breadcrumb-item active">Email</li>\r\n</ol>\r\n<div class="alert alert-warning alert-sm pull-right no-margin animated bounceInLeft hide" id="app-alert">\r\n  <button type="button" class="ml-lg close" data-dismiss="alert" aria-hidden="true">×</button>\r\n  Hey! This is a <span class="fw-semi-bold">real app</span> with CRUD and Search functions. Have fun!\r\n</div>\r\n<h1 class="page-title">Email - <span class="fw-semi-bold">Inbox</span></h1>\r\n<div class="row">\r\n  <div class="col-lg-3 col-xl-2 col-xs-12">\r\n    <a class="btn btn-danger btn-block" href="#" id="compose-btn" (click)="handleComposeBtn()">Compose</a>\r\n    <ul class="nav nav-pills nav-stacked nav-email-folders mt" id="folders-list">\r\n      <li class="nav-item active">\r\n        <a class="nav-link" (click)="setFolderName(\'Inbox\')">\r\n          <span class="tag tag-pill tag-white pull-xs-right">2</span>\r\n          Inbox\r\n        </a>\r\n      </li>\r\n      <li class="nav-item"><a class="nav-link" (click)="setFolderName(\'Starred\')">Starred</a></li>\r\n      <li class="nav-item"><a class="nav-link" (click)="setFolderName(\'Sent Mail\')">Sent Mail</a></li>\r\n      <li class="nav-item">\r\n        <a class="nav-link" (click)="setFolderName(\'Draft\')">\r\n          <span class="tag tag-pill tag-danger pull-xs-right">3</span>\r\n          Draft\r\n        </a>\r\n      </li>\r\n      <li class="nav-item"><a class="nav-link" (click)="setFolderName(\'Trash\')">Trash</a></li>\r\n    </ul>\r\n    <h6 class="mt">QUICK VIEW</h6>\r\n    <ul class="nav nav-pills nav-stacked nav-email-folders mb-lg fs-mini">\r\n      <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle text-danger pull-xs-right"></i> Work </a></li>\r\n      <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle text-white pull-xs-right"></i> Private </a></li>\r\n      <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle text-gray-light pull-xs-right"></i> Saved </a></li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf="mailListShow" mail-list [folderName]="currentFolderName" (replyMail)="onReplyMail($event)" class="col-lg-9 col-xl-10 col-xs-12"></div>\r\n  <div *ngIf="mailFormShow" mail-form (backToMailList)="changeEmailComponents(\'mailList\')" [message]="repliedMessage" class="col-lg-9 col-xl-10 col-xs-12"></div>\r\n  <div *ngIf="mailDetailShow" mail-detail [mail]="currentMail" (replyMessage)="handleComposeBtn($event)" (backToMailList)="changeEmailComponents(\'mailList\')" class="col-lg-9 col-xl-10 col-xs-12"></div>\r\n</div>\r\n'},"./src/app/inbox/mail-detail/mail-detail.component.ts":function(e,a,t){"use strict";var i=t("./node_modules/@angular/core/index.js"),n=function(){function e(){this.backToMailList=new i.EventEmitter,this.replyMessage=new i.EventEmitter,this.math=Math}return e.prototype.onToBack=function(){this.backToMailList.emit("")},e.prototype.goToReply=function(e){this.replyMessage.emit(e)},e.prototype.Math=function(){return Math.random()},__decorate([i.Input(),__metadata("design:type",Object)],e.prototype,"mail",void 0),__decorate([i.Output(),__metadata("design:type",Object)],e.prototype,"backToMailList",void 0),__decorate([i.Output(),__metadata("design:type",Object)],e.prototype,"replyMessage",void 0),e=__decorate([i.Component({selector:"[mail-detail]",template:t("./src/app/inbox/mail-detail/mail-detail.template.html"),styles:[t("./src/app/inbox/mail-detail/mail-detail.style.scss")]}),__metadata("design:paramtypes",[])],e)}();a.MailDetail=n},"./src/app/inbox/mail-detail/mail-detail.style.scss":function(e,a){e.exports='.email-view hr{margin:5px 0}.email-view .email-body{margin-top:1rem}.email-details img{width:30px;height:30px;float:left}.email-details-content::after{content:"";display:table;clear:both}.email-details-content .email{color:#999;font-size:13px}.email-details-content .receiver{display:block;color:#999;margin-top:-6px}.email-details-content .email-date{margin-right:10px;line-height:28px;vertical-align:middle}.email-attachments .attachment img{display:block}.email-attachments .attachment .title{margin:0;font-weight:bold}\n'},"./src/app/inbox/mail-detail/mail-detail.template.html":function(e,a){e.exports='<div class="clearfix mb-xs">\r\n  <a class="btn btn-default btn-sm width-50 pull-xs-left" id="back-btn" (click)="onToBack()">\r\n    <i class="fa fa-angle-left fa-lg"></i>\r\n  </a>\r\n</div>\r\n<section class="widget widget-email">\r\n  <header>\r\n    <h4>{{mail.subject}}</h4>\r\n    <div class="widget-controls">\r\n      <a href="#"><i class="fa fa-print"></i></a>\r\n    </div>\r\n  </header>\r\n  <div class="widget-body">\r\n    <div id="email-view" class="email-view">\r\n      <div class="email-details clearfix">\r\n        <div class="email-details-content">\r\n          <span class="thumb thumb-sm pull-xs-left">\r\n            <img class="img-circle" src="assets/img/people/a5.jpg" alt="Philip Horbacheuski">\r\n          </span>\r\n          <div class="pull-xs-left">\r\n            <strong>{{mail.sender}}</strong>\r\n            <span *ngIf="mail.senderMail" class="email">&lt;{{mail.senderMail}}&gt;</span>\r\n            <span class="receiver">to Wrapbootstrap</span>\r\n          </div>\r\n          <div class="email-actions pull-xs-right">\r\n            <div class="btn-group">\r\n              <button id="email-opened-reply" class="btn btn-sm btn-gray" (click)="goToReply(mail)">\r\n                <i class="fa fa-reply"></i> Reply\r\n              </button>\r\n              <button class="btn btn-sm btn-gray dropdown-toggle" data-toggle="dropdown">\r\n                <i class="fa fa-angle-down"></i>\r\n              </button>\r\n              <ul class="dropdown-menu pull-xs-right">\r\n                <li><a class="dropdown-item" href="#"><i class="fa fa-reply reply-btn"></i> Reply</a></li>\r\n                <li><a class="dropdown-item" href="#"><i class="fa fa-arrow-right reply-btn"></i> Forward</a></li>\r\n                <li><a class="dropdown-item" href="#"><i class="fa fa-print"></i> Print</a></li>\r\n                <li class="dropdown-divider"></li>\r\n                <li><a class="dropdown-item" href="#"><i class="fa fa-ban"></i> Spam</a></li>\r\n                <li><a class="dropdown-item" href="#"><i class="glyphicon glyphicon-trash"></i> Delete</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <time class="email-date pull-xs-right">\r\n            0:30\r\n          </time>\r\n        </div>\r\n      </div>\r\n      <div class="email-body">\r\n        <div class="email-body" [innerHTML]="mail.body"></div>\r\n      </div>\r\n      <div *ngIf="!mail.body" class="email-body">\r\n        {{mail.subject}}\r\n      </div>\r\n      <div class="email-attachments">\r\n        <div class="row">\r\n          <div class="col-sm-6">\r\n            <hr *ngIf="mail.attachments">\r\n            <p  *ngIf="mail.attachments" class="details"><strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; <a href="#">Download all attachments</a>\r\n              &nbsp;&nbsp;&nbsp;<a href="#">View all Images</a></p>\r\n            <section *ngFor="let attachment of mail.attachments; let i = index" class="attachment">\r\n              <img class="img-fluid" src="{{attachment}}" alt="">\r\n              <h5 class="title">some-cool-image{{i + 1}}.jpg</h5>\r\n              <p class="details">\r\n                568K  &nbsp;&nbsp;\r\n                <a href="#">View</a> &nbsp;&nbsp;\r\n                <a href="#">Download</a>\r\n              </p>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n'},"./src/app/inbox/mail-form/mail-form.component.ts":function(e,a,t){"use strict";var i=t("./node_modules/@angular/core/index.js"),n=t("./node_modules/@angular/core/index.js"),l=t("./node_modules/@angular/core/index.js"),s=function(){function e(){this.backToMailList=new l.EventEmitter,this.sender="",this.subject="",this.body="There are no implementations of Wysiwyg editors in Angular 2 version yet. So we hope it will appear soon."}return e.prototype.onToBack=function(){console.log("qwerty"),this.backToMailList.emit("")},e.prototype.ngOnInit=function(){if(this.message){this.sender=this.message.sender,this.subject="Re: "+this.message.subject;var e=document.createElement("span");e.innerHTML=this.message.body,this.body=e.innerText}},__decorate([n.Output(),__metadata("design:type",Object)],e.prototype,"backToMailList",void 0),__decorate([n.Input(),__metadata("design:type",Object)],e.prototype,"message",void 0),e=__decorate([i.Component({selector:"[mail-form]",template:t("./src/app/inbox/mail-form/mail-form.template.html")}),__metadata("design:paramtypes",[])],e)}();a.MailForm=s},"./src/app/inbox/mail-form/mail-form.template.html":function(e,a){e.exports='<div class="clearfix mb-xs">\r\n  <a class="btn btn-secondary btn-sm width-50 pull-xs-left" id="back-btn" (click)="onToBack()">\r\n    <i class="fa fa-angle-left fa-lg"></i>\r\n  </a>\r\n</div>\r\n<section class="widget widget-email">\r\n  <header id="widget-email-header">\r\n    <h4>Compose <span class="fw-semi-bold">New</span></h4>\r\n  </header>\r\n  <div class="widget-body" id="mailbox-content">\r\n    <div class="compose-view" id="compose-view">\r\n      <form id="email-compose" class="form-email-compose" method="get" action="#">\r\n        <div class="form-group">\r\n          <input type="email" id="input-to" placeholder="To" [(ngModel)]="sender" name="sender" class="input-transparent form-control">\r\n        </div>\r\n        <div class="form-group">\r\n          <input type="text" id="input-subject" placeholder="Subject" [(ngModel)]="subject"  name="subject" class="input-transparent form-control">\r\n        </div>\r\n        <div class="form-group">\r\n          <textarea rows="10" class="form-control" id="wysiwyg" placeholder="Message">{{ body }}</textarea>\r\n        </div>\r\n        <div class="clearfix">\r\n          <div class="btn-toolbar pull-right">\r\n            <button type="reset" id="compose-discard-button" class="btn btn-gray">Discard</button>\r\n            <button type="button" id="compose-save-button" class="btn btn-gray">&nbsp;&nbsp;Save&nbsp;&nbsp;</button>\r\n            <button type="submit" id="compose-send-button" class="btn btn-danger">&nbsp;&nbsp;&nbsp;Send&nbsp;&nbsp;&nbsp;</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n'},"./src/app/inbox/mail-list/mail-list.component.ts":function(e,a,t){"use strict";(function(e){var i=t("./node_modules/@angular/core/index.js"),n=t("./node_modules/@angular/core/index.js"),l=t("./node_modules/@angular/core/index.js"),s=[{id:1,sender:"Philip Horbacheuski",senderMail:"philip.horbacheuski@example.com",subject:"Hi, Welcome to Google Mail",date:"18:31",paperclip:!0,attachment:!0,unread:!0,starred:!0,folderId:1,selected:!1,attachments:["assets/img/pictures/1.jpg","assets/img/pictures/2.jpg"],body:"<p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder.</p>    <p><strong>On then sake home</strong> is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on.</p> <p>All the best,</p> <p>Vitaut the Great, CEO, <br>Fooby Inc.</p>"},{id:2,sender:"StackExchange",subject:"New Python questions for this week!",date:"Aug 14",paperclip:!0,unread:!0,attachment:!0,timestamp:1376508566e3,folderId:1,selected:!1,attachments:["assets/img/pictures/3.jpg"],body:"<h1>THIS IS HTML!!!!</h1>"},{id:3,sender:"notifications@facebook.com",senderMail:"notifications@facebook.com",subject:"Someone just commented on your photo!",date:"Aug 7",selected:!1,unread:!1,timestamp:1375877213e3,folderId:1},{id:4,sender:"Twitter",subject:"@hackernews is now following you on Twitter",date:"Jul 31",starred:!0,unread:!0,selected:!1,timestamp:1375261974e3,folderId:1},{id:5,sender:"LinkedIn",subject:"Jobs you may be interested in",date:"May 12",selected:!1,unread:!1,timestamp:1373634231e3,folderId:1},{id:6,sender:"Naevius Victorsson",subject:"Front no party young abode state up",date:"May 1",starred:!0,unread:!1,selected:!1,timestamp:1373516566e3,folderId:1},{id:7,sender:"Nikola Foley",subject:"Quiet led own cause three him",date:"Apr 23",paperclip:!0,attachment:!0,attachments:["assets/img/pictures/5.jpg","assets/img/pictures/4.jpg"],unread:!1,selected:!1,timestamp:1374508566e3,folderId:1},{id:8,sender:"Ernst Hardy",subject:"Raising say express had chiefly detract demands she",date:"Apr 20",selected:!1,unread:!1,timestamp:1373877213e3,folderId:1},{id:9,sender:"Lubbert Fuller",subject:"Civility vicinity graceful is it at",date:"Jul 3",starred:!0,selected:!1,unread:!1,timestamp:1376516566e3,folderId:2},{id:10,sender:"Tatenda Guerra",subject:"Improve up at to on mention perhaps raising",date:"Jul 13",attachment:!0,attachments:["assets/img/pictures/6.jpg"],selected:!1,unread:!1,timestamp:1376508566e3,folderId:3},{id:12,sender:"Ladislao Roche",subject:"Way building not get formerly her peculiar",date:"Jul 18",selected:!1,unread:!0,timestamp:1375877213e3,folderId:2},{id:13,sender:"Areli.Tanzi@gmail.com",senderMail:"Areli.Tanzi@gmail.com",subject:"Up uncommonly prosperous sentiments simplicity",date:"Jul 24",starred:!0,attachment:!0,attachments:["assets/img/pictures/9.jpg"],selected:!1,unread:!1,timestamp:1375261974e3,folderId:2},{id:14,sender:"Oluwaseyi Tremble",subject:"Reasonable appearance companions oh",date:"Jul 28",selected:!1,unread:!1,timestamp:1373634231e3,folderId:3}],r=function(){function a(a){this.replyMail=new l.EventEmitter,this.mails=s,this.$el=e(a.nativeElement)}return a.prototype.openMail=function(e){e.unread=!1,this.replyMail.emit(e)},a.prototype.selectMail=function(e){e.selected=!e.selected,this.checkToggleAll()},a.prototype.selectAll=function(){var e=this.$toggleAll.prop("checked");this.toggleAll(e)},a.prototype.checkToggleAll=function(){var a=!0;this.$el.find(".toggle-one").each(function(t,i){!e(i).prop("checked")&&a&&(a=!1)}),this.$toggleAll.prop("checked",a)},a.prototype.toggleAll=function(e){for(var a=0,t=this.mails;a<t.length;a++){var i=t[a];i.selected=e}this.$toggleAll.prop("checked",e)},a.prototype.selectRead=function(){this.toggleAll(!1),this.mails.filter(function(e){return!e.unread}).forEach(function(e){return e.selected=!0}),this.checkToggleAll()},a.prototype.selectUnread=function(){this.toggleAll(!1),this.mails.filter(function(e){return e.unread}).forEach(function(e){return e.selected=!0}),this.checkToggleAll()},a.prototype.markSelectedAsRead=function(){this.mails.filter(function(e){return e.selected}).forEach(function(e){return e.unread=!1})},a.prototype.markSelectedAsUnread=function(){this.mails.filter(function(e){return e.selected}).forEach(function(e){return e.unread=!0})},a.prototype.deleteEmails=function(){var e=[];this.mails.forEach(function(a){a.selected||e.push(a)}),this.mails=e},a.prototype.ngOnInit=function(){this.$toggleAll=this.$el.find("#toggle-all")},a.prototype.ngOnChanges=function(e){"folderName"in e&&(e.folderName.previousValue instanceof Object||this.toggleAll(!1))},a.prototype.changeStarStatus=function(e){e.starred=!e.starred},__decorate([n.Output(),__metadata("design:type",Object)],a.prototype,"replyMail",void 0),__decorate([n.Input(),__metadata("design:type",Object)],a.prototype,"folderName",void 0),a=__decorate([i.Component({selector:"[mail-list]",template:t("./src/app/inbox/mail-list/mail-list.template.html"),styles:[t("./src/app/inbox/mail-list/mail-list.style.scss")]}),__metadata("design:paramtypes",["function"==typeof(r="undefined"!=typeof l.ElementRef&&l.ElementRef)&&r||Object])],a);var r}();a.MailList=r}).call(a,t("./node_modules/jquery/dist/jquery.js"))},"./src/app/inbox/mail-list/mail-list.style.scss":function(e,a){e.exports=".widget-email-count{display:inline-block;margin:0;font-size:13px;color:#818a91;line-height:29px}.widget-email-count+.widget-email-pagination{margin-left:10px;border-left:1px solid #ddd;padding-left:15px;border-radius:0;vertical-align:-9px}.widget-email header .form-control{font-size:0.8571rem;border:1px solid #ccc}.widget-email header .form-control:focus{border-color:#66afe9;outline:none}.widget-email-pagination{margin:0}.widget-email-pagination .page-link{color:#888}.table-emails{margin-bottom:0}.table-emails tbody>tr>td:first-child{width:45px}.table-emails td,.table-emails th{padding:7px 5px 7px 5px}.table-emails td>.abc-checkbox,.table-emails th>.abc-checkbox{left:-18px}.table-emails td>.abc-checkbox>label:before,.table-emails td>.abc-checkbox>label:after,.table-emails th>.abc-checkbox>label:before,.table-emails th>.abc-checkbox>label:after{margin-left:0px}.table-emails .name,.table-emails .subject,.table-emails .date{cursor:pointer}.table-emails .date{text-align:right;min-width:65px}.table-emails .unread{font-weight:600;color:#55595c}.table-emails .starred{color:#818a91;cursor:pointer}.table-emails .starred:hover{color:#55595c}.table-emails .starred .fa-star{color:#f0ad4e}\n"},"./src/app/inbox/mail-list/mail-list.template.html":function(e,a){e.exports='<div class="clearfix mb-xs">\r\n  <a class="btn btn-secondary btn-sm width-50 pull-left hide" id="back-btn" href="inbox.html">\r\n    <i class="fa fa-angle-left fa-lg"></i>\r\n  </a>\r\n  <div class="pull-xs-right" id="folder-stats">\r\n    <p class="widget-email-count">Showing 1 - 10 of 96 messages</p>\r\n    <ul class="pagination pagination-sm widget-email-pagination">\r\n      <li class="prev disabled page-item"><a class="page-link" href="#"><i class="fa fa-chevron-left"></i></a></li>\r\n      <li class="active page-item"><a class="page-link" href="#">1</a></li>\r\n      <li class="page-item"><a class="page-link" href="#">2</a></li>\r\n      <li class="next page-item"><a class="page-link" href="#"><i class="fa fa-chevron-right"></i></a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<section class="widget widget-email">\r\n  <header id="widget-email-header">\r\n    <div class="row">\r\n      <div class="col-sm-6">\r\n        <div class="btn-group">\r\n          <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" data-toggle="dropdown">\r\n            Select\r\n            <i class="fa fa-angle-down "></i>\r\n          </a>\r\n          <ul class="dropdown-menu">\r\n            <li><a class="dropdown-item" (click)="toggleAll(true)">All</a></li>\r\n            <li><a class="dropdown-item" (click)="toggleAll(false)">None</a></li>\r\n            <li class="dropdown-divider"></li>\r\n            <li><a class="dropdown-item" (click)="selectRead()">Read</a></li>\r\n            <li><a class="dropdown-item" (click)="selectUnread()">Unread</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class="btn-group">\r\n          <a class="btn btn-sm btn-secondary dropdown-toggle" href="#" data-toggle="dropdown">\r\n            Actions\r\n            <i class="fa fa-angle-down "></i>\r\n          </a>\r\n          <ul class="dropdown-menu">\r\n            <li><a class="dropdown-item" href="#">Reply</a></li>\r\n            <li><a class="dropdown-item" href="#">Forward</a></li>\r\n            <li><a class="dropdown-item" href="#">Archive</a></li>\r\n            <li class="dropdown-divider"></li>\r\n            <li><a class="dropdown-item" (click)="markSelectedAsRead()">Mark As Read</a></li>\r\n            <li><a class="dropdown-item" (click)="markSelectedAsUnread()">Mark As Unread</a></li>\r\n            <li class="dropdown-divider"></li>\r\n            <li><a class="dropdown-item" (click)="deleteEmails()">Delete</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input class="form-control form-control-sm width-200 pull-xs-right" id="mailbox-search" [(ngModel)]="searchText" type="text" placeholder="Search Messages">\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class="widget-body" id="mailbox-content">\r\n    <table class="table table-striped table-emails table-hover" id="folder-view" >\r\n      <thead>\r\n      <tr>\r\n        <th colspan="3" id="folder-actions">\r\n          <div class="checkbox abc-checkbox">\r\n            <input id="toggle-all" type="checkbox" (click)="selectAll()">\r\n            <label for="toggle-all"></label>\r\n          </div>\r\n        </th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor="let mail of mails | FoldersPipe : folderName | SearchPipe : searchText" [ngClass]="{\'unread\': mail.unread}">\r\n        <td>\r\n          <div class="checkbox abc-checkbox">\r\n            <input class="toggle-one" type="checkbox" id="checkbox{{mail.id}}" [checked]="mail.selected"  (click)="selectMail(mail)">\r\n            <label attr.for="checkbox{{mail.id}}"></label>\r\n          </div>\r\n        </td>\r\n        <td><span class="starred"><i class="fa" [ngClass]="{\'fa-star\': mail.starred, \'fa-star-o\': !mail.starred}" (click)="changeStarStatus(mail)"></i></span></td>\r\n        <td class="name hidden-xs-down" (click)="openMail(mail)">{{mail.sender}}</td>\r\n        <td class="subject" (click)="openMail(mail)">{{mail.subject}}</td>\r\n        <td class="hidden-xs-down">\r\n          <i [ngClass]="{\'fa fa-paperclip\': mail.paperclip}"></i>\r\n        </td>\r\n        <td class="date">{{mail.date}}</td>\r\n      </tr>\r\n      <tr *ngIf="(mails).length == 4">\r\n          <td colspan="12">\r\n              Nothing here yet\r\n          </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</section>\r\n'},"./src/app/inbox/mail-list/pipes/folders-pipe.ts":function(e,a,t){"use strict";var i=t("./node_modules/@angular/core/index.js"),n=[{name:"Inbox",order:0,id:1,unread:2},{name:"Sent Mail",order:6,id:2,unread:0},{name:"Draft",order:7,id:3,unread:3},{name:"Trash",order:8,id:4,unread:0}],l=function(){function e(){this.folders=n}return e.prototype.transform=function(e,a){var t=this,i=a;if(e)return e.filter(function(e){if("Starred"==i)return e.starred;var a=t.folders.filter(function(e){return e.name==i});return a[0].id==e.folderId})},e=__decorate([i.Pipe({name:"FoldersPipe"}),__metadata("design:paramtypes",[])],e)}();a.FoldersPipe=l},"./src/app/inbox/mail-list/pipes/search-pipe.ts":function(e,a,t){"use strict";var i=t("./node_modules/@angular/core/index.js"),n=function(){function e(){}return e.prototype.transform=function(e,a){var t=new RegExp(a,"ig");if(e)return e.filter(function(e){return e.sender?e.sender.search(t)!==-1:e.subject?e.subject.search(t)!==-1:void 0})},e=__decorate([i.Pipe({name:"SearchPipe"}),__metadata("design:paramtypes",[])],e)}();a.SearchPipe=n}});
//# sourceMappingURL=12.map