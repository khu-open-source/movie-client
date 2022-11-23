import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
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
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <select>
        <option>Log Out</option>
        <option>Sign In</option>
        <option>Sign Up</option>
      </select>
    </nav>
  </header>
);

export default Header;
