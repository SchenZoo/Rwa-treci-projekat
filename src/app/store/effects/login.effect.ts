import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as actType from '../action.types';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import * as actions from '../actions';
import { Action } from '@ngrx/store';
import { LoginAttempt, LoginSuccess } from '../actions';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class LoginEffect {
    constructor(
        private actions$: Actions,
        private auth: AuthenticationService
    ) { }

    @Effect()
    register$ = this.actions$
        .ofType(actType.registrationAttempt)
        .pipe(
            map((action: actions.RegistrationAttempt) => (
                action.user
            )),
            switchMap(user => {
                return this.auth.register(user)
                    .pipe(map(fetchedUser => {
                        console.log(fetchedUser);
                        return new actions.RegistrationSuccess(user);
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
    login$ = this.actions$
        .ofType(actType.loginAttempt)
        .pipe(
            map((action: actions.LoginAttempt) => (
                action.user
            )),
            switchMap(user => {
                return this.auth.login()
                    .pipe(map((fetchedUser: User[]) => {
                        const find = fetchedUser.find(el => el.username === user.username && el.password === user.password);
                        if (find) {
                            return new actions.LoginSuccess(find);
                        }
                        alert('Invalid username or password');
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


}
