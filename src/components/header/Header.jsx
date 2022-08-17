import React, { Component } from 'react';
import './header.css';
import ai1 from '../../assets/ai1.png';
import Captcha from '../contact/Captcha.jsx';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import { useRef } from 'react';
import Reaptcha from 'reaptcha';

const Header = () => {
  const formId = 'zgSoHLR5';
  const formSparkUrl = `https://submit-form.com/${formId}`;

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
