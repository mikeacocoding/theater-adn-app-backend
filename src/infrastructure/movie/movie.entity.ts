import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';

@Entity({name: 'movie'})
export class MovieEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;
    
    @Column('text')
    description: string;

    @Column()
    imageUrl: string;

    @Column('decimal')
    price: number;
    
}