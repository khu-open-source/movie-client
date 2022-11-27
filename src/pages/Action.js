import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';

const Action = (props) => {
  const actionMovies = props.movies.filter((movie) => movie.genre === 'Action');

  return (
    <div>
      <Header />
      <MovieList movies={actionMovies} />
    </div>
  );
};

export default Action;
