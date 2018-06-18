
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

        @Effect()
        movieAdd$ = this.actions$
            .ofType(actType.addGlobalFilm)
            .pipe(
                switchMap((action: actions.AddGlobalFilm) => {
                    return this.movieService.addMovie(action.movie)
                        .pipe(map((movie) => {
                            return new actions.AddGlobalFilmDone(action.movie);
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
            movieDelete$ = this.actions$
                .ofType(actType.deleteGlobalFilm)
                .pipe(
                    switchMap((action: actions.DeleteGlobalFilm) => {
                        return this.movieService.deleteMovie(action.id)
                            .pipe(map((movie) => {
                                console.log(movie);
                                return new actions.DeleteGlobalFilmDone(action.id);
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
