/* eslint-disable react/button-has-type */
import './login.css';

import { Link } from 'react-router-dom';

const Signin = () => (
  <div className="form signup">
    <nav className="form-header">
      <li className="show-sign">
        <Link to="/SignIn">Sign In</Link>
      </li>
      <li className="show-sign">
        <Link to="/SignUp">Sign Up</Link>
      </li>
    </nav>
    <div className="arrow" />
    <div className="form-elements">
      <form className="form-element">
        <input type="text" placeholder="User ID" />
      </form>
      <form className="form-element">
        <input type="password" placeholder="Password" />
      </form>
      <form className="form-element">
        <button id="submit-btn">Sign In</button>
      </form>
    </div>
  </div>
);

export default Signin;
