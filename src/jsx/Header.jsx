import React from 'react';
import '../styles/css/Header.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';            

import logo from '../assets/tms-logo.svg';

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="logo"/>
            <nav>
                <div className="home-link">
                    Home
                </div>
                <div className="about-link">
                    About
                </div>
                <div className="cart-link">
                    Cart
                </div>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;
