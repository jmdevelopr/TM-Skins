import React from 'react';
import '../../styles/css/CartItem.min.css';
import '../../styles/css/CartItemMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import ImgLoader from './ImgLoader';

const ShopItem = props => {
    
    return (
        <div className="item">
            <ImgLoader id={props.item.id} />
            <p className="item-name">{props.item.name}</p>
            {
                props.checkout
                ?
                <div className="quantity-wrap">
                    <div className="quantity">
                        Quantity: {props.item.quantity}
                    </div>
                </div>
                :
                <div className="quantity-wrap">
                    <div className="quantity">
                        <FontAwesomeIcon icon={faMinus} className="icon" onClick={props.sub}/>
                        Quantity: {props.item.quantity}
                        <FontAwesomeIcon icon={faPlus} className="icon" onClick={props.add}/>
                    </div>
                </div>
            }
            <p className="item-price">${props.item.price}</p>
        </div>
    )
}

export default ShopItem;