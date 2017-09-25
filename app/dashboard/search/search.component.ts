import { Component, OnInit, trigger, state, style, transition, animate, Input, Output, OnDestroy } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {SearchService} from '../../services/search.service';
import 'rxjs/add/operator/debounceTime';

declare var $:any;

@Component({
    selector: 'search-cmp',
    moduleId: module.id,
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})

export class SearchComponent implements OnInit{

    filmList : Object[]= [];
    filmCategory : string;
    searchPageList: number = 1;
    hideLoader: boolean;
    showMoreButton: boolean = false;
    searchText: string = "";
    searchObservable;
    pagesInThisSearch: number;
    dataFilmsShort: string[];

    constructor(private filmCardService: FilmService,
                private searchService: SearchService) {
                    window.scrollTo(0, 0); 
                }

    ngOnInit(){
        this.filmCategory = "popularity";
        this.hideLoader = true;

        this.searchObservable = this.searchService.getText()
            .debounceTime(250)
            .subscribe( text => {
                this.searchText = text+"";
                this.getSearchFilms('new');
            }
        );
    }

    getSearchFilms(typeSearch){
        if (typeSearch === 'new'){
            this.searchPageList = 1;
        }
        this.hideLoader= false;
        this.filmList = [];
        this.filmCardService.getSearchFilms(this.searchText, this.searchPageList).subscribe(data => {
            this.hideLoader= true;
            this.pagesInThisSearch = +data.total_pages;
            if (this.pagesInThisSearch > 1 && this.pagesInThisSearch > this.searchPageList) {
                this.showMoreButton = true;
            }else{
                this.showMoreButton = false;
            }
            this.filmList = [...this.filmList, ...data.results];
        });
    }

    getMoreFilms(){
        if (this.pagesInThisSearch >= this.searchPageList) {
            this.searchPageList++;
            this.getSearchFilms('more');
        }
    }

    ngOnDestroy() {
        this.searchObservable.unsubscribe();
    }
}
