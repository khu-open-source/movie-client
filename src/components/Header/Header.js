import './Header.css';

import { Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const Header = () => (
  <RecoilRoot>
    <header>
      <div className="header-option">
        <Link to="/SignIn">
          <option>Sign In</option>
        </Link>
        <Link to="/SignUp">
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
          <Link to="/fantasy">
            <li>Fantasy</li>
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
      </nav>
    </header>
  </RecoilRoot>
);

export default Header;
