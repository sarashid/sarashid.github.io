(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: "AIzaSyDimUxsxTSNUFXvMq0XS7UgVtZ0urtmg8Y",
            authDomain: "courses-project-128e7.firebaseapp.com",
            databaseURL: "https://courses-project-128e7.firebaseio.com",
            projectId: "courses-project-128e7",
            storageBucket: "courses-project-128e7.appspot.com",
            messagingSenderId: "644152179308"
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth_singup_singup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/singup/singup.component */ "./src/app/auth/singup/singup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _students_students_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./students/students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _auth_singup_singup_component__WEBPACK_IMPORTED_MODULE_16__["SingupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _main_main_module__WEBPACK_IMPORTED_MODULE_10__["MainModule"]
            ],
            providers: [
                _courses_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"],
                _students_students_service__WEBPACK_IMPORTED_MODULE_18__["StudentsService"],
                _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"],
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["FirestoreSettingsToken"], useValue: {} }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authservice) {
        this.authservice = authservice;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authservice.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.authChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthService.prototype.registerUser = function (authData) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(function (response) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                _this.authChange.next(true);
            });
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            console.log(error);
            _this.authChange.next(false);
        });
    };
    AuthService.prototype.login = function (authData) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(function (response) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
                .currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                _this.authChange.next(true);
            });
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            console.log(error);
            _this.authChange.next(false);
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]()
            .currentUser.getIdToken()
            .then(function (token) { return (_this.token = token); });
        return this.token;
    };
    AuthService.prototype.logout = function () {
        this.router.navigate(["/"]);
        return (this.token = null);
    };
    AuthService.prototype.getUser = function () {
        //spread user object into new object
        return __assign({}, this.user); //same property but diffrent object
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/***************** Validation ******************/\r\n\r\n.invalid-input {\r\n  border: 1.2px solid red;\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 38, 0, 0.333);\r\n}\r\n\r\n.invalid-label {\r\n  color: red;\r\n}\r\n\r\n/********************image style**************************/\r\n\r\n.user-img {\r\n  -webkit-transform: translateY(-32px);\r\n          transform: translateY(-32px);\r\n}\r\n\r\n.user-img img {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n/********************form style**************************/\r\n\r\n.form-signin {\r\n  -webkit-transform: translateY(-15px);\r\n          transform: translateY(-15px);\r\n}\r\n\r\n.group {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n/******************input******************/\r\n\r\ninput {\r\n  font-size: 18px;\r\n  padding: 10px 10px 10px 5px;\r\n  display: block;\r\n  width: 85vw;\r\n  border: 1.5px solid #063854;\r\n  border-radius: 8px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* label */\r\n\r\nlabel {\r\n  color: #063854;\r\n  font-size: 16px;\r\n  position: absolute;\r\n  left: 12px;\r\n  top: -23px;\r\n}\r\n\r\n/************** signin-button*****************/\r\n\r\n#login {\r\n  background-color: #063854;\r\n  border-color: #063854;\r\n}\r\n\r\n/***********************responsive desktop**************************/\r\n\r\n@media (min-width:1024px) {\r\n  input {\r\n    width: 38vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQsaURBQWlEOztBQUVqRDtFQUNFLHdCQUF3QjtFQUN4QixpREFBaUQ7Q0FDbEQ7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBSUQsMkRBQTJEOztBQUMzRDtFQUNFLHFDQUE2QjtVQUE3Qiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUdELDBEQUEwRDs7QUFFMUQ7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRCwyQ0FBMkM7O0FBQzNDO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQsV0FBVzs7QUFDWDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0FBRUQsK0NBQStDOztBQUMvQztFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7Q0FDdkI7O0FBR0QscUVBQXFFOztBQUNyRTtFQUNFO0lBQ0UsWUFBWTtHQUNiO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKiBWYWxpZGF0aW9uICoqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5pbnZhbGlkLWlucHV0IHtcclxuICBib3JkZXI6IDEuMnB4IHNvbGlkIHJlZDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDM4LCAwLCAwLjMzMyk7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKmltYWdlIHN0eWxlKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi51c2VyLWltZyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMnB4KTtcclxufVxyXG5cclxuLnVzZXItaW1nIGltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqZm9ybSBzdHlsZSoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqaW5wdXQqKioqKioqKioqKioqKioqKiovXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzA2Mzg1NDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBsYWJlbCAqL1xyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICMwNjM4NTQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMnB4O1xyXG4gIHRvcDogLTIzcHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKiBzaWduaW4tYnV0dG9uKioqKioqKioqKioqKioqKiovXHJcbiNsb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mzg1NDtcclxuICBib3JkZXItY29sb3I6ICMwNjM4NTQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKipyZXNwb25zaXZlIGRlc2t0b3AqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDM4dnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-img d-flex justify-content-center\">\n  <img src=\"../../assets/images/user.png\" alt=\"rocket_contact\" />\n</div>\n\n<div class=\"form-signin d-flex justify-content-center\">\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n    <div class=\"group\">\n      <label [ngClass]=\"{'invalid-label':email.invalid && ( email.dirty|| email.touched)}\">Email</label>\n      <input type=\"text\" ngModel name=\"email\" required email #email=\"ngModel\" [ngClass]=\"{'invalid-input':email.invalid && ( email.dirty|| email.touched)}\">\n      <span class=\"help-block text-danger\" *ngIf=\"email.invalid && ( email.dirty|| email.touched)\"> Please enter a\n        valid email </span>\n    </div>\n\n    <div class=\"group\">\n      <label [ngClass]=\"{'invalid-label':password.invalid && (password.dirty || password.touched)}\">Password</label>\n      <input type=\"password\" ngModel name=\"password\" required #password=\"ngModel\" minlength=\"6\" [ngClass]=\"{'invalid-input':password.invalid && (password.dirty || password.touched)}\">\n      <span class=\"help-block text-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\"> Please\n        enter a valid password </span>\n    </div>\n\n    <span class=\"help-block text-danger float-left\" *ngIf=\"!isAuth\"> incorrect email or password </span>\n\n    <button id=\"login\" class=\"btn btn-primary float-right\" type=\"submit\" *ngIf=\"!spinnerShow\" [disabled]=\"f.invalid\">login</button>\n    <app-spinner class=\"float-right\" *ngIf=\"spinnerShow\"></app-spinner>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authservice) {
        this.authservice = authservice;
        this.isAuth = true;
        this.spinnerShow = false;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authservice.login({
            email: form.value.email,
            password: form.value.password
        });
        this.authservice.authChange.subscribe(function (auth) {
            _this.isAuth = auth;
            if (!_this.isAuth) {
                _this.spinnerShow = false;
            }
            return _this.spinnerShow;
        });
        if (!this.isAuthenticated()) {
            this.spinnerShow = true;
        }
        else {
            this.spinnerShow = false;
        }
    };
    SigninComponent.prototype.isAuthenticated = function () {
        return this.authservice.isAuthenticated();
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signin",
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/singup/singup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/singup/singup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/***************** Validation ******************/\r\n\r\n.invalid-input {\r\n  border: 1.2px solid red;\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 38, 0, 0.333);\r\n}\r\n\r\n.invalid-label {\r\n  color: red;\r\n}\r\n\r\n.user-img {\r\n  -webkit-transform: translateY(-49px);\r\n          transform: translateY(-49px);\r\n}\r\n\r\n.user-img img {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n/* form style */\r\n\r\n.signup-form {\r\n  -webkit-transform: translateY(-15px);\r\n          transform: translateY(-15px);\r\n}\r\n\r\n.group {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n}\r\n\r\ninput {\r\n  font-size: 18px;\r\n  padding: 10px 10px 10px 5px;\r\n  display: block;\r\n  width: 85vw;\r\n  border: 1.5px solid #063854;\r\n  border-radius: 8px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* label */\r\n\r\nlabel {\r\n  color: #063854;\r\n  font-size: 16px;\r\n  position: absolute;\r\n  left: 12px;\r\n  top: -23px;\r\n}\r\n\r\n.signup-btn {\r\n  background-color: #063854;\r\n  border-color: #063854;\r\n}\r\n\r\n@media (min-width:1024px) {\r\n  input {\r\n    width: 38vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaW5ndXAvc2luZ3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQsaURBQWlEOztBQUVqRDtFQUNFLHdCQUF3QjtFQUN4QixpREFBaUQ7Q0FDbEQ7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBSUQ7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFHRCxnQkFBZ0I7O0FBQ2hCO0VBQ0UscUNBQTZCO1VBQTdCLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRCxXQUFXOztBQUNYO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7Q0FDdkI7O0FBR0Q7RUFDRTtJQUNFLFlBQVk7R0FDYjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaW5ndXAvc2luZ3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKiogVmFsaWRhdGlvbiAqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uaW52YWxpZC1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxLjJweCBzb2xpZCByZWQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAzOCwgMCwgMC4zMzMpO1xyXG59XHJcblxyXG4uaW52YWxpZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG4udXNlci1pbWcge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDlweCk7XHJcbn1cclxuXHJcbi51c2VyLWltZyBpbWcge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuXHJcbi8qIGZvcm0gc3R5bGUgKi9cclxuLnNpZ251cC1mb3JtIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODV2dztcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwNjM4NTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogbGFiZWwgKi9cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjMDYzODU0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTJweDtcclxuICB0b3A6IC0yM3B4O1xyXG59XHJcblxyXG4uc2lnbnVwLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mzg1NDtcclxuICBib3JkZXItY29sb3I6ICMwNjM4NTQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzh2dztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/singup/singup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/singup/singup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-img d-flex justify-content-center\">\n  <img src=\"../../assets/images/user.png\" alt=\"rocket_contact\" />\n</div>\n<div class=\"signup-form d-flex justify-content-center \">\n  <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n\n    <div class=\"group\">\n      <label [ngClass]=\"{'invalid-label':email.invalid && ( email.dirty|| email.touched)}\">Email</label>\n      <input type=\"text\" ngModel name=\"email\" required email #email=\"ngModel\" [ngClass]=\"{'invalid-input':email.invalid && ( email.dirty|| email.touched)}\">\n      <span class=\"help-block text-danger\" *ngIf=\"email.invalid && ( email.dirty|| email.touched)\"> Please enter a\n        valid email </span>\n\n    </div>\n\n    <div class=\"group\">\n      <label [ngClass]=\"{'invalid-label':password.invalid && (password.dirty || password.touched)}\">Password</label>\n      <input type=\"password\" ngModel name=\"password\" required #password=\"ngModel\" minlength=\"6\" [ngClass]=\"{'invalid-input':password.invalid && (password.dirty || password.touched)}\">\n      <span class=\"help-block text-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\"> Please\n        enter a valid password </span>\n    </div>\n    <div class=\"group\">\n      <label [ngClass]=\"{'invalid-label':confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)}\">Confirm-password</label>\n      <input type=\"password\" ngModel name=\"confirmPassword\" required #confirmPassword=\"ngModel\" compare=\"password\"\n        [ngClass]=\"{'invalid-input':confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)}\">\n      <span class=\"help-block text-danger\" *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\">\n        <span class=\"help-block text-danger\" *ngIf=\"confirmPassword.errors['required']\"> passworf confirm required\n        </span>\n        <span class=\"help-block text-danger\" *ngIf=\"confirmPassword.errors['compare']\"> password don't match\n        </span>\n      </span>\n\n    </div>\n    <span class=\"help-block text-danger float-left\" *ngIf=\"!isAuth\"> The email address is already in use by another\n      account.</span>\n    <button class=\"btn btn-primary signup-btn float-right\" *ngIf=\"!spinnerShow\" type=\"submit\" [disabled]=\"f.invalid\">Register</button>\n    <app-spinner class=\"float-right\" *ngIf=\"spinnerShow\"></app-spinner>\n\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/singup/singup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/singup/singup.component.ts ***!
  \*************************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingupComponent = /** @class */ (function () {
    function SingupComponent(authservice) {
        this.authservice = authservice;
        this.spinnerShow = false;
        this.isAuth = true;
    }
    SingupComponent.prototype.ngOnInit = function () { };
    SingupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authservice.registerUser({
            email: form.value.email,
            password: form.value.password
        });
        this.authservice.authChange.subscribe(function (auth) {
            _this.isAuth = auth;
            if (!_this.isAuth) {
                _this.spinnerShow = false;
            }
            return _this.spinnerShow;
        });
        if (!this.isAuthenticated()) {
            this.spinnerShow = true;
        }
        else {
            this.spinnerShow = false;
        }
    };
    SingupComponent.prototype.isAuthenticated = function () {
        return this.authservice.isAuthenticated();
    };
    SingupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-singup",
            template: __webpack_require__(/*! ./singup.component.html */ "./src/app/auth/singup/singup.component.html"),
            styles: [__webpack_require__(/*! ./singup.component.css */ "./src/app/auth/singup/singup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], SingupComponent);
    return SingupComponent;
}());



/***/ }),

/***/ "./src/app/courses-students/courses-list/courses-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/courses-students/courses-list/courses-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-buttons{\r\n  list-style-type: none;\r\n  margin: 0 0 0 -40px;\r\n}\r\n.ul-buttons>li{\r\n  display:inline;\r\n  padding-right: 5px;\r\n}\r\n.btn-table{\r\n  border-radius: 10.5px;\r\n}\r\n.btn-add{\r\nborder-radius: 12px;\r\n}\r\ntable{\r\n  text-align: center;\r\n}\r\n.searching{\r\n  margin: 0;\r\n}\r\n.searchbar {\r\n  border: 0;\r\n  border-bottom: 5px solid #063854;\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  color: #063854\r\n}\r\n.searchbar:focus {\r\n  box-shadow: none;\r\n}\r\n.date{\r\ndisplay: none;\r\n}\r\n@media (min-width:1024px) {\r\n  .date{\r\n    display: table-cell;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9jb3Vyc2VzLWxpc3QvY291cnNlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7QUFFRDtBQUNBLG9CQUFvQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixjQUFjO0NBQ2Y7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0FBQ0EsY0FBYztDQUNiO0FBRUQ7RUFDRTtJQUNFLG9CQUFvQjtLQUNuQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9jb3Vyc2VzLWxpc3QvY291cnNlcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWwtYnV0dG9uc3tcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIDAgMCAtNDBweDtcclxufVxyXG4udWwtYnV0dG9ucz5saXtcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4tdGFibGV7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG59XHJcblxyXG4uYnRuLWFkZHtcclxuYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG50YWJsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaGluZ3tcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDYzODU0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwNjM4NTRcclxufVxyXG5cclxuLnNlYXJjaGJhcjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmRhdGV7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC5kYXRle1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/courses-students/courses-list/courses-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/courses-students/courses-list/courses-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row searching\">\n  <div class=\"col-md-6 mt-2\">\n    <!-- <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\" [(ngModel)]=\"filtered\"> -->\n    <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\" >\n  </div>\n  <div class=\"col-md-6 d-flex justify-content-end\" style=\"transform: translateY(20px);\">\n\n    <a routerLink=\"/courses/course\">\n      <button class=\"btn-add  btn btn-success\">ADD</button>\n    </a>\n\n  </div>\n</div>\n\n\n\n<table class=\"table table-hover mt-4\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">course Name</th>\n      <th scope=\"col\" class=\"date\">Date</th>\n      <th></th>\n    </tr>\n  </thead>\n  <!-- <tbody *ngFor=\"let course of courses| search:filtered:'course.name'; let i=index;\"> -->\n  <tbody *ngFor=\"let course of courses;let i=index\">\n    <tr>\n      <th scope=\"row\">{{i+1}}</th>\n      <td><a [routerLink]=\"['/courses/course', course.id]\"\n         (click)=\"onEdit(course)\"> {{course.name}} </a></td>\n      <td class=\"date\">{{course.date.toDate() | date: 'dd/MM/yyyy'}}</td>\n      <td>\n        <ul class=\"ul-buttons\">\n          <li><button class=\" btn-table btn btn-secondary\">{{course.students.length}}</button></li>\n          <li><button class=\" btn-table btn btn-danger\" (click)=\"openModal(template)\">X</button></li>\n          <ng-template #template>\n            <div class=\"modal-body text-center\">\n              <p>Do you want to delete {{course.name}} course?</p>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"onDeleteCourse(course.id)\">Yes</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">No</button>\n            </div>\n          </ng-template>\n        </ul>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/courses-students/courses-list/courses-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/courses-students/courses-list/courses-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CoursesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListComponent", function() { return CoursesListComponent; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesListComponent = /** @class */ (function () {
    function CoursesListComponent(coursesservice, modalService, firestore) {
        this.coursesservice = coursesservice;
        this.modalService = modalService;
        this.firestore = firestore;
        this.filtered = "";
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesservice.getAll().subscribe(function (courses) {
            _this.courses = courses
                .map(function (course) {
                var data = course.payload.doc.data();
                data.id = course.payload.doc.id;
                return __assign({}, data);
            })
                .slice(courses.length - 5, courses.length);
        });
    };
    CoursesListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    CoursesListComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    CoursesListComponent.prototype.onDeleteCourse = function (id) {
        this.firestore.doc("courses/" + id).delete();
        this.modalRef.hide();
    };
    CoursesListComponent.prototype.onEdit = function (course) {
        this.coursesservice.course = Object.assign({}, course);
    };
    CoursesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-courses-list",
            template: __webpack_require__(/*! ./courses-list.component.html */ "./src/app/courses-students/courses-list/courses-list.component.html"),
            styles: [__webpack_require__(/*! ./courses-list.component.css */ "./src/app/courses-students/courses-list/courses-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], CoursesListComponent);
    return CoursesListComponent;
}());



/***/ }),

/***/ "./src/app/courses-students/courses-students.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/courses-students/courses-students.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font: bolder;\r\n  text-align: center;\r\n}\r\n@media (min-width:1024px) {\r\n  h2 {\r\n    position: relative;\r\n    bottom: 8.5vh;\r\n    color: white;\r\n\r\n  }\r\n\r\n  #inmob {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9jb3Vyc2VzLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTs7R0FFZDs7RUFFRDtJQUNFLE9BQU87R0FDUjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9jb3Vyc2VzLXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udDogYm9sZGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI0cHgpIHtcclxuICBoMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDguNXZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICB9XHJcblxyXG4gICNpbm1vYiB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/courses-students/courses-students.component.html":
/*!******************************************************************!*\
  !*** ./src/app/courses-students/courses-students.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section>\n      <div class=\"row\" style=\" margin: 0;\">\n        <div class=\"col-md-6\">\n            <app-courses-list></app-courses-list>\n        </div>\n        <div class=\"col-md-6\" id=\"inmob\">\n\n          <app-students-list></app-students-list>\n        </div>\n      </div>\n\n  </section>\n"

/***/ }),

