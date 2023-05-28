import React from 'react';
import './navbar.css';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoCardOutline } from 'react-icons/io5';
import logo from './images/logo.png';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src= {logo} alt="putatoe : one solution" className="logo" />
      </div>

      <div className="navbar__search">
        <input type="text" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
      <div className="icon-container">
      <IoNotificationsOutline size={18} color="grey" />
      <IoCardOutline size={18} color="grey" />
      </div>
    </nav>
  );
};

export default Navbar;
