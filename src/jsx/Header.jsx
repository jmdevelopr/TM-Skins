import React from 'react';
import '../styles/css/Header.min.css';
import '../styles/css/HeaderMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';            

import logo from '../assets/tms-logo.svg';

import { Link } from "react-router-dom";


const Header = props => {

    const handleSearch = () => {
        const number = document.querySelector('.search-bar').value;
        props.changeNumber(number)
    }

    return (
        <header className="main-header">
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
            </Link>
            <nav>
                <Link to="/" className="link">
                    <div className="home-link">
                        Home
                    </div>
                </Link>
                <Link to="/about" className="link">
                    <div className="about-link">
                        About
                    </div>
                </Link>
                <Link to="/cart" className="link">
                    <div className="cart-link">
                        Cart
                    </div>
                </Link>
                <div className="search">
                    {props.barState
                    ?
                    <Link to="/track">
                        <FontAwesomeIcon icon={faSearch} className="icon" onClick={() => handleSearch()}/>
                    </Link>
                    :
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                    }
                    
                    <input type="text" placeholder="Enter a order number..." className="search-bar"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;
