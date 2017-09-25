import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { FilmResolver } from '../shared/guards/films-resolve-service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule,
        FormsModule,
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [ FilmResolver ],
})

export class DashboardModule{}
