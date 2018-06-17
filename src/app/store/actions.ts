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
    type = actionTypes.fetchFilms;
    constructor() { }
}

export class FetchMoviesOk implements Action {
    type = actionTypes.fetchFilmsOK;
    constructor(public movies: Movie[]) { }
}

export type GlobalMovieActions = FetchMoviesOk;

export class OneMovie implements Action {
    type = actionTypes.oneMovie;
    constructor(public id: number) { }
}

export class OneMovieFetched implements Action {
    type = actionTypes.oneMovieFetched;
    constructor(public movie: Movie) { }
}

export class OneMovieAdd implements Action {
    type = actionTypes.oneMovieAdd;
    constructor(public movie: Movie) { }
}

export class OneMovieAdded implements Action {
    type = actionTypes.oneMovieAdded;
    constructor(public movie: Movie) { }
}

export type OneMovieActions = OneMovieAdded | OneMovieFetched;
