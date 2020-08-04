import MovieTicketRepository from 'src/domain/movie-ticket/ports/movie-ticket.repository';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import { InjectRepository } from '@nestjs/typeorm';
import MovieTicketEntity from '../movie-ticket.entity';
import { Repository } from 'typeorm';
import MovieTicketMapper from '../mapper/movie-ticket.mapper';

export class MovieTicketRepositoryMySQL implements MovieTicketRepository {
  
constructor(@InjectRepository(MovieTicketEntity) private repository: Repository<MovieTicketEntity>){}

  public async getAll(): Promise<MovieTicket[]> {
    const movieTickets = await this.repository.find();
    return MovieTicketMapper.toDomains(movieTickets);
  }
}
