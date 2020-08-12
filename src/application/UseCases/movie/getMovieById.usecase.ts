import { Injectable, Inject } from '@nestjs/common';
import Movie from 'src/domain/movie/model/Movie';
import { MovieRepository } from 'src/domain/movie/ports/repository/movie.repository';
import { Optional } from 'typescript-optional';

@Injectable()
export default class GetMoviebyIdUseCase {
  constructor(
    @Inject('MovieRepository') private movieRepository: MovieRepository,
  ) {}

  public handle(movieId: string): Promise<Optional<Movie>> {
    return this.movieRepository.getById(movieId);
  }
}
