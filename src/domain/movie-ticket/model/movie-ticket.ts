import Movie from 'src/domain/movie/model/Movie';

export default class MovieTicket {
  private id: string;
  private ticketId: number;
  private date: Date;
  private value: number;
  private movie: Movie;

  constructor(id: string, value: number, movie: Movie) {
    this.id = id;
    this.ticketId = this.generateTicketId();
    this.value = value || 0;
    this.movie = movie;
  }

  public generateTicketId(): number{
    return Math.floor(Math.random() * (Math.pow(10,9)));
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

  public setDateFromString(date: string){
    this.date = new Date(date);
  }
}
