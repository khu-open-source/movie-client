import './movielist.css';

import MovieInfo from './MovieInfo';

const MovieList = (props) => (
  <ul className="movie-list">
    {props.movies.map((movie) => (
      <MovieInfo key={movie.id} img={movie.img} title={movie.title} genre={movie.genre} rank={movie.rank} />
    ))}
  </ul>
);

export default MovieList;
