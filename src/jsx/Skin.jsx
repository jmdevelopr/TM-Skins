import React, { Component } from 'react';

import Button from './elems/Button';
import ImgLoader from './elems/ImgLoader';

class Skin extends Component {
    render() {
        return (
            <div className="skin">
                <ImgLoader id={this.props.match.params.skin} />
                <p className="skin-name">Name</p>
                <p className="skin-price">$9.99</p>
                <Button name="ADD TO CART" click={() => console.log('xd')}/>
            </div>
        )
    }
}

export default Skin;