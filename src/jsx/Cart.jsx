import React, {Component} from 'react';
import '../styles/css/Cart.min.css';
import '../styles/css/CartMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import skin from '../assets/skin.png';

import Back from './elems/Back';
import Button from './elems/Button';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <Back />
                <h3>CART</h3>
                <div className="item">
                    <img src={skin} alt="item-img"/>
                    <p className="item-name">Spheriz 2017-2018 skin by Peiks</p>
                    <div className="quantity-wrap">
                        <div className="quantity">
                            <FontAwesomeIcon icon={faMinus} className="icon"/>
                            Quantity: 1
                            <FontAwesomeIcon icon={faPlus} className="icon"/>
                        </div>
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src={skin} alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity-wrap">
                        <div className="quantity">
                            <FontAwesomeIcon icon={faMinus} className="icon"/>
                            Quantity: 1
                            <FontAwesomeIcon icon={faPlus} className="icon"/>
                        </div>
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src={skin} alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity-wrap">
                        <div className="quantity">
                            <FontAwesomeIcon icon={faMinus} className="icon"/>
                            Quantity: 1
                            <FontAwesomeIcon icon={faPlus} className="icon"/>
                        </div>
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src={skin} alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity-wrap">
                        <div className="quantity">
                            <FontAwesomeIcon icon={faMinus} className="icon"/>
                            Quantity: 1
                            <FontAwesomeIcon icon={faPlus} className="icon"/>
                        </div>
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="total">
                    TOTAL:
                    <span className="item-price">$6.99</span>
                </div>
                <Button name="CHECKOUT"/>
            </div>
        )
    }
}

export default Cart;