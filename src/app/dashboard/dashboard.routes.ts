import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FilmComponent } from './film/film.component';
import { SearchComponent } from './search/search.component';
import { ActorsComponent } from './film/actors/actors.component';
import { RatingComponent } from './film/rating/rating.component';
import { FilmResolver } from '../shared/guards/films-resolve-service';

export const MODULE_ROUTES: Route[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'search/:film',
        component: SearchComponent
    },
    {
        path: 'search',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'userfilms',
        component: FavoritesComponent,
        data: { title: 'best films' }
    },
    {
        path: 'film/:id',
        component: FilmComponent,
        data: { title: 'Heroes List' },
        resolve: {film: FilmResolver}
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const MODULE_COMPONENTS = [
    HomeComponent,
    FavoritesComponent,
    FilmComponent,
    ActorsComponent,
    RatingComponent,
    SearchComponent,
];
