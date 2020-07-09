import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

const ImgLoader = props => {
    const [img, setImg] = useState("");

    const firebase = useFirebase();
    const storage = firebase.storage().ref();
    storage.child(`${props.id}.png`).getDownloadURL().then(url => {
        setImg(url)
    });

    return <img src={img} alt="skin-img"/>
}

export default ImgLoader;