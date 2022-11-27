import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';

const Science = (props) => {
  const scienceMovies = props.movies.filter((movie) => movie.genre === 'Science');

  return (
    <div>
      <Header />
      <MovieList movies={scienceMovies} />
    </div>
  );
};

export default Science;
