import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Action from './pages/Action';
import Animation from './pages/Animation';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Romance from './pages/Romance';
import Science from './pages/Science';
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const DUMMY_MOVIES = [
  {
    id: '6',
    title: 'fuck',
    genre: 'Romance',
    rank: 6,
    img: '/images/fuck.png',
  },
  {
    id: '1',
    title: 'apple',
    genre: 'Action',
    rank: 1,
    img: '/images/apple.png',
  },
  {
    id: '2',
    title: 'banana',
    genre: 'Animation',
    rank: 2,
    img: '/images/banana.png',
  },
  {
    id: '3',
    title: 'candy',
    genre: 'Romance',
    rank: 3,
    img: '/images/candy.png',
  },
  {
    id: '4',
    title: 'dragon',
    genre: 'Science',
    rank: 4,
    img: '/images/dragon.png',
  },
  {
    id: '5',
    title: 'elephant',
    genre: 'Science',
    rank: 5,
    img: '/images/elephant.png',
  },
];

DUMMY_MOVIES.sort((a, b) => a.rank - b.rank);

const App = () => (
  <div className="App">
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movies={DUMMY_MOVIES} />} />
          <Route path="/popular" element={<Popular movies={DUMMY_MOVIES} />} />
          <Route path="/action" element={<Action movies={DUMMY_MOVIES} />} />
          <Route path="/animation" element={<Animation movies={DUMMY_MOVIES} />} />
          <Route path="/romance" element={<Romance movies={DUMMY_MOVIES} />} />
          <Route path="/science" element={<Science movies={DUMMY_MOVIES} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search/:title" element={<Search movies={DUMMY_MOVIES} />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </div>
);

export default App;
