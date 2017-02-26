webpackJsonp([0,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
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
        this._isAuthenticated = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](false); // false is the initial value
        af.auth.subscribe(function (state) {
            _this._authState = state;
            _this._isAuthenticated.next(_this._authState !== null);
        });
    }
    AF.prototype.isAuthenticated = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                subject.next(true);
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    };
    Object.defineProperty(AF.prototype, "user", {
        get: function () {
            return this._isAuthenticated ? this._authState.auth : '';
        },
        enumerable: true,
        configurable: true
    });
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
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Password,
        });
    };
    /**
     * Logs in the user with Google
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Popup,
        });
    };
    /**
     * Logs in the user with Google
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithFacebook = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AuthMethods */].Popup,
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
        //saved their auth info now save the rest to the db. For google logins
        this.users.push({
            email: this.email,
            displayName: this.displayName
        });
    };
    AF = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AF);
    return AF;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/af.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideToLeft; });

var slideToLeft = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideToLeft', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'relative', width: '100%' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'relative', width: '100%' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/router.animations.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

// Component transition animations
var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(":enter", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(":leave", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/fadeIn.animation.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_slideUp_animation__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(903),
            styles: [__webpack_require__(892)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_slideUp_animation__["a" /* slideUpAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/about-page.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_router_animations__ = __webpack_require__(133);
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
    function HomePageComponent(angularfire) {
        this.angularfire = angularfire;
        this.graphDataTrainings = [];
        this.isLoading = false;
        // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
        // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
        // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
        // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
        // DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO
        this.beatArray = [];
        this.horsesArray = [];
        this.horseNameArray = [];
        this.totalTimeArray = [];
        this.barChartOptions = {
            responsive: true,
            barThickness: 100
        };
        this.barChartLabels = this.horseNameArray;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.totalTimeArray, label: 'Total aktivitet' },
        ];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.trainingsInfo();
        this.horsesInfo();
    };
    HomePageComponent.prototype.userInfo = function () {
        this.userinfo = this.angularfire.database.list('/v1/userinfo/', {
            query: {
                orderByChild: 'id',
                indexOn: "id",
                equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
            }
        });
        this.horses = this.angularfire.database.list('/v1/horses/', {
            query: {
                orderByChild: 'owner_id',
                indexOn: "owner_id",
                equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93',
            }
        });
        this.trainings = this.angularfire.database.list('/v1/trainings/', {
            query: {
                orderByChild: 'user',
                indexOn: "user",
                equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
            }
        });
    };
    /* trainingsInfo() {
  
     let uid = "25sZYMr8t9ZZCMtoaCq7NffdIP93";
  
     // Map the stuffs
     let userTrainings = this.angularfire.database.list('/v1/userinfo/' + uid + '/trainings/', {
     query: {},
     }).map(results => {
     results.map(result => {
     result.trainings = this.angularfire.database.object('/v1/trainings/' + result.$key);
     });
     return results;
     });
  
  
     // Subscribes to the userTrainings
     userTrainings.subscribe(userTrainings => {
     userTrainings.forEach(userTraining => {
     userTraining.trainings.subscribe(training => {
     // user traingings comes here
     console.log(training);
     });
  
     })
     });
     }
     */
    HomePageComponent.prototype.trainingsInfo = function () {
        var _this = this;
        console.log("trainings info init");
        var test = this.angularfire.database.list('/v1/trainings/', {
            query: {
                orderByChild: 'user',
                equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
            },
        }).subscribe(function (results) {
            // results = trainings
            //console.log(results);
            results.forEach(function (result) {
                // result = ONE training object
                console.log(result.horse);
                console.log(result.horse);
                _this.beatArray.push(result.canter.beat);
                _this.horsesArray.push(result.horse);
                _this.totalTimeArray.push(result.total.time);
            });
            console.log(results);
            // init graph here
        });
    };
    HomePageComponent.prototype.horsesInfo = function () {
        var _this = this;
        console.log("horses info init");
        var test = this.angularfire.database.list('/v1/horses/', {
            query: {
                orderByChild: 'owner_id',
                equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
            },
        }).subscribe(function (results) {
            // results = horses
            //console.log(results);
            results.forEach(function (result) {
                // result = ONE horse object
                console.log(result.horse);
                console.log(result.horse);
                _this.horseNameArray.push(result.name);
            });
            console.log(results);
            _this.isLoading = true;
            // init graph here
        });
    };
    // events
    HomePageComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePageComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(904),
            styles: [__webpack_require__(899)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_3__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/home-page.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__ = __webpack_require__(481);
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
            _this.router.navigate(['/home']);
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
            _this.router.navigate(['home']);
        });
    };
    LoginPageComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.afService.loginWithFacebook().then(function (data) {
            // Send them to the homepage if they are logged in
            console.log(data);
            _this.afService.addUserInfo();
            _this.router.navigate(['home']);
        });
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(905),
            styles: [__webpack_require__(893)],
            animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__["a" /* slideUpAnimation */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/login-page.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyStablePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyStablePageComponent = (function () {
    function MyStablePageComponent() {
    }
    MyStablePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-stable-page',
            template: __webpack_require__(906),
            styles: [__webpack_require__(894)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MyStablePageComponent);
    return MyStablePageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/my-stable-page.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_router_animations__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewPageComponent = (function () {
    function OverviewPageComponent() {
    }
    OverviewPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview-page',
            template: __webpack_require__(907),
            styles: [__webpack_require__(895)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewPageComponent);
    return OverviewPageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/overview-page.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_af__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePageComponent = (function () {
    function ProfilePageComponent(authService) {
        this.authService = authService;
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
    };
    ProfilePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(908),
            styles: [__webpack_require__(896)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], ProfilePageComponent);
    return ProfilePageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/profile-page.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideUpAnimation; });

// Component transition animations
var slideUpAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideUp', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.7s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(-100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s ease-out')
    ])
]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/slideUp.animation.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(103);
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
        return this.authService.isAuthenticated().first();
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/auth.guard.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 559;


/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(717);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/main.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(198);
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
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(900),
            styles: [__webpack_require__(891)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/app.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_af__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_guard_auth_guard__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_page_profile_page_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_page_about_page_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_nav_nav_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_stable_page_my_stable_page_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_sidenav_sidenav_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_overview_page_overview_page_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
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
    apiKey: "AIzaSyBLAepT58ZEGZssaxDa5ohWJo3fjpP9gD8",
    authDomain: "equilab-157516.firebaseapp.com",
    databaseURL: "https://equilab-157516.firebaseio.com",
    storageBucket: "equilab-157516.appspot.com",
    messagingSenderId: "970803104790"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig), __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navbar_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navbar_sidenav_sidenav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_overview_page_overview_page_component__["a" /* OverviewPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_stable_page_my_stable_page_component__["a" /* MyStablePageComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_af__["a" /* AF */], __WEBPACK_IMPORTED_MODULE_10__shared_guard_auth_guard__["a" /* AuthGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/app.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_page_login_page_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_page_profile_page_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_page_about_page_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_page_overview_page_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_stable_page_my_stable_page_component__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_5__pages_overview_page_overview_page_component__["a" /* OverviewPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__pages_about_page_about_page_component__["a" /* AboutPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mystable', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_stable_page_my_stable_page_component__["a" /* MyStablePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/app.routing.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(103);
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
        var _this = this;
        this.authService = authService;
        this.isAuthenticated = false;
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
    }
    NavComponent.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    NavComponent.prototype.onSignOut = function () {
        this.authService.logout();
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(901),
            styles: [__webpack_require__(897)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/nav.component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(103);
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
        var _this = this;
        this.authService = authService;
        this.isAuthenticated = false;
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    SideNavComponent.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    SideNavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SideNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(902),
            styles: [__webpack_require__(898)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/sidenav.component.js.map

/***/ }),

/***/ 721:
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
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/environment.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/polyfills.js.map

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n  margin: 140px;\n  margin-left: 150px;\n  font-size: 20px;\n  background: transparent; }\n\n.equilabName {\n  margin-left: 5px;\n  margin-top: 5px; }\n\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-card {\n  color: white; }\n\nbutton {\n  width: 100%;\n  height: 50px;\n  background-color: #ED6C44;\n  color: #FFFFFF;\n  font-size: 18px; }\n\n.newAccount {\n  margin-top: 40px; }\n\nmd-progress-spinner {\n  margin-top: 20px;\n  height: 150px;\n  width: inherit; }\n\n.error-text {\n  color: red; }\n\ndiv.custom-background {\n  padding: 0 0;\n  margin-bottom: 0;\n  color: white;\n  height: 100vh;\n  z-index: 3000;\n  width: 100%;\n  background: -webkit-linear-gradient(top, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%), url(../../../assets/images/RiderBackgroundBlurMedium.jpg);\n  background: linear-gradient(to bottom, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%), url(../../../assets/images/RiderBackgroundBlurMedium.jpg);\n  background-size: cover; }\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "nav {\r\n  background-color: #ED6C44;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26);\r\n\r\n}\r\n\r\n.container-fluid {\r\n  margin: 0 15px;\r\n}\r\n\r\n.navbar-default {\r\n  border: none;\r\n}\r\n\r\nnav ul li a {\r\n  height: 55px;\r\n  line-height: 28px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-brand {\r\n  color: #ED6C44;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  padding-top: 10px;\r\n}\r\n\r\nnav ul li a:hover, .navbar-brand:hover {\r\n  color: #2b2b2b;\r\n}\r\n\r\n.active {\r\n  background-color: rgba(194, 43, 0, 1);\r\n}\r\n\r\n/* Collapsed when in mobile*/\r\n\r\n.navbar-default .navbar-nav > .active > a {\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-form {\r\n  border: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #fff;\r\n}\r\n\r\nbutton.navbar-toggle.collapsed {\r\n  margin-top: 15px;\r\n}\r\n\r\n.navbar-default .navbar-toggle {\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 230px; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Stay on top */\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #793526;\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n  margin-top: 5px;\r\n}\r\n\r\n.user{\r\n  padding: 0 32px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.userinfo{\r\n  padding: 15px 5px 0px 16px;\r\n  position: relative;\r\n}\r\n.info{\r\n  padding: 8px 0 8px 80px;\r\n}\r\n.username{\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n}\r\n.useremail{\r\n  font-size: 12px;\r\n  line-height: 1.35;\r\n}\r\n.avatar{\r\n  position: absolute;\r\n  height: 64px;\r\n  width: 64px;\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n  padding: 0 32px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  display: block;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\nhr {\r\n  border-color: rgba(0, 32, 26, 0.25);\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover, .offcanvas a:focus {\r\n  color: #2b2b2b;\r\n}\r\n\r\nspan {\r\n  margin-right: 15px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  list-style-position: inside;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "/* Equilab project */\r\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<app-sidenav></app-sidenav>\r\n\r\n\r\n<!-- Page content goes here  -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isAuth()\" class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n              data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n\r\n      <!-- Left Side navbar goes here -->\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a class=\"navbar-brand\" [routerLink]=\"['/home']\"> <img src=\"../../../assets/images/equilabFavicon.png\"\r\n                                                                   style=\"width: 40px; height: 40px;\"> </a></li>\r\n      </ul>\r\n\r\n      <!-- Right Side navbar goes here -->\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!isAuth()\" [routerLink]=\"['login']\"><a><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\r\n        </li>\r\n        <li *ngIf=\"isAuth()\"><a (click)=\"onSignOut()\"><span class=\"glyphicon glyphicon-lock\"></span> Logout</a></li>\r\n        <li *ngIf=\"isAuth()\" [routerLink]=\"['profile']\"><a> <i class=\"material-icons\">account_circle</i></a></li>\r\n      </ul>\r\n    </div>\r\n\r\n\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth()\" id=\"mySidenav\" class=\"sidenav\">\r\n\r\n\r\n  <div>\r\n    <div class=\"userinfo\">\r\n      <div class=\"avatar\">\r\n        <i class=\"material-icons\" style=\"font-size: 60px;\">account_circle</i>\r\n      </div>\r\n      <div class=\"info\">\r\n        <span class=\"username\">Username</span>\r\n        <span class=\"useremail\">{{user?.email}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <a [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\"></span>Home</a>\r\n    <hr>\r\n    <a [routerLink]=\"['/mystable']\"><span><i class=\"material-icons\">business</i></span>My Stable</a>\r\n    <hr>\r\n    <a [routerLink]=\"['/overview']\"><span class=\"glyphicon glyphicon-eye-open\"></span>Overview</a>\r\n    <hr>\r\n    <a [routerLink]=\"['/about']\"><span class=\"glyphicon glyphicon-info-sign\"></span>About</a>\r\n    <hr>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | About </title>\r\n\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\" style=\"padding-left: 250px; margin-top: 60px; width: auto;\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n          <h1> ABOUT PAGE </h1>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Home</title>\r\n\r\n<style> chart {\r\n  display: block;\r\n}   </style>\r\n\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\" style=\"padding-left: 160px; margin-top: 60px; width: auto;\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div style=\"padding-left: 100px;\" [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n\r\n            <ul style=\"margin-top: 50px;\">\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" style=\"display: block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"!isLoading\" class=\"text-center\" style=\"padding-left: 150px;\">\r\n              <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div style=\"padding-left: 100px;\" [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul style=\"margin-top: 50px;\">\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" style=\"display: block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center\" style=\"padding-left: 250px;\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div style=\"padding-left: 100px;\" [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul style=\"margin-top: 50px;\">\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" style=\"display: block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center\" style=\"padding-left: 250px;\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div style=\"padding-left: 100px;\" [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul style=\"margin-top: 50px;\">\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li style=\"float:left; width:180px;\" *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" style=\"display: block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center\" style=\"padding-left: 250px;\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Login to your account</title>\r\n\r\n\r\n<div class=\"custom-background\">\r\n  <a class=\"navbar-brand\" href=\"https://equilab.horse/\"><img class=\"equilabName\"\r\n                                                             src=\"../../../assets/images/equilabName.png\"\r\n                                                             height=\"25px\"/></a>\r\n  <div align=center class=\"container\">\r\n\r\n\r\n    <div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\r\n      <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Error:</span>\r\n      {{error}}\r\n    </div>\r\n\r\n    <md-card class=\"example-card\" [@slideUp]=\"'true'\">\r\n      <h2 *ngIf=\"!isLoading\" style=\"font-size: 22px;\"><img\r\n        src=\"../../../assets/images/equilabFavicon.png\" height=\"60\" width=\"60\"/></h2>\r\n      <h2 *ngIf=\"isLoading\" style=\"font-size: 22px;\"><img src=\"../../../assets/images/equilabFavicon.png\" height=\"200\"\r\n                                                          width=\"200\"/></h2>\r\n\r\n\r\n      <form *ngIf=\"!isLoading\" class=\"example-form\" #signInForm=\"ngForm\" (ngSubmit)=\"loginWithEmail(signInForm)\">\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Email\" type=\"email\" name=\"email\" ngModel required>\r\n        </md-input-container>\r\n\r\n\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Lösenord\" type=\"password\" name=\"password\" ngModel required>\r\n        </md-input-container>\r\n        <br>\r\n        <div class=\"text-center\">\r\n          <button md-raised-button type=\"submit\">Log in</button>\r\n\r\n          <!--  <button md-raised-button  style=\"margin-top: 10px;\" (click)=\"loginWithGoogle()\">Login with Google</button> -->\r\n          <p *ngIf=\"error\" class=\"error-text\">{{errorMessage}}</p>\r\n        </div>\r\n        <!--  <div class=\"text-center newAccount\">\r\n            <a  [routerLink]=\"['/register']\">Create an account</a>\r\n          </div> -->\r\n      </form>\r\n\r\n      <div *ngIf=\"isLoading\" class=\"text-center\">\r\n        <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n      </div>\r\n\r\n    </md-card>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | My Stable </title>\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\" style=\"padding-left: 250px; margin-top: 60px; width: auto;\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card> adasdasdasdsd</md-card>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card> sdfsdfsdfsdfsd</md-card>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card>sdfsdfsdfsdfsdf</md-card>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card>sdfsdfsdfsdf</md-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">HEJ</div>\r\n        <div class=\"col-md-6\">HEJ</div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-3\">HEJ</div>\r\n        <div class=\"col-md-3\">HEJ</div>\r\n        <div class=\"col-md-3\">HEJ</div>\r\n        <div class=\"col-md-3\">HEJ</div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Overview</title>\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\" style=\"padding-left: 250px; margin-top: 40px; width: auto;\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <h1 class=\"page-header\">Tables</h1>\r\n        </div>\r\n        <!-- /.col-lg-12 -->\r\n      </div>\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              DataTables Advanced Tables\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.panel-body -->\r\n        </div>\r\n        <!-- /.panel -->\r\n      </div>\r\n      <!-- /.col-lg-12 -->\r\n\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Kitchen Sink\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-bordered table-hover\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Basic Table\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n      </div>\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Striped Rows\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Bordered Table\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive table-bordered\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n      </div>\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Hover Rows\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Context Classes\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Username</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr class=\"success\">\r\n                    <td>1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>@mdo</td>\r\n                  </tr>\r\n                  <tr class=\"info\">\r\n                    <td>2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>@fat</td>\r\n                  </tr>\r\n                  <tr class=\"warning\">\r\n                    <td>3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>@twitter</td>\r\n                  </tr>\r\n                  <tr class=\"danger\">\r\n                    <td>4</td>\r\n                    <td>John</td>\r\n                    <td>Smith</td>\r\n                    <td>@jsmith</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- /.table-responsive -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n          </div>\r\n          <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-6 -->\r\n      </div>\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n  </div>\r\n  <!-- /.wrapper -->\r\n\r\n</div>\r\n<!-- /.container -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Profile Page</title>\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\" style=\"padding-left: 250px; margin-top: 60px; width: auto;\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n\r\n\r\n      <div [@slideToLeft]=\"'true'\">\r\n\r\n\r\n        <h1>Profile Page</h1>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ })

},[1162]);
//# sourceMappingURL=main.bundle.map