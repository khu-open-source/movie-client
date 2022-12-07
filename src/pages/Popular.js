import Home from './Home';

const Popular = (props) => {
  const popularMovies = props.movies.filter((movie) => movie.popularity > 3000);

  return (
    <div>
      <Home movies={popularMovies} />
    </div>
  );
};

export default Popular;
