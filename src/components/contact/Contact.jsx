import React from 'react';
import Captcha from './Captcha.jsx';
import './contact.css';

const Contact = () => {
  return (
    <div className="cncium_contact">
      <div className="cncium_contact_header">
        <h1 className="gradient__text_two">Contact us</h1>
        <Captcha></Captcha>
      </div>
      <div className="cncium_contact_form">
        <form action=""></form>
      </div>
    </div>
  );
};

export default Contact;
