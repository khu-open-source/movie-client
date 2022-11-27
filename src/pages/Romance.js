import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';

const Romance = (props) => {
  const romanceMovies = props.movies.filter((movie) => movie.genre === 'Romance');

  return (
    <div>
      <Header />
      <MovieList movies={romanceMovies} />
    </div>
  );
};

export default Romance;
