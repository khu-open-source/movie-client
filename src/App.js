import './App.css';

import logo from './logo.svg';
import Login from './pages/Login';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Login />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);

export default App;
