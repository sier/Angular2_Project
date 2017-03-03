webpackJsonp([0,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(202);
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
    function AF(af, router) {
        this.af = af;
        this.router = router;
    }
    /* get userEmail(){
   
       this.af.auth.subscribe(user => {
   
         if(user) {
   // gets users email if logged in
           this.user = this.af.auth.getAuth().auth.email
   
         }
         else {
   // user not logged in
   
         }
       });
       return this.user;
     }
   */
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
    AF.prototype.logInWithFacebook = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].FacebookAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // Creates or Updates /users/uid
            _this._dbRoot.child('/users/' + user.uid).update({
                accessToken: accessToken,
                uid: user.uid,
                email: user.email,
            });
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
        this.router.navigate(['/login']);
    };
    AF = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AF);
    return AF;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/af.js.map

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 555,
	"./af.js": 555,
	"./ar": 561,
	"./ar-dz": 556,
	"./ar-dz.js": 556,
	"./ar-ly": 557,
	"./ar-ly.js": 557,
	"./ar-ma": 558,
	"./ar-ma.js": 558,
	"./ar-sa": 559,
	"./ar-sa.js": 559,
	"./ar-tn": 560,
	"./ar-tn.js": 560,
	"./ar.js": 561,
	"./az": 562,
	"./az.js": 562,
	"./be": 563,
	"./be.js": 563,
	"./bg": 564,
	"./bg.js": 564,
	"./bn": 565,
	"./bn.js": 565,
	"./bo": 566,
	"./bo.js": 566,
	"./br": 567,
	"./br.js": 567,
	"./bs": 568,
	"./bs.js": 568,
	"./ca": 569,
	"./ca.js": 569,
	"./cs": 570,
	"./cs.js": 570,
	"./cv": 571,
	"./cv.js": 571,
	"./cy": 572,
	"./cy.js": 572,
	"./da": 573,
	"./da.js": 573,
	"./de": 575,
	"./de-at": 574,
	"./de-at.js": 574,
	"./de.js": 575,
	"./dv": 576,
	"./dv.js": 576,
	"./el": 577,
	"./el.js": 577,
	"./en-au": 578,
	"./en-au.js": 578,
	"./en-ca": 579,
	"./en-ca.js": 579,
	"./en-gb": 580,
	"./en-gb.js": 580,
	"./en-ie": 581,
	"./en-ie.js": 581,
	"./en-nz": 582,
	"./en-nz.js": 582,
	"./eo": 583,
	"./eo.js": 583,
	"./es": 585,
	"./es-do": 584,
	"./es-do.js": 584,
	"./es.js": 585,
	"./et": 586,
	"./et.js": 586,
	"./eu": 587,
	"./eu.js": 587,
	"./fa": 588,
	"./fa.js": 588,
	"./fi": 589,
	"./fi.js": 589,
	"./fo": 590,
	"./fo.js": 590,
	"./fr": 593,
	"./fr-ca": 591,
	"./fr-ca.js": 591,
	"./fr-ch": 592,
	"./fr-ch.js": 592,
	"./fr.js": 593,
	"./fy": 594,
	"./fy.js": 594,
	"./gd": 595,
	"./gd.js": 595,
	"./gl": 596,
	"./gl.js": 596,
	"./he": 597,
	"./he.js": 597,
	"./hi": 598,
	"./hi.js": 598,
	"./hr": 599,
	"./hr.js": 599,
	"./hu": 600,
	"./hu.js": 600,
	"./hy-am": 601,
	"./hy-am.js": 601,
	"./id": 602,
	"./id.js": 602,
	"./is": 603,
	"./is.js": 603,
	"./it": 604,
	"./it.js": 604,
	"./ja": 605,
	"./ja.js": 605,
	"./jv": 606,
	"./jv.js": 606,
	"./ka": 607,
	"./ka.js": 607,
	"./kk": 608,
	"./kk.js": 608,
	"./km": 609,
	"./km.js": 609,
	"./ko": 610,
	"./ko.js": 610,
	"./ky": 611,
	"./ky.js": 611,
	"./lb": 612,
	"./lb.js": 612,
	"./lo": 613,
	"./lo.js": 613,
	"./lt": 614,
	"./lt.js": 614,
	"./lv": 615,
	"./lv.js": 615,
	"./me": 616,
	"./me.js": 616,
	"./mi": 617,
	"./mi.js": 617,
	"./mk": 618,
	"./mk.js": 618,
	"./ml": 619,
	"./ml.js": 619,
	"./mr": 620,
	"./mr.js": 620,
	"./ms": 622,
	"./ms-my": 621,
	"./ms-my.js": 621,
	"./ms.js": 622,
	"./my": 623,
	"./my.js": 623,
	"./nb": 624,
	"./nb.js": 624,
	"./ne": 625,
	"./ne.js": 625,
	"./nl": 627,
	"./nl-be": 626,
	"./nl-be.js": 626,
	"./nl.js": 627,
	"./nn": 628,
	"./nn.js": 628,
	"./pa-in": 629,
	"./pa-in.js": 629,
	"./pl": 630,
	"./pl.js": 630,
	"./pt": 632,
	"./pt-br": 631,
	"./pt-br.js": 631,
	"./pt.js": 632,
	"./ro": 633,
	"./ro.js": 633,
	"./ru": 634,
	"./ru.js": 634,
	"./se": 635,
	"./se.js": 635,
	"./si": 636,
	"./si.js": 636,
	"./sk": 637,
	"./sk.js": 637,
	"./sl": 638,
	"./sl.js": 638,
	"./sq": 639,
	"./sq.js": 639,
	"./sr": 641,
	"./sr-cyrl": 640,
	"./sr-cyrl.js": 640,
	"./sr.js": 641,
	"./ss": 642,
	"./ss.js": 642,
	"./sv": 643,
	"./sv.js": 643,
	"./sw": 644,
	"./sw.js": 644,
	"./ta": 645,
	"./ta.js": 645,
	"./te": 646,
	"./te.js": 646,
	"./tet": 647,
	"./tet.js": 647,
	"./th": 648,
	"./th.js": 648,
	"./tl-ph": 649,
	"./tl-ph.js": 649,
	"./tlh": 650,
	"./tlh.js": 650,
	"./tr": 651,
	"./tr.js": 651,
	"./tzl": 652,
	"./tzl.js": 652,
	"./tzm": 654,
	"./tzm-latn": 653,
	"./tzm-latn.js": 653,
	"./tzm.js": 654,
	"./uk": 655,
	"./uk.js": 655,
	"./uz": 656,
	"./uz.js": 656,
	"./vi": 657,
	"./vi.js": 657,
	"./x-pseudo": 658,
	"./x-pseudo.js": 658,
	"./yo": 659,
	"./yo.js": 659,
	"./zh-cn": 660,
	"./zh-cn.js": 660,
	"./zh-hk": 661,
	"./zh-hk.js": 661,
	"./zh-tw": 662,
	"./zh-tw.js": 662
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1086;


