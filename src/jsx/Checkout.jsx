import React, { Component } from 'react';
import '../styles/css/Checkout.min.css';
import '../styles/css/CheckoutMedia.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import Back from './elems/Back';
import Button from './elems/Button';
import CartItem from './elems/CartItem';
import CheckoutPopUp from './elems/CheckoutPopUp';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {

    state = {
        userData: {
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
        },
        isFilled: false
    }

    setPrice = () => {
        let sum = 0;
        this.props.cart.forEach(item => {
            sum += (item.price * item.quantity);
        });
        return Math.round(sum * 100) / 100;
    }

    validateInputData = () => {
        let req = 0;
        const inputs = document.querySelectorAll('input');
        let firstUnfilled = false;

        inputs.forEach(input => {
            if (input.required) {
                if (input.value.length === 0) {
                    req++;
                    if (!firstUnfilled) {
                        firstUnfilled = true;
                        window.scrollTo(0, input.offsetTop);
                    }
                }
            }
        })
        if (req === 4) {
            return true;
        }
        return false;
    }

    showPopUp = () => {
        const popup = document.querySelector('.Popup');
        popup.style.display = "block";
    }

    handleOrder = () => {
        const validate = this.validateInputData();
        if (validate === true) {
            this.setState({isFilled: true});
            this.showPopUp();
        }
        else {
            this.setState({isFilled: false});
        }
    }

    render() {
        return (
            <div className="Checkout">
                <Back />
                <h3>CHECKOUT</h3>

                <div className="first-step">
                    <form action="">
                        <p>First name</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.firstName = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>Last name</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.lastName = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>Country</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.country = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>State (optional)</p>
                        <input type="text" onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.state = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>Street name and house number</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.streetNameHouseNumber = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <div className="half">
                            <div className="input">
                                <p>Apt / suite (optional)</p>
                                <input type="number" onChange={e => {
                                    e.persist();
                                    this.setState(prevState => {
                                        let userData = Object.assign({}, prevState.userData);
                                        userData.aptSuite = e.target.value;             
                                        return { userData };
                                    })
                                }}/>
                            </div>

                            <div className="input">
                                <p>Postcode / ZIP</p>
                                <input type="text" required onChange={e => {
                                    e.persist();
                                    this.setState(prevState => {
                                        let userData = Object.assign({}, prevState.userData);
                                        userData.postcodeZip = e.target.value;             
                                        return { userData };
                                    })
                                }}/>
                            </div>
                        </div>

                        <p>City</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.city = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>Phone number</p>
                        <input type="text" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.phoneNumber = e.target.value;             
                                return { userData };
                            })
                        }}/>

                        <p>E-mail</p>
                        <input type="email" required onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.email = e.target.value;             
                                return { userData };
                            })
                        }}/>
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
                        <textarea name="" id="" cols="30" rows="10" onChange={e => {
                            e.persist();
                            this.setState(prevState => {
                                let userData = Object.assign({}, prevState.userData);
                                userData.notes = e.target.value;             
                                return { userData };
                            })
                        }}/>
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

                <Link to="/checkout" className="link" onClick={()=>this.handleOrder()}>
                    <Button name="PLACE YOUR ORDER" />
                </Link>

                <CheckoutPopUp isFilled={this.state.isFilled} userData={this.state.userData} cart={this.props.cart}/>
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