import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    pixel;
    @ViewChild('wrap')
    wrapDiv: ElementRef;

    constructor(
                private route: ActivatedRoute,
                private router: Router,
                private filmCardService: FilmService
                ){
                    window.scrollTo(0, 0);
                }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        if(!this.id) {return;}

        this.route.data.subscribe((data: {film: Film}) => {
            this.filmItem = data.film;
            this.filmItem.year = this.filmItem.release_date.slice(0,4) || 'неизвестно';
            this.getAllFilmsFromMdb();
        });

    }

    getUp(){
        console.log(this.pixel, window.pageYOffset, document.documentElement.scrollTop);
        window.scrollTo(+this.pixel, +this.pixel);
    }

    getAllFilmsFromMdb(){
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

    changeFilmStatus(){
            if (this.filmAddedStatus) {
                this.deleteFilm();
            }else{
                this.saveFilm();
            }
    }

    deleteFilm(){
        this.filmCardService.deleteFilm(this.id).subscribe(data => {
            this.filmAddedStatus = false;
        });
    }

    saveFilm(){
        this.filmCardService.saveFilm(this.id).subscribe(data => {
            this.filmAddedStatus = true;
        });
    }
}
