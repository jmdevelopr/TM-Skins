import React, {Component} from 'react';
import '../styles/css/Cart.min.css';
import '../styles/css/CartMedia.min.css';

import Back from './elems/Back';
import Button from './elems/Button';
import CartItem from './elems/CartItem';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart, subQuantity } from '../store/actions/shopActions';

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

    handleSubtractQuantity = item => {
        this.props.subQuantity(item);
        this.setState({});
    }

    render() {
        return (
            this.props.cart.length > 0 
            ?
                <div className="Cart">
                    <Back />
                    <h3>CART</h3>
                    {this.props.cart.map(item => (
                        <CartItem 
                            item={item}
                            add={() => this.handleAddQuantity(item)}
                            sub={() => this.handleSubtractQuantity(item)}
                            key={item.id}
                        />
                    ))}
                    <div className="total">
                        TOTAL:
                    <span className="item-price">${this.setPrice()}</span>
                    </div>
                    <Link to="/checkout">
                        <Button name="CHECKOUT"/>
                    </Link>
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
        subQuantity: item => dispatch(subQuantity(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);