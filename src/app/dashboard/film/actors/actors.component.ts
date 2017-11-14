import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../../../services/film.service';

@Component({
    selector: 'app-actors',
    moduleId: module.id,
    templateUrl: 'actors.component.html',
    styleUrls: ['actors.component.css'],
})

export class ActorsComponent implements OnInit {

    @Input() public id: string;
    public actors: Object[] = [];

    constructor(
                private filmCardService: FilmService
                ) {}

    public ngOnInit(): void {
        this.filmCardService.getActors(this.id)
        .subscribe(actors => {
            if (actors.length > 5) {
                for (let i = 0; i < 5; i++) {
                    this.actors[i] = actors[i];
                }
            }
        });
    }
}
