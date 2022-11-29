/* eslint-disable react/button-has-type */
import './signup.css';

const Signup = () => (
  <div className="form signup">
    <nav className="form-header">
      <li className="show-signup">Sign Up</li>
      <li className="show-signin">Sign In</li>
    </nav>
    <div className="arrow" />
    <div className="form-elements">
      <form className="form-element">
        <input type="email" placeholder="Email" />
      </form>
      <form className="form-element">
        <input type="text" placeholder="User ID" />
      </form>
      <form className="form-element">
        <input type="password" placeholder="Password" />
      </form>
      <form className="form-element">
        <input type="password" placeholder="Confirm password" />
      </form>
      <form className="form-element">
        <button className="submit-btn">Sign Up</button>
      </form>
    </div>
  </div>
);

export default Signup;