/***/ "./src/app/courses-students/courses-students.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/courses-students/courses-students.component.ts ***!
  \****************************************************************/
/*! exports provided: CoursesStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesStudentsComponent", function() { return CoursesStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesStudentsComponent = /** @class */ (function () {
    function CoursesStudentsComponent(authservice) {
        this.authservice = authservice;
    }
    CoursesStudentsComponent.prototype.ngOnInit = function () {
    };
    CoursesStudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses-students',
            template: __webpack_require__(/*! ./courses-students.component.html */ "./src/app/courses-students/courses-students.component.html"),
            styles: [__webpack_require__(/*! ./courses-students.component.css */ "./src/app/courses-students/courses-students.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CoursesStudentsComponent);
    return CoursesStudentsComponent;
}());



/***/ }),

/***/ "./src/app/courses-students/students-list/students-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/courses-students/students-list/students-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-buttons{\r\n  list-style-type: none;\r\n  margin: 0 -9px 0 -45px;\r\n}\r\n.ul-buttons>li{\r\n  display:inline;\r\n  padding-right: 5px;\r\n}\r\n.btn-table{\r\n  border-radius: 10.5px;\r\n}\r\n.btn-add{\r\nborder-radius: 12px;\r\n}\r\ntable{\r\n  text-align: center;\r\n}\r\n.searching{\r\n  margin: 0;\r\n}\r\n.searchbar {\r\n  border: 0;\r\n  border-bottom: 5px solid #063854;\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  color: #063854\r\n}\r\n.searchbar:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9zdHVkZW50cy1saXN0L3N0dWRlbnRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUVEO0FBQ0Esb0JBQW9CO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1zdHVkZW50cy9zdHVkZW50cy1saXN0L3N0dWRlbnRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bC1idXR0b25ze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDAgLTlweCAwIC00NXB4O1xyXG59XHJcbi51bC1idXR0b25zPmxpe1xyXG4gIGRpc3BsYXk6aW5saW5lO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi10YWJsZXtcclxuICBib3JkZXItcmFkaXVzOiAxMC41cHg7XHJcbn1cclxuXHJcbi5idG4tYWRke1xyXG5ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VhcmNoaW5ne1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc2VhcmNoYmFyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwNjM4NTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzA2Mzg1NFxyXG59XHJcblxyXG4uc2VhcmNoYmFyOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/courses-students/students-list/students-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/courses-students/students-list/students-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row searching\">\n    <div class=\"col-md-6 mt-2\">\n      <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\">\n    </div>\n\n    <div class=\"col-md-6 d-flex justify-content-end\" style=\"transform: translateY(20px);\">\n\n        <a routerLink=\"/students/student\">\n          <button class=\"btn-add  btn btn-success\">ADD</button>\n        </a>\n\n      </div>\n  </div>\n\n  <table class=\"table table-hover mt-4\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">student name</th>\n            <th></th>\n          </tr>\n        </thead>\n\n        <!-- <tbody *ngFor=\"let student of students|search:filtered:'student.name'; let i=index\"> -->\n        <tbody *ngFor=\"let student of students; let i=index\">\n          <tr>\n            <th scope=\"row\">{{i+1}}</th>\n            <a  [routerLink]=\"['/students/student',student.id]\" (click)=\"onEdit(student)\" >\n              <td>{{student.name}}</td>\n            </a>\n            <td>\n              <!-- <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"onDeleteCourse(i)\"></i> -->\n              <ul class=\"ul-buttons\">\n                  <li><button class=\" btn-table btn btn-secondary\">{{student.courses.length}}</button></li>\n                  <li><button class=\" btn-table btn btn-danger\" (click)=\"openModal(template)\">X</button></li>\n                  <ng-template #template>\n                    <div class=\"modal-body text-center\">\n                      <p>Do you want to confirm?</p>\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(student.id)\">Yes</button>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">No</button>\n                    </div>\n                  </ng-template>\n                </ul>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n"

