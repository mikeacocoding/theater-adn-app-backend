import { MovieRepository } from "src/domain/movie/ports/repository/movie.repository";
import { MovieEntity } from "../movie.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import Movie from "src/domain/movie/model/Movie";
import MovieMapper from "../mapper/movie.mapper";
import { Optional } from 'typescript-optional';


export class MovieRepositoryMySQL implements MovieRepository{
    
    constructor(@InjectRepository(MovieEntity) private repository: Repository<MovieEntity>){}

    public async getAll(): Promise<Movie[]> {
        const movieEntities = await this.repository.find();
        return MovieMapper.toDomains(movieEntities);
    }

    public async getById(movieId: string): Promise<Optional<Movie>>{
        const movieEntity = await this.repository.findOne(movieId);
        return MovieMapper.toDomain(movieEntity);
    }
}