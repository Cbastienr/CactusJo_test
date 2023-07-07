import React from 'react';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Add />
      </main>
    </div>
  );
}

export default App;
