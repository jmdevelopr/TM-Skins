import React, { useState, useEffect } from 'react';
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

const App = () => {
  let [webPComp, changeWebPComp] = useState("")
  let [SBar, changeSBar] = useState(false)
  let [orderNumber, changeOrderNumber] = useState(null);

  const canUseWebP = () => {
    let elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d')))
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    // very old browser like IE 8, canvas not supported
    return false;
  }

  useEffect(()=>{
    changeWebPComp(canUseWebP());
  }, [])

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
            <Tracker orderNumber={orderNumber} changeNumber={number => changeOrderNumber(number)}/>
          </Route>
          <Route path="/:skin" component={Skin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
