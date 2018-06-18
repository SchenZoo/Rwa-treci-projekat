import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie';
import * as actType from '../action.types';
import * as actions from '../actions';


const initialState: Movie[] = [];

const movieReducer = (state: Movie[] = initialState, action: actions.GlobalMovieActions) => {

    switch (action.type) {
        case actType.fetchMoviesOk:
            {
                return (action as actions.FetchMoviesOk).movies;
            }
        case actType.sortMovies:
            {
                return [...state].sort((action as actions.SortMovies).sortFunc);
            }
        case actType.addGlobalFilmsDone:
            {
                return [...state, (action as actions.AddGlobalFilmDone).movie];
            }
        case actType.editGlobalFilmDone:
            {
                return [...state].map(x => {
                    if (x.id === (action as actions.EditGlobalFilmDone).movie.id) {
                        return (action as actions.EditGlobalFilmDone).movie;
                    }
                    return x;
                });
            }
        case actType.deleteGlobalFilmDone:
            {
                return [...state].filter(film => film.id !== (action as actions.DeleteGlobalFilmDone).id);
            }
        default:
            {
                return state;
            }
    }
};

export default movieReducer;
