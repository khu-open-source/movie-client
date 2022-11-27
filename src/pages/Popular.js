import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';

const Popular = (props) => {
  const popularMovies = props.movies.filter((movie) => movie.rank < 101);

  return (
    <div>
      <Header />
      <MovieList movies={popularMovies} />
    </div>
  );
};

export default Popular;
