import { ActionReducerMap } from '@ngrx/store';
import { User } from '../models/user';
import userReducer from './reducers/user-reducer';
import { Movie } from '../models/movie';
import movieReducer from './reducers/movies-reducer';

export interface State {
    user: User;
    movies: Movie[];
}

export const rootReducer: ActionReducerMap<State> = {
    user: userReducer,
    movies: movieReducer
};
