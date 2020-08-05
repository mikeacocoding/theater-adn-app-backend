import { Injectable } from '@nestjs/common';
import MovieCommand from '../commands/movie.command';
import Movie from 'src/domain/movie/model/movie';

@Injectable()
export default class MovieFactory {
  public createMovie(moviec: MovieCommand): Movie {
    return new Movie(
      '',
      moviec.title,
      moviec.description,
      moviec.imageUrl,
      moviec.price,
    );
  }
}
