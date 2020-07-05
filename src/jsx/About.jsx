import React from 'react';
import '../styles/css/About.min.css';
import '../styles/css/AboutMedia.min.css';

import Back from './elems/Back';

const About = () => {
    return (
      <div className="About">
          <Back />
          <div className="about-bg"></div>
          <h3>ABOUT <span>TM</span>SKINS</h3>
          <p>
              TM Skins is a website for players who seek aestethics and appearance of their cars.
              <br /><br />
              Since 2020 we make unique skins for players all around the world and share them here. With a help of some of the best skinners TM Skins made it’s way to become one of the best racing games related website on the whole internet where you can find the most exclusive Trackmania content.
          </p>
      </div>
    );
}

export default About;