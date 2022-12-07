import Home from './Home';

const GenrePage = (props) => {
  const genreMovies = props.movies.filter((movie) => movie.genreList.includes(props.genre));

  return (
    <div>
      <Home movies={genreMovies} />
    </div>
  );
};

export default GenrePage;
