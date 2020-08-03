import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { ApplicationModule } from 'src/application/application.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity';

@Module({
    imports: [ApplicationModule],
    controllers: [MovieController]
})
export class MovieModule {}
