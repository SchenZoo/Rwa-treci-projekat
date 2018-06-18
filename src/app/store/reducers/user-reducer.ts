import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import * as actType from '../action.types';
import * as actions from '../actions';

const initialState: User = null;

const userReducer = (state: User = initialState, action: actions.UserActions | actions.OneMovieActions) => {

    switch (action.type) {
        case actType.loginSuccess:
            {
                return (action as actions.LoginSuccess).user;
            }
        case actType.registrationSuccess:
            {
                return (action as actions.RegistrationSuccess).user;
            }
        case actType.logout:
            {
                return null;
            }
        case actType.oneMovieAdded:
            {
                return { ...state, movies: [...state.myMovies, (action as actions.OneMovieAdded).movie] };
            }
        case actType.oneMovieDeleted:
            {
                return { ...state, movies: [state.myMovies.filter(el => el.id !== (action as actions.OneMovieDeleted).id)] };
            }
        default:
            {
                return state;
            }
    }
};

export default userReducer;
