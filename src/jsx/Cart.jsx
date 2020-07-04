import React, {Component} from 'react';
import '../styles/css/Cart.min.css';

import Back from './elems/Back';
import Button from './elems/Button';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <Back />
                <h3>CART</h3>
                <div className="item">
                    <img src="#" alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity">
                        {/* icon-minus */}
                        Quantity: 1
                        {/* icon-plus */}
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src="#" alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity">
                        {/* icon-minus */}
                        Quantity: 1
                        {/* icon-plus */}
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src="#" alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity">
                        {/* icon-minus */}
                        Quantity: 1
                        {/* icon-plus */}
                    </div>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item">
                    <img src="#" alt="item-img"/>
                    <p className="item-name">aAa 2018 skin by Peiks</p>
                    <div className="quantity">
                        {/* icon-minus */}
                        Quantity: 1
                        {/* icon-plus */}
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