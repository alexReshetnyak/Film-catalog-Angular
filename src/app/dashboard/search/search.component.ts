import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';

declare let $: any;

@Component({
    selector: 'app-search',
    moduleId: module.id,
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})

export class SearchComponent implements OnInit, OnDestroy {

    public filmList: Object[] = [];
    public filmCategory: string;
    public searchPageList: number = 1;
    public hideLoader: boolean;
    public showMoreButton: boolean = false;
    public searchText: string;
    public pagesInThisSearch: number;
    public dataFilmsShort: string[];
    public sub: any;
    public noResults: boolean = false;

    constructor(private filmCardService: FilmService,
                private route: ActivatedRoute) {
                    window.scrollTo(0, 0);
                }

    public ngOnInit(): void {
        this.filmCategory = 'popularity';
        this.hideLoader = true;
        this.sub = this.route.params.subscribe(params => {
            this.searchText = params['film'];
            if (this.searchText) {
                this.getSearchFilms('new');
            }
        });
    }

    public getSearchFilms(typeSearch): void {
        this.hideLoader = false;
        this.filmList = [];
        this.noResults = false;
        if (typeSearch === 'new') {
            this.searchPageList = 1;
        }

        this.filmCardService.getSearchFilms(this.searchText, this.searchPageList)
        .subscribe(data => {
            this.hideLoader = true;
            this.pagesInThisSearch = +data.total_pages;
            if (this.pagesInThisSearch > 1 && this.pagesInThisSearch > this.searchPageList) {
                this.showMoreButton = true;
            }else{
                this.showMoreButton = false;
            }
            if (data.results.length > 0) {
                this.filmList = [...this.filmList, ...data.results];
            } else {
                this.noResults = true;
            }
        });
    }

    public getMoreFilms(): void {
        if (this.pagesInThisSearch >= this.searchPageList) {
            this.searchPageList++;
            this.getSearchFilms('more');
        }
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