/***/ }),

/***/ 1115:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1116:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 250px;\n  margin-top: 60px;\n  width: auto; }\n\n@media screen and (max-width: 750px) {\n  .container {\n    padding-left: 120px;\n    margin-top: 60px;\n    width: auto; } }\n"

/***/ }),

/***/ 1117:
/***/ (function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n  margin: 140px;\n  margin-left: 150px;\n  font-size: 20px;\n  background: transparent; }\n\n.equilabName {\n  margin-left: 5px;\n  margin-top: 5px; }\n\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px; }\n\n@media screen and (max-width: 750px) {\n  .example-card {\n    width: auto;\n    margin: 0;\n    margin-left: 0;\n    font-size: 20px;\n    background: transparent;\n    padding-top: 100px; } }\n\n.example-full-width {\n  width: 100%;\n  color: #FFFFFF; }\n\n.mat-card {\n  color: #FFFFFF; }\n\nbutton {\n  width: 100%;\n  height: 50px;\n  background-color: #ED6C44;\n  color: #FFFFFF;\n  font-size: 18px; }\n\n.newAccount {\n  margin-top: 40px; }\n\nmd-progress-spinner {\n  margin-top: 20px;\n  height: 150px;\n  width: inherit; }\n\n.error-text {\n  color: red; }\n\ndiv.custom-background {\n  padding: 0 0;\n  margin-bottom: 0;\n  color: #FFFFFF;\n  height: 100vh;\n  z-index: 3000;\n  width: 100%;\n  background: -webkit-linear-gradient(top, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%), url(assets/images/RiderBackgroundBlurMedium.jpg);\n  background: linear-gradient(to bottom, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%, rgba(55, 63, 72, 0.8) 100%), url(assets/images/RiderBackgroundBlurMedium.jpg);\n  background-size: cover; }\n"

/***/ }),

/***/ 1118:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 250px;\n  margin-top: 60px;\n  width: auto; }\n\n@media screen and (max-width: 750px) {\n  .container {\n    padding-left: 120px;\n    margin-top: 60px;\n    width: auto; } }\n"

/***/ }),

