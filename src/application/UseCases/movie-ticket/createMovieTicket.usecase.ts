import { Injectable, Inject } from '@nestjs/common';
import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import MovieTicketCommand from './commands/movie-ticket.command';
import MovieTicketFactory from './factory/movie-ticket.factory';
import { Optional } from 'typescript-optional';
import ValidateMovieTicketDayService from 'src/domain/movie-ticket/services/ValidateMovieTicketDay.service';
import ValidateMovieTicketHourServide from 'src/domain/movie-ticket/services/ValidateMovieTicketHour.service';

@Injectable()
export default class CreateMovieTicketUseCase {
  constructor(
    @Inject('MovieTicketRepository') private repository: MovieTicketRepository,
    private movieTicketFactory: MovieTicketFactory,
    private validateDayService: ValidateMovieTicketDayService,
    private validateHourService: ValidateMovieTicketHourServide 
  ) {}

    public handle(movieTicketCommand: MovieTicketCommand): Promise<Optional<MovieTicket>>{
      const movieTicket = this.movieTicketFactory.createMovieTicket(movieTicketCommand);
        this.validateDayService.handle(movieTicket);
        this.validateHourService.handle(movieTicket);
        return this.repository.createMovieTicket(movieTicket);
    }

}
