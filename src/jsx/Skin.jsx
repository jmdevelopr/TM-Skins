import React, { Component } from 'react';
import '../styles/css/Skin.min.css';
import '../styles/css/SkinMedia.min.css';

import Button from './elems/Button';
import ImgLoader from './elems/ImgLoader';
import Back from './elems/Back';
import HomePopUp from './elems/HomePopUp';

import { connect } from 'react-redux';

import { addToCart } from '../store/actions/shopActions';

import firebase from '../config/fbConfig';

class Skin extends Component {

    state = {
        skinData: undefined,
    }

    skinDataLoader = () => {
        const db = firebase.firestore();
        db.collection('skins').where("id", "==", this.props.match.params.skin).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.setState({skinData: doc.data()})
            });
        })
    }

    handleAddToCart = item => {
        const cartItem = {...item};
        this.setState({item: cartItem})

        cartItem.quantity = 1;
        this.props.addToCart(cartItem)
        
        this.showPopUp();
    }

    showPopUp = () => {
        const popup = document.querySelector('.Popup');
        popup.style.display = "block";
    }

    render() {
        return (
            <div className="skin" onLoad={() => this.skinDataLoader()}>
                <Back />
                {this.state.skinData !== undefined
                ?
                    <div className="skin-data">
                        <ImgLoader id={this.props.match.params.skin} size={654}/>
                        <p className="skin-name">{this.state.skinData.name}</p>
                        <p className="skin-price">${this.state.skinData.price}</p>
                        <p className="skin-desc">This skin was made specifically for Oserv team by Collor - currently one of the best skinners in the world.</p>
                        <Button name="ADD TO CART" click={() => this.handleAddToCart(this.state.skinData)}/>
                    </div>
                :
                    <div className="skin-data">
                        <ImgLoader id={this.props.match.params.skin} size={654}/>
                        <p className="skin-name"></p>
                        <p className="skin-price"></p>
                        <Button name="ADD TO CART" click={() => 0}/>
                    </div>
                }
                {this.state.skinData !== undefined
                ?
                <HomePopUp item={this.state.skinData}/>
                :
                <div></div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch(addToCart(item)),
    };
}

export default connect(null, mapDispatchToProps)(Skin);