import React from 'react';
import '../../styles/css/Back.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const Back = () => {
    return (
        <div className="back">
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="icon"/>
            <span>GO BACK</span>
        </div>
    )
}

export default Back;