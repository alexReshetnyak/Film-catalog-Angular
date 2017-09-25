import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    public menuItems: any[];
    private searchFilm: string = "";
    location: Location;

    constructor(location:Location, private searchService: SearchService, private router: Router) {
        this.location = location;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.menuItems = ROUTES.filter(menuItem => {if(menuItem.path != 'table'){return menuItem}});
    }

    launchSearchComponent(){
       // console.log(this.searchFilm, 1);
        this.router.navigate(['/search']);
        const self = this;
        setTimeout(function() {
            self.searchService.sendText(self.searchFilm);
        }, 0);
    }
}
