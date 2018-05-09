
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FilmService {
    private apiKey = '4f6a92e0a096ef372e94f1dfb9403a29';
    private apiUrl = 'https://api.themoviedb.org/3/';
    private filmsUrl = `${this.apiUrl}discover/movie?api_key=${this.apiKey}&language=ru`;
    private filmUrlFirstPart = `${this.apiUrl}movie/`;
    private filmUrlSecondPart = `?api_key=${this.apiKey}&language=ru`;
    private actorsUrlFirstPart = `${this.apiUrl}movie/`;
    private actorsUrlSecondPart = `/credits?api_key=${this.apiKey}`;
    private searchUrlFirstPart = `${this.apiUrl}search/movie?api_key=${this.apiKey}&language=ru&query=`;
    private searchUrlSecondPart = '&page=';

    constructor(private http: HttpClient) {}

    private extractListData (res: any): object {
        const body = res;
        return body.results || {};
    }

    private extracData(res: Response): object {
        const body = res;
        return body || {};
    }

    private extractActorsData(res: any): object {
        // console.log(res, 'response ');
        const body = res;
        return body.cast || {};
    }

    public getFilms(filmCategory: string, page: number = 1): Observable<any> {
        return this.http.get(
            `${this.filmsUrl}&sort_by=${filmCategory}.desc&include_adult=false&include_video=false&page=${page}`
        ).pipe(
            map(this.extractListData),
            catchError(this.handleError)
        );
    }

    public getSearchFilms(film: string, page: number): Observable<any> {
        return this.http.get(
            `${this.searchUrlFirstPart}${film}${this.searchUrlSecondPart}${page}&include_adult=false`
        ).pipe(
            map(this.extractListData),
            catchError(this.handleError)
        );
    }

    public getFilmById(filmId: string): Observable<any> {
        return this.http.get(this.filmUrlFirstPart + filmId + this.filmUrlSecondPart)
        .pipe(
            map(this.extracData),
            catchError(this.handleError)
        );
    }

    public getActors(filmId: string): Observable<any> {
        return this.http.get(this.actorsUrlFirstPart + filmId + this.actorsUrlSecondPart)
        .pipe(
            map(this.extractListData),
            catchError(this.handleError)
        );
    }

    /*-------------------------BACKEND----------------------------------------------*/

    public getFilmsFromMdb(): Observable<any> {
        return this.http.get('./api/films')
        .pipe(
            map(this.extracData),
            catchError(this.handleError)
        );
    }

    public saveFilm(id): Observable<any> {
        const favorite = {filmId: id, status: true};
        return this.http.post('./api/film', favorite)
        .pipe(
            map(this.extractListData),
            catchError(this.handleError)
        );
    }

    public deleteFilm(id): Observable<any> {
        return this.http.delete(`./api/film/${id}`)
        .pipe(
            map(this.extractListData),
            catchError(this.handleError)
        );
    }

    private handleError(error: Response | any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return observableThrowError(errMsg);
    }
}
