export class Movie {
    constructor(
       public Title: String,
       public Genre: String[],
       public Year: String,
       public imdbID: String,
       public Actors: String,
       public Plot: String,
       public imdbRating: String,
       public Production: String,
       public Website: String,
       public Poster: String,
       public id: number
    ) {}
}
