import Movie from "src/domain/movie/model/Movie";

export interface MovieRepository {
    getAll(): Promise<Movie[]>;
}