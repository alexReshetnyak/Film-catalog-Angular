import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare let $: any;

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    public location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    public ngOnInit(): void {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
}
