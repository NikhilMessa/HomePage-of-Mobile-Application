import React from 'react';
import './Footer.css';
import { FaHome, FaUser, FaComments } from 'react-icons/fa';
import logo from './images/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="footer-item">
          <FaUser />
          <span>Profile</span>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-item">
          <span>Follow List</span>
        </div>
        <div className="footer-item">
          <FaComments />
          <span>Chat</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
