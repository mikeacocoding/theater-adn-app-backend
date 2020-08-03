import { Module } from '@nestjs/common';
import GetAllMoviesUseCase from './UseCases/getAllMovies.usecase';
import { DomainModule } from 'src/domain/domain.module';

@Module({
    imports: [DomainModule],
    providers: [GetAllMoviesUseCase],
    exports: [GetAllMoviesUseCase]
})
export class ApplicationModule {}
