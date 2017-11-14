import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilmService {
    private apiKey: string = '4f6a92e0a096ef372e94f1dfb9403a29';
    private apiUrl: string = 'https://api.themoviedb.org/3/';
    private filmsUrl: string = `${this.apiUrl}discover/movie?api_key=${this.apiKey}&language=ru`;
    private filmUrlFirstPart: string = `${this.apiUrl}movie/`;
    private filmUrlSecondPart: string = `?api_key=${this.apiKey}&language=ru`;
    private actorsUrlFirstPart: string = `${this.apiUrl}movie/`;
    private actorsUrlSecondPart: string = `/credits?api_key=${this.apiKey}`;
    private searchUrlFirstPart: string = `${this.apiUrl}search/movie?api_key=${this.apiKey}&language=ru&query=`;
    private searchUrlSecondPart: string = '&page=';

    constructor(private http: Http) {}

    private extractListData (res: Response): object {
        const body = res.json();
        return body.results || {};
    }

    private extracData(res: Response): object {
        const body = res.json();
        return body || {};
    }

    private extractActorsData(res: Response): object {
        const body = res.json();
        return body.cast || {};
    }

    public getFilms(filmCategory: string, page: number = 1): Observable<any> {
        return this.http.get(`${this.filmsUrl}&sort_by=${filmCategory}.desc&include_adult=false&include_video=false&page=${page}`)
                        .map(this.extractListData)
                        .catch(this.handleError);
    }

    public getSearchFilms(film:string, page: number): Observable<any> {
        return this.http.get(`${this.searchUrlFirstPart}${film}${this.searchUrlSecondPart}${page}&include_adult=false`)
                        .map(this.extracData)
                        .catch(this.handleError);
    }

    public getFilmById(filmId: string): Observable<any> {
        return this.http.get(this.filmUrlFirstPart + filmId + this.filmUrlSecondPart)
                        .map(this.extracData)
                        .catch(this.handleError);
    }

    public getActors(filmId: string): Observable<any> {
        return this.http.get(this.actorsUrlFirstPart + filmId + this.actorsUrlSecondPart)
                        .map(this.extractActorsData)
                        .catch(this.handleError);
    }

    /*-------------------------BACKEND----------------------------------------------*/

    public getFilmsFromMdb(): Observable<any> {
        return this.http.get('./api/films')
                        .map(this.extracData)
                        .catch(this.handleError);
    }

    public saveFilm(id): Observable<any> {
        const favorite = {filmId: id, status: true};
        return this.http.post('./api/film', favorite)
                        .map(this.extracData)
                        .catch(this.handleError);
    }

    public deleteFilm(id): Observable<any> {
        return this.http.delete(`./api/film/${id}`)
                        .map(this.extracData)
                        .catch(this.handleError);
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
        return Observable.throw(errMsg);
    }
}
