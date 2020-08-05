import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import MovieTicketEntity from '../movie-ticket/movie-ticket.entity';
import { MovieTicketController } from '../movie-ticket/controllers/movie-ticket.controller';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';

@Entity({name: 'movie'})
export class MovieEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    imageUrl: string;
    
}