import React from 'react';
import lambda from './images/lambdalogo.png';
import github from './images/githublogo.png';
import './App.css';
import PrimaryUser from './components/PrimaryUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lambda} className="logos" alt="lambda logo" />
        <span className="header-child" role="img" aria-label="heart emoji">
            ❤️'s
          </span>
        <img src={github} className="logos" alt="github logo" />
      </header>
      <PrimaryUser/>
    </div>
  );
}

export default App;
