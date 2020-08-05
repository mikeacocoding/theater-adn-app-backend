import { Injectable, Inject } from '@nestjs/common';
import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';

@Injectable()
export default class GetAllMovieTicketsUseCase{

    constructor(@Inject('MovieTicketRepository') private repository: MovieTicketRepository){}

    public handle(): Promise<MovieTicket[]>{
        return this.repository.getAll();
    }
}