/***/ 1119:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 150px;\n  margin-top: 60px;\n  width: auto; }\n\n@media screen and (max-width: 750px) {\n  .container {\n    padding-left: 120px;\n    margin-top: 60px;\n    width: auto; } }\n\n.rowsPadding {\n  padding: 20px;\n  color: grey; }\n\nselect {\n  border-color: #FFFFFF;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.26);\n  height: 30px;\n  font-size: 16px;\n  margin-left: 15px;\n  margin-top: 15px;\n  color: grey;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 5px; }\n\n.setColor {\n  color: #ED6C44;\n  font-weight: bold; }\n\n.unSetColor {\n  color: grey; }\n\n.mat-ripple {\n  background-color: #ED6C44 !important; }\n\n.mat-tab-label {\n  background-color: #ED6C44 !important; }\n\nlabel {\n  background-color: green; }\n"

/***/ }),

/***/ 1120:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 250px;\n  margin-top: 60px;\n  width: auto; }\n\n@media screen and (max-width: 750px) {\n  .container {\n    padding-left: 120px;\n    margin-top: 60px;\n    width: auto; } }\n"

/***/ }),

/***/ 1121:
/***/ (function(module, exports) {

module.exports = "nav {\r\n  background-color: #ED6C44;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26);\r\n\r\n}\r\n\r\n.container-fluid {\r\n  margin: 0 15px;\r\n}\r\n\r\n.navbar-default {\r\n  border: none;\r\n}\r\n\r\nnav ul li a {\r\n  height: 55px;\r\n  line-height: 28px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-brand {\r\n  color: #ED6C44;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  padding-top: 10px;\r\n}\r\n\r\nnav ul li a:hover, .navbar-brand:hover {\r\n  color: #2b2b2b;\r\n}\r\n\r\n.active {\r\n  background-color: rgba(194, 43, 0, 1);\r\n}\r\n\r\n/* Collapsed when in mobile*/\r\n\r\n.navbar-default .navbar-nav > .active > a {\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-form {\r\n  border: none;\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #fff;\r\n}\r\n\r\nbutton.navbar-toggle.collapsed {\r\n  margin-top: 15px;\r\n}\r\n\r\n.navbar-default .navbar-toggle {\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 135px; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Stay on top */\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #ED6C44;\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 15px; /* Place content 60px from the top */\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  min-height:5px !important;\r\n  background-color: #ED6C44;\r\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26);\r\n\r\n}\r\n\r\n\r\n\r\n/* The navigation menu links */\r\na {\r\n  padding: 0 32px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  display: block;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\nhr {\r\n  border-color: #FFFFFF;\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n  color: #2b2b2b;\r\n}\r\n\r\nspan {\r\n  margin-right: 15px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  list-style-position: inside;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.active{\r\n  color:black;\r\n}\r\n.user{\r\n  padding: 0 32px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.userinfo,\r\n.header{\r\n  padding: 15px 5px 0px 16px;\r\n  position: relative;\r\n}\r\n.info{\r\n  padding: 8px 0 8px 80px;\r\n}\r\n.username{\r\n  font-size: 18px;\r\n  line-height: 24px;\r\n}\r\n.useremail{\r\n  font-size: 12px;\r\n  line-height: 1.35;\r\n}\r\n.avatar{\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 60px;\r\n\r\n}\r\n.avatar a.avatar:hover  {\r\n  background-color: #2b2b2b;\r\n  border-radius: 100%;\r\n}\r\n.avatarActive{\r\n  background-color: black;\r\n  border-radius: 100%;\r\n}\r\n.avatar a {\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\n\r\n@media screen and (max-width: 750px){\r\n  .sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 90px; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #ED6C44;\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 15px; /* Place content 60px from the top */\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n    img {\r\n      height:35px;\r\n    }\r\n\r\n\r\n    .name {\r\n      height: 15px;\r\n\r\n    }\r\n\r\n    .horse,.logo {\r\n      margin-left: 10px;\r\n    }\r\n\r\n\r\n\r\n  a {\r\n    padding: 0 16px;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #logoutSpan {\r\n    margin-top:345px !important;\r\n    margin-left:5px !important;\r\n\r\n  }\r\n}\r\n"

/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

module.exports = "/* Equilab project */\r\n.container{\r\n  padding-left: 250px;\r\n  margin-top: 60px;\r\n  width: auto;\r\n}\r\n@media screen and (max-width: 750px){\r\n  .container{\r\n    padding-left: 120px;\r\n    margin-top: 60px;\r\n    width: auto;\r\n  }\r\n}\r\nul{\r\n  margin-top: 50px;\r\n}\r\nli{\r\n  float:left; width:180px;\r\n}\r\n.block{\r\n  display: block;\r\n}\r\n.leftLoad{\r\n  padding-left: 150px;\r\n}\r\n"

/***/ }),

