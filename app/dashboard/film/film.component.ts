import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FilmService} from '../../services/film.service';
import { Film } from '../../shared/models/film-model'; 

@Component({
    selector: 'film-cmp',
    moduleId: module.id,
    templateUrl: 'film.component.html',
    styleUrls: ['film.component.css'],
})

export class FilmComponent{

    id: string;
    filmItem: Film = new Film;
    filmYear: string;
    filmAddedStatus: boolean = false;

    constructor(
                private route: ActivatedRoute,
                private router: Router,
                private filmCardService: FilmService
                ){ window.scrollTo(0, 0);}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        if(!this.id) {return;}

        this.route.data.subscribe((data: {film: Film}) => {
            this.filmItem = data.film;
            this.filmItem.year = this.filmItem.release_date.slice(0,4) || 'неизвестно';
            this.getAllFilmsFromMdb();
        });

    }

    getAllFilmsFromMdb(){
        this.filmCardService.getFilmsFromMdb().subscribe(data => {
            if (data && data.length && data.length >= 1) {
                data.forEach(film => {
                    if (film.filmId && this.id === film.filmId) {
                        this.filmAddedStatus = true;
                    }
                });
            }
        });
    }

    changeFilmStatus(){
            if (this.filmAddedStatus) {
                this.deleteFilm();
            }else{
                this.saveFilm();
            }
    }

    deleteFilm(){
        this.filmCardService.deleteFilm(this.id).subscribe(data => {
            console.log(data, 'deleted');
            this.filmAddedStatus = false;
        });
    }

    saveFilm(){
        this.filmCardService.saveFilm(this.id).subscribe(data => {
            console.log(data, "saved");
            this.filmAddedStatus = true;
        });
    }
}
