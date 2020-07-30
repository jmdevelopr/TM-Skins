import React from 'react';
import '../styles/css/Tracker.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Back from './elems/Back';
import CartItem from './elems/CartItem';

import firebase from '../config/fbConfig';
import { useState } from 'react';

let prevDocId = "";

const Tracker = props => {

    let [orderState, changeOrderState] = useState(null)
    
    const handleOrderLoad = () => {
        if (props.orderNumber !== null && props.orderNumber !== undefined) {
            getOrder(props.orderNumber);
        }
    }

    const handleSearch = () => {
        let number = document.querySelector('#sbar').value;
        if (number.length > 0)
            props.changeNumber(number)
        document.querySelector('#sbar').value = '';
    }

    const getOrder = order => {
        const db = firebase.firestore();
        const docRef = db.collection("orders").doc(order);
        docRef.get().then(doc => {
            if (doc.exists) {
                if (prevDocId !== doc.id) {
                    prevDocId = doc.id;
                    changeOrderState(doc.data());
                }
            }
            else {
                prevDocId = "";
                changeOrderState(null);
            }
        }).catch(err => console.log(err))
    }
    
    return (
        <div className="Tracker" onLoad={handleOrderLoad()}>
            <Back />
            <h3>TRACK YOUR ORDER</h3>
            <div className="search">
                <input type="text" className="search-bar" id="sbar" placeholder="Enter a order number..."/>
                <label htmlFor="sbar">
                    <FontAwesomeIcon icon={faSearch} className="icon" onClick={() => handleSearch()}/>
                </label>
            </div>
            {props.orderNumber === null
            ?
                <div></div>
            : orderState === null
            ?
                <div className="order-data">
                    <p className="no-content">Order not found.</p>
                </div>
            :
                <div className="order-data">
                    <p>Order {props.orderNumber}</p>
                    <div className="personal-info">
                        <h2>Personal informations</h2>
                        <p>{orderState.userInfo.firstName} {orderState.userInfo.lastName}</p>
                        <p>{orderState.userInfo.country}</p>
                        <p>{orderState.userInfo.state}</p>
                        <p>{orderState.userInfo.streetNameHouseNumber}</p>
                        <p>{orderState.userInfo.aptSuite}</p>
                        <p>{orderState.userInfo.city}</p>
                        <p>{orderState.userInfo.postcodeZip}</p>
                        <p>{orderState.userInfo.phoneNumber}</p>
                        <p>{orderState.userInfo.email}</p>
                    </div>
                    <div className="order-info">
                        <h2>Ordered items</h2>
                        {Object.values(orderState.orderedItems).map(item => (
                            <CartItem 
                            item={item}
                            add={null}
                            sub={null}
                            key={item.id}
                            checkout
                            />
                        ))}
                    </div>
                    <p className="total">TOTAL: <span>$999.99</span></p>
                </div>
            }
        </div>
    )
}

export default Tracker;