import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <nav>
            <h1>Logo</h1>
            <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer style="background-color: #222; color: white; text-align: center; padding: 10px;">
        © 2024 Mon Projet - Tous droits réservés.
      </footer>

    </div>
  );
}

export default App;
