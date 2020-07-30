import React from 'react';

import Button from './Button';
import ImgLoader from './ImgLoader';

import { Link } from "react-router-dom";

const ShopItem = props => {
    return (
        <div className="shop-item">
            <Link to={`/${props.item.id}`} className="link">
                <ImgLoader id={props.item.id} size={265}/>
            </Link>
            <p className="skin-name">{props.item.name}</p>
            <p className="skin-price">${props.item.price}</p>
            <Button name="ADD TO CART" click={() => props.add()}/>
        </div>
    )
}

export default ShopItem;