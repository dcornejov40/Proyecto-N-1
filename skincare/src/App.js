import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget'; 
function App() {
  return (
    <div className="App">
      <Navbar />
      <CartWidget /> {/* Agregado del componente CartWidget */}
    </div>
  );
}

export default App;
