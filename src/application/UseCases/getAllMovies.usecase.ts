import { Injectable, Inject } from '@nestjs/common';
import Movie from 'src/domain/models/Movie';

@Injectable()
export default class GetAllMoviesUseCase {
  constructor() {}

  public handler(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(function() {

        let moviedemo = new Movie();
        moviedemo.setId('1');
        moviedemo.setName("Star Wars");

        resolve([moviedemo]);
      }, 25);
    });
  }
}
