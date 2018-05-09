"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var film_component_1 = require('./film/film.component');
var search_component_1 = require('./search/search.component');
var actors_component_1 = require('./film/actors/actors.component');
var rating_component_1 = require('./film/rating/rating.component');
var films_resolve_service_1 = require('../shared/guards/films-resolve-service');
exports.MODULE_ROUTES = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'userfilms',
        component: user_component_1.UserComponent,
        data: { title: 'best films' }
    },
    {
        path: 'film/:id',
        component: film_component_1.FilmComponent,
        data: { title: 'Heroes List' },
        resolve: { film: films_resolve_service_1.FilmResolver }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    film_component_1.FilmComponent,
    actors_component_1.ActorsComponent,
    rating_component_1.RatingComponent,
    search_component_1.SearchComponent,
];
//# sourceMappingURL=dashboard.routes.js.map