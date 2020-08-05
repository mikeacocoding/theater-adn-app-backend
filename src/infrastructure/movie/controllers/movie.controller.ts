import { Controller, Get, Res, HttpStatus } from '@nestjs/common';

import GetAllMoviesUseCase from 'src/application/UseCases/movie/getAllMovies.usecase';

@Controller('movies/')
export class MovieController {
  constructor(private getAllMoviesUseCase: GetAllMoviesUseCase) {}

  @Get()
  public async getMovies(@Res() res): Promise<any> {
    const movies = await this.getAllMoviesUseCase.handler();
    return res.status(HttpStatus.OK).json(movies);
  }
}
