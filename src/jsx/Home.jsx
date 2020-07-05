import React, {Component} from 'react';
import '../styles/css/Home.min.css';
import '../styles/css/HomeMedia.min.css';

import skin from '../assets/skin.png';

import Button from './elems/Button';

class Home extends Component {
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
                    <div className="skin">
                        <img src={skin} alt="skin-img"/>
                        <p className="skin-name">aAa 2018 skin by Peiks</p>
                        <p className="skin-price">$6.99</p>
                        <Button name="ADD TO CART"/>
                    </div>
                    <div className="skin">
                        <img src={skin} alt="skin-img"/>
                        <p className="skin-name">aAa 2018 skin by Peiks</p>
                        <p className="skin-price">$6.99</p>
                        <Button name="ADD TO CART"/>
                    </div>
                    <div className="skin">
                        <img src={skin} alt="skin-img"/>
                        <p className="skin-name">aAa 2018 skin by Peiks</p>
                        <p className="skin-price">$6.99</p>
                        <Button name="ADD TO CART"/>
                    </div>
                </section>
            </div>
          );
    }
}

export default Home;
