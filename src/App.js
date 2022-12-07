import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GenrePage from './pages/GenrePage';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('http://43.200.75.98/movie/popular');
    const data = await response.json();
    setMovies(data);
  };

  getMovies();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/popular" element={<Popular movies={movies} />} />
          <Route path="/action" element={<GenrePage genre="Action" movies={movies} />} />
          <Route path="/fantasy" element={<GenrePage genre="Fantasy" movies={movies} />} />
          <Route path="/romance" element={<GenrePage genre="Romance" movies={movies} />} />
          <Route path="/science" element={<GenrePage genre="Science Fiction" movies={movies} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
