webpackJsonp([0,3],{

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(533);


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AF = (function () {
    function AF(af) {
        var _this = this;
        this.af = af;
        this._authState = null;
        this._isAuthenticated = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false); // false is the initial value
        // Init user state
        af.auth.subscribe(function (state) {
            _this._authState = state;
            _this._isAuthenticated.next(_this._authState !== null);
        });
    }
    Object.defineProperty(AF.prototype, "authObservable", {
        get: function () {
            return this._isAuthenticated.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AF.prototype, "isAuthenticated", {
        // used by the router (not an observable, only need to be checked once)
        get: function () {
            return this._authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        });
    };
    AF.prototype.loginWithFacebook = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        return this.af.auth.logout();
    };
    /**
     *
     */
    AF.prototype.addUserInfo = function () {
        //We saved their auth info now save the rest to the db.
        this.users.push({
            email: this.email,
            displayName: this.displayName
        });
    };
    /**
     *
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.registerUser = function (email, password) {
        console.log(email);
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    };
    /**
     *
     * @param uid
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.saveUserInfoFromForm = function (uid, name, email) {
        return this.af.database.object('registeredUsers/' + uid).set({
            name: name,
            email: email,
        });
    };
    /**
     * Logs the user in using their Email/Password combo
     * @param email
     * @param password
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithEmail = function (email, password) {
        return this.af.auth.login({
            email: email,
            password: password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
        });
    };
    AF = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AF);
    return AF;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/af.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 532;


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(692);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/main.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(af, router) {
        this.af = af;
        this.router = router;
        this.isLoggedIn = false;
        console.log("AppComponent Loaded");
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth == null) {
                console.log("Not Logged in.");
                _this.router.navigate(['/login']);
                _this.isLoggedIn = false;
            }
            else {
                console.log("Successfully Logged in.");
                _this.isLoggedIn = true;
                _this.router.navigate(['/']);
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(872),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_af__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_guard_auth_guard__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_nav_nav_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_sidenav_sidenav_component__ = __webpack_require__(694);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var firebaseConfig = {
    apiKey: "AIzaSyBHnjb4OlX2k3ObayE2wtpp25h5lG5pSIE",
    authDomain: "angular2auth-67920.firebaseapp.com",
    databaseURL: "https://angular2auth-67920.firebaseio.com",
    storageBucket: "angular2auth-67920.appspot.com",
    messagingSenderId: "351831200457"
};
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__["a" /* LoginPageComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["MaterialModule"].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navbar_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_sidenav_sidenav_component__["a" /* SideNavComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_af__["a" /* AF */], __WEBPACK_IMPORTED_MODULE_10__shared_guard_auth_guard__["a" /* AuthGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/app.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // used to show Login or Logout button
        this.authService.authObservable.subscribe(function (result) {
            _this.isAuthenticated = result;
        });
    };
    NavComponent.prototype.onSignOut = function () {
        this.authService.logout();
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__(873),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/nav.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = (function () {
    function SideNavComponent(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authObservable.subscribe(function (result) {
            _this.isAuthenticated = result;
        });
    };
    SideNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__(874),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/sidenav.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(697);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(875),
            styles: [__webpack_require__(871)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/home-page.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__ = __webpack_require__(698);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
        this.isLoading = false;
    }
    LoginPageComponent.prototype.loginWithEmail = function (form) {
        var _this = this;
        this.isLoading = true;
        this.afService.loginWithEmail(form.value.email, form.value.password).then(function (data) {
            console.log("SIGNED IN WITH EMAIL", data);
            _this.isLoading = false;
            _this.router.navigate(['']);
        }).catch(function (error) {
            if (error) {
                _this.isLoading = false;
                _this.error = error;
                console.log(_this.error);
            }
        });
    };
    LoginPageComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.afService.loginWithGoogle().then(function (data) {
            // Send them to the homepage if they are logged in
            console.log(data);
            _this.afService.addUserInfo();
            _this.router.navigate(['']);
        });
    };
    LoginPageComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.afService.loginWithFacebook().then(function (data) {
            // Send them to the homepage if they are logged in
            console.log(data);
            _this.afService.addUserInfo();
            _this.router.navigate(['']);
        });
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__(876),
            styles: [__webpack_require__(868)],
            animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__["a" /* slideUpAnimation */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/login-page.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

// Component transition animations
var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(":enter", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(":leave", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/fadeIn.animation.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideUpAnimation; });

// Component transition animations
var slideUpAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('slideUp', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(':enter', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0, transform: 'translateY(100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('0.7s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(':leave', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1s ease-out')
    ])
]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/slideUp.animation.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/auth.guard.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/environment.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Angular2/Equilab/src/polyfills.js.map

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n  margin: 150px;\n  margin-right: 100px;\n  font-size: 16px; }\n\n.example-full-width {\n  width: 100%; }\n\nbutton {\n  width: 100%;\n  height: 50px;\n  background-color: #ED6C44;\n  color: #FFFFFF;\n  font-size: 18px; }\n\n.newAccount {\n  margin-top: 40px; }\n\nmd-progress-spinner {\n  margin-top: 20px;\n  height: 150px;\n  width: inherit; }\n\n.error-text {\n  color: red; }\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #ED6C44;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  padding: 0 16px;\n}\n\n.container-fluid {\n  margin: 0 15px;\n}\n\n\n.navbar-default {\n  border: none;\n}\n\n\n.example-header-image {\n  background-image: url('../../../assets/user.png');\n  background-size: cover;\n  margin-top: 8px;\n  border: none;\n  background-color: #ED6C44;\n}\n\nbutton.example-header-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n\n}\n\nnav ul li a {\n  height: 55px;\n  line-height: 28px;\n  color: #fff;\n  font-size: 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n\n.navbar-brand {\n  color: #ED6C44;\n  margin-top: 7px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n\n\n\n\nnav ul li a:hover, .navbar-brand:hover  {\n  color: #2b2b2b;\n}\n\n\n.active {\n  background-color: rgba(194, 43, 0, 1);\n}\n\n\n\n\n\n/* Collapsed when in mobile*/\n\n.navbar-default .navbar-nav > .active > a {\n  background-color: transparent;\n}\n\n.navbar-form {\n  border: none;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\nbutton.navbar-toggle.collapsed {\n  margin-top: 15px;\n}\n\n.navbar-default .navbar-toggle {\n  border: none;\n}\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  height: 100%; /* 100% Full-height */\n  width: 250px; /* 0 width - change this with JavaScript */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #793526;\n  overflow-x: hidden; /* Disable horizontal scroll */\n  padding-top: 60px; /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  margin-top:5px;\n}\n\n/* The navigation menu links */\n.sidenav a {\n  padding: 0 32px;\n  text-decoration: none;\n  font-size: 18px;\n  color: #ffffff;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\nhr {\n  border-color: rgba(0, 32, 26, 0.25);\n}\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover, .offcanvas a:focus{\n  color: #2b2b2b;\n}\n\n\nspan {\n  margin-right: 15px;\n}\n\nul {\n  list-style-type: none;\n  list-style-position:inside;\n  margin:0;\n  padding:0;\n}\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-sidenav></app-sidenav>\n\n\n\n<div class=\"container\" style=\"padding-left: 220px\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Page content goes here  -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Brand</a>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\n      <!-- Left Side navbar goes here -->\n      <ul class=\"nav navbar-nav\">\n      </ul>\n\n      <!-- Righ Side navbar goes here -->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isAuthenticated\" [routerLink]=\"['login']\"><a><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li *ngIf=\"isAuthenticated\"><a (click)=\"onSignOut()\"><span class=\"glyphicon glyphicon-lock\"></span> Logout</a></li>\n       <!-- <li *ngIf=\"isAuthenticated\" [routerLink]=\"['profile']\"><button md-card-avatar class=\"example-header-image\"></button></li> -->\n      </ul>\n    </div>\n\n\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div style=\"margin-top: 70px\"></div>\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuthenticated\" id=\"mySidenav\" class=\"sidenav\">\n\n\n  <div *ngIf=\"isAuthenticated\">\n    <br>\n    <a *ngIf=\"isAuthenticated\" [routerLink]=\"['']\"><span class=\"glyphicon glyphicon-home\"></span>Home</a>\n    <hr>\n    <a [routerLink]=\"['/about']\"><span class=\"glyphicon glyphicon-info-sign\"></span>About</a>\n    <hr>\n    <a [routerLink]=\"['/documentation']\"><span class=\"glyphicon glyphicon-console\"></span>Documentation</a>\n    <hr>\n    <a [routerLink]=\"['/storage']\"><span class=\"glyphicon glyphicon-cloud\"></span>Storage</a>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "\n<div [@fadeIn]=\"'true'\">\n\n\n  <h1>Hello</h1>\n\n</div>\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  {{error}}\n</div>\n\n<md-card class=\"example-card\" [@slideUp]=\"'true'\">\n  <h2>Inloggning</h2>\n  <hr>\n\n  <form *ngIf=\"!isLoading\" class=\"example-form\" #signInForm=\"ngForm\" (ngSubmit)=\"loginWithEmail(signInForm)\">\n    <md-input-container class=\"example-full-width\">\n      <input md-input placeholder=\"email@gmail.com\" type=\"email\" name=\"email\" ngModel required>\n    </md-input-container>\n\n    <br>\n\n    <md-input-container class=\"example-full-width\">\n      <input md-input placeholder=\"Password\" type=\"password\" name=\"password\" ngModel required>\n    </md-input-container>\n    <br>\n    <div class=\"text-center\">\n      <button md-raised-button color=\"primary\" type=\"submit\">Logga in</button>\n\n      <button md-raised-button color=\"primary\" style=\"margin-top: 10px;\" (click)=\"loginWithGoogle()\">Logga in med Google</button>\n      <p *ngIf=\"error\" class=\"error-text\">{{errorMessage}}</p>\n    </div>\n  <!--  <div class=\"text-center newAccount\">\n      <a  [routerLink]=\"['/register']\">Skapa ett konto</a>\n    </div> -->\n  </form>\n\n  <div *ngIf=\"isLoading\" class=\"text-center\">\n    <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\n  </div>\n\n</md-card>\n\n\n\n\n\n\n"

/***/ })

},[1133]);
//# sourceMappingURL=main.bundle.map