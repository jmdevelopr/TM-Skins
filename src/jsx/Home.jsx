import React, {Component} from 'react';
import '../styles/css/Home.min.css';
import '../styles/css/HomeMedia.min.css';

import ShopItem from './elems/ShopItem';
import HomePopUp from './elems/HomePopUp';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { addToCart } from '../store/actions/shopActions';

class Home extends Component {

    state = {
        item: null
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
            <div className="Home">
                <header className="img-header">
                    <div className="bg"></div>
                    <h3>STEP UP YOUR GAME</h3>
                    <h5>with brand new custom skins</h5>
                </header>
                <section className="shop">
                    <h4>OUR SKINS</h4>
                    {this.props.shopItems 
                    ? 
                    this.props.shopItems.map(item => (
                        <ShopItem item={item} add={() => this.handleAddToCart(item)} key={item.id}/>
                    ))
                    :
                    <div className="loading">Loading...</div>
                    }
                </section>
                <HomePopUp item={this.state.item}/>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        shopItems: state.firestoreReducer.ordered.skins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch(addToCart(item)),
    };
}

const enchance = compose(
    firestoreConnect([{ collection: 'skins' }]),
    connect(mapStateToProps, mapDispatchToProps)
)

export default enchance(Home);