/***/ }),

/***/ "./src/app/courses-students/students-list/students-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/courses-students/students-list/students-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_students_students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/students/students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(studentservice, modalService, firestore) {
        this.studentservice = studentservice;
        this.modalService = modalService;
        this.firestore = firestore;
        this.filtered = '';
    }
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentservice.getAll().subscribe(function (students) {
            _this.students = students.map(function (student) {
                var data = student.payload.doc.data();
                data.id = student.payload.doc.id;
                return __assign({}, data);
            }).slice(students.length - 5, students.length);
        });
    };
    StudentsListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    StudentsListComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    StudentsListComponent.prototype.onDelete = function (id) {
        this.firestore.doc("students/" + id).delete();
        this.modalRef.hide();
    };
    StudentsListComponent.prototype.onEdit = function (student) {
        console.log(student);
        this.studentservice.student = Object.assign({}, student);
    };
    StudentsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-list',
            template: __webpack_require__(/*! ./students-list.component.html */ "./src/app/courses-students/students-list/students-list.component.html"),
            styles: [__webpack_require__(/*! ./students-list.component.css */ "./src/app/courses-students/students-list/students-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_students_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["BsModalService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/courses/all-courses/all-courses.component.css":
/*!***************************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-buttons{\r\n  list-style-type: none;\r\n  margin: 0 0 0 -60px;\r\n}\r\n.ul-buttons>li{\r\n  display:inline;\r\n  padding-right: 5px;\r\n}\r\n.btn-table{\r\n  border-radius: 10.5px;\r\n}\r\n.btn-add{\r\nborder-radius: 12px\r\n}\r\ntable{\r\n  text-align: center;\r\n}\r\n.searchbar {\r\n  border: 0;\r\n  border-bottom: 5px solid #063854;\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  color: #063854\r\n}\r\n.searchbar:focus {\r\n  box-shadow: none;\r\n}\r\n.display-date{\r\n  display: none;\r\n}\r\n@media (min-width:1024px) {\r\n  .display-date{\r\n    display: table-cell;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9hbGwtY291cnNlcy9hbGwtY291cnNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBRUQ7QUFDQSxtQkFBbUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFO0lBQ0Usb0JBQW9CO0tBQ25CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzL2FsbC1jb3Vyc2VzL2FsbC1jb3Vyc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWwtYnV0dG9uc3tcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIDAgMCAtNjBweDtcclxufVxyXG4udWwtYnV0dG9ucz5saXtcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4tdGFibGV7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG59XHJcblxyXG4uYnRuLWFkZHtcclxuYm9yZGVyLXJhZGl1czogMTJweFxyXG59XHJcbnRhYmxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDYzODU0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwNjM4NTRcclxufVxyXG5cclxuLnNlYXJjaGJhcjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZGlzcGxheS1kYXRle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkge1xyXG4gIC5kaXNwbGF5LWRhdGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/courses/all-courses/all-courses.component.html":
/*!****************************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-3\">\r\n      <!-- <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\" [(ngModel)]=\"filtered\"> -->\r\n      <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\">\r\n    </div>\r\n    <div class=\"col-md-6 d-flex justify-content-end  mb-0 mt-1\">\r\n\r\n      <a routerLink=\"/courses/course\">\r\n        <button class=\"btn-add  btn btn-success\">ADD</button>\r\n      </a>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <table class=\"table table-hover content-wrapper\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Course</th>\r\n        <th scope=\"col\" class=\"display-date\">Date</th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n    </thead>\r\n    <!-- <tbody  *ngFor=\"let course of courses| search:filtered:'course.name'; let i=index;\"> -->\r\n    <tbody class=\"content-item\" *ngFor=\"let course of returnedArray; let i=index\">\r\n      <tr>\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td><a [routerLink]=\"['/courses/course', course.id]\" (click)=\"onEdit(course)\"> {{course.name}} </a></td>\r\n        <td class=\"display-date\">{{ course.date.toDate() | date: 'dd/MM/yyyy'}}</td>\r\n        <td>\r\n          <ul class=\"ul-buttons\">\r\n            <li><button class=\" btn-table btn btn-secondary\">{{course.students.length}}</button></li>\r\n            <li><button class=\" btn-table btn btn-danger\" (click)=\"openModal(template)\">X</button></li>\r\n            <ng-template #template>\r\n              <div class=\"modal-body text-center\">\r\n                <p>Do you want to delete {{course.name}} course?</p>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onDeleteCourse(course.id)\">Yes</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\">No</button>\r\n              </div>\r\n            </ng-template>\r\n          </ul>\r\n        </td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-12 d-flex justify-content-center\">\r\n      <pagination [boundaryLinks]=\"true\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\r\n        [totalItems]=\"courses.length\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/courses/all-courses/all-courses.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.component.ts ***!
  \**************************************************************/
/*! exports provided: AllCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesComponent", function() { return AllCoursesComponent; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCoursesComponent = /** @class */ (function () {
    function AllCoursesComponent(coursesservice, modalService, firestore) {
        this.coursesservice = coursesservice;
        this.modalService = modalService;
        this.firestore = firestore;
        this.courses = [];
        this.filtered = "";
    }
    AllCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesservice.getAll().subscribe(function (courses) {
            _this.courses = courses.map(function (course) {
                var data = course.payload.doc.data();
                data.id = course.payload.doc.id;
                return __assign({}, data);
            });
            _this.returnedArray = _this.courses.slice(0, 10);
        });
    };
    AllCoursesComponent.prototype.pageChanged = function (event, courses) {
        if (courses === void 0) { courses = this.courses; }
        var startItem = (event.page - 1) * event.itemsPerPage;
        var endItem = event.page * event.itemsPerPage;
        this.returnedArray = courses.slice(startItem, endItem);
    };
    AllCoursesComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    AllCoursesComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    AllCoursesComponent.prototype.onEdit = function (course) {
        this.coursesservice.course = Object.assign({}, course);
    };
    AllCoursesComponent.prototype.onDeleteCourse = function (id) {
        this.firestore.doc("courses/" + id).delete();
        this.modalRef.hide();
    };
    AllCoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-all-courses",
            template: __webpack_require__(/*! ./all-courses.component.html */ "./src/app/courses/all-courses/all-courses.component.html"),
            styles: [__webpack_require__(/*! ./all-courses.component.css */ "./src/app/courses/all-courses/all-courses.component.css")]
        }),
        __metadata("design:paramtypes", [_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["BsModalService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AllCoursesComponent);
    return AllCoursesComponent;
}());



/***/ }),

