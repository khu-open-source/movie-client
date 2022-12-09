/* eslint-disable react/button-has-type */
import './signup.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [input, setValue] = useState({ name: '', email: '', id: '', password: '' });

  const handleClick = async () => {
    await (
      await fetch('http://43.200.75.98/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      })
    ).json();
  };

  return (
    <div className="form signup">
      <nav className="form-header">
        <li className="show-sign">
          <Link to="/SignUp">Sign Up</Link>
        </li>
        <li className="show-sign">
          <Link to="/SignIn">Sign In</Link>
        </li>
      </nav>
      <div className="arrow" />
      <div className="form-elements">
        <form className="form-element">
          <input type="email" placeholder="Email" onChange={(e) => setValue({ ...input, email: e.target.value })} />
        </form>
        <form className="form-element">
          <input type="text" placeholder="Name" onChange={(e) => setValue({ ...input, name: e.target.value })} />
        </form>
        <form className="form-element">
          <input type="text" placeholder="ID" onChange={(e) => setValue({ ...input, id: e.target.value })} />
        </form>
        <form className="form-element">
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setValue({ ...input, password: e.target.value })}
          />
        </form>
        <form className="form-element">
          <Link to="/SignIn">
            <button id="submit-btn" onClick={handleClick}>
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
