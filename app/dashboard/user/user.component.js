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
var film_service_1 = require('../../services/film.service');
var UserComponent = (function () {
    function UserComponent(filmCardService) {
        this.filmCardService = filmCardService;
        this.filmList = [];
        window.scrollTo(0, 0);
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getFilms();
    };
    UserComponent.prototype.getFilms = function () {
        var _this = this;
        this.filmCardService.getFilmsFromMdb().subscribe(function (data) {
            if (data) {
                data.forEach(function (film) {
                    _this.filmCardService.getFilmById(film.filmId).subscribe(function (data) {
                        var filmItem = data;
                        filmItem.year = filmItem.release_date.slice(0, 4) || 'неизвестно';
                        _this.filmList.push(filmItem);
                    });
                });
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html',
            styleUrls: ['user.component.css'],
        }), 
        __metadata('design:paramtypes', [film_service_1.FilmService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map