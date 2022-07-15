import React from 'react';
import { RiMenu3line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

// BEM --> Block element modifier

function Navbar() {
  return (
    <div className="cncium__navbar">
      <div className="cncium__navbar-links">
        <div className="cncium__navbar-links_logo">
          <img src={logo} alt="Logo image" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
