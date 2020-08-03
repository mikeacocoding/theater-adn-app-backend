import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'movie'})
export class MovieEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}