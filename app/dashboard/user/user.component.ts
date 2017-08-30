import { Component, OnInit, trigger, state, style, transition, animate, Input, Output } from '@angular/core';
import {FilmService} from '../../services/film.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
})

export class UserComponent implements OnInit{

    filmList : Object[] = [];

    constructor(private filmCardService: FilmService) { window.scrollTo(0, 0); }

    ngOnInit(){
        this.getFilms();
    }

    getFilms(){
        this.filmCardService.getFilmsFromMdb().subscribe(data => {
            if (data) {
                data.forEach(film => {
                    this.filmCardService.getFilmById(film.filmId).subscribe(data => {
                        let filmItem = data;
                        filmItem.year = filmItem.release_date.slice(0,4) || 'неизвестно';
                        this.filmList.push(filmItem);
                    });
                });
            }
        });
    }
}
