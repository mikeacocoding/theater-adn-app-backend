import MovieCommand from '../../movie/commands/movie.command';

export default class MovieTicketCommand{
    public id: string;
    public ticketId: number;
    public date: Date;
    public value: number;
    public movie: MovieCommand;
}