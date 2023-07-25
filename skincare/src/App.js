import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
};

export default App;
