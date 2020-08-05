import { Injectable } from '@nestjs/common';
import MovieTicketCommand from '../commands/movie-ticket.command';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import MovieFactory from '../../movie/factory/movie.factory';


@Injectable()
export default class MovieTicketFactory{

    constructor(private movieFactory: MovieFactory){}

    public createMovieTicket(movietc : MovieTicketCommand): MovieTicket{
        let movie = this.movieFactory.createMovie(movietc.movie);
        movie.setId(movietc.movie.id);
        return new MovieTicket('',movietc.ticketId,movietc.date,movietc.value,movie);
    }
}