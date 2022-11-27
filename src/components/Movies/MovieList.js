import MovieInfo from './MovieInfo';

const MovieList = (props) => (
  <ul>
    {props.movies.map((movie) => (
      <MovieInfo key={movie.id} title={movie.title} genre={movie.genre} rank={movie.rank} />
    ))}
  </ul>
);

export default MovieList;