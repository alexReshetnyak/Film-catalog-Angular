import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
    selector: 'app-favorites',
    moduleId: module.id,
    templateUrl: 'favorites.component.html',
    styleUrls: ['favorites.component.css'],
    preserveWhitespaces: false
})

export class FavoritesComponent implements OnInit {

    public filmList: object[] = [];

    constructor(private filmCardService: FilmService) {
        window.scrollTo(0, 0);
    }

    public ngOnInit(): void {
        this.getFilms();
    }

    public getFilms(): void {
        this.filmCardService.getFilmsFromMdb().subscribe((films: any) => {
            if (films) {
                films.forEach(film => {
                    this.filmCardService.getFilmById(film.filmId).subscribe((filmItem: any) => {
                        filmItem.year = filmItem.release_date.slice(0, 4) || 'неизвестно';
                        this.filmList.push(filmItem);
                    });
                });
            }
        });
    }
}
