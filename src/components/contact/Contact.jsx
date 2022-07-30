import React from 'react';
import Captcha from './Captcha.jsx';
import './contact.css';

const Contact = () => {
  return (
    <div className="cncium_contact">
      <div className="cncium_contact_header">
        <h1 className="gradient__text">Contact us</h1>
      </div>
      <div className="cncium_contact_form">
        <form className="cncium_contact_form-form" action="">
          <div className="left">
            <div className="form-item">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="Number">Phone number</label>
              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="right">
            <div>
              <label htmlFor="Message">Message</label>
              <input
                className="message"
                type="text"
                name="message"
                id="message"
              />
            </div>
            <div>
              <label htmlFor="file">Choose file</label>
              <input type="file" name="file" id="file" />
            </div>
            <Captcha></Captcha>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
