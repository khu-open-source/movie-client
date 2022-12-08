/* eslint-disable react/button-has-type */
import './login.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [input, setValue] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await (
      await fetch('http://43.200.75.98/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      })
    ).json();

    if (response.loginSuccess === true) {
      localStorage.setItem('user', true);
      localStorage.setItem('userId', response.userId.slice(0, 5));
      navigate('/');
    }
    return response;
  };

  return (
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
          <input type="text" placeholder="ID" onChange={(e) => setValue({ ...input, id: e.target.value })} />
        </form>
        <form className="form-element">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setValue({ ...input, password: e.target.value })}
          />
        </form>
        <form className="form-element">
          <button id="submit-btn" onClick={handleClick}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
