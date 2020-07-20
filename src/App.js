import React, { useState } from 'react';
import './App.css';

import Header from './jsx/Header';
import Tracker from './jsx/Tracker';
import Home from './jsx/Home';
import Skin from './jsx/Skin';
import About from './jsx/About';
import Cart from './jsx/Cart';
import Checkout from './jsx/Checkout';
import Footer from './jsx/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let [SBar, changeSBar] = useState(false)

  let [orderNumber, changeOrderNumber] = useState(null);

  const clickCheck = e => {
    e = e || window.event;
    const nav = document.querySelector('.main-header');
    const search = document.querySelector('.search');
    const searchBar = document.querySelector('.search-bar');
    const faSearch = document.querySelector('.fa-search');
    
    if (e.composedPath().indexOf(nav) > -1 && e.composedPath().indexOf(search) > -1) {
      searchBar.style.display = 'block';
      faSearch.style.color = '#101010';
      changeSBar(true)
    }
    else if (e.composedPath().indexOf(nav) === -1) {
      searchBar.style.display = 'none';
      faSearch.style.color = '#FBFBFB';
      changeSBar(false)
    }
  }

  return (
    <Router>
      <div className="App" onClick={() => clickCheck()}>
        <Header barState={SBar} changeNumber={number => changeOrderNumber(number)}/>
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
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/track">
            <Tracker orderNumber={orderNumber}/>
          </Route>
          <Route path="/:skin" component={Skin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
