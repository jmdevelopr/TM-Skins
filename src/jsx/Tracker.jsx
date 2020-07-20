import React from 'react';
import '../styles/css/Tracker.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Back from './elems/Back';
import CartItem from './elems/CartItem';

import firebase from '../config/fbConfig';
import { useState } from 'react';

const Tracker = props => {

    let [orderState, changeOrderState] = useState("")

    const handleOrderLoad = () => {
        if (props.orderNumber !== null && props.orderNumber !== undefined) {
            getOrder(props.orderNumber);
        }
    }

    const getOrder = order => {
        const db = firebase.firestore();
        const docRef = db.collection("orders").doc(order);
        docRef.get().then(doc => {
            if (doc.exists) {
                //component is rendering on its own all the time
                console.log(doc.data)
                changeOrderState(doc.data());
            }
            else 
                changeOrderState("");
        }).catch(err => console.log(err))
    }

    return (
        <div className="Tracker" onLoad={handleOrderLoad()}>
            <Back />
            <h3>TRACK YOUR ORDER</h3>
            <div className="search">
                <input type="text" className="search-bar" id="sbar" placeholder="Enter a order number..."/>
                <label htmlFor="sbar">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                </label>
            </div>
            {props.orderNumber === null
            ?
                <div></div>
            : orderState === ""
            ?
                <div className="order-data">
                    <p>Order not found.</p>
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