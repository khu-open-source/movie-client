import { useRecoilValue } from 'recoil';

import Header from '../components/Header/Header';
import MovieList from '../components/Movies/MovieList';
import { enteredTitleAtom } from '../store/atom';

const Search = (props) => {
  const searchTitle = useRecoilValue(enteredTitleAtom);

  const searchMovies = props.movies.filter((movie) => movie.title === searchTitle);

  return (
    <div>
      <Header />
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default Search;
