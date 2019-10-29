import React from 'react';
import lambda from './images/lambdalogo.png';
import github from './images/githublogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lambda} className="logos" alt="lambda logo" />
        <img src={github} className="logos" alt="github logo" />
      </header>
      <PrimaryUser/>
    </div>
  );
}

export default App;
