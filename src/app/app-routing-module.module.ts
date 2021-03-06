import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login.component';
import { LogGuardService } from './services/log-guard.service';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: 'home',
    component:  HomeComponent,
    canActivate: [LogGuardService]
  },
  {
    path: 'movieList',
    component: MovieListComponent,
    canActivate: [LogGuardService]
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    canActivate: [LogGuardService]
  },
  {
    path: 'movie',
    component: MovieComponent,
    canActivate: [LogGuardService]
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LogGuardService]
})
export class AppRoutingModuleModule { }
