import MovieTicketEntity from '../movie-ticket.entity';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import { Optional } from 'typescript-optional';
import MovieMapper from '../../movie/mapper/movie.mapper';

export default class MovieTicketMapper {
  public static toDomain(
    movieTicketEntity: MovieTicketEntity,
  ): Optional<MovieTicket> {
    if (!movieTicketEntity) {
      return Optional.empty<MovieTicket>();
    }

    const movie = MovieMapper.toDomain(movieTicketEntity.movie).get();

    const movieTicket = new MovieTicket(
      movieTicketEntity.id,
      movieTicketEntity.ticketId,
      movieTicketEntity.date,
      movieTicketEntity.value,
      movie
    );
    return Optional.of(movieTicket);
  }

  public static toDomains(
    movieTicketEntities: MovieTicketEntity[],
  ): MovieTicket[] {
    return movieTicketEntities.map(entity => {
      return this.toDomain(entity).get();
    });
  }
}
