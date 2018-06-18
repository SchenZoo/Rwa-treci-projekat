import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { AddGlobalFilm } from '../../store/actions';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public movie: Movie;
  public id = null;
  public props;
  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store$.select(state => state.movies)
      .subscribe(mv => {
        this.movie = mv.find(x => x.id === +this.id);
        const { Poster, ...rest } = mv[0];
        this.props = Object.keys(rest);
        if (!this.id) {
          this.movie = mv[0];
          this.movie = new Movie(null, null, null, null, null, null, null, null, null, null, null, null);
        }
      });
  }
  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }

  ngOnInit() {
    if (this.id) {
      this.init();
      this.video = this.movie.YT;

      window['onYouTubeIframeAPIReady'] = (e) => {
        this.YT = window['YT'];
        this.player = new window['YT'].Player('player', {
          videoId: this.video,
          events: {
            'onStateChange': this.onPlayerStateChange.bind(this),
            'onError': this.onPlayerError.bind(this),
            'onReady': (el) => {
            }
          }
        });
      };
    }
  }
  add(movie) {
    this.store$.dispatch(new AddGlobalFilm(movie));
    this.router.navigate(['home']);
  }
  onPlayerStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (+this.cleanTime() === 0) {
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }
  onFileChanged(event) {
    if (event.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.movie.Poster = (e.target as any).result;
      };
    }
  }
  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }
  onPlayerError(event) {
    switch (event.data) {
      case 2:
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }
}
