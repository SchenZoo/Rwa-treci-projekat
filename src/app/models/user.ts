import { Movie } from './movie';

export class User {
    constructor(
        public username: String,
        public password: String,
        public myMovies: Movie[]
    ) {}
}
