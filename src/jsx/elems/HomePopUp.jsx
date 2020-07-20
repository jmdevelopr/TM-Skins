import React from 'react';
import '../../styles/css/Popup.min.css';
import '../../styles/css/PopupMedia.min.css';

import ImgLoader from './ImgLoader';
import Button from './Button';

import { Link } from "react-router-dom";

const HomePopUp = props => {

    const closePopUp = () => {
        const popup = document.querySelector('.Popup');
        popup.style.display = "none";
    }
    return (
        props.item
        ?
        <div className="Popup">
            <div className="popup-box">
                <h5>A FOLLOWING ITEM HAS BEEN ADDED TO CART</h5>
                <div className="item">
                    <ImgLoader id={props.item.id} />
                    <p className="name">{props.item.name}</p>
                    <p className="price">Price: <span className="price-value">${props.item.price}</span></p>
                </div>

                <p className="decide">What do you want to do next?</p>
                <div className="buttons">
                    <Button name='CONTINUE SHOPPING' click={()=>closePopUp()}/>
                    <Link to="/cart">
                        <Button name='GO TO CART' />
                    </Link>
                </div>
            </div>
        </div>
        :
        <div className="Popup"></div>
    )
}

export default HomePopUp;