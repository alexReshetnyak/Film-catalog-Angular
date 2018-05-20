import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

declare let $: any;

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

    public filmList: object[] = [];
    public selectedValue: number;
    public filmCategory: string;
    public pageList: number;
    public hideLoader: boolean;

    constructor(
        private filmCardService: FilmService
    ) {
        window.scrollTo(0, 0);
    }

    public ngOnInit(): void {
        this.filmCategory = 'popularity';
        this.selectedValue = 1;
        this.pageList = 1;
        this.hideLoader = true;
        this.getFilms();
    }

    public getFilms(): void {
        this.hideLoader = false;
        if (!this.filmCategory) { return; }
        if (this.pageList === 1) { this.filmList = []; }
        this.filmCardService.getFilms(this.filmCategory, this.pageList).subscribe(films => {
            this.hideLoader = true;
            if (films.length > 0) {
                this.filmList = [...this.filmList, ...films];
            }
        },
        error =>  console.error(error));
    }

    public getMoreFilms(): void {
        this.pageList++;
        this.getFilms();
    }
}
