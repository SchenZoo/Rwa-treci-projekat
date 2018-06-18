
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as actType from '../action.types';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import * as actions from '../actions';
import { Action } from '@ngrx/store';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Injectable()
export class MoviesEffect {
    constructor(
        private actions$: Actions,
        private movieService: MoviesService
    ) { }

    @Effect()
    moviesFetcher$ = this.actions$
        .ofType(actType.fetchMovies)
        .pipe(
            switchMap(user => {
                return this.movieService.getMovies()
                    .pipe(map((fetchedMovies: Movie[]) => {
                        if (fetchedMovies) {
                            return new actions.FetchMoviesOk(fetchedMovies);
                        }
                        alert('Cant get films');
                        return [];
                    }
                    ),
                        catchError(() => {
                            alert('Something went wrong');
                            return [];
                        })
                    );
            })
        );


    @Effect()
    movieEdit$ = this.actions$
        .ofType(actType.editGlobalFilm)
        .pipe(
            switchMap((action: actions.EditGlobalFilm) => {
                return this.movieService.editMovie(action.movie)
                    .pipe(map((movie) => {
                        return new actions.EditGlobalFilmDone(action.movie);
                    }
                    ),
                        catchError(() => {
                            alert('Something went wrong');
                            return [];
                        })
                    );
            })
        );
}
