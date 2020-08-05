import { Injectable, Inject } from '@nestjs/common';
import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import { Optional } from 'typescript-optional';

@Injectable()
export default class DeleteMovieTicketByTicketIdUseCase {
  constructor(
    @Inject('MovieTicketRepository') private repository: MovieTicketRepository,
  ) {}

  public handle(ticketId: number): Promise<Optional<MovieTicket>>{
      return this.repository.deleteMovieTicketByTicketId(ticketId);
  }
}
