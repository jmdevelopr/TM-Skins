import React, {Component} from 'react';
import '../styles/css/Home.min.css';
import '../styles/css/HomeMedia.min.css';

import aAa from '../assets/skins/aAa.png';
import Boom from '../assets/skins/Boom.png';
import Exile from '../assets/skins/Exile.png';
import Gorigin from '../assets/skins/Gorigin.png';
import Kenny from '../assets/skins/Kenny.png';
import Lulz from '../assets/skins/Lulz.png';
import Oserv from '../assets/skins/Oserv.png';
import Rin from '../assets/skins/Rin.png';
import Spheriz from '../assets/skins/Spheriz.png';
import Teamq from '../assets/skins/Teamq.png';

import ShopItem from './elems/ShopItem';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { addToCart } from '../store/actions/shopActions';

class Home extends Component {

    shopItems = [
        {
            id: 'aAa',
            img: aAa,
            name: 'aAa 2018 skin by Peiks',
            price: 6.99
        },
        {
            id: 'Boom',
            img: Boom,
            name: 'Boom Studio skin by Peiks',
            price: 8.99
        },
        {
            id: 'Exile',
            img: Exile,
            name: 'Exile 2018 skin by Peiks',
            price: 5.99
        },
        {
            id: 'Gorigin',
            img: Gorigin,
            name: 'Games Origin skin by Peiks',
            price: 7.99
        },
        {
            id: 'Kenny',
            img: Kenny,
            name: 'KennyStream skin by Collor',
            price: 4.99
        },
        {
            id: 'Lulz',
            img: Lulz,
            name: 'LulZ skin by Collor',
            price: 7.99
        },
        {
            id: 'Oserv',
            img: Oserv,
            name: 'Oserv skin by Collor',
            price: 6.99
        },
        {
            id: 'Rin',
            img: Rin,
            name: 'Rin’s skin by Collor',
            price: 5.99
        },
        {
            id: 'Spheriz',
            img: Spheriz,
            name: 'Spheriz 2017-2018 skin by Peiks',
            price: 7.99
        },
        {
            id: 'Teamq',
            img: Teamq,
            name: 'Team Q 2017-2018 skin by Peiks',
            price: 7.99
        }
    ]

    handleAddToCart = item => {
        const cartItem = {...item};
        cartItem.quantity = 1;
        this.props.addToCart(cartItem)
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