/***/ 1124:
/***/ (function(module, exports) {

module.exports = "\r\n<app-sidenav></app-sidenav>\r\n\r\n\r\n<!-- Page content goes here  -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1125:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isAuth()\" class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\"  class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"navbar-collapse collapse\" id=\"myNavbar\" [collapse]=\"isCollapsed\">\r\n\r\n      <!-- Left Side navbar goes here -->\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a class=\"navbar-brand\" [routerLink]=\"['/home']\"> <img src=\"assets/images/equilabFavicon.png\"\r\n                                                                   style=\"width: 40px; height: 40px;\"> </a></li>\r\n      </ul>\r\n\r\n      <!-- Right Side navbar goes here -->\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!isAuth()\" [routerLink]=\"['login']\"><a><span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\r\n        </li>\r\n        <li *ngIf=\"isAuth()\"><a (click)=\"onSignOut()\"><span class=\"glyphicon glyphicon-lock\"></span> Logout</a></li>\r\n       <!-- <li *ngIf=\"isAuth()\" [routerLink]=\"['profile']\"><a> <i class=\"material-icons\">account_circle</i></a></li> -->\r\n      </ul>\r\n    </div>\r\n\r\n\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ 1126:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth()\" class=\"navbar navbar-fixed-top\"></div>\r\n\r\n<div *ngIf=\"isAuth()\" id=\"mySidenav\" class=\"sidenav\">\r\n\r\n\r\n  <div>\r\n   <!-- <div class=\"userinfo\">\r\n      <div style=\"\" class=\"avatar\">\r\n       <a class=\"avatar\" style=\"padding: 0;\" [routerLink]=\"['profile']\" routerLinkActive=\"avatarActive\"><i class=\"material-icons\" style=\"font-size: 60px; color: #FFFFFF;\">account_circle</i></a>\r\n      </div>\r\n      <div class=\"info\">\r\n        <span style=\"color: #FFFFFF;\" class=\"username\">Logged in as:</span>\r\n        <span style=\"color: #FFFFFF;\" class=\"useremail\">{{user}}</span>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n    <a style=\"color: #FFFFFF; \" [routerLink]=\"['/home']\" routerLinkActive=\"active\"> <img class=\"logo\" src=\"assets/images/equilab-logo.png\"><img class=\"name\" style=\"margin-top: 10px;\" src=\"assets/images/equilabName.png\" height=\"20\"></a>\r\n    <hr>\r\n    <a [routerLink]=\"['/overview']\" routerLinkActive=\"active\"><img class=\"horse\" src=\"assets/images/horse-sidenav.png\"></a>\r\n    <hr>\r\n    <a [routerLink]=\"['/mystable']\" routerLinkActive=\"active\"><img style=\"margin-left: 10px;\" src=\"assets/images/horseshoe-sidenav.png\" height=\"45\"></a>\r\n    <hr>\r\n    <a [routerLink]=\"['/home']\" routerLinkActive=\"active\"><img style=\"margin-left: 10px;\" src=\"assets/images/trophy-sidenav.png\" height=\"45\"></a>\r\n    <hr>\r\n    <a (click)=\"onSignOut()\">Logout<span id=\"logoutSpan\" style=\"position: absolute; margin-top: 428px; margin-left: 10px;\" class=\"glyphicon glyphicon-lock\"></span></a>\r\n\r\n    <!-- <a [routerLink]=\"['/about']\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-info-sign\"></span>About</a>\r\n    <hr> -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 1127:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | About </title>\r\n\r\n\r\n<div class=\"container\" [@slideToLeft]=\"'true'\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n          <h1> ABOUT PAGE </h1>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Home</title>\r\n\r\n<style> chart {\r\n  display: block;\r\n}   </style>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\" [@slideToLeft]=\"'true'\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n\r\n            <ul>\r\n              <li *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li  *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li  *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" class=\"block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [colors]=\"barChartColors\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"!isLoading\" class=\"text-center leftLoad\" >\r\n              <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul>\r\n              <li *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" class=\"block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [colors]=\"barChartColors\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center leftLoad\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul>\r\n              <li *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" class=\"block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [colors]=\"barChartColors\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center leftLoad\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div [@fadeIn]=\"'true'\">\r\n\r\n\r\n            <h1> TEST QUERIES </h1>\r\n            <ul>\r\n              <li *ngFor=\"let item of userinfo | async\">{{item.first_name}}\r\n                {{item.weight}}kg {{item.gender}}\r\n              </li>\r\n              <li *ngFor=\"let item of horses | async\">{{item.name}}</li>\r\n              <li *ngFor=\"let item of trainings$ | async\">{{item.written_text}}\r\n                {{item.canter.beat}}\r\n              </li>\r\n            </ul>\r\n\r\n\r\n            <div *ngIf=\"isLoading\" class=\"block\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChartData\"\r\n                      [labels]=\"barChartLabels\"\r\n                      [options]=\"barChartOptions\"\r\n                      [colors]=\"barChartColors\"\r\n                      [legend]=\"barChartLegend\"\r\n                      [chartType]=\"barChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"!isLoading\" class=\"text-center leftLoad\">\r\n            <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 1129:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Login to your account</title>\r\n\r\n\r\n<div class=\"custom-background\">\r\n  <a class=\"navbar-brand\" href=\"https://equilab.horse/\"><img class=\"equilabName\"\r\n                                                             src=\"assets/images/equilabName.png\"\r\n                                                             height=\"25px\"/></a>\r\n  <div align=center class=\"container\">\r\n\r\n\r\n    <div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\r\n      <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Error:</span>\r\n      {{error}}\r\n    </div>\r\n\r\n    <md-card class=\"example-card\" [@slideUp]=\"'true'\">\r\n      <h2 *ngIf=\"!isLoading\" style=\"font-size: 22px;\"><img\r\n        src=\"assets/images/equilabFavicon.png\" height=\"60\" width=\"60\"/></h2>\r\n      <h2 *ngIf=\"isLoading\" style=\"font-size: 22px;\"><img src=\"assets/images/equilabFavicon.png\" height=\"200\"\r\n                                                          width=\"200\"/></h2>\r\n\r\n\r\n      <form *ngIf=\"!isLoading\" class=\"example-form\" #signInForm=\"ngForm\" (ngSubmit)=\"loginWithEmail(signInForm)\">\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Email\" type=\"email\" name=\"email\" class=\"email\" ngModel required>\r\n        </md-input-container>\r\n\r\n\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Lösenord\" type=\"password\" name=\"password\" class=\"password\"  ngModel required>\r\n        </md-input-container>\r\n        <br>\r\n        <div class=\"text-center\">\r\n          <button md-raised-button type=\"submit\">Login</button>\r\n          <br>\r\n          <p *ngIf=\"error\" class=\"error-text\">{{errorMessage}}</p>\r\n        </div>\r\n        <button md-raised-button  style=\"margin-top: 10px;\" (click)=\"logInWithFacebook()\">Login with Facebook</button>\r\n\r\n        <a href=\"#\" style=\"font-size: 15px;\"> Forgot your password?</a>\r\n\r\n      </form>\r\n\r\n      <div *ngIf=\"isLoading\" class=\"text-center\">\r\n        <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\r\n      </div>\r\n\r\n    </md-card>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | My Stable </title>\r\n\r\n<div class=\"container\" >\r\n  <div class=\"wrapper\" style=\"margin-top: 20px; margin-right: 20px;\">\r\n\r\n    <div id=\"page-wrapper\" [@slideToLeft]=\"'true'\">\r\n\r\n      <h1>My Stable</h1>\r\n\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card>\r\n            <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div style=\"display: block;\">\r\n                <canvas baseChart width=\"400\" height=\"400\"\r\n                        [datasets]=\"lineChartData\"\r\n                        [labels]=\"lineChartLabels\"\r\n                        [options]=\"lineChartOptions\"\r\n                        [colors]=\"lineChartColors\"\r\n                        [legend]=\"lineChartLegend\"\r\n                        [chartType]=\"lineChartType\"\r\n                        (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <table class=\"table table-responsive table-condensed\">\r\n                <tr>\r\n                  <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\r\n                </tr>\r\n                <tr *ngFor=\"let d of lineChartData\">\r\n                  <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          </md-card>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n\r\n          <md-card>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div style=\"display: block;\">\r\n                  <canvas baseChart width=\"400\" height=\"400\"\r\n                          [datasets]=\"lineChartData\"\r\n                          [labels]=\"lineChartLabels\"\r\n                          [options]=\"lineChartOptions\"\r\n                          [colors]=\"lineChartColors\"\r\n                          [legend]=\"lineChartLegend\"\r\n                          [chartType]=\"lineChartType\"\r\n                          (chartHover)=\"chartHovered($event)\"\r\n                          (chartClick)=\"chartClicked($event)\"></canvas>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\" style=\"margin-bottom: 10px\">\r\n                <table class=\"table table-responsive table-condensed\">\r\n                  <tr>\r\n                    <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let d of lineChartData\">\r\n                    <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </md-card>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n        <div class=\"row\" style=\"margin-top: 20px;\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                Kitchen Sink\r\n              </div>\r\n              <!-- /.panel-heading -->\r\n              <div class=\"panel-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-striped table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>#</th>\r\n                      <th>First Name</th>\r\n                      <th>Last Name</th>\r\n                      <th>Username</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                      <td>1</td>\r\n                      <td>Mark</td>\r\n                      <td>Otto</td>\r\n                      <td>@mdo</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>2</td>\r\n                      <td>Jacob</td>\r\n                      <td>Thornton</td>\r\n                      <td>@fat</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>3</td>\r\n                      <td>Larry</td>\r\n                      <td>the Bird</td>\r\n                      <td>@twitter</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <!-- /.table-responsive -->\r\n              </div>\r\n              <!-- /.panel-body -->\r\n            </div>\r\n            <!-- /.panel -->\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                Kitchen Sink\r\n              </div>\r\n              <!-- /.panel-heading -->\r\n              <div class=\"panel-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-striped table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>#</th>\r\n                      <th>First Name</th>\r\n                      <th>Last Name</th>\r\n                      <th>Username</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                      <td>1</td>\r\n                      <td>Mark</td>\r\n                      <td>Otto</td>\r\n                      <td>@mdo</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>2</td>\r\n                      <td>Jacob</td>\r\n                      <td>Thornton</td>\r\n                      <td>@fat</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>3</td>\r\n                      <td>Larry</td>\r\n                      <td>the Bird</td>\r\n                      <td>@twitter</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <!-- /.table-responsive -->\r\n              </div>\r\n              <!-- /.panel-body -->\r\n            </div>\r\n            <!-- /.panel -->\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1131:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Overview</title>\r\n\r\n<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\" [@slideToLeft]=\"'true'\">\r\n      <div>\r\n        <md-card>\r\n          <md-tab-group>\r\n            <md-tab>\r\n\r\n\r\n            <template class=\"tabColor\" md-tab-label>\r\n             Months\r\n            </template>\r\n              <select #select [(ngModel)]=\"current\" [ngClass]=\"{setColor: current}\" (change)=\"selectedFromList($event.target.selectedIndex)\">\r\n              <option *ngFor=\"let item of list\" [ngClass]=\"{unSetColor: item}\" [value]=\"item.id\">{{item.name}}</option>\r\n              </select>\r\n            <p>{{weekday | date:\"ww\"}}</p>\r\n            <hr style=\"border-color: lightgrey; width:100%;\">\r\n              <p *ngFor='let v of _values2'>{{ v }} </p>\r\n          </md-tab>\r\n          <md-tab>\r\n            <template md-tab-label>\r\n              Weeks\r\n            </template>\r\n            <select #select [(ngModel)]=\"current\" [ngClass]=\"{setColor: current}\" (change)=\"selectedFromList($event.target.selectedIndex)\">\r\n              <option *ngFor=\"let item of list\" [ngClass]=\"{unSetColor: item}\" [value]=\"item.id\">{{item.name}}</option>\r\n            </select>\r\n            <p *ngFor='let v of _values2'>{{ v }} </p>\r\n            <table class=\"table-responsive\" style=\"width:100%;\">\r\n              <tr>\r\n                {{test}}\r\n                <th style=\"\" class=\"rowsPadding\">Horses</th>\r\n                <th class=\"rowsPadding\">W-3</th>\r\n                <th class=\"rowsPadding\">W-4</th>\r\n                <th class=\"rowsPadding\">W-5</th>\r\n                <th class=\"rowsPadding\">W-6</th>\r\n                <th class=\"rowsPadding\">W-7</th>\r\n                <th class=\"rowsPadding\">W-8</th>\r\n                <th class=\"rowsPadding\">\r\n                  <div class=\"week-number\">\r\n                    W-{{weekOfYear | week}}\r\n                  </div></th>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"display: flex\" class=\"rowsPadding\" *ngFor=\"let item of horses | async\">\r\n                  {{item.name}}\r\n                </td>\r\n                <td style=\"\" class=\"rowsPadding\" *ngFor=\"let item of trainingsS | async \">\r\n                  {{item.canter.beat}}\r\n                </td>\r\n\r\n              </tr>\r\n            </table>\r\n            <hr style=\"border-color: lightgrey; width:100%;\">\r\n          </md-tab>\r\n          <md-tab>\r\n\r\n            <template md-tab-label>\r\n              Days\r\n            </template>\r\n            <select #select [(ngModel)]=\"current\" [ngClass]=\"{setColor: current}\" (change)=\"selectedFromList($event.target.selectedIndex)\">\r\n              <option *ngFor=\"let item of list\" [ngClass]=\"{unSetColor: item}\" [value]=\"item.id\">{{item.name}}</option>\r\n            </select>\r\n            <p *ngFor='let v of _values2'>{{ v }} </p>\r\n            <table class=\"table-responsive\" style=\"width: 100%;\">\r\n              <tr >\r\n                <th style=\"\" class=\"rowsPadding\">Horses</th>\r\n                <th class=\"rowsPadding\">Tuesday</th>\r\n                <th class=\"rowsPadding\">Wednesday</th>\r\n                <th class=\"rowsPadding\">Thursday</th>\r\n                <th class=\"rowsPadding\">Friday</th>\r\n                <th class=\"rowsPadding\">Saturday</th>\r\n                <th class=\"rowsPadding\">Sunday</th>\r\n                <th class=\"rowsPadding\">Today</th>\r\n              </tr>\r\n              <tr></tr>\r\n            </table>\r\n            <hr style=\"border-color: lightgrey; width:100%;\">\r\n          </md-tab>\r\n        </md-tab-group>\r\n</md-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

module.exports = "<title>Equilab | Profile Page</title>\r\n\r\n<div class=\"container\" >\r\n  <div class=\"wrapper\">\r\n\r\n    <div id=\"page-wrapper\" [@slideToLeft]=\"'true'\">\r\n\r\n\r\n      <div [@slideToLeft]=\"'true'\">\r\n\r\n\r\n        <h1>Profile Page</h1>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(757);


/***/ }),

