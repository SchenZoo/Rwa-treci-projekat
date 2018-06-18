import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogGuardService implements CanActivate {

  constructor(
    private router: Router,
    private store$: Store<State>,
  ) { }

  canActivate(): Observable<boolean> {
    return this.store$.select(state => state.user)
      .pipe(map(user => {
        if (user) {
          return true;
        }
        this.router.navigate(['']);
        return false;
      }));
  }
}
