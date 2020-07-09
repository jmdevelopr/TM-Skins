import React, { Component } from 'react';
import '../styles/css/Checkout.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import Back from './elems/Back';
import Button from './elems/Button';
import CartItem from './elems/CartItem';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { placeOrder } from '../store/actions/orderActions';

class Checkout extends Component {
    render() {
        return (
            <div className="Checkout">
                <Back />
                <h3>CHECKOUT</h3>

                <form action="">
                    <p>First name</p>
                    <input type="text" required/>
                    <p>Last name</p>
                    <input type="text" required/>
                    <p>Country</p>
                    <input type="text" required/>
                    <p>State (optional)</p>
                    <input type="text"/>
                    <p>Street name and house number</p>
                    <input type="text" required/>
                    <p>Apt / suite (optional)</p>
                    <input type="number"/>
                    <p>City</p>
                    <input type="text" required/>
                    <p>Postcode / ZIP</p>
                    <input type="text" required/>
                    <p>Phone number</p>
                    <input type="text" required/>
                    <p>E-mail</p>
                    <input type="email" required/>
                </form>

                <h3>YOUR ITEMS</h3>
                {this.props.cart.map(item => (
                    <CartItem 
                        item={item}
                        add={() => this.handleAddQuantity(item)}
                        sub={() => this.handleSubtractQuantity(item)}
                        key={item.id}
                    />
                ))}
                <p>Total: $9.99</p>

                <div className="notes">
                    <p>Order notes</p>
                    <textarea name="" id="" cols="30" rows="10" />
                </div>

                <div className="separator"></div>

                <h3>PAYMENT OPTION</h3>
                
                <div className="options">
                    <FontAwesomeIcon icon={faCcMastercard} />
                    <FontAwesomeIcon icon={faCcPaypal} />
                </div>

                <form action="">
                    <p>Card number</p>
                    <input type="number" required/>
                    <p>Name on card</p>
                    <input type="text" required/>
                    <p>Expiration date</p>
                    <input type="text" required/>
                    <p>CCV</p>
                    <input type="number" required/>
                </form>

                <Link to="/order">
                    <Button name="PLACE YOUR ORDER"/>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.shopReducer.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeOrder: (orderInfo, userInfo) => dispatch(placeOrder(orderInfo, userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);