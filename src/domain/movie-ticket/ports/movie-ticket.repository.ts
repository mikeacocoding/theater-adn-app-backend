import MovieTicket from '../model/movie-ticket';
import { Optional } from 'typescript-optional';

export default interface MovieTicketRepository{
    getAll(): Promise<MovieTicket[]>;

    createMovieTicket(movieTicket: MovieTicket): Promise<Optional<MovieTicket>>;

    deleteMovieTicketByTicketId(ticketId: number): Promise<Optional<MovieTicket>>;
}