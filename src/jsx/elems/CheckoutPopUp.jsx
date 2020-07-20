import React from 'react';
import '../../styles/css/Popup.min.css';
import '../../styles/css/PopupMedia.min.css';

import Button from './Button';

import { Link } from "react-router-dom";

import firebase from '../../config/fbConfig';

const CheckoutPopUp = props => {

    const closePopUp = () => {
        const popup = document.querySelector('.Popup');
        popup.style.display = "none";
    }

    const putAnOrder = () => {
        const db = firebase.firestore();
        db.collection('orders').add({
            userInfo: {...props.userData},
            orderedItems: {...props.cart}
        }).then(doc => {
            console.log(doc.id)
        })
    }

    return (
        props.isFilled
        ?
        <div className="Popup">
            <div className="popup-box" id="check">
                <h4>MAKE A PURCHASE</h4>
                <p className="popup-desc">If you have filled all the fields correctly click CONTINUE otherwise click GO BACK</p>
                <div className="buttons">
                    <Button name='GO BACK' click={()=>closePopUp()}/>
                    <Link to="/" onClick={() => putAnOrder()}>
                        <Button name='CONTINUE' />
                    </Link>
                </div>
            </div>
        </div>
        :
        <div className="Popup"></div>
    )
}

export default CheckoutPopUp;