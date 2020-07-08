import React, { useState } from 'react';

import Button from './Button';

import { Link } from "react-router-dom";
import { useFirebase } from 'react-redux-firebase';

const ShopItem = props => {

    const [ img, setImg ] = useState('');

    const firebase = useFirebase();
    const storage = firebase.storage().ref();
    storage.child(`${props.item.id}.png`).getDownloadURL().then(url => {
        setImg(url)
    });

    return (
        <div className="skin">
            <Link to={`/${props.item.id}`}>
                <img src={img} alt="skin-img"/>
            </Link>
            <p className="skin-name">{props.item.name}</p>
            <p className="skin-price">${props.item.price}</p>
            <Button name="ADD TO CART" click={() => props.add()}/>
        </div>
    )
}

export default ShopItem;