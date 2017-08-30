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
var search_service_1 = require('../../services/search.service');
require('rxjs/add/operator/debounceTime');
var SearchComponent = (function () {
    function SearchComponent(filmCardService, searchService) {
        this.filmCardService = filmCardService;
        this.searchService = searchService;
        this.filmList = [];
        this.searchPageList = 1;
        this.showMoreButton = false;
        this.searchText = "";
        window.scrollTo(0, 0);
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmCategory = "popularity";
        this.hideLoader = true;
        this.searchObservable = this.searchService.getText()
            .debounceTime(250)
            .subscribe(function (text) {
            console.log(text, 3);
            _this.searchText = text + "";
            _this.startNewSearchFilms();
        });
    };
    SearchComponent.prototype.startNewSearchFilms = function () {
        this.searchPageList = 1;
        this.getSearchFilms();
    };
    SearchComponent.prototype.getSearchFilms = function () {
        var _this = this;
        this.hideLoader = false;
        this.filmList = [];
        this.filmCardService.getSearchFilms(this.searchText, this.searchPageList).subscribe(function (data) {
            _this.hideLoader = true;
            console.log(data, 'getSearch');
            _this.pagesInThisSearch = +data.total_pages;
            if (_this.pagesInThisSearch > 1 && _this.pagesInThisSearch > _this.searchPageList) {
                _this.showMoreButton = true;
            }
            else {
                _this.showMoreButton = false;
            }
            _this.filmList = _this.filmList.concat(data.results);
        });
    };
    SearchComponent.prototype.getMoreFilms = function () {
        if (this.pagesInThisSearch >= this.searchPageList) {
            this.searchPageList++;
            this.getSearchFilms();
        }
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.searchObservable.unsubscribe();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-cmp',
            moduleId: module.id,
            templateUrl: 'search.component.html',
            styleUrls: ['search.component.css'],
        }), 
        __metadata('design:paramtypes', [film_service_1.FilmService, search_service_1.SearchService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map