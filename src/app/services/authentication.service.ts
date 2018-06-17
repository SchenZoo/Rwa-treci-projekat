import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  login(): Observable<User[]> {
    return this.http.get<User[]>(`${this.config.getUrl()}/users`);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.config.getUrl()}/users`, user);
  }

}
