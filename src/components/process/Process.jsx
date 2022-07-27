import React from 'react';
import './process.css';

const Process = () => {
  return (
    <div className="cncium_process gradient__section">
      <h2 className="cncium_process_header">Our ordering process</h2>
      <div className="cncium_process_box">
        <div className="cncium_process_items">
          <div className="cncium_process_items-order">
            <div className="circle"></div>
            <div className="cncium_process_items-order-mobile">
              <h4>Contact us</h4>
              <p>Fill the following contact form</p>
            </div>
          </div>
          <div className="cncium_process_items-order">
            <div className="circle"></div>
            <div className="cncium_process_items-order-mobile">
              <h4>Get our estimated quote</h4>
              <p>
                Confirm the specs of the parts and select a lead time that suits
                your schedule
              </p>
            </div>
          </div>
          <div className="cncium_process_items-order">
            <div className="circle"></div>
            <div className="cncium_process_items-order-mobile">
              <h4>Production</h4>
              <p>
                We select the best manufacturer for your order, and production
                begins
              </p>
            </div>
          </div>
          <div className="cncium_process_items-order">
            <div className="circle"></div>
            <div className="cncium_process_items-order-mobile">
              <h4>Delivery</h4>
            </div>
            <button type="button" className="cncium_process_contact">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
