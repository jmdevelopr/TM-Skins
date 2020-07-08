import React from 'react';
import './App.css';

import Header from './jsx/Header';
import Home from './jsx/Home';
import Skin from './jsx/Skin';
import About from './jsx/About';
import Cart from './jsx/Cart';
import Footer from './jsx/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/:skin" component={Skin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
