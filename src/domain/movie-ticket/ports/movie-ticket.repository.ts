import MovieTicket from '../model/movie-ticket';
import { Optional } from 'typescript-optional';
import MovieCommand from 'src/application/UseCases/movie/commands/movie.command';

export default interface MovieTicketRepository{
    getAll(): Promise<MovieTicket[]>;

    createMovieTicket(movieTicket: MovieTicket): Promise<Optional<MovieTicket>>;
}