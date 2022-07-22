import React from 'react';
import './header.css';
import ai1 from '../../assets/ai1.png';

const Header = () => {
  return (
    <div className="cncium__header section__padding" id="about">
      <div className="cncium__header-content">
        <h1 className="gradient__text">Perth CNC machining services</h1>
        <p>
          High Quality CNC Machining Services in Perth Western Australia,
          servicing the Motorsport, Mining and Oil & Gas sectors. From
          prototypes to production runs, we can assist with all your engineering
          and CNC machining needs.
        </p>
        <div className="cncium__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Contact request</button>
        </div>
      </div>
      <div className="cncium__header-content-image">
        <img src={ai1} alt="cnc machine working" />
      </div>
    </div>
  );
};

export default Header;
