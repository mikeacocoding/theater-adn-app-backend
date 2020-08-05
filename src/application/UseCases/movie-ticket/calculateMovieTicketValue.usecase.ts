import { Injectable } from '@nestjs/common';
import MovieTicketCommand from './commands/movie-ticket.command';
import MovieTicketFactory from './factory/movie-ticket.factory';
import { Optional } from 'typescript-optional';
import { CalculateMovieTicketValueService } from 'src/domain/movie-ticket/services/CalculateMovieTicketValue.service';

@Injectable()
export class CalculateMovieTicketUseCase {
  constructor(
    private movieTicketFactory: MovieTicketFactory,
    private calculateMovieTicketService: CalculateMovieTicketValueService,
  ) {}

  public handle(movieTicketCommand: MovieTicketCommand): Optional<number> {
    let movieTicket = this.movieTicketFactory.createMovieTicket(
      movieTicketCommand,
    );

    let value = this.calculateMovieTicketService.calculate(movieTicket);
    return Optional.of<number>(value);
  }
}
