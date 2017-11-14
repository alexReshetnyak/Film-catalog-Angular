import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    public menuItems: any[];
    private searchFilm: string = '';
    public location: Location;

    constructor(location:Location, private searchService: SearchService, private router: Router) {
        this.location = location;
    }
    public ngOnInit(): any {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.menuItems = ROUTES.filter(menuItem => {
            if (menuItem.path != 'table') {
                return menuItem;
            }
        });
    }

    public launchSearchComponent(): void {
        this.searchService.setText(this.searchFilm);
        this.searchFilm = '';
        if (this.router.url !== '/search') {
            this.router.navigate(['/search']);
        }
    }
}
