import MovieTicket from '../model/movie-ticket';

export default interface MovieTicketRepository{
    getAll(): Promise<MovieTicket[]>;
}