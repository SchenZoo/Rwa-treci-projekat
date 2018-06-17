import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie';
import * as actType from '../action.types';
import * as actions from '../actions';

const initialState: Movie[] = [];

const userReducer = (state: Movie[] = initialState, action: actions.GlobalMovieActions) => {

    switch (action.type) {
        case actType.fetchFilmsOK:
            {
                return (action as actions.FetchMoviesOk).movies;
            }
        default:
            {
                return state;
            }
    }
};

export default userReducer;
