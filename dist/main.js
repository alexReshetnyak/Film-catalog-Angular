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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "\r\n.main-panel {\r\n    float: none;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-navbar></app-navbar>\n   <div class=\"main-panel\">\n       <ng-dashboard></ng-dashboard>\n       <app-footer></app-footer>\n   </div>\n</div>\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            moduleId: module.i,
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([])
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] },
                _services_film_service__WEBPACK_IMPORTED_MODULE_7__["FilmService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-dashboard',
            moduleId: module.i,
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _shared_guards_films_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guards/films-resolve-service */ "./src/app/shared/guards/films-resolve-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_3__["MODULE_ROUTES"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [_dashboard_routes__WEBPACK_IMPORTED_MODULE_3__["MODULE_COMPONENTS"]],
            providers: [_shared_guards_films_resolve_service__WEBPACK_IMPORTED_MODULE_4__["FilmResolver"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: MODULE_ROUTES, MODULE_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_ROUTES", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_COMPONENTS", function() { return MODULE_COMPONENTS; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/dashboard/favorites/favorites.component.ts");
/* harmony import */ var _film_film_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film/film.component */ "./src/app/dashboard/film/film.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/dashboard/search/search.component.ts");
/* harmony import */ var _film_actors_actors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./film/actors/actors.component */ "./src/app/dashboard/film/actors/actors.component.ts");
/* harmony import */ var _film_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film/rating/rating.component */ "./src/app/dashboard/film/rating/rating.component.ts");
/* harmony import */ var _shared_guards_films_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/guards/films-resolve-service */ "./src/app/shared/guards/films-resolve-service.ts");







var MODULE_ROUTES = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'search/:film',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    },
    {
        path: 'search',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'userfilms',
        component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_1__["FavoritesComponent"],
        data: { title: 'best films' }
    },
    {
        path: 'film/:id',
        component: _film_film_component__WEBPACK_IMPORTED_MODULE_2__["FilmComponent"],
        data: { title: 'Heroes List' },
        resolve: { film: _shared_guards_films_resolve_service__WEBPACK_IMPORTED_MODULE_6__["FilmResolver"] }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var MODULE_COMPONENTS = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_1__["FavoritesComponent"],
    _film_film_component__WEBPACK_IMPORTED_MODULE_2__["FilmComponent"],
    _film_actors_actors_component__WEBPACK_IMPORTED_MODULE_4__["ActorsComponent"],
    _film_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"],
    _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
];


/***/ }),

