import { Module } from '@nestjs/common';
import GetAllMoviesUseCase from './UseCases/movie/getAllMovies.usecase';
import { DomainModule } from 'src/domain/domain.module';
import { MovieRepositoryMySQL } from 'src/infrastructure/movie/adapters/movie.repository.mysql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from 'src/infrastructure/movie/movie.entity';
import MovieTicketEntity from 'src/infrastructure/movie-ticket/movie-ticket.entity';
import getAllMovieTicketsUseCase from './UseCases/movie-ticket/getAllMovieTickets.usecase';
import { MovieTicketRepositoryMySQL } from 'src/infrastructure/movie-ticket/adapters/movie-ticket.repository.mysql';

@Module({
    imports: [DomainModule,  TypeOrmModule.forFeature([MovieEntity, MovieTicketEntity])],
    providers: [GetAllMoviesUseCase,getAllMovieTicketsUseCase,{
        provide: 'MovieRepository',
        useClass: MovieRepositoryMySQL
    },{
        provide: 'MovieTicketRepository',
        useClass: MovieTicketRepositoryMySQL
    }],
    exports: [GetAllMoviesUseCase, getAllMovieTicketsUseCase]
})
export class ApplicationModule {}
