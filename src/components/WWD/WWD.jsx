import React from 'react';
import './wwd.css';

const WWD = () => {
  return (
    <div id="services" className="cncium_wwd">
      <div className="cncium_wwd_header">
        <h1 className="gradient__text_two">What we do</h1>
        <p>
          Is a combination of 3D printing, laser and CNC mill for manufacturing
          high quality parts
        </p>
      </div>
      <div className="cncium_wwd_content">
        <div className="cncium_wwd_content-service">
          <div>
            <hr className="gradient__bar"></hr>
            <h3>CNC milling</h3>
          </div>
          <p>
            Whether your application is engineering / art/ education or starting
            your own business; we can take your design to the next level.
          </p>
        </div>
      </div>
      <div className="cncium_wwd_content">
        <div className="cncium_wwd_content-service">
          <div>
            <hr className="gradient__bar"></hr>
            <h3>Prototyping</h3>
          </div>
          <p>
            We're able to machine real functional prototype components for
            aircrafts, boats, cars, replacement parts for machines and
            production line equipment with high tolerance.
          </p>
        </div>
      </div>
      <div className="cncium_wwd_content">
        <div className="cncium_wwd_content-service">
          <div>
            <hr className="gradient__bar"></hr>
            <h3>Flexible manufacturing</h3>
          </div>
          <p>
            We produce well manufactured parts from Brass, Copper, Aluminum,
            Mild/Stainless steel, titanium and Magnesium or we can work on your
            own parts and remake them.
          </p>
        </div>
      </div>
      <div className="cncium_wwd_content">
        <div className="cncium_wwd_content-service">
          <div>
            <hr className="gradient__bar"></hr>
            <h3>3 axis machining</h3>
          </div>
          <p>
            We’re able to machine highly detailed products with sustainability
            and eliminate the need for outsourcing expensive metal CNC works. We
            want to empower creative individuals and businesses to take their
            work to the next level without the cost they would have normally had
            to pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WWD;
