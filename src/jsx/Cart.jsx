import React, {Component} from 'react';
import '../styles/css/Cart.min.css';
import '../styles/css/CartMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import Back from './elems/Back';
import Button from './elems/Button';

import { connect } from 'react-redux';

import { addToCart } from '../store/actions/shopActions';

class Cart extends Component {

    state = {
    }

    handleAddQuantity = item => {
        this.props.addToCart(item);
        this.setState({});
    }

    setPrice = () => {
        let sum = 0;
        this.props.cart.forEach(item => {
            sum += (item.price * item.quantity);
        });
        return Math.round(sum * 100) / 100;
        
    }

    render() {
        return (
            this.props.cart.length > 0 
            ?
                <div className="Cart">
                    <Back />
                    <h3>CART</h3>
                    {this.props.cart.map(item => (
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="item-img"/>
                            <p className="item-name">{item.name}</p>
                            <div className="quantity-wrap">
                                <div className="quantity">
                                    <FontAwesomeIcon icon={faMinus} className="icon"/>
                                    Quantity: {item.quantity}
                                    <FontAwesomeIcon icon={faPlus} className="icon" onClick={() => this.handleAddQuantity(item)}/>
                                </div>
                            </div>
                            <p className="item-price">${item.price}</p>
                        </div>
                    ))}
                    <div className="total">
                        TOTAL:
                    <span className="item-price">${this.setPrice()}</span>
                    </div>
                    <Button name="CHECKOUT"/>
                </div>
            : 
            <div className="Cart">
                    <Back />
                    <h3>CART</h3>
                    <p>Your cart is empty</p>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.shopReducer.cart
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch(addToCart(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);