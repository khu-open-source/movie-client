import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-option">
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
      <ul className="header-ul">
        <Link to="/popular">
          <li>Popular</li>
        </Link>
        <Link to="/animation">
          <li>Animation</li>
        </Link>
        <Link to="/romance">
          <li>Romance</li>
        </Link>
        <Link to="/science">
          <li>Science Fiction</li>
        </Link>
        <Link to="/action">
          <li>Action</li>
        </Link>
      </ul>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </nav>
  </header>
);

export default Header;
