import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <CartWidget />
    </div>
  );
}

export default App;
