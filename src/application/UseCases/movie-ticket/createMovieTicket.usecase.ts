import { Injectable, Inject } from '@nestjs/common';
import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import MovieTicketCommand from './commands/movie-ticket.command';
import MovieTicketFactory from './factory/movie-ticket.factory';
import { Optional } from 'typescript-optional';

@Injectable()
export default class CreateMovieTicketUseCase {
  constructor(
    @Inject('MovieTicketRepository') private repository: MovieTicketRepository,
    private movieTicketFactory: MovieTicketFactory
  ) {}

    public handle(movieTicketCommand: MovieTicketCommand): Promise<Optional<MovieTicket>>{
        const movieTicket = this.movieTicketFactory.createMovieTicket(movieTicketCommand);
        return this.repository.createMovieTicket(movieTicket);
    }

}