/***/ "./src/app/courses/course-edit/course-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/courses/course-edit/course-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 150px;\r\n  position: relative;\r\n  right: 47px;\r\n  top: 5px;\r\n}\r\ni{\r\n  position: relative;\r\n  top: 4.6vh;\r\n  right: 25px;\r\n  font-size: xx-large;\r\n  color: #063854;\r\n}\r\nul{\r\n list-style: none;\r\n}\r\nbutton{\r\n  position: relative;\r\n  left: 24vw;\r\n  margin: 0 0 0px 6px;\r\n}\r\ninput.ng-invalid.ng-dirty.ng-touched, textarea.ng-invalid.ng-dirty.ng-touched {\r\n  border: 1px solid red;\r\n  box-shadow: 0 0 0 0.1rem rgba(255, 38, 0, 0.259);\r\n}\r\n/* The customcheck */\r\n.customcheck {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.customcheck input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 5px;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.customcheck:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.customcheck input:checked ~ .checkmark {\r\n  background-color: #02cf32;\r\n  border-radius: 5px;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.customcheck input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.customcheck .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n@media (min-width:1024px){\r\n  button{\r\n    position: relative;\r\n    left: 2vw;\r\n\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztDQUNWO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlEQUFpRDtDQUNsRDtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjtBQUVELHlDQUF5QztBQUN6QztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBRUQsOEJBQThCO0FBQzlCO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdEO0FBQ2hEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBRUQseURBQXlEO0FBQ3pEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUVELDhEQUE4RDtBQUM5RDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztDQUNmO0FBRUQscUNBQXFDO0FBQ3JDO0VBQ0UsZUFBZTtDQUNoQjtBQUVELG1DQUFtQztBQUNuQztFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUVqQyx5QkFBeUI7Q0FDMUI7QUFFRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7O0dBRVg7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiA0N3B4O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbml7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNC42dmg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogIzA2Mzg1NDtcclxufVxyXG5cclxudWx7XHJcbiBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJ1dHRvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjR2dztcclxuICBtYXJnaW46IDAgMCAwcHggNnB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLWRpcnR5Lm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctZGlydHkubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSByZ2JhKDI1NSwgMzgsIDAsIDAuMjU5KTtcclxufVxyXG5cclxuLyogVGhlIGN1c3RvbWNoZWNrICovXHJcbi5jdXN0b21jaGVjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmN1c3RvbWNoZWNrIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmN1c3RvbWNoZWNrOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5jdXN0b21jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2YzMjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmN1c3RvbWNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmN1c3RvbWNoZWNrIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDlweDtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMnZ3O1xyXG5cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/courses/course-edit/course-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/courses/course-edit/course-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"text-align: center\">\n    <div class=\"col-md-12\">\n      <img [src]=\"imagePath.value\" class=\"img-responsive\">\n    </div>\n  </div>\n  <form [formGroup]=\"courseForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"name\">Course name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n        </div>\n      </div>\n      <!-- <div class=\"col-md-2\">\n        <label for=\"name\">Course id:</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"id\">\n      </div> -->\n      <div class=\"col-md-6\">\n        <label for=\"name\">Course Date:</label>\n        <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" formControlName=\"date\" bsDatepicker>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"description\">Description:</label>\n          <textarea type=\"text\" class=\"form-control\" rows=\"6\" formControlName=\"description\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"imagePath\">Image Path:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"imagepath\" #imagePath>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h3> add student</h3>\n          <select class=\"form-control\" multiple formControlName=\"students\">\n            <option *ngFor=\"let student of students\" [value]=\"student.name\">{{student.name}}</option>\n          </select>\n        </div>\n        <div class=\"col-md-4\">\n          <!-- <h3>students List</h3> -->\n        </div>\n      </div>\n      <hr>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-ms-12\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!courseForm.valid\">save</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">cancel</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/courses/course-edit/course-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/courses/course-edit/course-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEditComponent", function() { return CourseEditComponent; });
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_students_students_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/students/students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseEditComponent = /** @class */ (function () {
    function CourseEditComponent(courseservice, studentservice, route, router, firestore) {
        this.courseservice = courseservice;
        this.studentservice = studentservice;
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.editMode = false;
        this.students = [];
    }
    CourseEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.editCourseId = +params["id"];
            _this.editedCourse = _this.courseservice.course;
            _this.editMode = params["id"] != null;
            _this.initForm();
            if (_this.editMode) {
                _this.patchEditCourseData();
            }
        });
        this.studentservice.getAll().subscribe(function (students) {
            _this.students = students.map(function (student) {
                var data = student.payload.doc.data();
                data.id = student.payload.doc.id;
                return __assign({}, data);
            });
        });
    };
    CourseEditComponent.prototype.patchEditCourseData = function () {
        this.courseForm.patchValue(this.editedCourse);
    };
    Object.defineProperty(CourseEditComponent.prototype, "courseStudents", {
        get: function () {
            return this.courseForm.get("students").controls;
        },
        enumerable: true,
        configurable: true
    });
    CourseEditComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.courseForm.value);
        delete data.id;
        if (this.editMode) {
            this.firestore.doc("courses/" + this.editedCourse.id).update(data);
            this.studentservice.courseStudentList(data["students"], data, this.students);
            this.router.navigate(["../../"], { relativeTo: this.route });
        }
        else {
            this.firestore.collection("courses").add(this.courseForm.value);
            this.studentservice.courseStudentList(data["students"], data, this.students);
            this.router.navigate(["../"], { relativeTo: this.route });
        }
    };
    CourseEditComponent.prototype.initForm = function () {
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            imagepath: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("https://cnvga.reteauaedu.ro/theme/timis/pix/defaultslider.png", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            students: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([])
        });
    };
    CourseEditComponent.prototype.onCancel = function () {
        if (this.editMode) {
            this.router.navigate(["../../"], { relativeTo: this.route });
        }
        else {
            this.router.navigate(["../"], { relativeTo: this.route });
        }
    };
    CourseEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-course-edit",
            template: __webpack_require__(/*! ./course-edit.component.html */ "./src/app/courses/course-edit/course-edit.component.html"),
            styles: [__webpack_require__(/*! ./course-edit.component.css */ "./src/app/courses/course-edit/course-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_courses_service__WEBPACK_IMPORTED_MODULE_0__["CoursesService"],
            src_app_students_students_service__WEBPACK_IMPORTED_MODULE_3__["StudentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], CourseEditComponent);
    return CourseEditComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesRoutingModule", function() { return CoursesRoutingModule; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-edit/course-edit.component */ "./src/app/courses/course-edit/course-edit.component.ts");
/* harmony import */ var _all_courses_all_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-courses/all-courses.component */ "./src/app/courses/all-courses/all-courses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var coursesRoutes = [
    { path: "courses", component: _all_courses_all_courses_component__WEBPACK_IMPORTED_MODULE_5__["AllCoursesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: "courses/course", component: _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_4__["CourseEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: "courses/course/:id", component: _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_4__["CourseEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] }
];
var CoursesRoutingModule = /** @class */ (function () {
    function CoursesRoutingModule() {
    }
    CoursesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(coursesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoursesRoutingModule);
    return CoursesRoutingModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses-routing.module */ "./src/app/courses/courses-routing.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-edit/course-edit.component */ "./src/app/courses/course-edit/course-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _all_courses_all_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-courses/all-courses.component */ "./src/app/courses/all-courses/all-courses.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _course_edit_course_edit_component__WEBPACK_IMPORTED_MODULE_6__["CourseEditComponent"],
                _all_courses_all_courses_component__WEBPACK_IMPORTED_MODULE_8__["AllCoursesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["ModalModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
                _courses_routing_module__WEBPACK_IMPORTED_MODULE_1__["CoursesRoutingModule"]
            ],
            exports: []
        })
    ], CoursesModule);
    return CoursesModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.service.ts":
/*!********************************************!*\
  !*** ./src/app/courses/courses.service.ts ***!
  \********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesService = /** @class */ (function () {
    function CoursesService(firestore) {
        this.firestore = firestore;
    }
    CoursesService.prototype.getAll = function () {
        return this.firestore.collection('courses').snapshotChanges();
    };
    CoursesService.prototype.studentCourseList = function (studentCourses, student, courseList) {
        for (var _i = 0, courseList_1 = courseList; _i < courseList_1.length; _i++) {
            var course = courseList_1[_i];
            var courseData = Object.assign({}, course);
            for (var _a = 0, studentCourses_1 = studentCourses; _a < studentCourses_1.length; _a++) {
                var c = studentCourses_1[_a];
                if (courseData.name === c) {
                    this.check = courseData.students.includes(student.name);
                    console.log(this.check);
                    if (!this.check) {
                        courseData.students.push(student.name);
                        this.firestore
                            .doc("courses/" + courseData.id)
                            .update({ students: courseData.students });
                    }
                }
            }
        }
    };
    CoursesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  background-color: #063854;\r\n  color: white;\r\n  border-top: 2px solid white;\r\n}\r\n\r\nimg {\r\n  width: 60px;\r\n  height: 20px;\r\n}\r\n\r\n.copyright {\r\n  position: relative;\r\n  padding: 0 45px;\r\n}\r\n\r\nli {\r\n  display: inline\r\n}\r\n\r\nul {\r\n  position: relative;\r\n  padding: 0 14vh;\r\n}\r\n\r\ni {\r\n  font-size: 30px;\r\n  padding: 0 3px;\r\n}\r\n\r\ni:hover {\r\n  color: #ec9f0b;\r\n}\r\n\r\n.row {\r\n  margin-right: 0px !important;\r\n  margin-left: 0 !important;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n\r\n  .copyright {\r\n    position: relative;\r\n    left: 300px;\r\n    padding: 9px 342px;\r\n    top: 13px;\r\n  }\r\n\r\n  ul {\r\n    position: relative;\r\n    padding: 10px 0;\r\n\r\n  }\r\n\r\n  li {\r\n    position: relative;\r\n    left: 280px;\r\n    top: 10px;\r\n  }\r\n\r\n  footer {\r\n    background-color: #063854;\r\n    color: white;\r\n    border-top: 2px solid white;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUdEO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtDQUMzQjs7QUFJRDs7RUFFRTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFVBQVU7R0FDWDs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0dBRWpCOztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0dBQ1g7O0VBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLDRCQUE0QjtHQUM3QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzODU0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCA0NXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lXHJcbn1cclxuXHJcbnVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCAxNHZoO1xyXG59XHJcblxyXG5pIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAzcHg7XHJcbn1cclxuXHJcbmk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWM5ZjBiO1xyXG59XHJcblxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDlweCAzNDJweDtcclxuICAgIHRvcDogMTNweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyODBweDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzODU0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<footer>\n\n  <div class=\"row\">\n\n    <div class=\"col-12 col-md-8\">\n     <div class=\"copyright\">\n       <img src=\"../../assets/images/courses@2x.png\" class=\"d-inline-block align-top\"> <span>© 2019 Copyright</span>\n     </div>\n    </div>\n    <div class=\" col-12 col-md-4 \">\n      <ul>\n        <li><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n        </li>\n        <li>\n          <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n        </li>\n        <li>\n          <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\n        </li>\n        <li>\n          <i class=\"fa fa-google-plus-square\" aria-hidden=\"true\"></i>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n  background-color: #063854;\r\n  }\r\n\r\nimg{\r\nwidth: 67px;\r\nheight: 22px;\r\n}\r\n\r\n.navbar-collapse{\r\n  margin: -8px -15px -8px -16px;\r\n  padding: 14px;\r\n  overflow: visible;\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  border-color: #fff;\r\n  background-color: #063854;\r\n  border-radius: 20px\r\n}\r\n\r\n.signin{\r\n  border: 0;\r\n}\r\n\r\n.btn-primary:focus{\r\n  box-shadow: none;\r\n  border: 0;\r\n\r\n}\r\n\r\n/* searchbar style */\r\n\r\n.searchbar{\r\n  margin-bottom: auto;\r\n  margin-top: auto;\r\n  height: 60px;\r\n  background-color: white;\r\n  border-radius: 30px;\r\n  padding: 10px;\r\n  }\r\n\r\n.search_input{\r\n  color: #063854;\r\n  border: 0;\r\n  outline: 0;\r\n  background: none;\r\n  width: 0;\r\n  caret-color:transparent;\r\n  line-height: 40px;\r\n  transition: width 0.4s linear;\r\n  }\r\n\r\n.searchbar:hover > .search_input{\r\n  padding: 0 10px;\r\n  width: 450px;\r\n  caret-color:#ec9f0b;\r\n  transition: width 0.4s linear;\r\n  max-width: 200px;\r\n  }\r\n\r\n.searchbar:hover > .search_icon{\r\n  background: white;\r\n  color: #ec9f0b;\r\n  }\r\n\r\n.search_icon{\r\n  height: 40px;\r\n  width: 40px;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  color:#ec9f0b;\r\n  }\r\n\r\n/* ************************modal style****************************** */\r\n\r\n/* .custom-modal-content-style{\r\n  border: 2px solid rgb(253, 15, 15);\r\n} */\r\n\r\n/* .custom-modal-header{} */\r\n\r\n/* ************************modal style****************************** */\r\n\r\n/* desktop view */\r\n\r\n@media (min-width: 1024px) {\r\n  img{\r\n    width: 137px;\r\n    height: 37px;\r\n    }\r\n\r\n    app-search-bar{\r\n      display: none;\r\n    }\r\n    .searchbar:hover > .search_input{\r\n      max-width: 300px;\r\n      }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0dBQ3pCOztBQUVIO0FBQ0EsWUFBWTtBQUNaLGFBQWE7Q0FDWjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7O0NBRVg7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsY0FBYztHQUNiOztBQUVEO0VBQ0EsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtHQUM3Qjs7QUFFRDtFQUNBLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixpQkFBaUI7R0FDaEI7O0FBRUQ7RUFDQSxrQkFBa0I7RUFDbEIsZUFBZTtHQUNkOztBQUVEO0VBQ0EsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGNBQWM7R0FDYjs7QUFFSCx1RUFBdUU7O0FBRXZFOztJQUVJOztBQUNKLDRCQUE0Qjs7QUFJNUIsdUVBQXVFOztBQUd2RSxrQkFBa0I7O0FBQ2xCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsYUFBYTtLQUNaOztJQUVEO01BQ0UsY0FBYztLQUNmO0lBQ0Q7TUFDRSxpQkFBaUI7T0FDaEI7OztDQUdOIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjM4NTQ7XHJcbiAgfVxyXG5cclxuaW1ne1xyXG53aWR0aDogNjdweDtcclxuaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNle1xyXG4gIG1hcmdpbjogLThweCAtMTVweCAtOHB4IC0xNnB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzODU0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHhcclxufVxyXG4uc2lnbmlue1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG5cclxufVxyXG5cclxuLyogc2VhcmNoYmFyIHN0eWxlICovXHJcbi5zZWFyY2hiYXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoX2lucHV0e1xyXG4gIGNvbG9yOiAjMDYzODU0O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgY2FyZXQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoYmFyOmhvdmVyID4gLnNlYXJjaF9pbnB1dHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGNhcmV0LWNvbG9yOiNlYzlmMGI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBsaW5lYXI7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2ljb257XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICNlYzlmMGI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoX2ljb257XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiNlYzlmMGI7XHJcbiAgfVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqbW9kYWwgc3R5bGUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qIC5jdXN0b20tbW9kYWwtY29udGVudC1zdHlsZXtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjUzLCAxNSwgMTUpO1xyXG59ICovXHJcbi8qIC5jdXN0b20tbW9kYWwtaGVhZGVye30gKi9cclxuXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqbW9kYWwgc3R5bGUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcblxyXG4vKiBkZXNrdG9wIHZpZXcgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMzdweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtc2VhcmNoLWJhcntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zZWFyY2hiYXI6aG92ZXIgPiAuc2VhcmNoX2lucHV0e1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \">\n  <a class=\"navbar-brand\">\n    <img src=\"../../assets/images/courses@2x.png\" class=\"d-inline-block align-top\" alt=\"\" routerLink=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-label=\"Toggle navigation\"\n    (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapseBasic\" [collapse]=\"isCollapsed\">\n\n    <form class=\"form-inline ml-auto my-2 my-lg-0\">\n      <div class=\"searchbar\">\n        <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\">\n        <a href=\"#\" class=\"search_icon\"><i class=\"fa fa-search\"></i></a>\n      </div>\n    </form>\n\n    <ul class=\"navbar-nav ml-auto my-2 my-lg-0\">\n      <li class=\"nav-item\" *ngIf=\"isAuth\">\n          <a class=\"nav-link\"  routerLink=\"courses\"><button class=\"btn btn-primary signin\">Courses</button></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAuth\">\n          <a class=\"nav-link\" routerLink=\"students\"><button class=\"btn btn-primary signin\">Students</button></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAuth\">\n          <a class=\"nav-link\"> <button class=\"btn btn-primary\" (click)=\"logout()\">Logout</button></a>\n\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isAuth\">\n        <a class=\"nav-link\"><button class=\"btn btn-primary signin\" (click)=\"openModalWithClass(signin)\">Signin</button></a>\n      </li>\n      <ng-template #signin>\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <app-signin></app-signin>\n      </ng-template>\n      <li class=\"nav-item\" *ngIf=\"!isAuth\">\n        <a class=\"nav-link\"> <button class=\"btn btn-primary\" (click)=\"openModalWithClass(signup)\">Signup as admin</button></a>\n      </li>\n      <ng-template class=\"custom-modal-content-style\" id=\"t\" #signup>\n        <div class=\"modal-header custom-modal-header\">\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n\n        </div>\n        <div class=\"modal-body\">\n          <app-singup></app-singup>\n        </div>\n      </ng-template>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, authservice) {
        this.modalService = modalService;
        this.authservice = authservice;
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authservice.authChange.subscribe(function (authStatus) {
            _this.isAuth = authStatus;
        });
        this.authservice.authChange.subscribe(function (isAuth) {
            if (isAuth) {
                _this.modalRef.hide();
            }
        });
    };
    HeaderComponent.prototype.openModalWithClass = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    };
    HeaderComponent.prototype.logout = function () {
        this.isAuth = this.authservice.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n<app-who-we-are *ngIf=\"!isAuthenticated()\" ></app-who-we-are>\n<app-courses-students *ngIf=\"isAuthenticated()\" ></app-courses-students>\n<app-public-figures *ngIf=\"!isAuthenticated()\" ></app-public-figures>\n"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authservice) {
        this.authservice = authservice;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.authservice.isAuthenticated();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var mainRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(mainRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _students_students_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../students/students.module */ "./src/app/students/students.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _courses_courses_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../courses/courses.module */ "./src/app/courses/courses.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/main/slider/slider.component.ts");
/* harmony import */ var _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./who-we-are/who-we-are.component */ "./src/app/main/who-we-are/who-we-are.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _courses_students_courses_students_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../courses-students/courses-students.component */ "./src/app/courses-students/courses-students.component.ts");
/* harmony import */ var _courses_students_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../courses-students/students-list/students-list.component */ "./src/app/courses-students/students-list/students-list.component.ts");
/* harmony import */ var _courses_students_courses_list_courses_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../courses-students/courses-list/courses-list.component */ "./src/app/courses-students/courses-list/courses-list.component.ts");
/* harmony import */ var _public_figures_public_figures_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public-figures/public-figures.component */ "./src/app/main/public-figures/public-figures.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"],
                _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_9__["WhoWeAreComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _courses_students_courses_students_component__WEBPACK_IMPORTED_MODULE_11__["CoursesStudentsComponent"],
                _courses_students_students_list_students_list_component__WEBPACK_IMPORTED_MODULE_12__["StudentsListComponent"],
                _courses_students_courses_list_courses_list_component__WEBPACK_IMPORTED_MODULE_13__["CoursesListComponent"],
                _public_figures_public_figures_component__WEBPACK_IMPORTED_MODULE_14__["PublicFiguresComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _students_students_module__WEBPACK_IMPORTED_MODULE_0__["StudentsModule"],
                _courses_courses_module__WEBPACK_IMPORTED_MODULE_4__["CoursesModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
                _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"]
            ],
            providers: [],
            exports: [_main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"], _who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_9__["WhoWeAreComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/public-figures/public-figures.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main/public-figures/public-figures.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  border: 1px solid rgba(120, 120, 120, 0.585);\r\n  border-radius: 50%;\r\n  width: 200px;\r\n  height: 200px;\r\n  padding: 2px;\r\n}\r\n\r\np{\r\n  color: #063854;\r\n  text-align: left;\r\n  padding: 0 50px 0 63px;\r\n  font-weight: bold;\r\n}\r\n\r\np > span {\r\n  font-weight: normal;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wdWJsaWMtZmlndXJlcy9wdWJsaWMtZmlndXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7QUFDQTtFQUNDLG9CQUFvQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHVibGljLWZpZ3VyZXMvcHVibGljLWZpZ3VyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjU4NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxucHtcclxuICBjb2xvcjogIzA2Mzg1NDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgNTBweCAwIDYzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIHAgPiBzcGFuIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/public-figures/public-figures.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/public-figures/public-figures.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row \">\n    <div class=\"col-md-4\" style=\"text-align: center\">\n      <img src=\"../../../assets/images/public-figures/e1dc2d6b-9965-4c57-b80d-ec6d711fdc6d.jpg\">\n      <p>“Your most unhappy customers are your greatest source of learning.” <span>Bill Gates</span></p>\n\n    </div>\n    <div class=\"col-md-4\" style=\"text-align: center\">\n\n      <img src=\"../../../assets/images/public-figures/223207dc-22a6-46d6-bbcc-e38baae546c5.jpg\">\n\n      <p>“Quality is more important than quantity. One home run is much better than two doubles.” <span>Steve Jobs</span></p>\n\n\n    </div>\n    <div class=\"col-md-4\" style=\"text-align: center\">\n      <img src=\"../../../assets/images/public-figures/a8029d07-1aec-44ac-a98b-3ce36944b072.jpg\">\n      <p>“It’s very hard to fail completely if you aim high enough.”  <span>Larry Page</span>\n        </p>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/public-figures/public-figures.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/public-figures/public-figures.component.ts ***!
  \*****************************************************************/
/*! exports provided: PublicFiguresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicFiguresComponent", function() { return PublicFiguresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicFiguresComponent = /** @class */ (function () {
    function PublicFiguresComponent() {
    }
    PublicFiguresComponent.prototype.ngOnInit = function () {
    };
    PublicFiguresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-figures',
            template: __webpack_require__(/*! ./public-figures.component.html */ "./src/app/main/public-figures/public-figures.component.html"),
            styles: [__webpack_require__(/*! ./public-figures.component.css */ "./src/app/main/public-figures/public-figures.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicFiguresComponent);
    return PublicFiguresComponent;
}());



/***/ }),

/***/ "./src/app/main/slider/slider.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/slider/slider.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\n\r\n\r\nh3{\r\n  font-family: 'Staatliches', cursive;\r\n  font-size: 90px;\r\n  -webkit-transform: translateY(-173px);\r\n          transform: translateY(-173px);\r\n}\r\n\r\n\r\nimg{\r\n  max-height: 80vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOzs7QUFHbkU7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7Q0FDL0I7OztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVN0YWF0bGljaGVzJyk7XHJcblxyXG5cclxuaDN7XHJcbiAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTczcHgpO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgbWF4LWhlaWdodDogODB2aDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/slider/slider.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/slider/slider.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\n    <slide>\n      <img src=\"../../../assets/images/slider/start code.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>START CODING TODAY</h3>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"../../../assets/images/slider/never stop learning.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>NEVER STOP LEARNING</h3>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"../../../assets/images/slider/coding is future.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>CODING IS THE FUTURE</h3>\n      </div>\n    </slide>\n  </carousel>\n"

/***/ }),

/***/ "./src/app/main/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/main/slider/slider.component.html"),
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"], useValue: { interval: 6000, noPause: true, showIndicators: true } }
            ],
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/main/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/main/who-we-are/who-we-are.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/who-we-are/who-we-are.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n  font:bolder;\r\n}\r\n\r\n.content{\r\n  padding: 3rem 3rem;\r\n  margin: 0 0 0 -7px;\r\n  text-align: center;\r\n\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .content{\r\n    padding: 5rem 14rem;\r\n    text-align: center;\r\n    background-image: url('shape-3.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 60vh;\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1COztDQUVwQjs7QUFFRDtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQ0FBMEQ7SUFDMUQsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhOztHQUVkOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIGZvbnQ6Ym9sZGVyO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBwYWRkaW5nOiAzcmVtIDNyZW07XHJcbiAgbWFyZ2luOiAwIDAgMCAtN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGVudHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMTRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaGFwZS0zLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogNjB2aDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/who-we-are/who-we-are.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/who-we-are/who-we-are.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <section class=\"content\">\n  <h2>WHO WE ARE </h2>\n  <p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et\n    quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et\n    dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.\"</p>\n  </section>\n\n"

/***/ }),

/***/ "./src/app/main/who-we-are/who-we-are.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/who-we-are/who-we-are.component.ts ***!
  \*********************************************************/
/*! exports provided: WhoWeAreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreComponent", function() { return WhoWeAreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoWeAreComponent = /** @class */ (function () {
    function WhoWeAreComponent() {
    }
    WhoWeAreComponent.prototype.ngOnInit = function () {
    };
    WhoWeAreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-who-we-are',
            template: __webpack_require__(/*! ./who-we-are.component.html */ "./src/app/main/who-we-are/who-we-are.component.html"),
            styles: [__webpack_require__(/*! ./who-we-are.component.css */ "./src/app/main/who-we-are/who-we-are.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhoWeAreComponent);
    return WhoWeAreComponent;
}());



/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (control) {
        if (control.value === null || control.value.length === 0) {
            return null;
        }
        var controlToCompare = control.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== control.value
            ? { compare: true }
            : null;
    };
    var CompareValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("compare"),
        __metadata("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[compare]",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: CompareValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_students_students_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/students/students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, courseservice, studentsservice, authservise) {
        this.httpClient = httpClient;
        this.courseservice = courseservice;
        this.studentsservice = studentsservice;
        this.authservise = authservise;
    }
    //Coourses
    DataStorageService.prototype.storeCourses = function () {
        var token = this.authservise.getToken();
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"]('PUT', 'https://courses-project-128e7.firebaseio.com/courses.json', this.courseservice.getAll(), {
            reportProgress: true, params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('auth', token)
        });
        return this.httpClient.request(req);
    };
    DataStorageService.prototype.getCourses = function () {
        var token = this.authservise.getToken();
        return this.httpClient
            .get("https://courses-project-128e7.firebaseio.com/courses.json?auth=" +
            token, {
            observe: "body",
            responseType: "json"
        })
            .map(function (courses) {
            for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                var course = courses_1[_i];
                if (!course["students"]) {
                    course["students"] = [];
                }
            }
            return courses;
        });
    };
    //Students
    DataStorageService.prototype.storeStudents = function () {
        var token = this.authservise.getToken();
        return this.httpClient.put("https://courses-project-128e7.firebaseio.com/students.json", this.studentsservice.getAll(), {
            observe: "body",
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('auth', token)
        });
    };
    DataStorageService.prototype.getStudent = function () {
        var token = this.authservise.getToken();
        return this.httpClient
            .get("https://courses-project-128e7.firebaseio.com/students.json", {
            observe: "body",
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('auth', token)
        })
            .map(function (students) {
            for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
                var student = students_1[_i];
                if (!student["courses"]) {
                    student["courses"] = [];
                }
            }
            return students;
        });
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"],
            src_app_students_students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/search.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, searchString, propName) {
        if (value.length === 0 || searchString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            propName = item.name;
            if (propName.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search',
            pure: false
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.pipe */ "./src/app/shared/search.pipe.ts");
/* harmony import */ var _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"],
                _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CompareValidatorDirective"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [],
            exports: [_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"], _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CompareValidatorDirective"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-dual-ring {\r\n  display: inline-block;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 46px;\r\n  height: 46px;\r\n  margin: 1px;\r\n  border-radius: 50%;\r\n  border: 5px solid #063854;\r\n    border-color: #063854 transparent #063854 transparent;\r\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n          animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@-webkit-keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtJQUN4QixzREFBc0Q7RUFDeEQsc0RBQThDO1VBQTlDLDhDQUE4QztDQUMvQztBQUNEO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0dBQzNCO0NBQ0Y7QUFQRDtFQUNFO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtHQUMzQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1kdWFsLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBtYXJnaW46IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzA2Mzg1NDtcclxuICAgIGJvcmRlci1jb2xvcjogIzA2Mzg1NCB0cmFuc3BhcmVudCAjMDYzODU0IHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-dual-ring\"></div>\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/shared/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/students/all-students/all-students.component.css":
/*!******************************************************************!*\
  !*** ./src/app/students/all-students/all-students.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-buttons{\r\n  list-style-type: none;\r\n  margin: 0 0 0 -60px;\r\n}\r\n\r\n.new{\r\n  background-color: rgba(127, 255, 212, 0.342);\r\n}\r\n\r\n.ul-buttons>li{\r\n  display: inline;\r\n  padding-right: 5px;\r\n}\r\n\r\n.course-list{\r\n  list-style-type: none;\r\n}\r\n\r\n.course-list>li{\r\n  display: inline;\r\n}\r\n\r\n.btn-table {\r\n  border-radius: 10.5px;\r\n}\r\n\r\n.btn-add {\r\n  border-radius: 12px\r\n}\r\n\r\ntable {\r\n  text-align: center;\r\n}\r\n\r\n.searchbar {\r\n  border: 0;\r\n  border-bottom: 5px solid #063854;\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  color: #063854\r\n}\r\n\r\n.searchbar:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.display{\r\n  display: none;\r\n  }\r\n\r\n@media (min-width:1024px) {\r\n  .display{\r\n    display: table-cell;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvYWxsLXN0dWRlbnRzL2FsbC1zdHVkZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLDZDQUE2QztDQUM5Qzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztHQUNiOztBQUNIO0VBQ0U7SUFDRSxvQkFBb0I7S0FDbkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL2FsbC1zdHVkZW50cy9hbGwtc3R1ZGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bC1idXR0b25ze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDAgMCAwIC02MHB4O1xyXG59XHJcblxyXG4ubmV3e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4zNDIpO1xyXG59XHJcblxyXG4udWwtYnV0dG9ucz5saXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY291cnNlLWxpc3R7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5jb3Vyc2UtbGlzdD5saXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmJ0bi10YWJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAuNXB4O1xyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwNjM4NTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzA2Mzg1NFxyXG59XHJcblxyXG4uc2VhcmNoYmFyOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgLmRpc3BsYXl7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/students/all-students/all-students.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/students/all-students/all-students.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <!-- <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\" [(ngModel)]=\"filtered\"> -->\n      <input class=\"form-control mr-sm-2 searchbar\" placeholder=\"Search...\" type=\"search\">\n    </div>\n    <div class=\"col-md-6 d-flex justify-content-end  mb-0 mt-1\">\n\n      <a routerLink=\"/students/student\">\n        <button class=\"btn-add  btn btn-success\">ADD</button>\n      </a>\n\n    </div>\n  </div>\n\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Student</th>\n        <th scope=\"col\" class=\"display\">Courses</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <!-- <tbody  *ngFor=\"let course of courses| search:filtered:'course.name'; let i=index;\"> -->\n    <tbody class=\"content-item\" *ngFor=\" let student of returnedArray; let i=index\">\n      <tr>\n        <th scope=\"row\">{{i+1}}</th>\n        <td><a [routerLink]=\"['/students/student', student.id]\" (click)=\"onEdit(student)\">{{student.name}}</a></td>\n        <td class=\"display\">\n          <ul class=\"course-list\">\n            <li *ngFor=\"let course of student.courses; let i=index\">\n                <span *ngIf=\"i > 0\">,</span>\n              {{course}}\n          </li>\n        </ul>\n          </td>\n        <td>\n          <ul class=\"ul-buttons\">\n            <li><button class=\" btn-table btn btn-secondary\">{{student.courses.length}}</button></li>\n            <li><button class=\" btn-table btn btn-danger\"  (click)=\"openModal(template)\" >X</button></li>\n            <ng-template #template>\n              <div class=\"modal-body text-center\">\n                <p>Do you want to delete {{student.name}}?</p>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(student.id)\" >Yes</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n              </div>\n            </ng-template>\n          </ul>\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-12 d-flex justify-content-center\">\n      <pagination [boundaryLinks]=\"true\"  previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n       [totalItems]=\"students.length\" (pageChanged)=\"pageChanged($event)\"></pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/students/all-students/all-students.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/students/all-students/all-students.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStudentsComponent", function() { return AllStudentsComponent; });
/* harmony import */ var src_app_students_students_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/students/students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllStudentsComponent = /** @class */ (function () {
    function AllStudentsComponent(studentservice, modalService, firestore) {
        this.studentservice = studentservice;
        this.modalService = modalService;
        this.firestore = firestore;
        this.students = [];
        this.filtered = "";
    }
    AllStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentservice.getAll().subscribe(function (students) {
            _this.students = students.map(function (student) {
                var data = student.payload.doc.data();
                data.id = student.payload.doc.id;
                return __assign({}, data);
            });
            _this.returnedArray = _this.students.slice(0, 10);
        });
    };
    AllStudentsComponent.prototype.pageChanged = function (event, students) {
        if (students === void 0) { students = this.students; }
        var startItem = (event.page - 1) * event.itemsPerPage;
        var endItem = event.page * event.itemsPerPage;
        this.returnedArray = students.slice(startItem, endItem);
    };
    AllStudentsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: "modal-sm" });
    };
    AllStudentsComponent.prototype.decline = function () {
        this.modalRef.hide();
    };
    AllStudentsComponent.prototype.onEdit = function (student) {
        this.studentservice.student = Object.assign({}, student);
    };
    AllStudentsComponent.prototype.onDelete = function (id) {
        this.firestore.doc("students/" + id).delete();
        this.modalRef.hide();
    };
    AllStudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-all-students',
            template: __webpack_require__(/*! ./all-students.component.html */ "./src/app/students/all-students/all-students.component.html"),
            styles: [__webpack_require__(/*! ./all-students.component.css */ "./src/app/students/all-students/all-students.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_students_students_service__WEBPACK_IMPORTED_MODULE_0__["StudentsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AllStudentsComponent);
    return AllStudentsComponent;
}());



/***/ }),

