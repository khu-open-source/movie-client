import './Header.css';

import { Link, useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const Header = () => {
  const user = localStorage.getItem('user');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
  };

  return (
    <RecoilRoot>
      <header>
        <div className="header-option">
          {!user ? (
            <>
              <Link to="/SignIn">
                <option>Sign In</option>
              </Link>
              <Link to="/SignUp">
                <option>Sign Up</option>
              </Link>
            </>
          ) : (
            <>
              <span className="header-span">Hello USER{userId}</span>
              <option className="header-span" onClick={handleClick}>
                Log Out
              </option>
            </>
          )}
          {/* <Link to="/SignIn">
            <option>Sign In</option>
          </Link>
          <Link to="/SignUp">
            <option>Sign Up</option>
          </Link> */}
          {/* <Link to="/">
            <option>Log Out</option>
          </Link> */}
        </div>
        <nav id="nav3">
          <Link to="/">
            <h1 className="homebtn">WATCHVIE</h1>
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
};

export default Header;