/***/ 139:
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

/***/ 307:
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_slideUp_animation__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(139);
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
            template: __webpack_require__(1127),
            styles: [__webpack_require__(1116)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_slideUp_animation__["a" /* slideUpAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/about-page.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_router_animations__ = __webpack_require__(139);
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
        this.barChartColors = [
            {
                backgroundColor: '#ff724f',
                borderColor: '#000000',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            }
        ];
        this.barChartLabels = this.horseNameArray;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.totalTimeArray, label: 'Test Test' },
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
            template: __webpack_require__(1128),
            styles: [__webpack_require__(1123)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_3__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/home-page.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__ = __webpack_require__(514);
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
            _this.router.navigate(['/overview']);
        }).catch(function (error) {
            if (error) {
                _this.isLoading = false;
                _this.error = error;
                console.log(_this.error);
            }
        });
    };
    LoginPageComponent.prototype.logInWithFacebook = function () {
        var _this = this;
        this.isLoading = true;
        this.afService.logInWithFacebook().then(function (authState) {
            console.log("SIGNED IN WITH FACEBOOK");
        }).catch(function (error) {
            _this.isLoading = false;
            _this.router.navigate(['/overview']);
        });
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(1129),
            styles: [__webpack_require__(1117)],
            animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__["a" /* slideUpAnimation */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/login-page.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(139);
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
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    MyStablePageComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    MyStablePageComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    MyStablePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-stable-page',
            template: __webpack_require__(1130),
            styles: [__webpack_require__(1118)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MyStablePageComponent);
    return MyStablePageComponent;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/my-stable-page.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(139);
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
    function OverviewPageComponent(angularfire) {
        var _this = this;
        this.angularfire = angularfire;
        this.weekOfYear = new Date();
        this.today = new Date();
        this.list = [
            { id: 1, name: 'Basis' },
            { id: 2, name: 'Gait' },
            { id: 3, name: 'Time' },
            { id: 4, name: 'Distance' },
            { id: 5, name: 'Rider' },
            { id: 6, name: 'Turns' },
            { id: 7, name: 'Performance' }
        ];
        this._values2 = [];
        this.current = 1;
        this.log = '';
        this.angularfire.auth.subscribe(function (auth) {
            if (auth != null) {
                _this.user = _this.angularfire.database.object('userinfo/' + auth.uid);
                _this.userKey = auth.uid;
                console.log(_this.userKey);
            }
        });
    }
    OverviewPageComponent.prototype.ngOnInit = function () {
        this.userInfo();
        this.trainingsInfo();
    };
    OverviewPageComponent.prototype.trainingsInfo = function () {
        var _this = this;
        var uid = this.userKey;
        // Map the stuffs
        var userTrainings = this.angularfire.database.list('/v1/userinfo/' + uid + '/trainings/', {
            query: {},
        }).map(function (results) {
            results.map(function (result) {
                result.trainings = _this.angularfire.database.object('/v1/trainings/' + result.$key);
            });
            return results;
        });
        // Subscribes to the userTrainings
        userTrainings.subscribe(function (userTrainings) {
            userTrainings.forEach(function (userTraining) {
                userTraining.trainings.subscribe(function (training) {
                    // user trainings comes here
                    console.log(training);
                });
            });
        });
    };
    OverviewPageComponent.prototype.userInfo = function () {
        this.horses = this.angularfire.database.list('/v1/horses/', {
            query: {
                orderByChild: 'owner_id',
                indexOn: "owner_id",
                equalTo: this.userKey,
            }
        });
        this.trainingsS = this.angularfire.database.list('/v1/trainings/', {
            query: {
                orderByChild: 'user',
                indexOn: "user",
                equalTo: this.userKey
            }
        });
    };
    OverviewPageComponent.prototype.logDropdown = function (id) {
        var NAME = this.list.find(function (item) { return item.id == id; }).name;
        // this.log += `Value ${NAME} was selected\n`
    };
    OverviewPageComponent.prototype.selectedFromList = function (name) {
        var obj = this.list[name];
        console.log(name, obj);
        if (!obj)
            return;
        if (obj.id == 1) {
            this._values2 = ['Array', 'från', 'Basis'];
        }
        else if (obj.id == 2) {
            this._values2 = ['Array', 'från', 'Gait'];
        }
        else if (obj.id == 3) {
            this._values2 = ['Array', 'från', 'Time'];
        }
        else if (obj.id == 4) {
            this._values2 = ['Array', 'från', 'Distance'];
        }
        else if (obj.id == 5) {
            this._values2 = ['Array', 'från', 'Rider'];
        }
        else if (obj.id == 6) {
            this._values2 = ['Array', 'från', 'Turns'];
        }
        else if (obj.id == 7) {
            this._values2 = ['Array', 'från', 'Performance'];
        }
        else {
            this._values2 = [];
        }
    };
    OverviewPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview-page',
            template: __webpack_require__(1131),
            styles: [__webpack_require__(1119)],
            animations: [__WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], OverviewPageComponent);
    return OverviewPageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/overview-page.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_af__ = __webpack_require__(106);
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
            template: __webpack_require__(1132),
            styles: [__webpack_require__(1120)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */], __WEBPACK_IMPORTED_MODULE_2__shared_animations_router_animations__["a" /* slideToLeft */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], ProfilePageComponent);
    return ProfilePageComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/profile-page.component.js.map

