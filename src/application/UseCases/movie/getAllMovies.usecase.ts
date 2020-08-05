import { Injectable, Inject } from '@nestjs/common';
import Movie from 'src/domain/movie/model/movie';
import { MovieRepository } from 'src/domain/movie/ports/repository/movie.repository';

@Injectable()
export default class GetAllMoviesUseCase {
  constructor(@Inject('MovieRepository') private movieRepository: MovieRepository) {}

  public handler(): Promise<Movie[]> {
    return this.movieRepository.getAll();
  }
}
