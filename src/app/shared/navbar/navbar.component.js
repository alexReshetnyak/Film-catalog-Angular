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
var navbar_routes_config_1 = require('./navbar-routes.config');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var search_service_1 = require('../../services/search.service');
var NavbarComponent = (function () {
    function NavbarComponent(location, searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.searchFilm = "";
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = navbar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle; });
        this.menuItems = navbar_routes_config_1.ROUTES.filter(function (menuItem) { if (menuItem.path != 'table') {
            return menuItem;
        } });
    };
    NavbarComponent.prototype.launchSearchComponent = function () {
        // console.log(this.searchFilm, 1);
        this.router.navigate(['/search']);
        var self = this;
        setTimeout(function () {
            self.searchService.sendText(self.searchFilm);
        }, 0);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-cmp',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [common_1.Location, search_service_1.SearchService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map