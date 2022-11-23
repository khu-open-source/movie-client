import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <option>
        <Link to="Sign In">Sign In</Link>
      </option>
      <option>
        <Link to="Sign Up">Sign Up</Link>
      </option>
      <option>
        <Link to="Log Out">Log Out</Link>
      </option>
    </div>
    <nav id="nav3">
      <h1>OSS-Project</h1>
      <ul>
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
    </nav>
  </header>
);

export default Header;
