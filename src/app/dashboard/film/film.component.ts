import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { Film } from '../../shared/models/film-model';

@Component({
    selector: 'app-film',
    moduleId: module.id,
    templateUrl: 'film.component.html',
    styleUrls: ['film.component.css'],
    preserveWhitespaces: false
})

export class FilmComponent implements OnInit {

    public id: string;
    public filmItem: Film = new Film;
    public filmYear: string;
    public filmAddedStatus = false;
    @ViewChild('wrap') public wrapDiv: ElementRef;

    constructor(
                private route: ActivatedRoute,
                private filmCardService: FilmService
                ) {
                    window.scrollTo(0, 0);
                }

    public ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        if (!this.id) { return; }

        this.route.data.subscribe((data: {film: Film}) => {
            this.filmItem = data.film;
            this.filmItem.year = this.filmItem.release_date.slice(0, 4) || 'неизвестно';
            this.getAllFilmsFromMdb();
        });
    }

    public getAllFilmsFromMdb(): void {
        this.filmCardService.getFilmsFromMdb().subscribe(data => {
            window.scrollTo(0, 0);
            if (data && data.length && data.length >= 1) {
                data.forEach(film => {
                    if (film.filmId && this.id === film.filmId) {
                        this.filmAddedStatus = true;
                    }
                });
            }
        });
    }

    public changeFilmStatus(): void {
        if (this.filmAddedStatus) {
            this.deleteFilm();
        } else {
            this.saveFilm();
        }
    }

    public deleteFilm(): void {
        this.filmCardService.deleteFilm(this.id).subscribe(data => {
            this.filmAddedStatus = false;
        });
    }

    public saveFilm(): void {
        this.filmCardService.saveFilm(this.id).subscribe(data => {
            this.filmAddedStatus = true;
        });
    }
}
