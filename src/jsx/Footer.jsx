import React from 'react';
import '../styles/css/Footer.min.css';
import '../styles/css/FooterMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import ubisoftlogo from '../assets/ubisoft-logo.svg';
import tmlogo from '../assets/tm-logo.svg';
import nadeologo from '../assets/nadeo-logo.svg';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="sponsors">
                <div className="img-wrapper">
                    <img src={ubisoftlogo} alt="ubisoft"/>
                    <img src={tmlogo} alt="tm"/>
                    <img src={nadeologo} alt="nadeo"/>
                </div>
            </div>
            <div className="info">
                <p className="terms">Terms</p>
                <p className="rights">TM Skins 2020 &copy; All rights reserved</p>
                <p className="privacy">Privacy</p>
            </div>
            <div className="social-media">
                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;