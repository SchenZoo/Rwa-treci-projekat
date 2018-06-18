import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { FetchMovies, EditGlobalFilmDone, EditGlobalFilm, DeleteGlobalFilm } from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  props;
  constructor(
    private router: Router,
    private store$: Store<State>,
  ) {
    store$.select(store => store.movies).subscribe(x => {
      if (!x || !x[0]) {
        store$.dispatch(new FetchMovies());
      } else {
        this.movies = x;
        const { Poster, id, ...rest } = this.movies[0];
        this.props = Object.keys(rest);
      }
    }
    );
  }

  ngOnInit() {
  }
  submitChange(movie) {
    this.store$.dispatch(new EditGlobalFilm(movie));
  }
  delete(id) {
    this.store$.dispatch(new DeleteGlobalFilm(id));
  }
  onFileChanged(event, index) {
    if (event.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.movies[index].Poster = (e.target as any).result;
      };
    }
  }

}
