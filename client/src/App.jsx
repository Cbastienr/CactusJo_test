import React from 'react';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import './App.css';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="Hero-section">
        <div className="Hero-content">
          <h1>You are Welcome</h1>
          <p>wanna add some products ?</p>
        </div>
      </header>
      <main>
        <Add />
        <ProductList />
      </main>
    </div>
  );
}

export default App;

