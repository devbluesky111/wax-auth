import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const login = () => {
    console.log('login');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="button" value="Log In" className="login-btn" onClick={login} />
        <a
          className="App-link"
          href="https://github.com/EOSIO/universal-authenticator-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WAX Authentication
        </a>
      </header>
    </div>
  );
}

export default App;
