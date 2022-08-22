import React from 'react';
import './header.css';
import ai1 from '../../assets/ai1.png';
import Captcha from '../contact/Captcha.jsx';

const Header = () => {
  const formId = 'zgSoHLR5';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  return (
    <div id="intro" className="cncium__header section__padding">
      <div className="cncium__header-content">
        <h1 className="gradient__text">
          CNC machining services in Perth, Australia
        </h1>
        <p>
          We provide High Quality CNC Machining Services in Perth, Australia.
          Servicing the light industrial / enthusiast / hobbyist
          / agricultural/ reverse engineering for hard-to-obtain parts, from
          prototypes to production runs, we can assist with your CNC machining
          needs.
        </p>
        <form
          id="email-req"
          action={formSparkUrl}
          className="cncium__header-content__input"
        >
          <input name="email" type="email" placeholder="Your Email Address" />
          <button id="submit-email" type="submit">
            Contact request
          </button>
        </form>

        <Captcha onloadCallback></Captcha>
      </div>
      <div className="cncium__header-content-image">
        <img src={ai1} alt="cnc machine working" />
      </div>
    </div>
  );
};

export default Header;
