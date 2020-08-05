import { Injectable } from '@nestjs/common';
import MovieTicket from '../model/movie-ticket';

@Injectable()
export class CalculateMovieTicketValueService {
  public calculate(movieTicket: MovieTicket): number {
    let moviePrice = movieTicket.getMovie().getPrice();
    const ticketDate = movieTicket.getDate();
    const ticketDay = ticketDate.getDay();

    const SUNDAY = 0,
      TUESDAY = 2,
      WEDNESDAY = 3,
      SATURDAY = 6;

    //Festivo incrementa el precio en un 10%
    if (ticketDay === SUNDAY || ticketDay === SATURDAY) {
        moviePrice = moviePrice*(1 + 0.1);
    }
    //Martes y miercoles Descuento del 20%
    if (ticketDay === TUESDAY || ticketDay === WEDNESDAY) {
        moviePrice = moviePrice*(1 - 0.2);
    }
    return parseInt(moviePrice.toFixed(0));
  }
}
