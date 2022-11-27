import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';

const Animation = (props) => {
  const animationMovies = props.movies.filter((movie) => movie.genre === 'Animation');

  return (
    <div>
      <Header />
      <MovieList movies={animationMovies} />
    </div>
  );
};

export default Animation;
