import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit {
    public listTitles: any[];
    public menuItems: any[];
    public searchFilm = '';
    public location: Location;

    constructor(location: Location, private router: Router) {
        this.location = location;
    }
    public ngOnInit(): any {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.menuItems = ROUTES.filter(menuItem => {
            if (menuItem.path !== 'table') {
                return menuItem;
            }
        });
    }

    public launchSearchComponent(searchFilm): void {
        this.router.navigate(['/search/' + searchFilm]);
        this.searchFilm = '';
    }
}