/***/ }),

/***/ 514:
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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(106);
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

/***/ 756:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 756;


/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(915);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/main.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(107);
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
            template: __webpack_require__(1124),
            styles: [__webpack_require__(1115)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/app.component.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_page_login_page_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_af__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_guard_auth_guard__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_page_profile_page_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_page_about_page_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_nav_nav_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_stable_page_my_stable_page_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_sidenav_sidenav_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_overview_page_overview_page_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_bootstrap__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_overview_page_week_pipe__ = __webpack_require__(919);
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
                __WEBPACK_IMPORTED_MODULE_19_ng2_bootstrap__["a" /* CollapseDirective */],
                __WEBPACK_IMPORTED_MODULE_20__pages_overview_page_week_pipe__["a" /* WeekPipe */]
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

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_page_login_page_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_page_profile_page_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_page_about_page_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_overview_page_overview_page_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_stable_page_my_stable_page_component__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_5__pages_overview_page_overview_page_component__["a" /* OverviewPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__pages_about_page_about_page_component__["a" /* AboutPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mystable', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_stable_page_my_stable_page_component__["a" /* MyStablePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/app.routing.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(106);
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
        this.isCollapsed = true;
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
            template: __webpack_require__(1125),
            styles: [__webpack_require__(1121)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/nav.component.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_af__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(107);
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
    function SideNavComponent(authService, angularFire) {
        var _this = this;
        this.authService = authService;
        this.angularFire = angularFire;
        this.isAuthenticated = false;
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFire.auth.subscribe(function (user) {
            if (user) {
                // gets users email if logged in
                _this.user = _this.angularFire.auth.getAuth().auth.email;
            }
            else {
                // user not logged in no email
                _this.user = {};
            }
        });
    };
    SideNavComponent.prototype.onSignOut = function () {
        this.authService.logout();
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
            template: __webpack_require__(1126),
            styles: [__webpack_require__(1122)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/sidenav.component.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeekPipe = (function () {
    function WeekPipe() {
    }
    WeekPipe.prototype.transform = function (value) {
        return this.getWeekNumber(value);
    };
    // source: http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
    WeekPipe.prototype.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(+d);
        d.setHours(0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    WeekPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'week' }), 
        __metadata('design:paramtypes', [])
    ], WeekPipe);
    return WeekPipe;
}());
//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/week.pipe.js.map

/***/ }),

/***/ 920:
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

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Patrik/Documents/Development/Equilab Repository/equilab/src/polyfills.js.map

/***/ })

},[1382]);
//# sourceMappingURL=main.bundle.map