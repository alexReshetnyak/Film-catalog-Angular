import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FilmService } from './services/film.service';

import { DashboardModule } from './dashboard/dashboard.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomReuseStrategy } from './reuse-strategy';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        DashboardModule,
        NavbarModule,
        FooterModule,
        CommonModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: RouteReuseStrategy,
            useClass: CustomReuseStrategy
        }
        // FilmService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
