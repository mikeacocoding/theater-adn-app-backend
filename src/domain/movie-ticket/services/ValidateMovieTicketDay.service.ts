import { Injectable } from '@nestjs/common';
import MovieTicket from '../model/movie-ticket';
import InvalidMovieTicketDayError from '../errors/invalid-movie-ticket-day.error';

@Injectable()
export default class ValidateMovieTicketDayService {
  public handle(movieTicket: MovieTicket): void {
    let actualDate: Date = new Date();

    const ticketDay: number = movieTicket.getDate().getDay();
    const actualDay: number = actualDate.getDay();

    if (ticketDay === actualDay) {
      throw new InvalidMovieTicketDayError(
        'El ticket no puede comparse para el mismo día',
      );
    }
    if (movieTicket.getDate() < actualDate) {
      throw new InvalidMovieTicketDayError(
        'El ticket no puede comprarse para días del pasado',
      );
    }
  }
}
