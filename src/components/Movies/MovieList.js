import './MovieList.css';

import MovieInfo from './MovieInfo';

const MovieList = (props) => (
  <ul className="movie-list">
    {props.movies.map((movie) => (
      <MovieInfo
        key={movie.id}
        title={movie.title}
        genre={movie.genreList}
        popularity={movie.popularity}
        poster={movie.poster_path}
        overview={movie.overview}
        date={movie.release_date}
        adult={movie.adult}
      />
    ))}
  </ul>
);

export default MovieList;
