import Movie from "src/domain/movie/model/movie";

export interface MovieRepository {
    getAll(): Promise<Movie[]>;
}