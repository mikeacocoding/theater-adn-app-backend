import { Injectable } from '@nestjs/common';
import MovieTicket from '../model/movie-ticket';
import InvalidMovieTicketHourError from '../errors/invalid-movie-ticket-hour.error';

@Injectable()
export default class ValidateMovieTicketHourServide {
  public handle(movieTicket: MovieTicket): void {

    const ticketDate = movieTicket.getDate();
    const ticketHours = ticketDate.getHours();

    //4 pm,6 pm,8 pm,10 pm y 12 am
    const validHours: number[] = [16,18,20,22,0];

    if(!validHours.includes(ticketHours)){
      throw new InvalidMovieTicketHourError(`La hora del ticket (${ticketHours}) no es válida, asegurese de que esta, se encuentre entre las horas disponibles.`);
    }

    const ticketMinutes = ticketDate.getMinutes();

    if(ticketMinutes !== 0){
      throw new InvalidMovieTicketHourError(`Se esperaba una hora exacta para el ticket pero recibió los minutos: ${ticketMinutes}`);
    }
  }
}
