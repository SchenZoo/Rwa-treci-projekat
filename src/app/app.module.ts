import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { rootReducer } from './store';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { ConfigService } from './services/config.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieComponent,
    MovieListComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([
      LoginEffect
    ])
  ],
  providers: [
    AuthenticationService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