/***/ "./src/app/students/student-edit/student-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/students/student-edit/student-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 150px;\r\n  position: relative;\r\n  right: 25px;\r\n  top: 5px;\r\n}\r\ni{\r\n  position: relative;\r\n  top: 4.6vh;\r\n  right: 25px;\r\n  font-size: xx-large;\r\n  color: #063854;\r\n}\r\nul{\r\n list-style: none;\r\n}\r\nbutton{\r\n  position: relative;\r\n  left: 24vw;\r\n  margin: 0 0 0px 6px;\r\n}\r\ninput.ng-invalid.ng-dirty.ng-touched, textarea.ng-invalid.ng-dirty.ng-touched {\r\n  border: 1px solid red;\r\n  box-shadow: 0 0 0 0.1rem rgba(255, 38, 0, 0.259);\r\n}\r\n/* The customcheck */\r\n.customcheck {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.customcheck input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 5px;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.customcheck:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.customcheck input:checked ~ .checkmark {\r\n  background-color: #02cf32;\r\n  border-radius: 5px;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.customcheck input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.customcheck .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n@media (min-width:1024px){\r\n  button{\r\n    position: relative;\r\n    left: 2vw;\r\n\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudC1lZGl0L3N0dWRlbnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztDQUNWO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlEQUFpRDtDQUNsRDtBQUVELHFCQUFxQjtBQUNyQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjtBQUVELHlDQUF5QztBQUN6QztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCO0FBRUQsOEJBQThCO0FBQzlCO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdEO0FBQ2hEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBRUQseURBQXlEO0FBQ3pEO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtDQUNwQjtBQUVELDhEQUE4RDtBQUM5RDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztDQUNmO0FBRUQscUNBQXFDO0FBQ3JDO0VBQ0UsZUFBZTtDQUNoQjtBQUVELG1DQUFtQztBQUNuQztFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUVqQyx5QkFBeUI7Q0FDMUI7QUFFRDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7O0dBRVg7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnQtZWRpdC9zdHVkZW50LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbml7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNC42dmg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogIzA2Mzg1NDtcclxufVxyXG5cclxudWx7XHJcbiBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJ1dHRvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjR2dztcclxuICBtYXJnaW46IDAgMCAwcHggNnB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLWRpcnR5Lm5nLXRvdWNoZWQsIHRleHRhcmVhLm5nLWludmFsaWQubmctZGlydHkubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSByZ2JhKDI1NSwgMzgsIDAsIDAuMjU5KTtcclxufVxyXG5cclxuLyogVGhlIGN1c3RvbWNoZWNrICovXHJcbi5jdXN0b21jaGVjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmN1c3RvbWNoZWNrIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmN1c3RvbWNoZWNrOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5jdXN0b21jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2YzMjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmN1c3RvbWNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmN1c3RvbWNoZWNrIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDlweDtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMnZ3O1xyXG5cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/students/student-edit/student-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/students/student-edit/student-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img [src]=\"imagePath.value\" class=\"img-responsive\">\n      </div>\n    </div>\n    <form [formGroup]=\"studentForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"name\">student name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label for=\"name\">phone number</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n      </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\">Image Path:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"imagepath\" #imagePath>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <h3> add course</h3>\n            <select class=\"form-control\" multiple formControlName=\"courses\">\n              <option *ngFor=\"let course of courses\" [value]=\"course.name\">{{course.name}}</option>\n            </select>\n          </div>\n          <div class=\"col-md-4\">\n              <h3>courses List</h3>\n          </div>\n        </div>\n        <hr>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-ms-12\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!studentForm.valid\">save</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" >cancel</button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/students/student-edit/student-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/students/student-edit/student-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: StudentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function() { return StudentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../students.service */ "./src/app/students/students.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentEditComponent = /** @class */ (function () {
    function StudentEditComponent(courseservice, studentservice, route, router, firestore) {
        this.courseservice = courseservice;
        this.studentservice = studentservice;
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.editMode = false;
        this.courses = [];
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            _this.editedStudent = _this.studentservice.student;
            _this.editMode = params["id"] != null;
            _this.initForm();
            if (_this.editMode) {
                _this.patchEditStudentData();
            }
        });
        this.courseservice.getAll().subscribe(function (courses) {
            _this.courses = courses.map(function (course) {
                var data = course.payload.doc.data();
                data.id = course.payload.doc.id;
                return __assign({}, data);
            });
        });
    };
    StudentEditComponent.prototype.patchEditStudentData = function () {
        this.studentForm.patchValue(this.editedStudent);
    };
    Object.defineProperty(StudentEditComponent.prototype, "studentCourses", {
        // onChange(course: string, isChecked: boolean) {
        //   const coursesFormArray = <FormArray>this.studentForm.controls.courses;
        //   if (isChecked) {
        //     coursesFormArray.push(new FormControl(course));
        //   } else {
        //     let index = coursesFormArray.controls.findIndex(x => x.value == course);
        //     coursesFormArray.removeAt(index);
        //   }
        // }
        get: function () {
            return this.studentForm.get("courses").controls;
        },
        enumerable: true,
        configurable: true
    });
    StudentEditComponent.prototype.onSubmit = function () {
        var data = Object.assign({}, this.studentForm.value);
        delete data.id;
        if (this.editMode) {
            this.firestore.doc("students/" + this.editedStudent.id).update(data);
            this.courseservice.studentCourseList(data["courses"], data, this.courses);
            this.router.navigate(["../../"], { relativeTo: this.route });
        }
        else {
            this.firestore.collection('students').add(this.studentForm.value);
            this.courseservice.studentCourseList(data["courses"], data, this.courses);
            this.router.navigate(["../"], { relativeTo: this.route });
        }
    };
    StudentEditComponent.prototype.initForm = function () {
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            imagepath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("https://d2ln1xbi067hum.cloudfront.net/assets/default_user-951af10295a22e5f7fa2fa6165613c14.png", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            courses: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([])
        });
    };
    StudentEditComponent.prototype.onCancel = function () {
        if (this.editMode) {
            this.router.navigate(["../../"], { relativeTo: this.route });
        }
        else {
            this.router.navigate(["../"], { relativeTo: this.route });
        }
    };
    StudentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-student-edit",
            template: __webpack_require__(/*! ./student-edit.component.html */ "./src/app/students/student-edit/student-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-edit.component.css */ "./src/app/students/student-edit/student-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"],
            _students_service__WEBPACK_IMPORTED_MODULE_3__["StudentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], StudentEditComponent);
    return StudentEditComponent;
}());



