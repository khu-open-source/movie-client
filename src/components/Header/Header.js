import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-option">
      <Link to="Sign In">
        <option>Sign In</option>
      </Link>
      <Link to="Sign Up">
        <option>Sign Up</option>
      </Link>
      <Link to="/">
        <option>Log Out</option>
      </Link>
    </div>
    <nav id="nav3">
      <Link to="/">
        <h1 className="homebtn">OSS-Project</h1>
      </Link>
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
