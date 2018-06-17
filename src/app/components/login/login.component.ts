import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { LoginAttempt, RegistrationAttempt } from '../../store/actions';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private store$: Store<State>,
    private router: Router
  ) {
    store$.select(state => state.user).subscribe(
      user => {
        if (user) {
          // this.store$.dispatch(new FetchMovies());
          this.router.navigate(['home']);
        }
      }
    );
  }

  ngOnInit() {
  }
  login() {
    if (this.username !== '' && this.password !== '') {
      this.store$.dispatch(new LoginAttempt(new User(this.username, this.password, [])));
    } else {
      alert('Bam');
    }
  }
  register() {
    if (this.username !== '' && this.password !== '') {
      this.store$.dispatch(new RegistrationAttempt(new User(this.username, this.password, [])));
    } else {
      alert('Register fejl');
    }
  }

}
