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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var film_service_1 = require('../../services/film.service');
var film_model_1 = require('../../shared/models/film-model');
var FilmComponent = (function () {
    function FilmComponent(route, router, filmCardService) {
        this.route = route;
        this.router = router;
        this.filmCardService = filmCardService;
        this.filmItem = new film_model_1.Film;
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
    FilmComponent.prototype.getUp = function () {
        console.log(this.pixel, window.pageYOffset, document.documentElement.scrollTop);
        window.scrollTo(+this.pixel, +this.pixel);
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
        core_1.ViewChild('wrap'), 
        __metadata('design:type', core_1.ElementRef)
    ], FilmComponent.prototype, "wrapDiv", void 0);
    FilmComponent = __decorate([
        core_1.Component({
            selector: 'film-cmp',
            moduleId: module.id,
            templateUrl: 'film.component.html',
            styleUrls: ['film.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, film_service_1.FilmService])
    ], FilmComponent);
    return FilmComponent;
}());
exports.FilmComponent = FilmComponent;
//# sourceMappingURL=film.component.js.map