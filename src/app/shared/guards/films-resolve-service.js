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
var FilmResolver = (function () {
    function FilmResolver(filmService, router) {
        this.filmService = filmService;
        this.router = router;
    }
    FilmResolver.prototype.resolve = function (route) {
        return this.filmService.getFilmById(route.params.id);
    };
    FilmResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [film_service_1.FilmService, router_1.Router])
    ], FilmResolver);
    return FilmResolver;
}());
exports.FilmResolver = FilmResolver;
//# sourceMappingURL=films-resolve-service.js.map