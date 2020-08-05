import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { MovieEntity } from '../movie/movie.entity';
import { type } from 'os';

@Entity({name: 'movie_ticket'})
export default class MovieTicketEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ticketId: number;

    @Column('timestamp')
    date: Date;

    @ManyToOne(type => MovieEntity,{
        eager: true
    })
    @JoinColumn()
    movie: MovieEntity
}