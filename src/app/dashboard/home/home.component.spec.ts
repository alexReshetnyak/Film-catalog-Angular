
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/internal/operators/delay';

import { HomeComponent } from './home.component';
import { FilmService } from './../../services/film.service';


describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let nativeElement: HTMLElement;
  let filmService: FilmService;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        HomeComponent,
      ],
      providers: [
        FilmService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    filmService = fixture.debugElement.injector.get(FilmService);
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('button should have as title "Больше фильмов"', async(() => {

    fixture.detectChanges();
    const text = nativeElement.querySelector('.btn-get-more').textContent;

    expect(text).toEqual('Больше фильмов');
  }));

  it('should inject Film Service', async(() => {

    fixture.detectChanges();
    expect(filmService).toBeTruthy();
  }));

  it('should have as filmCategory "popularity"', async(() => {
    fixture.detectChanges();
    expect(component.filmCategory).toEqual('popularity');
  }));

  it('should have as pageList 1', async(() => {
    fixture.detectChanges();
    expect(component.pageList).toEqual(1);
  }));

  it('getMoreFilms should increase pageList', async(() => {
    fixture.detectChanges();
    let initialPageList = component.pageList;
    component.getMoreFilms();
    fixture.detectChanges();
    initialPageList++;
    expect(component.pageList).toEqual(initialPageList);
    // expect(component.getFilms).toHaveBeenCalled();
  }));

  it('getFilms should change filmList', async(() => {

    spyOn(filmService, 'getFilms')
      .and.returnValue(
        of(['', '']).pipe(
          delay(100)
        )
      );

    // component.getFilms();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.filmList.length).toBeGreaterThan(0);
    });

    // expect(filmService.getFilms).toHaveBeenCalled();
  }));
});
