import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToOne, JoinColumn } from 'typeorm';
import { MovieEntity } from '../movie/movie.entity';
import { type } from 'os';

@Entity()
export default class MovieTicketEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ticketId: number;

    @OneToOne(type => MovieEntity)
    @JoinColumn()
    movie: MovieEntity;

    @Column('timestamp')
    date: Date;
}