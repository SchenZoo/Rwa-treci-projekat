import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.config.getUrl()}/movies`);
  }
  editMovie(movie): Observable<any> {
    return this.http.put<any>(`${this.config.getUrl()}/movies/${movie.id}`, movie);
  }
}
