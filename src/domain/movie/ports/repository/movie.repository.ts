import Movie from 'src/domain/movie/model/movie';
import { Optional } from 'typescript-optional';

export interface MovieRepository {
  getAll(): Promise<Movie[]>;
  getById(movieId: string): Promise<Optional<Movie>>;
}
