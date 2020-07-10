import React, { Component } from 'react';
import '../styles/css/Checkout.min.css';
import '../styles/css/CheckoutMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import Back from './elems/Back';
import Button from './elems/Button';
import CartItem from './elems/CartItem';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from './../config/fbConfig';

class Checkout extends Component {

    state = {
        firstName: '',
        lastName: '',
        country: '',
        state: '',
        streetNameHouseNumber: '',
        aptSuite: 0,
        postcodeZip: '',
        city: '',
        phoneNumber: '',
        email: '',
        notes: ''
    }

    setPrice = () => {
        let sum = 0;
        this.props.cart.forEach(item => {
            sum += (item.price * item.quantity);
        });
        return Math.round(sum * 100) / 100;
    }

    handleOrder = () => {
        const userInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            country: this.state.country,
            state: this.state.state,
            streetNameHouseNumber: this.state.streetNameHouseNumber,
            aptSuite: this.state.aptSuite,
            postcodeZip: this.state.postcodeZip,
            city: this.state.city,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            notes: this.state.notes
        }

        const db = firebase.firestore();
        db.collection('orders').add({
            userInfo: {...userInfo},
            oreredItems: {...this.props.cart}
        });  
    }

    render() {
        return (
            <div className="Checkout">
                <Back />
                <h3>CHECKOUT</h3>

                <div className="first-step">
                    <form action="">
                        <p>First name</p>
                        <input type="text" required onChange={e => this.setState({firstName: e.target.value})}/>

                        <p>Last name</p>
                        <input type="text" required onChange={e => this.setState({lastName: e.target.value})}/>

                        <p>Country</p>
                        <input type="text" required onChange={e => this.setState({country: e.target.value})}/>

                        <p>State (optional)</p>
                        <input type="text" onChange={e => this.setState({state: e.target.value})}/>

                        <p>Street name and house number</p>
                        <input type="text" required onChange={e => this.setState({streetNameHouseNumber: e.target.value})}/>

                        <div className="half">
                            <div className="input">
                                <p>Apt / suite (optional)</p>
                                <input type="number" onChange={e => this.setState({aptSuite: e.target.value})}/>
                            </div>

                            <div className="input">
                                <p>Postcode / ZIP</p>
                                <input type="text" required onChange={e => this.setState({postcodeZip: e.target.value})}/>
                            </div>
                        </div>

                        <p>City</p>
                        <input type="text" required onChange={e => this.setState({city: e.target.value})}/>

                        <p>Phone number</p>
                        <input type="text" required onChange={e => this.setState({phoneNumber: e.target.value})}/>

                        <p>E-mail</p>
                        <input type="email" required onChange={e => this.setState({email: e.target.value})}/>
                    </form>

                    <div className="items">
                        <h3 className="items-head">YOUR ITEMS</h3>
                        {this.props.cart.map(item => {
                            this.price += item.price*item.quantity;
                            return(
                                <CartItem 
                                item={item}
                                add={() => this.handleAddQuantity(item)}
                                sub={() => this.handleSubtractQuantity(item)}
                                key={item.id}
                                checkout
                            />
                            )
                        })}
                        <p className="price">TOTAL : <span>${this.setPrice()}</span></p>
                    </div>

                    <div className="notes">
                        <p>Order notes</p>
                        <textarea name="" id="" cols="30" rows="10" onChange={e => this.setState({notes: e.target.value})}/>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="second-step">
                    <h3>PAYMENT OPTION</h3>
                            
                    <div className="options">
                        <FontAwesomeIcon icon={faCcMastercard} />
                        <FontAwesomeIcon icon={faCcPaypal} />
                    </div>
                            
                    <form action="" className="card-info">
                        <p>Card number</p>
                        <input type="number" required/>

                        <p>Name on card</p>
                        <input type="text" required/>

                        <div className="half">
                            <div className="input">
                                <p>Expiration date</p>
                                <input type="text" required/>
                            </div>

                            <div className="input">
                                <p>CCV</p>
                                <input type="number" required/>
                            </div>
                        </div>
                    </form>
                </div>

                <Link to="/" className="link" onClick={()=>this.handleOrder()}>
                    <Button name="PLACE YOUR ORDER" />
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

export default connect(mapStateToProps)(Checkout);