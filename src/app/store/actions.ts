import * as actionTypes from './action.types';
import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { Movie } from '../models/movie';

export class LoginAttempt implements Action {
    type = actionTypes.loginAttempt;
    constructor(public user: User) {
    }
}


export class LoginSuccess implements Action {
    type = actionTypes.loginSuccess;
    constructor(public user: User) {
    }
}


export class RegistrationAttempt implements Action {
    type = actionTypes.registrationAttempt;
    constructor(public user: User) {
    }
}

export class RegistrationSuccess implements Action {
    type = actionTypes.registrationSuccess;
    constructor(public user: User) {
    }
}

export class Logout implements Action {
    type = actionTypes.logout;
    constructor() { }
}


export type UserActions
    = RegistrationSuccess | Logout | LoginSuccess;



export class FetchMovies implements Action {
    type = actionTypes.fetchMovies;
    constructor() { }
}

export class FetchMoviesOk implements Action {
    type = actionTypes.fetchMoviesOk;
    constructor(public movies: Movie[]) { }
}

export class SortMovies implements Action {
    type = actionTypes.sortMovies;
    constructor(public sortFunc) { }
}


export class AddGlobalFilm implements Action {
    type = actionTypes.addGlobalFilm;
    constructor(public movie: Movie) { }
}

export class AddGlobalFilmDone implements Action {
    type = actionTypes.addGlobalFilmsDone;
    constructor(public movie: Movie) { }
}


export class EditGlobalFilm implements Action {
    type = actionTypes.editGlobalFilm;
    constructor(public movie: Movie) { }
}

export class EditGlobalFilmDone implements Action {
    type = actionTypes.editGlobalFilmDone;
    constructor(public movie: Movie) { }
}

export class DeleteGlobalFilm implements Action {
    type = actionTypes.deleteGlobalFilm;
    constructor(public id: number) { }
}

export class DeleteGlobalFilmDone implements Action {
    type = actionTypes.deleteGlobalFilmDone;
    constructor(public id: number) { }
}

export type GlobalMovieActions = FetchMoviesOk | SortMovies | AddGlobalFilmDone | EditGlobalFilmDone | DeleteGlobalFilmDone;

export class OneMovieDelete implements Action {
    type = actionTypes.oneMovieDelete;
    constructor(public id: number) { }
}

export class OneMovieDeleted implements Action {
    type = actionTypes.oneMovieDeleted;
    constructor(public id: number) { }
}

export class OneMovieAdd implements Action {
    type = actionTypes.oneMovieAdd;
    constructor(public movie: Movie) { }
}

export class OneMovieAdded implements Action {
    type = actionTypes.oneMovieAdded;
    constructor(public movie: Movie) { }
}

export type OneMovieActions = OneMovieAdded | OneMovieDeleted;
