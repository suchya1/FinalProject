webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n    <app-messages></app-messages>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var exercise_component_1 = __webpack_require__("./src/app/exercise/exercise.component.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var exercise_service_1 = __webpack_require__("./src/app/services/exercise.service.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                login_component_1.LoginComponent,
                exercise_component_1.ExerciseComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'exercise', component: exercise_component_1.ExerciseComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'register', component: register_component_1.RegisterComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [messages_service_1.MessagesService, exercise_service_1.ExerciseService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/exercise/exercise.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exercise/exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n    <div class=\"col-md-4\">\n            <div class=\"card\" >\n                    <div class=\"card-header\">Log Entry</div>\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col\">\n                          <input #Act placeholder=\"Activity\" />\n                          <input #Details placeholder=\"Details\" />\n                          <button (click)=\"submit(Act.value+' '+Details.value)\">Share</button>\n                          <button (click)=\"log(Act.value+' '+Details.value)\" >Enter</button>\n                       </div>\n                      </div>\n                    </div>\n            </div>\n    \n\n\n<br>\n        <div class=\"card\" >\n            <div class=\"card-header\">My Log {{Me.Name}} </div>\n            <ul class=\"list-group list-group-flush my-log\">\n                <li *ngFor=\"let item of Me.MyLog\" \n                    class=\"list-group-item my-log\" >\n                    <button (click)=\"share(item)\" class=\"btn btn-sm btn-info\">Submit</button>\n                    {{item}}\n                </li>\n            </ul>\n          </div>\n    </div>\n</div>\n<br>\n<div class=\"row\">\n<div class=\"col-md-4\">\n        <div class=\"card\" >\n                <div class=\"card-header\">My Friends </div>\n                <ul class=\"list-group list-group-flush \">\n                    <li *ngFor=\"let item of Model.Users\" \n                        class=\"list-group-item \" >\n                        {{item.Name}}\n                    </li>\n                </ul>\n                </div>\n       </div>\n    <br>\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header\">Shared Activities </div>\n                <ul class=\"list-group list-group-flush \">\n                <li *ngFor=\"let act of Model.SharedLog\"\n                    class=\"list-group-item d-flex justify-content-between align-items-center \">\n                    {{act.Text}}\n                    <span *ngIf=\"act.chosen\" class=\"badge badge-info\">{{act.UserId}}</span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/exercise/exercise.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ex_1 = __webpack_require__("./src/app/models/ex.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var exercise_service_1 = __webpack_require__("./src/app/services/exercise.service.ts");
var ExerciseComponent = /** @class */ (function () {
    function ExerciseComponent(//add in services
        http, _Router, _Messages, _Exercise) {
        var _this = this;
        this.http = http;
        this._Router = _Router;
        this._Messages = _Messages;
        this._Exercise = _Exercise;
        this.Model = new ex_1.Ex();
        // A:Activity;
        this._api = "http://localhost:8080/exercise";
        this.Me = _Exercise.Me;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
        this.join(this.Me.Name);
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    ExerciseComponent.prototype.ngOnInit = function () {
    };
    ExerciseComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    ExerciseComponent.prototype.submitLog = function (e, text) {
        var _this = this;
        e.preventDefault();
        this.http.post(this._api + "/exercise", { Text: text, User: this.Me.Name })
            .subscribe(function (data) {
            if (data.json().success) {
                _this.Me.MyLog.splice(_this.Me.MyLog.indexOf(text), 1); //edit this
            }
        }, function (err) {
            console.log(err);
        });
    };
    //joins a user to the app
    ExerciseComponent.prototype.join = function (name) {
        var _this = this;
        this._Messages.Messages.push({ Text: 'Welcome ' + name + '!', Type: 'info' });
        this.http.get(this._api + "/exercise", { params: { UserId: name, Name: name, MyLog: ["running", "walking", "lifting", "swimming", "soccer"], MyHistory: [] } })
            .subscribe(function (data) { return _this.Me.MyLog = data.json(); });
    };
    //logs activity
    ExerciseComponent.prototype.log = function (act) {
        this.Me.MyLog.push(act);
        console.log(this.Me.MyLog);
    };
    //submits activity to share
    ExerciseComponent.prototype.submit = function (act) {
        this.Me.MyLog.push(act);
        this.Model.SharedLog.push({ Text: act, UserId: this.Me.Name, Chosen: true });
        console.log(this.Model.SharedLog);
    };
    ExerciseComponent.prototype.share = function (act) {
        this.Model.SharedLog.push({ Text: act, UserId: this.Me.Name, Chosen: true });
    };
    ExerciseComponent = __decorate([
        core_1.Component({
            selector: 'app-exercise',
            template: __webpack_require__("./src/app/exercise/exercise.component.html"),
            styles: [__webpack_require__("./src/app/exercise/exercise.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            messages_service_1.MessagesService,
            exercise_service_1.ExerciseService])
    ], ExerciseComponent);
    return ExerciseComponent;
}());
exports.ExerciseComponent = ExerciseComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"alerts\"></div>\n  <div  class=\"alert alert-info\">\n        <a href=\"/login\" class=\"btn btn-info\">Login</a>\n        <a href=\"/register\" class=\"btn btn-info\">Register</a>\n   </div>\n   \n   <!--<div class=\"alert alert-info\">\n    <b>New!</b> You can now complete daily tasks!\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>-->\n\n  <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-6\">\n              <div class=\"card\" >\n                  <div class=\"card-header\" style=\"background:linear-gradient(to bottom, #E684AE,rgb(245, 165, 189))\">\n                      <h5 style=\"color:#fff\">My Log</h5>                      \n                  </div>\n                      <img class=\"\" style=\"height:255px\" src=\"https://www.inlifehealthcare.com/wp-content/uploads/2017/08/AAEAAQAAAAAAAAgzAAAAJGIyNzE4NDllLTEyNjItNGFiNC05YzRlLTU0NjU5ZDYxMjAwYw-533x400.jpg\" alt=\"Card image cap\">\n                      <div class=\"card-body\">\n                        <p class=\"card-text\">Add Cardio (running/walking)<br>Add Strength (lifting/weights)<br>Add a Sport<br>Add other exercise</p>\n                        <a href=\"/exercise\" class=\"btn btn-info\">Go to log</a>\n                      </div>\n                    </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"card\" >\n              <div class=\"card-header\" style=\"background:linear-gradient(to bottom, #E684AE,rgb(245, 165, 189))\">\n                  <h5 style=\"color:#fff\">My History</h5>                      \n              </div>\n                  <img class=\"\" src=\"https://i.pinimg.com/originals/3a/cf/c1/3acfc1a45a7bfe2bd7f214e68f5a26e2.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\" >\n                    <p class=\"card-text\">See your previous activity<br><br><br><br></p>\n                    <a href=\"/history\" class=\"btn btn-info\">See History</a>\n                  </div>\n                </div>\n      </div>  \n      <div class=\"col-lg-4 col-sm-6\">\n          <div class=\"card\" >\n              <div class=\"card-header\" style=\"background:linear-gradient(to bottom, #E684AE,rgb(245, 165, 189))\">\n                 <h5 style=\"color:#fff\">Share with friends</h5>                      \n              </div>\n                  <img class=\"\" style=\"height:255px\" src=\"http://sweatdallas.com/wp-content/uploads/2015/07/ClassTriColourBanner.jpg\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                    <p class=\"card-text\">Share updates or history with friends!<br><br><br><br></p>\n                    <a href=\"/social\" class=\"btn btn-info\">Share Now!</a>\n                  </div>\n                </div>\n      </div>  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var ex_1 = __webpack_require__("./src/app/models/ex.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_Messages) {
        var _this = this;
        this._Messages = _Messages;
        this.Model = new ex_1.Ex();
        this.LoggedIn = function () { return _this.Model.Users.find(function (x) { return x.Name == _this.Me.Name; }); };
        this._Messages.Messages.push({ Text: 'New! You can now complete daily tasks!', Type: 'info' });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justified-content-center\">\n    <div class=\"col-md-6\" >\n         <div class=\"card\" >\n            <div class=\"card-header\">Login</div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n               <div class=\"col\">\n                 <button class=\"btn btn-block border-success bg-light\" (click)=\"fblogin()\">Login with Facebook</button>\n                 <button class=\"btn btn-block border-success bg-light\" (click)=\"googlelogin()\">Login with Google</button>\n               </div>\n               <div class=\"col\">\n                  <input #Name placeholder=\"User Name\" />\n                  <input #Password placeholder=\"Password\" />\n                  <button (click)=\"login(Name.value, Password.value)\" >Login</button>\n               </div>\n              </div>\n            </div>\n          </div>\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var exercise_service_1 = __webpack_require__("./src/app/services/exercise.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Ex) {
        this._Ex = _Ex;
        window.fbAsyncInit = function () {
            FB.init({
                appId: '2263577020339632',
                cookie: true,
                xfbml: true,
                version: 'v2.12'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fblogin = function () {
        FB.login(function (credentials) {
            FB.api("/me", function (response) {
                console.log(response);
            });
        }, { scope: "email" });
    };
    LoginComponent.prototype.googlelogin = function () {
        var _this = this;
        googleyolo.hint({
            supportedAuthMethods: [
                "https://accounts.google.com",
            ],
            supportedIdTokenProviders: [
                {
                    uri: "https://accounts.google.com",
                    clientId: "YOUR_GOOGLE_CLIENT_ID" //put one from console
                }
            ]
        }).then(function (credentials) {
            _this._Ex.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
            console.log(credentials);
        });
    };
    LoginComponent.prototype.login = function (name, password) {
        this._Ex.login(name, password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [exercise_service_1.ExerciseService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\n  <div class=\"alert alert-{{message.Type}}\" *ngFor=\"let message of Messages.Messages; let i = index;\">\n    <button class=\"close\" (click)=\"delete(i)\">&times;</button> \n      {{message.Text}}\n  </div>    \n</div>\n<!--<button class=\"close\" (click)=\"delete(i)\">&times;</button>-->\n<!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>  \n      {{message.Text}}-->"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(Messages) {
        this.Messages = Messages;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.delete = function (i) {
        this.Messages.Messages.splice(i, 1);
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/models/ex.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ex = /** @class */ (function () {
    function Ex() {
    }
    return Ex;
}());
exports.Ex = Ex;
var User = /** @class */ (function () {
    function User() {
        this.MyLog = ["running", "walking", "lifting", "swimming", "soccer"];
    }
    return User;
}());
exports.User = User;
var Activity = /** @class */ (function () {
    function Activity() {
        this.Chosen = false;
    }
    return Activity;
}());
exports.Activity = Activity;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\" style=\"background:linear-gradient(to bottom, #E684AE,rgb(245, 165, 189))\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">Exercise App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/home\" routerLinkActive=\"active\" >Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/exercise\" routerLinkActive=\"active\" >Current Activities</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/history\" routerLinkActive=\"active\" >History</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/share\" routerLinkActive=\"active\" >Share</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/exercise\" routerLinkActive=\"active\" >Log</a>\n              </li>\n          </ul>\n         </div>\n      </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n    <input #Name placeholder=\"User Name\" />\n    <input #Age placeholder=\"Age!\" />\n    <input #FName placeholder=\"First Name\" />\n    <input #Password placeholder=\"Password\" />\n    <button (click)=\"register(Name.value,Age.value,FName.value,Password.value)\" >Register</button>\n </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var exercise_service_1 = __webpack_require__("./src/app/services/exercise.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_Ex) {
        this._Ex = _Ex;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (name, age, fname, password) {
        this._Ex.register(name, age, fname, password);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [exercise_service_1.ExerciseService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/services/exercise.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ExerciseService = /** @class */ (function () {
    function ExerciseService(http, _Messages, _Router) {
        this.http = http;
        this._Messages = _Messages;
        this._Router = _Router;
    }
    ExerciseService.prototype.login = function (name, password) {
        if (password == '123') {
            //log the user in
            console.log('in ex service: login');
            this.Me = { Name: name, UserId: name, MyLog: [], MyHistory: [] };
            console.log(this.Me);
            this._Router.navigate(['/exercise']);
        }
    };
    ExerciseService.prototype.register = function (name, age, fname, password) {
        console.log('in ex service: reg');
        this.Me = { Name: fname, UserId: name, MyLog: [], MyHistory: [] };
        console.log(this.Me);
        this._Router.navigate(['/exercise']);
    };
    ExerciseService.prototype.oAuthLogin = function (name, token, pic) {
        this.Me = { Name: name, UserId: name, MyLog: [], MyHistory: [] };
        this.pic = pic;
        this.token = token;
        this._Router.navigate(['/exercise']);
    };
    ExerciseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, messages_service_1.MessagesService, router_1.Router])
    ], ExerciseService);
    return ExerciseService;
}());
exports.ExerciseService = ExerciseService;


/***/ }),

/***/ "./src/app/services/messages.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.Messages = [];
    }
    MessagesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MessagesService);
    return MessagesService;
}());
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map