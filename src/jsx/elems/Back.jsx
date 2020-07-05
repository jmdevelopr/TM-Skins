import React from 'react';
import '../../styles/css/Back.min.css';
import '../../styles/css/BackMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <Link to="/" className="link">
            <div className="Back">
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="icon"/>
                <span>
                    <span>G</span>
                    <span>O</span>
                    <span>&nbsp;</span>
                    <span>B</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                </span>
            </div>
        </Link>
    )
}

export default Back;