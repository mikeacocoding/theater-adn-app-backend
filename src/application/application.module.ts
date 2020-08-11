import { Module } from '@nestjs/common';
import GetAllMoviesUseCase from './UseCases/movie/getAllMovies.usecase';
import { DomainModule } from 'src/domain/domain.module';
import { MovieRepositoryMySQL } from 'src/infrastructure/movie/adapters/movie.repository.mysql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from 'src/infrastructure/movie/movie.entity';
import MovieTicketEntity from 'src/infrastructure/movie-ticket/movie-ticket.entity';
import GetAllMovieTicketsUseCase from './UseCases/movie-ticket/getAllMovieTickets.usecase';
import { MovieTicketRepositoryMySQL } from 'src/infrastructure/movie-ticket/adapters/movie-ticket.repository.mysql';
import CreateMovieTicketUseCase from './UseCases/movie-ticket/createMovieTicket.usecase';
import MovieTicketFactory from './UseCases/movie-ticket/factory/movie-ticket.factory';
import MovieFactory from './UseCases/movie/factory/movie.factory';
import DeleteMovieTicketByTicketIdUseCase from './UseCases/movie-ticket/deleteMovieTicketByTicketId.usecase';
import { CalculateMovieTicketUseCase } from './UseCases/movie-ticket/calculateMovieTicketValue.usecase';
import GetMoviebyIdUseCase from './UseCases/movie/getMovieById.usecase';

@Module({
  imports: [
    DomainModule,
    TypeOrmModule.forFeature([MovieEntity, MovieTicketEntity]),
  ],
  providers: [
    MovieFactory,
    MovieTicketFactory,
    GetAllMoviesUseCase,
    GetMoviebyIdUseCase,
    GetAllMovieTicketsUseCase,
    CreateMovieTicketUseCase,
    DeleteMovieTicketByTicketIdUseCase,
    CalculateMovieTicketUseCase,
    {
      provide: 'MovieRepository',
      useClass: MovieRepositoryMySQL,
    },
    {
      provide: 'MovieTicketRepository',
      useClass: MovieTicketRepositoryMySQL,
    },
  ],
  exports: [
    MovieFactory,
    MovieTicketFactory,
    GetAllMoviesUseCase,
    GetMoviebyIdUseCase,
    GetAllMovieTicketsUseCase,
    CreateMovieTicketUseCase,
    DeleteMovieTicketByTicketIdUseCase,
    CalculateMovieTicketUseCase,
  ],
})
export class ApplicationModule {}
