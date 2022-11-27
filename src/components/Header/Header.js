import './Header.css';

import { Link } from 'react-router-dom';

import MovieInput from '../Movies/MovieInput';

const Header = () => (
  <header>
    <div>
      <option>
        <Link to="/signin">Sign In</Link>
      </option>
      <option>
        <Link to="/signup">Sign Up</Link>
      </option>
    </div>
    <nav id="nav3">
      <h1>OSS-Project</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
        <li>
          <Link to="/romance">Romance</Link>
        </li>
        <li>
          <Link to="/science">Science Fiction</Link>
        </li>
        <li>
          <Link to="/action">Action</Link>
        </li>
      </ul>
      <MovieInput />
    </nav>
  </header>
);

export default Header;