/***/ }),

/***/ "./src/app/students/students-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/students/students-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StudentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsRoutingModule", function() { return StudentsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-edit/student-edit.component */ "./src/app/students/student-edit/student-edit.component.ts");
/* harmony import */ var _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-students/all-students.component */ "./src/app/students/all-students/all-students.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var studentsRoutes = [
    { path: "students", component: _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_4__["AllStudentsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "students/student", component: _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_3__["StudentEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "students/student/:id", component: _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_3__["StudentEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
var StudentsRoutingModule = /** @class */ (function () {
    function StudentsRoutingModule() {
    }
    StudentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(studentsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], StudentsRoutingModule);
    return StudentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/*!*************************************************!*\
  !*** ./src/app/students/students.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/students/students.component.html":
/*!**************************************************!*\
  !*** ./src/app/students/students.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  students works!\n</p>\n"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/students/students.module.ts":
/*!*********************************************!*\
  !*** ./src/app/students/students.module.ts ***!
  \*********************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.component */ "./src/app/students/students.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-edit/student-edit.component */ "./src/app/students/student-edit/student-edit.component.ts");
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./students-routing.module */ "./src/app/students/students-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-students/all-students.component */ "./src/app/students/all-students/all-students.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_students_component__WEBPACK_IMPORTED_MODULE_1__["StudentsComponent"], _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_4__["StudentEditComponent"], _all_students_all_students_component__WEBPACK_IMPORTED_MODULE_7__["AllStudentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"].forRoot(),
                _students_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsRoutingModule"]
            ],
            exports: []
        })
    ], StudentsModule);
    return StudentsModule;
}());



