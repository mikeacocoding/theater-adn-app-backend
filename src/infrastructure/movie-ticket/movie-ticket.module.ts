import { Module } from '@nestjs/common';
import { MovieTicketController } from './controllers/movie-ticket.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
    imports: [ApplicationModule],
    controllers: [MovieTicketController]
})
export class MovieTicketModule {}
