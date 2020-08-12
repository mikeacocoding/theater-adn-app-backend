import { MovieEntity } from '../movie.entity';
import Movie from 'src/domain/movie/model/Movie';
import { Optional } from 'typescript-optional';

export default class MovieMapper {
  public static toDomain(movieEntity: MovieEntity): Optional<Movie> {
    if (!movieEntity) {
      return Optional.empty<Movie>();
    }

    const movie = new Movie(
      movieEntity.id,
      movieEntity.title,
      movieEntity.description,
      movieEntity.imageUrl,
      movieEntity.price,
    );
    return Optional.of(movie);
  }

  public static toDomains(movieEntities: MovieEntity[]): Movie[] {
    return movieEntities.map(movieEntity => {
      const movie = this.toDomain(movieEntity);
      return movie.get();
    });
  }
}
