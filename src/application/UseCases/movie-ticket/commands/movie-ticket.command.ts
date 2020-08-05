import MovieCommand from '../../movie/commands/movie.command';
import { IsDateString } from 'class-validator';

export default class MovieTicketCommand{
    public id: string;
    public ticketId: number;
    @IsDateString()
    public date: string;
    public value: number;
    public movie: MovieCommand;
}