import { ActionReducerMap } from '@ngrx/store';
import { User } from '../models/user';
import userReducer from './reducers/user-reducer';

export interface State {
    user: User;
}

export const rootReducer: ActionReducerMap<State> = {
    user: userReducer
};
