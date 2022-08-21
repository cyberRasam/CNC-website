import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

// BEM --> Block element modifier
const Menu = () => (
  <>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#process">How it works</a>
    </p>
    <p>
      <a href="#intro">About us</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="cncium__navbar">
      <div className="cncium__navbar-links">
        <div className="cncium__navbar-links_logo">
          <img src={logo} alt="Logoimage" />
        </div>
        <div className="cncium__navbar-links_container">
          <Menu></Menu>
        </div>
      </div>
      <div className="cncium__navbar-contact">
        <a href="#form">
          <button type="button">Contact us</button>
        </a>
      </div>
      <div className="cncium__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cncium__navbar-menu_container scale-up-center">
            <div className="cncium__navbar-menu_container-links">
              <Menu></Menu>
              <div className="cncium__navbar-menu_container-links-contact">
                <a href="#form">
                  <button type="button">Contact us</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
