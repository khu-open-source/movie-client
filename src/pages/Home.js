import { useState } from 'react';

import Header from '../components/Header/Header';
import MovieInput from '../components/Movies/MovieInput';
import MovieList from '../components/Movies/MovieList';

const Home = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const enteredTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const filterTitle = props.movies.filter((p) =>
    p.title.replace(' ', '').toLocaleLowerCase().includes(enteredTitle.toLocaleLowerCase().replace(' ', '')),
  );

  return (
    <div>
      <Header />
      <MovieInput search={enteredTitle} onSearch={enteredTitleChangeHandler} />
      <MovieList movies={filterTitle} />
    </div>
  );
};

export default Home;
