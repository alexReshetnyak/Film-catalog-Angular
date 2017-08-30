import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { FilmResolver } from '../shared/guards/films-resolve-service';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [ FilmResolver ],
})

export class DashboardModule{}
