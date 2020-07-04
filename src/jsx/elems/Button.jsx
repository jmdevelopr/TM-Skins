import React from 'react';
import '../../styles/css/Button.min.css';

const Button = props => {
    return (
        <button className="tmskins-btn">{props.name}</button>
    )
}

export default Button