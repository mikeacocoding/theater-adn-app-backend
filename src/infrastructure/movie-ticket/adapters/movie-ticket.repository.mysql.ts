import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import { InjectRepository } from '@nestjs/typeorm';
import MovieTicketEntity from '../movie-ticket.entity';
import { Repository } from 'typeorm';
import MovieTicketMapper from '../mapper/movie-ticket.mapper';
import { Optional } from 'typescript-optional';
import { MovieEntity } from 'src/infrastructure/movie/movie.entity';

export class MovieTicketRepositoryMySQL implements MovieTicketRepository {
  constructor(
    @InjectRepository(MovieTicketEntity)
    private repository: Repository<MovieTicketEntity>,
  ) {}

  public async getAll(): Promise<MovieTicket[]> {
    const movieTickets = await this.repository.find();
    return MovieTicketMapper.toDomains(movieTickets);
  }

  public async createMovieTicket(
    movieTicket: MovieTicket,
  ): Promise<Optional<MovieTicket>> {
    let movie = movieTicket.getMovie();

    let movieEntity = new MovieEntity();
    movieEntity.id = movie.getId();
    movieEntity.title = movie.getTitle();
    movieEntity.description = movie.getDescription();
    movieEntity.imageUrl = movie.getImageUrl();
    movieEntity.price = movie.getPrice();

    let movieTicketEntity = new MovieTicketEntity();
    movieTicketEntity.ticketId = movieTicket.getTicketId();
    movieTicketEntity.value = movieTicket.getValue();
    movieTicketEntity.date = movieTicket.getDate();
    movieTicketEntity.movie = movieEntity;

    movieTicketEntity = await this.repository.save(movieTicketEntity);
    return MovieTicketMapper.toDomain(movieTicketEntity);
  }

  public async deleteMovieTicketByTicketId(
    ticketId: number,
  ): Promise<Optional<MovieTicket>> {
    let ticket = await this.repository.findOne({
      where: { ticketId: ticketId },
    });

    if (!ticket) {
      return Optional.empty<MovieTicket>();
    }
    console.log('Eliminando Ticket');
    console.log(ticket);
    await this.repository.delete(ticket);
    let deletedTicket = MovieTicketMapper.toDomain(ticket);
    return deletedTicket;
  }
}
