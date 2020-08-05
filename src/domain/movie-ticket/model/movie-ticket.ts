import Movie from 'src/domain/movie/model/movie';

export default class MovieTicket {
  private id: string;
  private ticketId: number;
  private date: Date;
  private value: number;
  private movie: Movie;

  constructor(id: string, ticketId: number, date: Date, value: number, movie: Movie) {
    this.id = id;
    this.ticketId = ticketId;
    this.date = date;
    this.value = value || 0;
    this.movie = movie;
  }

  public getId() {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }

  public getTicketId() {
    return this.ticketId;
  }
  public setTicketId(ticketId: number) {
    this.ticketId = ticketId;
  }
  
  public getDate() {
    return this.date;
  }
  public setDate(date: Date) {
    this.date = date;
  }

  public getValue() {
    return this.value;
  }
  public setValue(value: number) {
    this.value = value || 0;
  }
  
  public getMovie() {
    return this.movie;
  }
  public setMovie(movie: Movie) {
    this.movie = movie;
  }
}
