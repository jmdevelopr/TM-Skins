import React from 'react';
import './App.css';

import Header from './jsx/Header';
import Home from './jsx/Home';
import About from './jsx/About';
import Cart from './jsx/Cart';
import Footer from './jsx/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About />
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