/***/ "./src/app/dashboard/favorites/favorites.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/favorites/favorites.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-for-films{\r\n    float: none;\r\n    margin: auto;\r\n}\r\n\r\n.card-avatar-manual{\r\n    max-width: none;\r\n    max-height: none;\r\n    margin: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.img{\r\n    min-height: 700px;\r\n    min-width: 100%;\r\n}\r\n\r\n.img-wrap{\r\n    height: 700px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.card-title-film{\r\n    height: 35px;\r\n}\r\n\r\n.card-content-film{\r\n    height: 145px;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    color: rgba(0,0,0, 0.7);\r\n}\r\n\r\n.loader-custom{\r\n    position: unset;\r\n    margin: 60px auto 0;\r\n}\r\n\r\n.loader-hide{\r\n    display: none;\r\n}\r\n\r\n.button-row{\r\n    text-align: center;\r\n}\r\n\r\n.btn-get-more{\r\n    border-radius: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/favorites/favorites.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/favorites/favorites.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 col-lg-10 wrap-for-films\" *ngFor=\"let film of filmList; let i = index\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar card-avatar-manual\">\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"img-wrap\">\r\n                                <img class=\"img\"\r\n                                [src]=\"film.poster_path ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path : '../assets/img/no-image.jpg'\"/>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">{{film.release_date}}</h6>\r\n                            <h4 class=\"card-title card-title-film\">{{film.title}}</h4>\r\n                            <p class=\"card-content card-content-film\">\r\n                                {{film.overview}}\r\n                            </p>\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"btn btn-danger btn-round\">Подробнее</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/favorites/favorites.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/favorites/favorites.component.ts ***!
  \************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        window.scrollTo(0, 0);
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getFilms();
    };
    FavoritesComponent.prototype.getFilms = function () {
        var _this = this;
        this.filmCardService.getFilmsFromMdb().subscribe(function (films) {
            if (films) {
                films.forEach(function (film) {
                    _this.filmCardService.getFilmById(film.filmId).subscribe(function (filmItem) {
                        filmItem.year = filmItem.release_date.slice(0, 4) || 'неизвестно';
                        _this.filmList.push(filmItem);
                    });
                });
            }
        });
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            moduleId: module.i,
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/dashboard/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/dashboard/favorites/favorites.component.css")],
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/film/actors/actors.component.css":
/*!************************************************************!*\
  !*** ./src/app/dashboard/film/actors/actors.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actors-wrap{\r\n  padding: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .actors-wrap {\r\n      justify-content: center;\r\n    } \r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .actors-wrap {\r\n      justify-content: space-around;\r\n    } \r\n}\r\n\r\n.actor-wrap{\r\n  padding: 0;\r\n  float: none;\r\n  margin-bottom: 20px;\r\n  background: white;\r\n  box-shadow: 0 0 5px 0 rgba(0,0,0, 0.2);\r\n}\r\n\r\n@media(max-width: 768px){\r\n  .actor-wrap{\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n.img{\r\n  min-width: 100%;\r\n  min-height: 200px;\r\n}\r\n\r\n.actor-name{\r\n  padding: 10px 10px 0;\r\n  font-weight: 700;\r\n}\r\n\r\n.actor-character{\r\n  padding: 0px 10px 10px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/film/actors/actors.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/film/actors/actors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actors-wrap\">\r\n  <div class=\"actor-wrap col-md-2 col-sm-5 col-xs-7\" *ngFor=\"let actor of actors\" >\r\n    <img class=\"img\" [src] = \"actor.profile_path ? 'https://image.tmdb.org/t/p/w154/' + actor.profile_path : '../../assets/img/actor-logo.jpg'\"/>\r\n    <div class=\"actor-name\">{{actor.name}}</div>\r\n    <div class=\"actor-character\">{{actor.character}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/film/actors/actors.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/film/actors/actors.component.ts ***!
  \***********************************************************/
/*! exports provided: ActorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsComponent", function() { return ActorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorsComponent = /** @class */ (function () {
    function ActorsComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.actors = [];
    }
    ActorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmCardService.getActors(this.id)
            .subscribe(function (actors) {
            if (actors.length > 5) {
                for (var i = 0; i < 5; i++) {
                    _this.actors[i] = actors[i];
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActorsComponent.prototype, "id", void 0);
    ActorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actors',
            moduleId: module.i,
            template: __webpack_require__(/*! ./actors.component.html */ "./src/app/dashboard/film/actors/actors.component.html"),
            styles: [__webpack_require__(/*! ./actors.component.css */ "./src/app/dashboard/film/actors/actors.component.css")],
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"]])
    ], ActorsComponent);
    return ActorsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/film/film.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/film/film.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".film-background{\r\n    min-height: 650px;\r\n    background-size: cover;\r\n    padding: 0;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.wrap-blue{\r\n    background: rgba(0, 13, 0, 0.8);\r\n    min-height: 650px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.spacer{\r\n    height: 70px;\r\n}\r\n\r\n.poster-film-wrap{\r\n    min-width: 100px;\r\n    min-height: 200px;\r\n    float: none;\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin-top: 30px;\r\n    vertical-align: top;\r\n}\r\n\r\n@media (min-width: 991px) {\r\n    .poster-film-wrap {\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n.film-info-wrap{\r\n    min-width: 100px;\r\n    min-height: 200px;\r\n    float: none;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n@media (min-width: 991px) {\r\n    .film-info-wrap {\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n.film-title{\r\n    color: white;\r\n    font-size: 36px;\r\n    font-weight: 900;\r\n    line-height: 40px;\r\n    display: inline-block;\r\n}\r\n\r\n.film-year{\r\n    color:rgba(255, 255, 255, 0.8);\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n}\r\n\r\n.users-rating{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .users-rating {\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\napp-rating{\r\n    height: 62px;\r\n}\r\n\r\n.film-star-wrap{\r\n    display: inline-block;\r\n    border: 2px solid white;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor:pointer;\r\n    margin-left: 20px;\r\n}\r\n\r\n.film-star-wrap:hover{\r\n    background: #1E272C;\r\n    border-color: rgba(30,49,24,0.6);\r\n}\r\n\r\n.film-star{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('data:image/png;base64,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') no-repeat;\r\n    background-size: 40%;\r\n    background-position: 50% 50%;\r\n}\r\n\r\n.film-star-added{\r\n    background-image: url('data:image/png;base64,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');\r\n}\r\n\r\n.film-overview-title{\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n.film-overview{\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.film-main-rols{\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    margin: 0 0 30px 0;\r\n    color: rgba(0,0,0, 0.8);\r\n}\r\n\r\n@media (min-width: 991px) {\r\n    .film-main-rols {\r\n        text-align: left;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/film/film.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/film/film.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\" #wrap>\r\n    <div class=\"col-lg-12 film-background\"\r\n        [ngStyle]=\"{'background-image': 'url(https://image.tmdb.org/t/p/w1280/'+ filmItem.backdrop_path + ')'}\">\r\n\r\n        <div class=\"wrap-blue\">\r\n            <div class=\"container\">\r\n                <div class=\"spacer\"></div>\r\n                <div class=\"poster-film-wrap  col-md-4 col-xs-12\">\r\n                    <img width=\"300\"\r\n                    [src]=\"filmItem.poster_path ? 'https://image.tmdb.org/t/p/w500/' + filmItem.poster_path : '../assets/img/no-image.jpg'\"/>\r\n                </div\r\n                ><div class=\"film-info-wrap col-md-8 col-xs-12\">\r\n                    <div class=\"wrap-film-title\">\r\n                        <h1 class=\"film-title\">\r\n                            {{filmItem.title}} <span class=\"film-year\">({{filmItem.year}})</span>\r\n                        </h1>\r\n                        <div></div>\r\n                        <div class=\"users-rating\">\r\n                            <app-rating [rating] = 'filmItem.vote_average'></app-rating>\r\n                            <div class=\"film-star-wrap\" (click) = 'changeFilmStatus()'>\r\n                                <div class=\"film-star\" [ngClass]=\"{'film-star-added': filmAddedStatus}\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <h3 class=\"film-overview-title\">Обзор</h3>\r\n                        <div class=\"film-overview text-left\">{{filmItem.overview}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"container\">\r\n        <h3 class=\"film-main-rols\">В главных ролях </h3>\r\n        <app-actors [id] = 'id'></app-actors>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/film/film.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/film/film.component.ts ***!
  \**************************************************/
/*! exports provided: FilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmComponent", function() { return FilmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _shared_models_film_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/film-model */ "./src/app/shared/models/film-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmComponent = /** @class */ (function () {
    function FilmComponent(route, filmCardService) {
        this.route = route;
        this.filmCardService = filmCardService;
        this.filmItem = new _shared_models_film_model__WEBPACK_IMPORTED_MODULE_3__["Film"];
        this.filmAddedStatus = false;
        window.scrollTo(0, 0);
    }
    FilmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        if (!this.id) {
            return;
        }
        this.route.data.subscribe(function (data) {
            _this.filmItem = data.film;
            _this.filmItem.year = _this.filmItem.release_date.slice(0, 4) || 'неизвестно';
            _this.getAllFilmsFromMdb();
        });
    };
    FilmComponent.prototype.getAllFilmsFromMdb = function () {
        var _this = this;
        this.filmCardService.getFilmsFromMdb().subscribe(function (data) {
            window.scrollTo(0, 0);
            if (data && data.length && data.length >= 1) {
                data.forEach(function (film) {
                    if (film.filmId && _this.id === film.filmId) {
                        _this.filmAddedStatus = true;
                    }
                });
            }
        });
    };
    FilmComponent.prototype.changeFilmStatus = function () {
        if (this.filmAddedStatus) {
            this.deleteFilm();
        }
        else {
            this.saveFilm();
        }
    };
    FilmComponent.prototype.deleteFilm = function () {
        var _this = this;
        this.filmCardService.deleteFilm(this.id).subscribe(function (data) {
            _this.filmAddedStatus = false;
        });
    };
    FilmComponent.prototype.saveFilm = function () {
        var _this = this;
        this.filmCardService.saveFilm(this.id).subscribe(function (data) {
            _this.filmAddedStatus = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wrap'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FilmComponent.prototype, "wrapDiv", void 0);
    FilmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film',
            moduleId: module.i,
            template: __webpack_require__(/*! ./film.component.html */ "./src/app/dashboard/film/film.component.html"),
            styles: [__webpack_require__(/*! ./film.component.css */ "./src/app/dashboard/film/film.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"]])
    ], FilmComponent);
    return FilmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/film/rating/rating.component.css":
/*!************************************************************!*\
  !*** ./src/app/dashboard/film/rating/rating.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.users-rating-text{\r\n    display: inline-block;\r\n    width: 100px;\r\n    margin-left: 5px;\r\n    font-size: 13px;\r\n    line-height: 14px;\r\n    font-weight: 700;\r\n    color: white;\r\n    padding-top: 15px;\r\n    vertical-align: top;\r\n}\r\n/* ----------------PROGRESS BAR ------------------*/\r\n.progress{\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: none;\r\n    margin: 0 auto;\r\n    box-shadow: none;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.progress:after{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 5px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.progress > span{\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.progress-left{\r\n    left: 0;\r\n}\r\n.progress-bar{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: none;\r\n    border-width: 6px;\r\n    border-style: solid;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n.progress-left .progress-bar{\r\n    left: 100%;\r\n    border-top-right-radius: 80px;\r\n    border-bottom-right-radius: 80px;\r\n    border-left: 0;\r\n    -webkit-transform-origin: center left;\r\n    transform-origin: center left;\r\n}\r\n.progress-right{\r\n    right: 0;\r\n}\r\n.progress-right .progress-bar{\r\n    left: -100%;\r\n    border-top-left-radius: 80px;\r\n    border-bottom-left-radius: 80px;\r\n    border-right: 0;\r\n    -webkit-transform-origin: center right;\r\n    transform-origin: center right;\r\n}\r\n.progress-value{\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    background: #081C22;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    line-height: 53px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n}\r\n@-webkit-keyframes loading-1{\r\n    0%{\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n@keyframes loading-1{\r\n    0%{\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100%{\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n    }\r\n}\r\n@media only screen and (max-width: 990px){\r\n    .progress{ margin-bottom: 0px; }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/film/rating/rating.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/film/rating/rating.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress blue\">\r\n  <span class=\"progress-left\">\r\n      <span   class=\"progress-bar\"\r\n              [ngStyle]=\"{'transform': 'rotate(' + leftProgressDeg + 'deg)',\r\n                          'border-color': colorProgress}\">\r\n      </span>\r\n  </span>\r\n  <span class=\"progress-right\">\r\n      <span   class=\"progress-bar\"\r\n              [ngStyle]=\"{'transform': 'rotate(' + rightProgressDeg + 'deg)',\r\n                          'border-color': colorProgress}\">\r\n      </span>\r\n  </span>\r\n  <div class=\"progress-value\">{{rating*10}}%</div>\r\n</div>\r\n<div class=\"users-rating-text\">Рейтинг пользователей</div>"

/***/ }),

/***/ "./src/app/dashboard/film/rating/rating.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/film/rating/rating.component.ts ***!
  \***********************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingComponent = /** @class */ (function () {
    function RatingComponent(route, router, filmCardService) {
        this.route = route;
        this.router = router;
        this.filmCardService = filmCardService;
        this.leftProgressDeg = 0;
        this.rightProgressDeg = 0;
        this.colorProgress = '';
    }
    RatingComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                this.rating = changes[key].currentValue;
            }
        }
        this.makeLoader();
    };
    RatingComponent.prototype.makeLoader = function () {
        var self = this;
        var rating = this.rating ? this.rating * 10 : 0;
        if (rating > 70) {
            this.colorProgress = '#21D07A';
        }
        else if (rating > 60) {
            this.colorProgress = '#D2D531';
        }
        else {
            this.colorProgress = '#ff3300';
        }
        this.startLoader(self, rating);
    };
    RatingComponent.prototype.startLoader = function (self, rating) {
        setTimeout(function () {
            if (rating > 0) {
                if (self.rightProgressDeg >= 180) {
                    self.leftProgressDeg = self.leftProgressDeg + 10.8;
                    rating = rating - 3;
                    self.startLoader(self, rating);
                }
                else {
                    if (self.rightProgressDeg >= 169) {
                        self.rightProgressDeg = 180;
                    }
                    else {
                        self.rightProgressDeg = self.rightProgressDeg + 10.8;
                    }
                    rating = rating - 3;
                    self.startLoader(self, rating);
                }
            }
        }, 30);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "rating", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            moduleId: module.i,
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/dashboard/film/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/dashboard/film/rating/rating.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-for-films{\r\n    float: none;\r\n    margin: auto;\r\n}\r\n\r\n.card-avatar-manual{\r\n    max-width: none;\r\n    max-height: none;\r\n    margin: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.img{\r\n    min-height: 700px;\r\n    min-width: 100%;\r\n}\r\n\r\n.img-wrap{\r\n    height: 700px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.card-title-film{\r\n    height: 35px;\r\n}\r\n\r\n.card-content-film{\r\n    height: 145px;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    color: rgba(0,0,0, 0.7);\r\n}\r\n\r\n.loader-custom{\r\n    position: unset;\r\n    margin: 60px auto 0;\r\n}\r\n\r\n.loader-hide{\r\n    display: none;\r\n}\r\n\r\n.button-row{\r\n    text-align: center;\r\n}\r\n\r\n.btn-get-more{\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 col-lg-10 wrap-for-films\" *ngFor=\"let film of filmList; let i = index\">\r\n                \r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar card-avatar-manual\">\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"img-wrap\">\r\n                                <img class=\"img\"\r\n                                [src]=\"film.poster_path ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path : '../assets/img/no-image.jpg'\"/>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">{{film.release_date}}</h6>\r\n                            <h4 class=\"card-title card-title-film\">{{film.title}}</h4>\r\n                            <p class=\"card-content card-content-film\">\r\n                                {{film.overview}}\r\n                            </p>\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"btn btn-danger btn-round\">Подробнее</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div [ngClass] = \"{'loader': true, 'loader-custom': true, 'loader-hide': hideLoader}\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n        </svg>\r\n    </div>\r\n    <div class=\"button-row\">\r\n            <button class=\"btn btn-danger btn-get-more\" (click)=\"getMoreFilms()\">Больше фильмов</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
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
    function HomeComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        window.scrollTo(0, 0);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.filmCategory = 'popularity';
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();
    };
    HomeComponent.prototype.getFilms = function () {
        var _this = this;
        this.hideLoader = false;
        if (!this.filmCategory) {
            return;
        }
        if (this.pageList === 1) {
            this.filmList = [];
        }
        this.filmCardService.getFilms(this.filmCategory, this.pageList).subscribe(function (films) {
            _this.hideLoader = true;
            if (films.length > 0) {
                _this.filmList = _this.filmList.concat(films);
            }
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.getMoreFilms = function () {
        this.pageList++;
        this.getFilms();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            moduleId: module.i,
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/search/search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/search/search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-for-films{\r\n    float: none;\r\n    margin: auto;\r\n}\r\n\r\n.card-avatar-manual{\r\n    max-width: none;\r\n    max-height: none;\r\n    margin: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.img{\r\n    min-height: 700px;\r\n    min-width: 100%;\r\n}\r\n\r\n.img-wrap{\r\n    height: 700px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.card-title-film{\r\n    height: 35px;\r\n}\r\n\r\n.card-content-film{\r\n    height: 145px;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    color: rgba(0,0,0, 0.7);\r\n}\r\n\r\n.loader-custom{\r\n    position: unset;\r\n    margin: 60px auto 0;\r\n}\r\n\r\n.loader-hide{\r\n    display: none;\r\n}\r\n\r\n.button-row{\r\n    text-align: center;\r\n}\r\n\r\n.btn-get-more{\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div *ngIf = 'noResults' class=\"text-center\">\r\n                <h3>Простите, по Вашему запросу нет результатов</h3>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-10 wrap-for-films\" *ngFor=\"let film of filmList; let i = index\">\r\n                \r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar card-avatar-manual\">\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"img-wrap\">\r\n                                <img class=\"img\"\r\n                                 [src]=\"film.poster_path ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path : '../assets/img/no-image.jpg'\"/>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">{{film.release_date}}</h6>\r\n                            <h4 class=\"card-title card-title-film\">{{film.title}}</h4>\r\n                            <p class=\"card-content card-content-film\">\r\n                                {{film.overview}}\r\n                            </p>\r\n                            <a routerLink=\"/film/{{film.id}}\" class=\"btn btn-danger btn-round\">Подробнее</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div [ngClass] = \"{'loader': true, 'loader-custom': true, 'loader-hide': hideLoader}\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n        </svg>\r\n    </div>\r\n    <div class=\"button-row\" *ngIf=\"showMoreButton\">\r\n            <button class=\"btn btn-danger btn-get-more\" (click)=\"getMoreFilms()\">Больше фильмов</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(filmCardService, route) {
        this.filmCardService = filmCardService;
        this.route = route;
        this.filmList = [];
        this.searchPageList = 1;
        this.showMoreButton = false;
        this.noResults = false;
        window.scrollTo(0, 0);
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmCategory = 'popularity';
        this.hideLoader = true;
        this.sub = this.route.params.subscribe(function (params) {
            _this.searchText = params['film'];
            if (_this.searchText) {
                _this.getSearchFilms('new');
            }
        });
    };
    SearchComponent.prototype.getSearchFilms = function (typeSearch) {
        var _this = this;
        this.hideLoader = false;
        this.filmList = [];
        this.noResults = false;
        if (typeSearch === 'new') {
            this.searchPageList = 1;
        }
        this.filmCardService.getSearchFilms(this.searchText, this.searchPageList)
            .subscribe(function (data) {
            _this.hideLoader = true;
            _this.pagesInThisSearch = +data.total_pages;
            if (_this.pagesInThisSearch > 1 && _this.pagesInThisSearch > _this.searchPageList) {
                _this.showMoreButton = true;
            }
            else {
                _this.showMoreButton = false;
            }
            if (data && data.length) {
                _this.filmList = _this.filmList.concat(data);
            }
            else {
                _this.noResults = true;
            }
        });
    };
    SearchComponent.prototype.getMoreFilms = function () {
        if (this.pagesInThisSearch >= this.searchPageList) {
            this.searchPageList++;
            this.getSearchFilms('more');
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            moduleId: module.i,
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/dashboard/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/dashboard/search/search.component.css")],
        }),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/film.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/film.service.ts ***!
  \******************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilmService = /** @class */ (function () {
    function FilmService(http) {
        this.http = http;
        this.apiKey = '4f6a92e0a096ef372e94f1dfb9403a29';
        this.apiUrl = 'https://api.themoviedb.org/3/';
        this.filmsUrl = this.apiUrl + "discover/movie?api_key=" + this.apiKey + "&language=ru";
        this.filmUrlFirstPart = this.apiUrl + "movie/";
        this.filmUrlSecondPart = "?api_key=" + this.apiKey + "&language=ru";
        this.actorsUrlFirstPart = this.apiUrl + "movie/";
        this.actorsUrlSecondPart = "/credits?api_key=" + this.apiKey;
        this.searchUrlFirstPart = this.apiUrl + "search/movie?api_key=" + this.apiKey + "&language=ru&query=";
        this.searchUrlSecondPart = '&page=';
    }
    FilmService.prototype.extractListData = function (res) {
        var body = res;
        return body.results || {};
    };
    FilmService.prototype.extracData = function (res) {
        var body = res;
        return body || {};
    };
    FilmService.prototype.extractActorsData = function (res) {
        // console.log(res, 'response ');
        var body = res;
        return body.cast || {};
    };
    FilmService.prototype.getFilms = function (filmCategory, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.filmsUrl + "&sort_by=" + filmCategory + ".desc&include_adult=false&include_video=false&page=" + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractListData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.getSearchFilms = function (film, page) {
        return this.http.get("" + this.searchUrlFirstPart + film + this.searchUrlSecondPart + page + "&include_adult=false").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractListData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.getFilmById = function (filmId) {
        return this.http.get(this.filmUrlFirstPart + filmId + this.filmUrlSecondPart)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extracData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.getActors = function (filmId) {
        return this.http.get(this.actorsUrlFirstPart + filmId + this.actorsUrlSecondPart)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractListData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /*-------------------------BACKEND----------------------------------------------*/
    FilmService.prototype.getFilmsFromMdb = function () {
        return this.http.get('./api/films')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extracData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.saveFilm = function (id) {
        var favorite = { filmId: id, status: true };
        return this.http.post('./api/film', favorite)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractListData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.deleteFilm = function (id) {
        return this.http.delete("./api/film/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractListData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FilmService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    };
    FilmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmService);
    return FilmService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.linkedin.com/in/alexreshetnyak/\">\r\n                        LinkedIn\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://github.com/alexReshetnyak\">\r\n                        GitHub\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} Alexey Reshetnyak\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/guards/films-resolve-service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/guards/films-resolve-service.ts ***!
  \********************************************************/
/*! exports provided: FilmResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmResolver", function() { return FilmResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmResolver = /** @class */ (function () {
    function FilmResolver(filmService, router) {
        this.filmService = filmService;
        this.router = router;
    }
    FilmResolver.prototype.resolve = function (route) {
        return this.filmService.getFilmById(route.params.id);
    };
    FilmResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FilmResolver);
    return FilmResolver;
}());



/***/ }),

/***/ "./src/app/shared/models/film-model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/film-model.ts ***!
  \*********************************************/
/*! exports provided: Film */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
var Film = /** @class */ (function () {
    function Film() {
    }
    return Film;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar-routes.config.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/navbar/navbar-routes.config.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    { path: 'home', title: 'Популярные Фильмы', icon: 'grade', class: '' },
    { path: 'userfilms', title: 'Избранные фильмы', icon: 'person', class: '' },
];


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".film-navigation{\r\n\r\n}\r\n.film-navigation-wrap{\r\n    padding: 0;\r\n    box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42),\r\n                0 3px 20px 0 rgba(0, 0, 0, 0.12),\r\n                0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    border-bottom: 0;\r\n}\r\n.navbar-menu-element{\r\n    margin: 5px 0 5px;\r\n}\r\n@media (max-width: 991px){\r\n    p.navbar-menu-element{\r\n        margin-left: 0;\r\n    }\r\n}\r\n.form-search{\r\n    margin-top: 10px;\r\n}\r\n.form-search input{\r\n    background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#ffffff, #ffffff);\r\n}\r\n.form-search input:focus{\r\n    background-image: linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(#ffffff, #ffffff);\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-danger film-navigation-wrap navbar-fixed-top\" role=\"navigation\">\r\n\t<div class=\"container film-navigation\">\r\n    \t<div class=\"navbar-header\">\r\n    \t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n    \t\t</button>\r\n    \t\t<a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/img/312x276-primary-blue.png\" height=\"40\"/></a>\r\n    \t</div>\r\n    \t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    \t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n\t\t\t\t\t<a  [routerLink]=\"[menuItem.path]\">\r\n\t\t\t\t\t\t<p class='navbar-menu-element'>\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">{{menuItem.icon}}</i>\r\n\t\t\t\t\t\t\t{{menuItem.title}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<form \tclass=\"navbar-form navbar-right form-search\"\r\n\t\t\t\t\t(submit) = 'launchSearchComponent(searchFilm)'\r\n\t\t\t\t\trole=\"search\">\r\n\t\t\t\t<div class=\"form-group form-black is-empty\">\r\n\t\t\t\t\t\t<input  type=\"text\"\r\n\t\t\t\t\t\t\t\tname = 'search'\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t[(ngModel)] = 'searchFilm'\r\n\t\t\t\t\t\t\t\tplaceholder=\"Поиск фильмов\">\r\n\t\t\t\t\t\t<span class=\"material-input\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"submit\"\r\n\t\t\t\t\t\tclass=\"btn btn-white btn-round btn-just-icon\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n\t\t\t\t</button>\r\n\t\t\t</form>\r\n    \t</div>\r\n\t</div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-routes.config */ "./src/app/shared/navbar/navbar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.router = router;
        this.searchFilm = '';
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _navbar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        this.menuItems = _navbar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) {
            if (menuItem.path !== 'table') {
                return menuItem;
            }
        });
    };
    NavbarComponent.prototype.launchSearchComponent = function (searchFilm) {
        this.router.navigate(['/search/' + searchFilm]);
        this.searchFilm = '';
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/alex/A2BCE6A6BCE673E7/Собеседование/MyProjects/Film-catalog-Angular git/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map