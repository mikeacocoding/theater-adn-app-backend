import { Module } from '@nestjs/common';
import { MovieController } from './controllers/movie.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
    imports: [ApplicationModule],
    controllers: [MovieController]
})
export class InfrastructureModule {}
