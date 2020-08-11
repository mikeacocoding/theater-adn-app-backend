import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';

import GetAllMoviesUseCase from 'src/application/UseCases/movie/getAllMovies.usecase';
import GetMovieByIdUseCase from 'src/application/UseCases/movie/getMovieById.usecase';

@Controller('movies')
export class MovieController {
  constructor(
    private getAllMoviesUseCase: GetAllMoviesUseCase,
    private getMovieByIdUseCase: GetMovieByIdUseCase,
  ) {}

  @Get()
  public async getMovies(@Res() res): Promise<any> {
    const movies = await this.getAllMoviesUseCase.handle();
    return res.status(HttpStatus.OK).json(movies);
  }

  @Get(':movieId')
  public async getMovieById(
    @Res() res,
    @Param('movieId') movieId: string,
  ): Promise<any> {
    const movie = await this.getMovieByIdUseCase.handle(movieId);
    return res.status(HttpStatus.OK).json(movie);
  }
}
