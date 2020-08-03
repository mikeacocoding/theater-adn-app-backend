import { Module } from '@nestjs/common';
import GetAllMoviesUseCase from './UseCases/getAllMovies.usecase';
import { DomainModule } from 'src/domain/domain.module';
import { MovieRepositoryMySQL } from 'src/infrastructure/movie/adapters/movie.repository.mysql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from 'src/infrastructure/movie/movie.entity';

@Module({
    imports: [DomainModule,  TypeOrmModule.forFeature([MovieEntity])],
    providers: [GetAllMoviesUseCase,{
        provide: 'MovieRepository',
        useClass: MovieRepositoryMySQL
    }],
    exports: [GetAllMoviesUseCase]
})
export class ApplicationModule {}
