import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Film } from '..//models/film-model';
import { FilmService } from '../../services/film.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmResolver implements Resolve<Film> {

  constructor(private filmService: FilmService, private router: Router) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.filmService.getFilmById(route.params.id);
  }
}
