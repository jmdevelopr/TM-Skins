import React, { Component, useState } from 'react';

import Button from './elems/Button';

import { useFirebase } from 'react-redux-firebase';

const GetURL = props => {
    const [img, setImg] = useState("");

    const firebase = useFirebase();
    const storage = firebase.storage().ref();
    storage.child(`${props.id}.png`).getDownloadURL().then(url => {
        setImg(url)
    });

    return <img src={img} alt="skin-img"/>
}



class Skin extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="skin">
                <GetURL id={this.props.match.params.skin} />
                <p className="skin-name">Name</p>
                <p className="skin-price">$9.99</p>
                <Button name="ADD TO CART" click={() => console.log('xd')}/>
            </div>
        )
    }
}

export default Skin;