/***/ }),

/***/ "./src/app/students/students.service.ts":
/*!**********************************************!*\
  !*** ./src/app/students/students.service.ts ***!
  \**********************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsService = /** @class */ (function () {
    function StudentsService(courseservice, firestore) {
        this.courseservice = courseservice;
        this.firestore = firestore;
        this.studentList = [];
    }
    StudentsService.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll().subscribe(function (students) {
            _this.studentList = students.map(function (student) {
                var data = student.payload.doc.data();
                data.id = student.payload.doc.id;
                return __assign({}, data);
            });
            return _this.studentList;
        });
    };
    StudentsService.prototype.getAll = function () {
        return this.firestore.collection("students").snapshotChanges();
    };
    StudentsService.prototype.courseStudentList = function (CourseStudents, course, studentList) {
        for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
            var student = studentList_1[_i];
            var stdData = Object.assign({}, student);
            for (var _a = 0, CourseStudents_1 = CourseStudents; _a < CourseStudents_1.length; _a++) {
                var std = CourseStudents_1[_a];
                if (stdData.name === std) {
                    this.check = stdData.courses.includes(course.name);
                    console.log(this.check);
                    if (!this.check) {
                        stdData.courses.push(course.name);
                        this.firestore
                            .doc("students/" + stdData.id)
                            .update({ courses: stdData.courses });
                    }
                }
            }
        }
    };
    StudentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_courses_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDimUxsxTSNUFXvMq0XS7UgVtZ0urtmg8Y",
        authDomain: "courses-project-128e7.firebaseapp.com",
        databaseURL: "https://courses-project-128e7.firebaseio.com",
        projectId: "courses-project-128e7",
        storageBucket: "courses-project-128e7.appspot.com",
        messagingSenderId: "644152179308"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\index trainning\coursesProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map