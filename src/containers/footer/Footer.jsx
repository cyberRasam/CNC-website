import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import MapSection from './Map';
import instaIcon from '../../assets/instagram-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import fbIcon from '../../assets/fb-icon.png';
import gmap from '../../assets/google-map.png';
import locpin from '../../assets/location-pin.svg';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';

const location = {
  address: '66 McDonald Cres, Bassendean WA 6054, Australia',
  lat: -31.904507372335893,
  lng: 115.93007815112705,
};

function Footer() {
  return (
    <div>
      <div className="cncium_footer">
        <div className="cncium_footer_content">
          <div className="cncium_footer_content-cc">
            <img src={logo} alt="logo_picture" />
            <div className="cncium_footer_cc-icons">
              <a href="#instagram">
                <img src={instaIcon} alt="instagram-link" />
              </a>
              <a href="linkedin">
                <img
                  className="cncium_footer_cc-icons"
                  src={linkedinIcon}
                  alt="linkedin-link"
                />
              </a>
              <a href="facebook">
                <img
                  className="cncium_footer_cc-icons"
                  src={fbIcon}
                  alt="facebook-link"
                />
              </a>
            </div>
          </div>
          <div className="cncium_footer_content-cc">
            <div className="cncium_map_png">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/66+McDonald+Cres,+Bassendean+WA+6054,+Australia/@-31.9053856,115.9264236,15.92z/data=!4m5!3m4!1s0x2a32ba0fa54d24df:0xe54653d0aa6c1947!8m2!3d-31.9057825!4d115.932814"
              >
                <img src={gmap} alt="google map link" />
              </a>
            </div>
          </div>
          <div className="cncium_footer_content-cc footer_links">
            <h4>Cncium</h4>
            <p>
              <a href="#contact"> Contact us</a>
            </p>
            <p>
              <a href="#wwd"> What we do</a>
            </p>
            <p>
              <a href="#process"> Ordering process</a>
            </p>
          </div>
          <div className="cncium_footer_content-cc">
            <div className="cncium_footer_contact-info">
              <div className="cncium_footer_contact-info-items">
                <img src={locpin} alt="Address" />
                <p> 66 McDonald Cres, Bassendean WA 6054</p>
              </div>
              <div className="cncium_footer_contact-info-items">
                <img id="email-icon" src={emailIcon} alt="Email-Address" />
                <p> Info@perthcnc.com</p>
              </div>
              <div className="cncium_footer_contact-info-items">
                <img src={phoneIcon} alt="phone-number" />
                <p> (02) 9876 5432</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="cncium_copyright">Cncium 2022 © All rights reserved</p>
    </div>
  );
}

export default Footer;
