import { Injectable } from '@nestjs/common';
import MovieCommand from '../commands/movie.command';
import Movie from 'src/domain/movie/model/Movie';

@Injectable()
export default class MovieFactory {
  public createMovie(moviec: MovieCommand): Movie {
    
    if (typeof moviec.price == 'string') {
      moviec.price = parseInt(moviec.price);
    }

    return new Movie(
      '',
      moviec.title,
      moviec.description,
      moviec.imageUrl,
      moviec.price,
    );
  }
}
