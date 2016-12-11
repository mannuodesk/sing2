webpackJsonpac__name_([1],{"./src/app/login/login.component.ts":function(n,o,e){"use strict";var i=e("./node_modules/@angular/core/index.js"),r=function(){function n(){}return n=__decorate([i.Component({selector:"login",styles:[e("./src/app/login/login.style.scss")],template:e("./src/app/login/login.template.html"),encapsulation:i.ViewEncapsulation.None,host:{"class":"login-page app"}}),__metadata("design:paramtypes",[])],n)}();o.Login=r},"./src/app/login/login.module.ts":function(n,o,e){"use strict";var i=e("./node_modules/@angular/common/index.js"),r=e("./node_modules/@angular/forms/index.js"),t=e("./node_modules/@angular/core/index.js"),a=e("./node_modules/@angular/router/index.js"),l=e("./src/app/login/login.component.ts");o.routes=[{path:"",component:l.Login,pathMatch:"full"}];var s=function(){function n(){}return n.routes=o.routes,n=__decorate([t.NgModule({declarations:[l.Login],imports:[i.CommonModule,r.FormsModule,a.RouterModule.forChild(o.routes)]}),__metadata("design:paramtypes",[])],n)}();Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=s},"./src/app/login/login.style.scss":function(n,o){n.exports=".login-page{background-color:#ddd}.login-page .page-footer{margin-bottom:25px;font-size:13px;color:#818a91;text-align:center}@media (min-height: 600px){.login-page .page-footer{position:absolute;bottom:0;left:0;right:0}}.widget-login-container{padding-top:10%}.widget-login-logo{margin-top:15px;margin-bottom:15px;text-align:center;font-weight:400}.widget-login-logo .fa-circle{font-size:13px;margin:0 20px}.widget-login{padding:30px}.widget-login>header h1,.widget-login>header h2,.widget-login>header h3,.widget-login>header h4,.widget-login>header h5,.widget-login>header h6{font-weight:400;text-align:center}.widget-login-info{font-size:13px;color:#888;margin-top:1px;margin-bottom:0;text-align:center}.widget-login-info.abc-checkbox{margin-left:-25px}.login-form .form-control{font-size:13px;border:none;background-color:#eceeef}.login-form .form-control:focus{background-color:#ddd}\n"},"./src/app/login/login.template.html":function(n,o){n.exports='<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1">\r\n        <h5 class="widget-login-logo animated fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          sing\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login animated fadeInUp">\r\n          <header>\r\n            <h3>Login to your Sing App</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class="widget-login-info">\r\n              Don\'t have an account? Sign up now!\r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username">\r\n              </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" type="text" placeholder="Password">\r\n              </div>\r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                  <button type="button" class="btn btn-secondary btn-sm">Create an Account</button>\r\n                  <a class="btn btn-inverse btn-sm" [routerLink]="[\'/app\', \'dashboard\'] ">Login</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                    <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer>\r\n</div>\r\n'}});
//# sourceMappingURL=1.map